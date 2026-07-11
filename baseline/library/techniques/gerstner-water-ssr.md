---
technique: Gerstner ocean + planar screen-space reflection (our bespoke water)
section: webgl
source: deZign-pro 02b/TESQ — baseline/sites/02b-cube-B2-slipstream/scene.js (our build, 2026-06-18)
tags: [three.js, water, ocean, gerstner, ssr, reflection, beer-lambert, ggx, sss, glsl, shader]
apply-when: a hero needs a settled, photoreal SEA with real depth/optics — beyond the flat addon Water plane — and you control the render loop (multi-pass RTs)
---

# Gerstner ocean + screen-space reflection — build decisions

This is our SETTLED 02b water (memory: "02b water optics v2 accepted" — SSS + Beer-Lambert + GGX
+ cat's-paw gust + Gerstner chop, all prod defaults; don't reopen). It is the bespoke upgrade the
`sky-and-water.md` baseline points to: the addon `Water` plane is the fast fallback, THIS is the
real thing. Don't re-derive — lift the GLSL/JS from
`snippets/our-builds/gerstner-water-ssr.glsl` + `planar-reflection-pass.js`.

PROD uniform defaults (all four "extras" ON): `uWaterV2=1`, `uGust=1`, `uGerstner=1`, `uReflOn=1`.

## The wave is split: height in the vertex, NORMAL in the fragment
- **Vertex** does two things: a 4-wave height swell (`swellH`, sine sum) AND, gated by `uGerstner`,
  a horizontal **Gerstner chop** (`gerstnerChop`) that pushes surface points toward crests — sharp
  peaks, broad flat troughs (the real-water silhouette). Height is unchanged by the chop.
- **Capture the phase reference BEFORE the chop**: `vec2 param = wp.xz;` then displace. Pass `param`
  as a varying (`vParam`). Every wave-phase lookup in the fragment uses `vParam`, NOT the chopped
  position — otherwise shading swims. This is the one non-obvious correctness rule ("Gerstner-safe").
- The vertex normal carries ONLY the sim-patch slopes; the swell normal is computed **analytically
  in the fragment** (`swellGrad`, the exact derivative of `swellH`). Both the inner sim patch and the
  coarse outer ocean call the same `swellGrad` → they shade identically, **no seam at the border**.

## Gerstner sanity: keep the steepness sub-critical
- The four chop weights are `Q*A = [1.342, 0.866, 0.421, 0.186]` against wavevectors
  `(0.09831,0.02458) … (-0.45254,-0.16970)`. The comment locks the invariant:
  `sum(Qi*|ki|*Ai) ~ 0.51 << 1.0` → **no self-intersecting loops**. If you retune amplitudes,
  keep that sum well under 1.0 or the surface folds.

## Optics = three stacked terms (this is what reads as LIQUID, not gel)
Sample two RTs in screen space, then layer physically-motivated terms:
1. **Beer-Lambert refraction** — sample `uRefrTex` with normal-bent UV (`screenUV + N.xz*0.075`),
   then `refrRaw * exp(-sigma * pathLen)` with `sigma = vec3(0.46, 0.09, 0.035)` (red dies first).
   `pathLen` grows at grazing angles (`mix(1.0,3.2,1-NdotV)`) AND with distance — the angular
   response is the core volume cue. Add upwelling in-scatter so deep water GLOWS, not a flat lerp.
2. **Subsurface scatter** (the strongest cue) — backlit crests transmit LINEAR teal
   `vec3(0.10,0.55,0.50)` (sRGB would go acid-green), gated by `backlit * crestHeight * faceSteep *
   grazing-only`. Clamp `min(sss, 2.0)` BEFORE the bloom bright-pass.
3. **GGX sun specular** — heavy-tail "wet" lobe (`rough` 0.024 glassy → 0.072 choppy) with
   **Kaplanyan/Vlachos specular-AA**: `rough = sqrt(rough² + clamp(2*varN,0,0.25))` where `varN` is
   the screen-space normal variance from `dFdx/dFdy`. The tail cures the gel highlight; the AA
   spreads far glints over their footprint → **no HDR fireflies tripping the bloom**. Clamp `spec`
   to 8.0. Requires `extensions: { derivatives: true }` on the material.

