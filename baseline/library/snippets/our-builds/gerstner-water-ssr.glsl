// source: baseline/sites/02b-cube-B2-slipstream/scene.js · project: deZign-pro 02b/TESQ · saved: 2026-06-18
// Our settled ocean: Gerstner trochoidal chop (vertex) + SSS / Beer-Lambert / GGX
// optics (fragment) + planar screen-space reflection via render target + cat's-paw
// wind-gust patches. PROD defaults: uWaterV2=1, uGust=1, uGerstner=1, uReflOn=1.
// Verbatim load-bearing GLSL + the JS render pass / reflection-matrix wiring.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. VERTEX — height swell + Gerstner horizontal chop
//    The phase reference (vParam) is the UNDISPLACED world xz, captured BEFORE
//    the horizontal chop. Every wave-phase lookup downstream uses vParam so the
//    fragment shades correctly under the chop (Gerstner-safe).
// ---------------------------------------------------------------------------

// Gerstner horizontal displacement: surface points crowd toward crests -> sharp
// peaks + broad flat troughs (the silhouette signature of real water). Same 4
// waves as swellH; Di = ki/|ki|, weight = Qi*Ai with Q=[0.85,0.8,0.7,0.6] so
// sum(Qi*|ki|*Ai) ~ 0.51 << 1.0 (no self-intersecting loops). Height is unchanged.
vec2 gerstnerChop(vec2 p, float t){
  vec2 d = vec2(0.0);
  d += vec2( 0.97008,  0.24255) * 1.342 * cos(dot(p, vec2( 0.09831,  0.02458)) - t*0.4983);
  d += vec2( 0.75925, -0.65078) * 0.866 * cos(dot(p, vec2( 0.14032, -0.12027)) - t*0.6729);
  d += vec2(-0.44721,  0.89445) * 0.421 * cos(dot(p, vec2(-0.13380,  0.26761)) - t*0.8562);
  d += vec2(-0.93631, -0.35112) * 0.186 * cos(dot(p, vec2(-0.45254, -0.16970)) - t*1.0882);
  return d;
}

// The ORIGINAL site swell: the four Gerstner waves the owner liked
// (L 62/34/21/13, gentle rolling crests), height-only sum.
float swellH(vec2 p, float t){
  float h = 0.0;
  h += 1.579 * sin(dot(p, vec2( 0.09831,  0.02458)) - t*0.4983);
  h += 1.082 * sin(dot(p, vec2( 0.14032, -0.12027)) - t*0.6729);
  h += 0.602 * sin(dot(p, vec2(-0.13380,  0.26761)) - t*0.8562);
  h += 0.310 * sin(dot(p, vec2(-0.45254, -0.16970)) - t*1.0882);
  return h;
}

void mainVert() {
  vLocal = vec2(position.x, position.z);
  vFoam = aFoam;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec2 param = wp.xz;                     // phase reference BEFORE any horizontal chop
  float sw = swellH(param, uTime);
  wp.y += sw;
  if (uGerstner > 0.5) wp.xz += gerstnerChop(param, uTime);   // trochoidal silhouette (height unchanged)
  vParam = param;
  vCrest = smoothstep(1.9, 3.3, sw);
  // Only the SIM slopes ride in the vertex normal; the swell normal is
  // computed analytically in the fragment so the patch and the outer
  // ocean shade identically (no seam at the patch border).
  vNormal = vec3(normal.x, 1.0, normal.z);
  vWorldPos = wp.xyz;
  vReflCoord = uReflMatrix * wp;          // projective reflection coord (bias * proj * viewInv * wp)
  gl_Position = projectionMatrix * viewMatrix * wp;
}

// ---------------------------------------------------------------------------
// 2. FRAGMENT — analytic swell normal (shared by both meshes, no seam)
//    swellGrad is the EXACT derivative of swellH; both the inner sim patch and
//    the coarse outer ocean call it so they shade identically across the border.
// ---------------------------------------------------------------------------
vec2 swellGrad(vec2 p, float t){
  vec2 g = vec2(0.0);
  g += 1.579 * cos(dot(p, vec2( 0.09831,  0.02458)) - t*0.4983) * vec2( 0.09831,  0.02458);
  g += 1.082 * cos(dot(p, vec2( 0.14032, -0.12027)) - t*0.6729) * vec2( 0.14032, -0.12027);
  g += 0.602 * cos(dot(p, vec2(-0.13380,  0.26761)) - t*0.8562) * vec2(-0.13380,  0.26761);
  g += 0.310 * cos(dot(p, vec2(-0.45254, -0.16970)) - t*1.0882) * vec2(-0.45254, -0.16970);
  return g;
}

