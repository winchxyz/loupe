---
technique: GPU simulation (GPGPU) + shader-driven point fields
section: webgl
source: three.js examples webgl_gpgpu_water / webgl_gpgpu_birds / webgl_custom_attributes_points (MIT)
tags: [three.js, gpgpu, particles, points, glsl, instancing]
apply-when: thousands of particles/agents need per-frame simulation or a custom-styled point/starfield, and CPU math would choke
---

# GPGPU + points — build decisions

When per-particle state must update every frame (ripples, flocking, planets, fluid), do the math on
the GPU in textures, not in JS loops. When you just need a styled point cloud, drive size/color per
point from a `ShaderMaterial`. Sources: `snippets/threejs-examples/webgl_gpgpu_water.html`,
`webgl_gpgpu_birds.html`, `webgl_custom_attributes_points.html`.

## GPGPU via `GPUComputationRenderer` (`three/addons/misc/GPUComputationRenderer.js`)
State lives in float textures; a fragment shader is the simulation step. Pattern (from `gpgpu_water`):
1. `gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer)` — `WIDTH²` = particle/cell count
   (water uses 128 → 16k cells). Bigger = slower; **tie WIDTH to the perf tier.**
2. `const tex = gpuCompute.createTexture(); fillTexture(tex)` — seed initial state into RGBA channels.
3. `const v = gpuCompute.addVariable('heightmap', fragSource, tex)` then
   `gpuCompute.setVariableDependencies(v, [v])` (a variable that reads its own previous frame =
   feedback / double-buffered ping-pong, handled for you).
4. Add uniforms on `v.material.uniforms` (mouse pos, viscosity, etc.); `gpuCompute.init()` (check the
   returned error string); each frame `gpuCompute.compute()`.
5. Feed the result to the render material:
   `mesh.material.uniforms.heightmap.value = gpuCompute.getCurrentRenderTarget(v).texture`. The vertex
   shader samples that texture to displace geometry; compute neighbor differences for the normal.
- Multi-variable sims (birds): two variables `position` + `velocity`, each depending on both — that is
  how boids/flocking and N-body (`protoplanet`) are expressed. Mouse interaction = a uniform the sim reads.
- **WebGL fallback note:** GPGPU needs float-texture render support; gate it and degrade to a cheaper
  CPU/baked animation on hardware that fails the check.

## Shader-driven point fields (`Points` + `ShaderMaterial`)
From `custom_attributes_points`: a `BufferGeometry` with a custom `size` (and `color`) attribute, drawn
by a `ShaderMaterial`:
- Vertex: `gl_PointSize = size * (scale / -mvPosition.z)` → perspective-correct point sizing
  (far points shrink). Pass `color` through to a varying.
- Fragment: sample a sprite/disc texture `gl_PointColor * texture2D(pointTexture, gl_PointCoord)`;
  set `transparent:true`, `depthTest:false`, and additive blending for glowing dust/stars.
- Animate per-point size/hue by mutating the attribute arrays and setting `attribute.needsUpdate=true`
  (cheap) — or move the whole sim to GPGPU when the count gets large.
- For repeated *meshes* (not points) at scale, use `InstancedMesh` instead (one draw call).

## Build checklist
- [ ] Is this truly per-frame sim (→ GPGPU) or just static/few particles (→ plain `Points` is simpler)?
- [ ] `WIDTH²` (cell/particle count) bound to the perf tier; `gpuCompute.init()` error checked?
- [ ] Feedback set via `setVariableDependencies(v,[v])`; result texture wired into the render material each frame?
- [ ] Float-texture support gated with a non-GPGPU fallback for weak hardware?
- [ ] Points use perspective `gl_PointSize` + sprite texture + additive blend for the glow look?

> Ties to our experience: 02b's regolith/particle and cube-physics work is this family — when a particle
> effect needs real per-frame simulation, reach for `GPUComputationRenderer` and scale `WIDTH` by tier
> rather than looping in JS.
