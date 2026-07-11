// source: baseline/sites/02b-cube-B2-slipstream/scene.js · project: deZign-pro 02b/TESQ · saved: 2026-06-18
//
// MASTER time-of-day cross-fade. ONE function, applyTOD(t in [0,1]), drives the
// WHOLE scene continuously around a day/night cycle. Same function is called by the
// dev slider AND by the production clock — there is no second "production" code path.
//
// The cycle is a flat keyframe ARRAY (not 4 discrete modes): walking the array and
// lerping between neighbours is what makes night<->blue<->golden<->day a smooth
// morph instead of a hard cut. The array is palindromic so t=1 wraps back to t=0
// seamlessly (...night at both ends).

const TOD_ORDER = ["night", "blue", "golden", "day", "golden", "blue", "night"];

// Per-mode keyframe rows (abbreviated — the real TIMES/SKYGRADE tables carry ~15
// fields each: hdr, fogC, water, sunC, hemi, key, stars, bloomT/S, exposure, lift, ...).
const TIMES    = { /* night|blue|golden|day -> { mixStart, mixRange, skyBase, fogC, water, sunC, hemi, key, stars, starMax, bloomT, bloomS, exposure, lift, ... } */ };
const SKYGRADE = { /* night|blue|golden|day -> { low[3], high[3], sat, glow[3], glowAmt, glowPow, bright } */ };

// Per-frame MUTABLE state the render loop reads (NOT the keyframe rows themselves —
// scrubbing must never corrupt TIMES). applyTOD rewrites these every call.
const tod = { mixStart: 0, mixRange: 0, skyBase: 0, fogC: 0, stars: 0, starMax: 0, dayness: 1 };

let destSun = true;   // live flight destination: true = fly to the Sun (day), false = the Moon (night)
let pCur    = 0;      // smoothed scroll progress 0..1 (the journey position)

const _lerp  = (a, b, t) => a + (b - a) * t;
const _cLo = new THREE.Color(), _cHi = new THREE.Color(), _cMix = new THREE.Color();
const _mixHex = (lo, hi, t) => { _cLo.set(lo); _cHi.set(hi); return _cMix.copy(_cLo).lerp(_cHi, t); };

function applyTOD(t01) {
  // 1) Find the bracketing keyframe pair (A,B) and the local fraction f between them.
  const v = Math.min(1, Math.max(0, t01)) * (TOD_ORDER.length - 1);
  const k = Math.min(TOD_ORDER.length - 2, Math.floor(v)), f = v - k;
  const A = TOD_ORDER[k], B = TOD_ORDER[k + 1];
  const TA = TIMES[A], TB = TIMES[B], GA = SKYGRADE[A], GB = SKYGRADE[B];

  // 2) SKY — cross-fade TWO real HDRIs in the sky shader (uMap2 + uMapBlend = f) and
  //    lerp the per-mode colour-grade (horizon/zenith tint, saturation, sun-glow).
  if (skyTex[A]) skyMat.map = skyTex[A];
  if (skyTex[B]) { skyXU.uMap2.value = skyTex[B]; skyXU.uMapBlend.value = f; }
  else skyXU.uMapBlend.value = 0.0;   // 2nd HDRI still loading -> show the 1st only (graceful)
  sky.rotation.y = Math.PI * _lerp(SKYAZ[A], SKYAZ[B], f);
  skyGradeU.uSkySat.value    = _lerp(GA.sat, GB.sat, f);
  skyGradeU.uSunGlowAmt.value = _lerp(GA.glowAmt, GB.glowAmt, f);
  // ...uSkyLow/uSkyHigh/uSunGlowCol lerped the same way (vec3 component-wise).

  // 3) SUN / MOON sky bodies rise & set on the real arc; sky-glow + water glints follow.
  todCelestial(Math.min(1, Math.max(0, t01)));
  skyGradeU.uSunDirSky.value.copy(todSky.sunDir);
  waterUniforms.uLightDir.value.copy(todSky.sunDir);

  // 4) Per-frame state the loop reads (fog, stars, foam brightness via dayness).
  tod.fogC    = _mixHex(TA.fogC, TB.fogC, f).getHex();
  tod.stars   = _lerp(TA.stars, TB.stars, f);
  tod.dayness = Math.min(1, Math.max(0,
    (Math.sin(Math.min(1, Math.max(0, t01)) * Math.PI * 2 - Math.PI / 2) + 1) * 0.5)); // 0 midnight .. 1 noon

  // 5) Lights / water / post all lerp on the SAME f -> nothing pops.
  hemiLight.intensity = _lerp(TA.hemi, TB.hemi, f);
  key.intensity = _lerp(TA.key, TB.key, f); key.color.copy(_mixHex(TA.sunC, TB.sunC, f));
  waterUniforms.uDeep.value.copy(_mixHex(TA.water, TB.water, f)).convertSRGBToLinear();
  waterUniforms.uDayness.value = tod.dayness;
  gradeMat.uniforms.uExposure.value = _lerp(TA.exposure, TB.exposure, f);

  // 6) JOURNEY DESTINATION from the SUN's HEIGHT — but ONLY allowed to flip at the hero
  //    (pCur < 0.40), so a clock tick can never swap destination mid-flight. Hysteresis
  //    band around sunrise/sunset stops thrashing.
  if (pCur < 0.40) {
    const tNow = Math.min(1, Math.max(0, t01));
    if (!destSun && tNow > 0.34 && tNow < 0.66) destSun = true;        // sun up   -> Sun
    else if (destSun && (tNow < 0.31 || tNow > 0.69)) destSun = false; // sun down -> Moon
  }
}

// ---- DRIVER: one call site, two sources -------------------------------------------
// DEV (?dev): slider seeds + ▶ auto-play (todAuto.t += dt/46 -> ~46s per full day, wraps).
// PROD: the device's REAL sun altitude -> the cycle tracks the user's true sunrise/sunset.
//   __dz.todHold lets the dev slider TAKE OVER the prod clock (set true while scrubbing).
function tickTOD(dt, frameN) {
  if (DEV) {
    if (!todSeeded) { applyTOD(todDevSeed); todSeeded = true; }
    if (todAuto.on) { todAuto.t += dt / 46; if (todAuto.t >= 1) todAuto.t -= 1; applyTOD(todAuto.t); }
  } else if ((!todSeeded || frameN % 60 === 0) && !window.__dz.todHold) {
    applyTOD(sunToCycle());   // real altitude -> keyframe position (clamped to TOD_ORDER bands)
    todSeeded = true;
  }
}