void mainFrag_normalAndGust() {
  vec2 sg = swellGrad(vParam, uTime);   // vParam = UNDISPLACED phase ref (correct under Gerstner chop)
  // Gerstner lean (waves): pinch crest up-faces without displacing height.
  float steepK = 1.0 + 1.65 * clamp(length(sg) * 0.9, 0.0, 1.0);   // sharper crests -> choppier, less gel
  sg *= steepK;

  // cat's-paw wind-gust patches: a slow large-scale fbm picks glassy vs choppy
  // lanes (camera sweeps across them on scroll). Neutral (chopK=1) when uGust off.
  float gust = 0.5;
  if (uGust > 0.5) {
    vec2 windDir = normalize(vec2(-0.346, 0.022));   // = the swell heading
    gust = smoothstep(0.30, 0.78, fbm2(vWorldPos.xz * 0.012 + windDir * (uTime * 0.03)));
  }
  float chopK = mix(0.55, 1.45, gust);   // glassy .. choppy detail-normal strength (=1.0 when off)
  vec3 N = normalize(vNormal + vec3(-sg.x, 0.0, -sg.y) + detailNormal(vWorldPos.xz, uTime) * chopK);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float dist = length(vWorldPos - cameraPosition);
  float F = 0.025 + 0.975 * pow(1.0 - max(dot(N, V), 0.0), 5.0);   // Schlick fresnel (F0 = 0.025)
  F *= 1.0 - uVanish;

  // -------------------------------------------------------------------------
  // 2a. REFRACTION + BEER-LAMBERT absorption (the "liquid volume" core cue)
  //     Sample the refraction RT with normal-driven screen-space bending, then
  //     apply real per-channel exponential absorption (red dies first). Path
  //     length grows at grazing angles AND with distance.
  // -------------------------------------------------------------------------
  vec2 screenUV = gl_FragCoord.xy / uRes;
  vec2 refrUV = screenUV + N.xz * 0.075;   // stronger refractive bending -> reads liquid
  vec3 refrRaw = texture2D(uRefrTex, refrUV).rgb;
  vec3 refr;
  if (uWaterV2 > 0.5) {
    float NdotVr  = max(dot(N, V), 0.15);
    vec3  sigma   = vec3(0.46, 0.09, 0.035);              // clear-ocean absorption coeffs
    float pathLen = mix(1.0, 3.2, 1.0 - NdotVr) * (1.0 + smoothstep(48.0, 240.0, dist) * 2.0); // 8*S..40*S, S=6
    refr = refrRaw * exp(-sigma * pathLen);
    // upwelling in-scatter: deep ocean GLOWS instead of being a dead flat lerp target
    float hKs      = smoothstep(0.6, 2.6, swellHF(vParam, uTime));
    float scatterK = 0.10 + 0.25 * hKs + 0.15 * max(dot(uLightDir, -V), 0.0);
    refr += deepCol * scatterK * uSunC * (0.4 + 0.6 * uDayness);
    refr = mix(refr, deepCol, 1.0 - exp(-0.08 * pathLen));  // far/steep -> full deep colour
  }

  // -------------------------------------------------------------------------
  // 2b. PLANAR SCREEN-SPACE REFLECTION (sample the reflection RT)
  //     texture2DProj with the projective reflCoord from the vertex; the surface
  //     normal perturbs the coord (choppy gust lanes distort the mirror more).
  // -------------------------------------------------------------------------
  vec3 refl;
  if (uReflOn > 0.5) {
    vec4 rc = vReflCoord;
    float reflChop = (uGust > 0.5) ? mix(0.78, 1.32, gust) : 1.0;   // choppy lanes distort the mirror more
    rc.xy += N.xz * (0.42 * reflChop) * rc.w;
    refl = texture2DProj(uReflTex, rc).rgb * uReflDim + vec3(0.015, 0.02, 0.03);
  }

  vec3 col = mix(refr, refl, clamp(F, 0.0, 1.0));   // fresnel blends refraction <-> reflection

  // -------------------------------------------------------------------------
  // 2c. SUBSURFACE SCATTER (the single strongest "this is LIQUID not gel" cue)
  //     Backlit wave crests transmit a teal glow. Gated by backlight, crest
  //     height, face steepness, and grazing-only (kills top-down).
  // -------------------------------------------------------------------------
  vec3 H = normalize(uLightDir + V);
  float ndh = max(dot(N, H), 0.0);
  if (uWaterV2 > 0.5) {
    float backlit = pow(max(dot(uLightDir, -V), 0.0), 4.0);          // sun behind the wave
    float hK      = smoothstep(0.6, 2.6, swellHF(vParam, uTime));    // tall crests transmit most
    float faceK   = clamp(length(sg) * 0.9, 0.0, 1.0);              // steep faces
    float upK     = 1.0 - abs(V.y);                                 // grazing only (kills top-down)
    vec3  sssCol  = vec3(0.10, 0.55, 0.50);                         // LINEAR teal (sRGB would go acid-green)
    vec3  sss = (0.18 + 1.1 * backlit) * sssCol * uSunC * (hK * 0.7 + faceK * 0.3) * upK * (1.0 - uVanish);
    col += min(sss, vec3(2.0)) * (0.4 + 0.6 * uDayness);            // clamp before the bloom bright-pass
  }

  // -------------------------------------------------------------------------
  // 2d. SUN SPECULAR — GGX heavy-tail "wet" lobe + Kaplanyan/Vlachos spec-AA
  //     The tail cures the gel highlight; the AA spreads far glints over their
  //     footprint, killing HDR fireflies that trip the bloom bright-pass.
  //     Needs extensions: { derivatives: true } for dFdx/dFdy.
  // -------------------------------------------------------------------------
  if (uWaterV2 > 0.5) {
    float rough = (uGust > 0.5) ? mix(0.024, 0.072, gust) : 0.045;  // glassy lanes mirror-sharp, choppy twinkle
    vec3 dNx = dFdx(N), dNy = dFdy(N);
    float varN = 0.5 * (dot(dNx, dNx) + dot(dNy, dNy));
    rough = sqrt(rough * rough + clamp(2.0 * varN, 0.0, 0.25));     // specular AA
    float a   = rough * rough;
    float dnm = (ndh * ndh) * (a * a - 1.0) + 1.0;
    float D   = a * a / (3.14159265 * dnm * dnm);                   // GGX NDF
    float ndv = max(dot(N, V), 1e-3);
    float Gv  = ndv / (ndv * (1.0 - a) + a);                        // Smith-ish visibility
    float spec = min(D * Gv * F * 1.4, 8.0);                        // clamp just above bloom threshold
    col += uSunC * spec * (1.0 - uVanish);
  }
  // soft sky/fresnel silver sheen on non-sun water
  col += uHorizon * pow(clamp(F, 0.0, 1.0), 1.5) * 0.06 * (1.0 - uVanish);
}
