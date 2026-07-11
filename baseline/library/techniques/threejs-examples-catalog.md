---
technique: Three.js examples catalog — what exists / when to reach for it (cinematic WebGL)
section: webgl
source: three.js official examples (github.com/mrdoob/three.js/tree/master/examples, MIT)
tags: [three.js, webgl, webgpu, postprocessing, shaders, catalog]
apply-when: planning a cinematic WebGL/scroll scene and deciding which built-in technique/addon to start from instead of inventing one
---

# Three.js examples catalog — the index, not a copy

The official repo ships ~578 runnable `.html` examples (filename prefix = category). This is the
**map**: pick the nearest example, open its source, copy the *mechanism*, then strip the lil-gui /
stats scaffolding. **Decision rule: never hand-roll an effect that already has an official example —
start from the example, it encodes years of edge-case fixes.** Live versions: `https://threejs.org/examples/#<filename-without-.html>`.

> `webgl_*` = the stable WebGLRenderer + EffectComposer pipeline (use this for production sites today).
> `webgpu_*` = the newer TSL/node pipeline (more, prettier postprocessing, but gate behind WebGPU
> support detection + a `webgl_` fallback; do NOT ship webgpu-only).

## Category map (prefix → count → when to use)

- **`webgl_postprocessing_*` (26) + `webgpu_postprocessing_*` (30)** — the cinematic look lives here.
  Reach for: `unreal_bloom` / `unreal_bloom_selective` (glow, neon, emissive — selective = glow only
  *some* objects), `godrays` (volumetric light shafts from a sun), `dof` / `dof2` (depth-of-field,
  rack-focus), `ssr` (screen-space reflections), `gtao`/`sao`/`ssao` (contact-shadow grounding),
  `outline` (hover/selection edges), `smaa`/`fxaa`/`taa`/`ssaa` (anti-alias — pick per perf tier),
  `glitch`/`afterimage`/`pixel`/`sobel`/`rgb_halftone` (stylized passes), `transition` (scene-to-scene
  wipe — good for scroll chapters), `3dlut` (color grade via LUT). See `postprocessing-cinematic.md`.
- **`webgl_shaders_*`** — `sky` (Preetham analytic sky dome — sun by elevation/azimuth), `ocean`
  (the `Water` reflective plane). Both are the fastest path to a hero sky/sea. See `sky-and-water.md`.
- **`webgl_gpgpu_*` (4)** — simulation on the GPU via `GPUComputationRenderer`: `water` (ripple
  heightmap), `birds` / `birds_gltf` (flocking/boids), `protoplanet` (N-body). Use when CPU per-particle
  math would choke. See `gpgpu-and-points.md`.
- **`webgl_points_*` / `webgl_custom_attributes_points*` / `webgl_buffergeometry_points*`** — particle
  fields, starfields, point clouds; `custom_attributes_points` shows per-point size/color via a GLSL
  `ShaderMaterial` (`gl_PointSize`, sprite texture). See `gpgpu-and-points.md`.
- **`webgl_instancing_* (5)` + `webgpu_instance_* (5)`** — `InstancedMesh` for thousands of copies
  (one draw call). Default choice for repeated geometry; pair with frustum/perf tiers.
- **`webgl_loader_* (56)`** — asset import. `gltf` is the default (with `DRACOLoader`/`KTX2Loader`/
  `meshopt` for compression); `hdr`/`rgbe` + `PMREMGenerator` for IBL environment lighting.
- **`webgl_shadowmap_* (8)` + `webgpu_shadowmap_* (7)`** — `PCFSoft`, VSM, CSM (cascaded — large
  outdoor scenes), contact shadows. Choose softness vs cost per perf tier.
- **`misc_controls_* (8)`** — `OrbitControls` (default), `MapControls`, `TrackballControls`,
  `PointerLockControls` (FPS). For scroll sites you usually drive the camera yourself, not these.
- **`webgl_animation_* (7)`** — skinned mesh + `AnimationMixer` (glTF clips), morph targets, keyframes.
- **`webgl_materials_* (36)`** — `MeshPhysicalMaterial` (clearcoat, transmission/glass, sheen, iridescence),
  envmaps, video texture, car-paint. The reference for matte-glass / refractive UI surfaces.
- **`physics_rapier_* (6)` / `physics_ammo_* (6)`** — rigid-body/soft-body (Rapier is the lighter modern pick).
- **`webxr_* (24)`** — VR/AR (deferred for our scroll sites).

## Build checklist
- [ ] Found the nearest official example by prefix and opened its source (not just the live demo)?
- [ ] Chose `webgl_*` (ship-today) vs `webgpu_*` (gated + fallback) deliberately?
- [ ] Copied the *mechanism* and removed lil-gui / Stats / dat scaffolding?
- [ ] Effect costs accounted for in perf tiers (postprocessing passes + shadow softness + AA scale down)?
- [ ] Kept attribution (MIT) on any code lifted verbatim?

> Ties to our experience: 02b is a cinematic Three.js scroll site (sun/lava/water/regolith, perf tiers).
> When 02b reaches for glow, sun shafts, sea, or particle fields, start from these examples instead of
> re-deriving shaders — that is exactly the "consult the library before improvising" rule.
