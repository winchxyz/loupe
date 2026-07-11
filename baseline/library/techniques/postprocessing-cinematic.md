---
technique: Cinematic postprocessing — bloom, godrays, DOF via EffectComposer
section: webgl
source: three.js examples webgl_postprocessing_* (MIT) — unreal_bloom_selective, godrays, dof
tags: [three.js, postprocessing, bloom, godrays, depth-of-field, effectcomposer]
apply-when: a WebGL scene needs glow / volumetric light / focus blur to read as "cinematic" rather than flat
---

# Cinematic postprocessing — build decisions

The "expensive" look = a stack of full-screen passes after the main render. Use `EffectComposer`
(`three/addons/postprocessing/EffectComposer.js`): `RenderPass` first → effect passes → `OutputPass`
LAST (it does tone-mapping + sRGB; without it colours are wrong). Source snippets in
`snippets/threejs-examples/webgl_postprocessing_*.html`.

## Bloom (glow) — and how to glow ONLY some objects
- Plain glow: one `UnrealBloomPass(new Vector2(w,h), strength, radius, threshold)`. Start
  `strength≈1.5, radius≈0.4, threshold≈0.85`. Threshold gates *what* glows — raise it so only bright/
  emissive pixels bloom, lower it for a hazy whole-scene wash.
- **Selective bloom (the killer move — neon signs, emissive cores, UI accents that glow while the rest
  stays crisp): do it with a two-composer mask, NOT by blurring everything.** Mechanism (from
  `unreal_bloom_selective`):
  1. Put glowing objects on a dedicated layer: `const BLOOM=1; mesh.layers.enable(BLOOM)`.
  2. **bloomComposer** (`renderToScreen=false`): before render, swap every NON-bloom material to a black
     `MeshBasicMaterial` (`darkMaterial`), render with the camera mask set to that layer, then restore
     materials. Output = a texture that is black except the glowing things, blurred.
  3. **finalComposer**: `RenderPass` (full scene) → a `ShaderPass` that adds
     `base + bloomTexture * bloomStrength` → `OutputPass`. This composites the glow over the sharp scene.
  - Cache/restore materials by `obj.uuid` in a map; traverse and skip objects already on the bloom layer.
- Tone mapping matters: `renderer.toneMapping = NeutralToneMapping` (or `ACESFilmic`); drive exposure
  with `toneMappingExposure` (the example uses `Math.pow(value, 4)` for a perceptual exposure slider).

## Godrays (volumetric light shafts from a sun)
- It is NOT a generic pass — it needs an occlusion render: draw the scene with everything black except
  the light source into a low-res target, then radial-blur *toward the sun's screen position* over
  several passes, then additively blend over the lit scene (see `webgl_postprocessing_godrays.html`).
- Cost is in the multiple radial-blur passes → render the occlusion target at reduced resolution; this
  is a prime candidate to **drop on the low perf tier**.

## Depth of field (rack focus / dreamy background)
- `BokehPass` (`postprocessing/BokehPass.js`) — params `focus` (distance to sharp plane), `aperture`
  (blur strength, tiny e.g. 0.000025), `maxblur`. Animate `focus` along scroll for a rack-focus reveal.
- Needs the scene depth → keep it on a focused subject; full-scene DOF is expensive, gate by tier.

## Perf / ordering rules
- Order is load-bearing: `RenderPass` → AO (`GTAOPass`/`SAOPass`) → bloom/godrays → DOF → color grade
  (`LUTPass`) → AA (`SMAAPass`) → `OutputPass`. AA and OutputPass go last.
- Every pass is a full-screen draw. Budget them per tier: high tier = bloom+DOF+SMAA; low tier = bloom
  only (or none) + FXAA. Call `composer.setSize(w,h)` on resize for ALL composers.
- Match our perf-tier doctrine: postprocessing is the first thing to scale down on weak hardware.

## Build checklist
- [ ] `RenderPass` first, `OutputPass` last (else wrong tone-map/colour)?
- [ ] Glow scoped via layers + two-composer mask when only some objects should bloom (not whole-scene blur)?
- [ ] Bloom threshold tuned so only intended pixels glow; exposure driven by `toneMappingExposure`?
- [ ] Godrays/DOF flagged as tier-gated (reduced-res occlusion target / focused subject only)?
- [ ] All composers resized on window resize?

> Ties to our experience: 02b is cinematic Three.js with explicit perf tiers (RTX-4070 high vs default).
> Selective bloom is exactly how to glow the sun/lava core without washing the matte-glass UI; godrays
> fits the Sun journey; both belong in the "drop on low tier" budget.
