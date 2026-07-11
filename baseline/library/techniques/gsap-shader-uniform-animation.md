---
technique: Animating WebGL shader uniforms with GSAP (ripple / reveal / blur)
section: webgl-motion
source: codrops/2025-10-08-animate-webgl-shaders-with-gsap
tags: [gsap, shaders, webgl, three.js, interaction]
apply-when: you have a working shader and need timed/eased interaction (click ripple, hover reveal, scroll/drag blur) without hand-rolling per-frame lerps
---

# GSAP-driven shader uniforms

The unlock: a Three.js uniform is just an object with a `.value`. GSAP can tween `.value` like any property, so all of GSAP's easing, timelines, stagger, and ScrollTrigger become available to the GPU for free. Stop writing manual `lerp` loops for interaction state.

## Build decisions

- **Tween the uniform object, not a proxy.** `gsap.to(material.uniforms.uProgress, { value: 1, ... })`. Your render loop already uploads `.value` each frame — no extra wiring. Avoid the common mistake of tweening a JS variable and then copying it into the uniform manually; let GSAP own the value.
- **Pick the effect, keep the plumbing identical.** Ripple = `fromTo(uRippleProgress, {value:0},{value:1})` after setting a `uRippleOrigin` vec2; reveal = expanding distance mask from a click/hover point; blur = map scroll/drag velocity to `uBlurAmount`. Same pattern, different uniform.
- **Always `overwrite: true` on continuous inputs.** Scroll/drag fire many times; without `overwrite` you stack dozens of competing tweens and the value judders. One live tween per uniform.
- **Clamp physical uniforms.** A blur amount driven by velocity must be `Math.min(..., max)` or a fast flick blows the image out to flat color. Clamp at the JS boundary, not in the shader.
- **Use a cheap blur.** A 4-tap Kawase blur mixed in by `smoothstep(uBlurAmount)` is enough for motion blur; don't reach for a multi-pass Gaussian for an effect that only shows during movement.
- **Reduced motion = snap, don't animate.** Honor `prefers-reduced-motion` by setting `.value` directly (duration 0) so the end state is correct but the motion is gone.

## Build checklist
- [ ] Interaction state lives in uniforms, tweened by GSAP (no manual per-frame lerp)?
- [ ] `overwrite: true` on any uniform fed by scroll/drag/pointermove?
- [ ] Velocity/strength uniforms clamped at the JS boundary?
- [ ] Cheap (Kawase/4-tap) blur, not a heavy Gaussian, for motion-only blur?
- [ ] `prefers-reduced-motion` sets end-state instantly instead of tweening?

> Ties to our experience: our PAIN.md verification loop (diff before/after, "no visual change detected") gets easier when interaction is GSAP-tweened uniforms — the change is a single inspectable `.value` over a known duration, which the closed-loop tooling can probe via `getComputedStyle`/runtime read rather than guessing whether a hand-lerp fired.
