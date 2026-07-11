---
technique: Gooey / noise-mask hover reveal between two images (Three.js)
section: webgl-motion
source: codrops/2019-10-23-gooey-image-hover-effects + codrops/2019-10-21-motion-hover-distortions
tags: [three.js, shaders, hover, noise, reveal]
apply-when: a thumbnail/portfolio tile should reveal a second image through an organic, liquid edge on hover (not a hard wipe or fade)
---

# Gooey noise-mask hover reveal

Cross-fades two textures through an animated, organic mask so the reveal edge looks liquid instead of a straight wipe. The mask = simplex noise + a soft circle following the cursor, thresholded with `smoothstep`.

## Build decisions

- **The mask is `smoothstep(a, b, noise + circle)`, mixed by a tweened progress.** Build the mask from animated 3D simplex noise plus a soft cursor circle, threshold it, and `mix(image1, image2, mask)`. Multiply the mask by `u_progress` (tweened 0->1 on enter, 1->0 on leave) so the effect gates on hover. A hard `step()` gives crisp gooey edges; `smoothstep` gives soft — choose per brand.
- **Animate the noise over time** (`u_time` into the noise coords) so the blob breathes even when the cursor is still — that motion is what reads as "gooey" rather than "masked".
- **Use squared distance for the circle** (`dot(st, st)`) — cheaper and gives a rounder, more natural falloff than `length()`.
- **Keep the DOM image accessible.** Same rule as all WebGL-image work: real `<img>` stays for layout/SEO, the canvas plane sits over it. Degrade to a plain CSS opacity cross-fade if WebGL is unavailable.
- **One ShaderMaterial per tile, two textures.** `u_image` + `u_imagehover`. Preload both; a reveal that pops in an unloaded second image looks broken.
- **Tune intensity by noise frequency and circle radius**, not by stacking more effects. Bigger frequency = more, smaller blobs; bigger radius = the reveal reaches further from the cursor.

## Build checklist
- [ ] Mask = noise + cursor-circle, thresholded with step/smoothstep, mixed by tweened `u_progress`?
- [ ] Noise animated over `u_time` so the edge breathes at rest?
- [ ] Both textures preloaded before first hover?
- [ ] Accessible DOM image kept; CSS-fade fallback when WebGL is off?
- [ ] Intensity tuned via noise frequency / circle radius, not extra passes?

> Ties to our experience: this is the small-surface cousin of 02b's full-scene shader work — a contained, cheap WebGL effect for tiles/links that still goes through the same "keep the DOM image, skin with a plane, gate on a tweened uniform" discipline, so it slots into the closed-loop edit/verify flow without a heavy 3D scene.
