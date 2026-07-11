---
technique: Scroll-velocity-driven WebGL image distortion (planes synced to DOM)
section: webgl-motion
source: codrops/2024-07-18-distortion-grain-on-scroll + codrops/2021-01-05-infinite-webgl-gallery
tags: [webgl, three.js, shaders, scroll, distortion]
apply-when: building a scroll-driven gallery/hero where images should bend, smear, or grain in proportion to scroll speed
---

# Scroll-velocity WebGL image distortion

The signature "images bow / smear as you fling the scroll" effect. It is one mechanism: render each HTML image as a WebGL plane, then feed *scroll velocity* (not position) into a shader uniform that warps geometry or UVs.

## Build decisions

- **Sync, don't replace.** Keep the real `<img>` in the DOM (SEO, accessibility, layout), set it `opacity: 0` or `visibility: hidden`, and mirror its `getBoundingClientRect()` onto a plane every frame. The DOM is the source of truth for position/size; WebGL is a skin. Do NOT lay out in WebGL by hand.
- **Drive with velocity, not raw scroll.** Compute `velocity = (scroll.current - scroll.last)` per frame, normalize by viewport width, and lerp it toward 0. Pass it as `uStrength` / `uScrollVelocity`. Position drives *where* the plane is; velocity drives *how distorted* it is. This is what makes it feel physical.
- **Bend in the vertex shader, smear/grain in the fragment.** Geometry bow (the half-sine `newPosition.z += sin(y/h * PI + PI/2) * -uStrength`) belongs in the vertex shader on a plane with enough segments (e.g. 20x20). UV smear + film grain (`snoise(gl_FragCoord.xy)`) belongs in the fragment shader. Don't try to fake the bow with a CSS transform — it won't catch light/perspective.
- **Always do object-fit: cover in the fragment.** Plane aspect rarely equals image aspect. Use the `uPlaneSizes / uImageSizes` ratio remap (see snippet) so images never stretch. This one snippet is reusable across every WebGL-image effect.
- **Smooth the input.** Pair with a smooth-scroll lib (Lenis / ScrollSmoother) and lerp velocity; raw wheel deltas are spiky and make the distortion strobe.
- **Segments cost nothing visible past ~20.** More segments = smoother bow but diminishing returns; cap it and spend the budget on texture resolution instead.

## Build checklist
- [ ] DOM image is the layout source of truth; plane mirrors its rect each frame?
- [ ] `uStrength`/velocity is lerped toward 0 (no strobing on fast flicks)?
- [ ] Geometry bow in vertex shader; grain/smear in fragment shader?
- [ ] object-fit:cover UV ratio applied so images never stretch?
- [ ] Smooth-scroll lib feeding a stable scroll value?
- [ ] `prefers-reduced-motion` path that drops `uStrength` to 0?

> Ties to our experience: 02b is exactly a cinematic WebGL scroll-journey — this is the canonical pattern for making its imagery react to scroll, and the velocity-lerp + reduced-motion gate map straight onto our "gate immersive 3D so it never stalls scroll" perf-tier discipline. The object-fit-in-shader ratio remap is a drop-in for any textured plane in that scene.