Fresnel mixes them: `F = 0.025 + 0.975*pow(1-NdotV,5)`, then `col = mix(refr, refl, F)`.

## Planar reflection (screen-space, via a mirrored camera + RT)
- One extra `reflRT` render per frame. Mirror the camera through the y=0 plane: **negate camera Y
  and look-target Y** (`reflCam.position.y = -camera.position.y`), render the scene into `reflRT`.
- Build `reflMatrix = biasMatrix * reflCam.projectionMatrix * reflCam.matrixWorldInverse` (the
  `biasMatrix` remaps clip `[-1,1]` → texture `[0,1]`). The vertex emits `vReflCoord = uReflMatrix*wp`;
  the fragment samples with `texture2DProj(uReflTex, rc)`.
- **Perturb the projective coord by the surface normal** so the mirror ripples:
  `rc.xy += N.xz * (0.42 * reflChop) * rc.w`. Dim per Sun-journey mode via `uReflDim`
  (night 0.55 / golden 0.75 / else 1.0). Hide the seabed (`floor.visible=false`) during the mirror pass.

## cat's-paw wind-gust patches (uGust) — the chop variation that sells scale
- A slow large-scale `fbm2(worldXZ*0.012 + windDir*time*0.03)` (windDir = swell heading
  `normalize(-0.346, 0.022)`) picks **glassy vs choppy lanes** the camera sweeps across on scroll.
- The single `gust` value drives THREE things together: detail-normal strength `mix(0.55,1.45,gust)`,
  reflection distortion `mix(0.78,1.32,gust)`, and GGX roughness `mix(0.024,0.072,gust)`. Wiring them
  to one field is why the lanes read as coherent wind, not three unrelated noises.

## Gotchas
- **Gerstner-swims** if you sample wave phase at the displaced position — always use the pre-chop
  `vParam`. (The whole `vParam` plumbing exists for this.)
- Bloom fireflies: SSS and specular are both clamped (`min(sss,2.0)`, `min(spec,8.0)`) specifically
  to sit just under the bloom bright-pass threshold. Don't remove the clamps.
- Sim patch ↔ outer ocean **seam** is avoided ONLY because both meshes share `swellGrad`; if you add
  a third water mesh, route it through the same analytic gradient.
- Gameplay objects riding the surface need the **JS mirror** (`gerstnerChopJS` + 2-step fixed-point
  inverse in `swellJS`) — the visible crest is at a different XZ than the parameter, so invert the
  chop before sampling height (see memory: "02b cube surfVel is Vector2" — a `.z` typo here NaN'd the
  whole scene; surfVel/positions from this path are easy to break).
- Render-target type: HalfFloat on WebGL2 so HDR sun survives into bloom; UnsignedByte fallback.

## Build checklist
- [ ] Vertex captures `vParam` (pre-chop world xz) and ALL fragment phase lookups use it, not the chopped pos?
- [ ] Gerstner steepness sum kept `<< 1.0` (no surface folding) if amplitudes were retuned?
- [ ] Both water meshes shade via the shared analytic `swellGrad` (no patch/ocean seam)?
- [ ] Refraction RT sampled with normal-bent UV + Beer-Lambert `exp(-sigma*pathLen)`, pathLen growing with angle & distance?
- [ ] Reflection: mirrored camera (negated Y), `bias*proj*viewInv` matrix, `texture2DProj`, normal-perturbed coord, seabed hidden in the pass?
- [ ] SSS (linear teal, clamped) + GGX with `dFdx/dFdy` spec-AA (`derivatives` extension on), both clamped under bloom?
- [ ] `uGust` drives detail-normal + reflection + roughness from ONE fbm field; gameplay objects use the JS chop-inverse?

> Ties to our experience: this is the locked prod water of 02b (an Awwwards case). It is the concrete
> "custom upgrade" `sky-and-water.md` only names in passing — use the addon `Water` plane to prototype,
> then graduate to this when the sea is hero. The owner has SETTLED it; reach for it as-is, don't reopen.
