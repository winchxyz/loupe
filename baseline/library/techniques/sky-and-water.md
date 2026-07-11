---
technique: Sky dome + reflective ocean (Sky + Water addons, PMREM env)
section: webgl
source: three.js examples webgl_shaders_sky / webgl_shaders_ocean (MIT)
tags: [three.js, sky, water, ocean, pmrem, environment]
apply-when: a hero scene needs a believable sky and/or a reflective sea/lake without hand-writing atmosphere shaders
---

# Sky + Water — build decisions

Two official addons get you a photoreal sky and sea in minutes. Don't hand-roll atmospheric
scattering. Sources: `snippets/threejs-examples/webgl_shaders_sky.html`,
`webgl_shaders_ocean.html`.

## Sky (`three/addons/objects/Sky.js`) — analytic Preetham atmosphere
- `const sky = new Sky(); sky.scale.setScalar(450000); scene.add(sky)`.
- **The sun is positioned by elevation + azimuth, not raw XYZ.** Convert:
  `phi = degToRad(90 - elevation); theta = degToRad(azimuth);
   sun.setFromSphericalCoords(1, phi, theta); sky.material.uniforms.sunPosition.value.copy(sun)`.
  Low `elevation` (≈2°) = golden/horizon glow; high = midday. Azimuth rotates where the sun sits.
- Key uniforms to taste: `turbidity` (haze), `rayleigh` (blue saturation), `mieCoefficient` +
  `mieDirectionalG` (sun-disc bloom/halo). Animate `elevation` along scroll for a sunrise/sunset.

## Water (`three/addons/objects/Water.js`) — reflective plane
- `new Water(planeGeometry, { textureWidth:512, textureHeight:512, waterNormals: <tiled normal map,
  RepeatWrapping>, sunDirection, sunColor, waterColor, distortionScale:3.7, fog:scene.fog!==undefined })`.
- It reflects the scene each frame (a render target) — so it must be added AFTER the sky/objects it
  should mirror. Animate ripple via `water.material.uniforms.time.value += 1/60`.
- `distortionScale` (≈0..8) = ripple sharpness; `size` tiles the normal map. The plane is flat — for
  real displaced waves use a Gerstner/heightmap (see gpgpu-and-points.md) on top.

## Tie them together with PMREM (this is what sells the lighting)
- The sky must light the rest of the scene. Render the sky into an environment map once per sun change:
  `const pmrem = new PMREMGenerator(renderer);
   renderTarget = pmrem.fromScene(skyScene); scene.environment = renderTarget.texture`.
  Recompute only when the sun moves (it is not free — don't do it every frame).
- Renderer setup the examples rely on: `toneMapping = ACESFilmicToneMapping` and a low
  `toneMappingExposure` (ocean uses ~0.1..0.5) — without ACES the bright sky clips to white.

## Build checklist
- [ ] Sky added + scaled huge; sun set via `setFromSphericalCoords(elevation, azimuth)`, not XYZ?
- [ ] `scene.environment` populated from the sky via `PMREMGenerator.fromScene` (and only recomputed on sun change)?
- [ ] Renderer on `ACESFilmicToneMapping` with a tuned low exposure (bright sky doesn't clip)?
- [ ] Water added after reflected content; `waterNormals` tiled (`RepeatWrapping`); `time` advanced per frame?
- [ ] Flat `Water` is enough, or do we need real displaced waves (heightmap/Gerstner) on top?

> Ties to our experience: 02b's water optics (SSS + Beer-Lambert + Gerstner chop) are a custom upgrade
> over this baseline `Water` plane — the addon is the fast starting point / fallback; our settled water
> is the bespoke version. Sky-by-elevation matches the Sun-journey art direction.
