---
technique: Persistent cursor-trail displacement + RGB shift via GPGPU ping-pong (Three.js)
section: webgl-motion
source: codrops/2024-08-27-grid-displacement-rgb-shift-gpgpu
tags: [three.js, gpgpu, shaders, rgb-shift, cursor, fbo]
apply-when: an image/hero should ripple and chromatically smear along a fading cursor trail (not just at the exact cursor pixel)
---

# GPGPU cursor-trail displacement + RGB shift

A cursor leaves a *fading* wake of distortion + chromatic aberration across an image, instead of an effect that only exists under the exact cursor pixel. The trick is state persistence: a plain shader has no memory of last frame, so you hold the displacement field in a texture and feed it back to itself.

## Build decisions

- **Use a ping-pong FBO when the effect must persist/decay over time.** A normal fragment shader recomputes from scratch every frame — it cannot remember a trail. Render the velocity field into FBO_B while reading FBO_A, then swap. This is the general answer to "how do I make a trail that lingers"; reach for it whenever an effect needs memory (trails, fluid, accumulation), not for stateless per-pixel effects.
- **Two passes, fixed roles.** Pass A (update): add cursor velocity into the field within a soft radius (`1.0 - smoothstep(0, r, dist)`), then multiply by a relaxation factor (~0.92-0.97) so it decays. Pass B (render): sample that field and offset UVs. Keep the passes separate; don't try to do persistence in the render shader.
- **Relaxation factor IS the trail length.** Closer to 1.0 = longer-lingering wake; lower = snappier. Tune this one scalar before adding anything else.
- **RGB shift = sample R/G/B at three different UV offsets.** Multiply the displacement by a slightly different factor per channel (`r * 1.25`, `g * 2.0`, `b * 1.5` of the strength) so the channels separate into chromatic aberration. Subtle multipliers; large ones look broken, not stylish.
- **Clamp the strength** (`clamp(length(disp), 0, 2)`) so a fast cursor flick can't tear the channels fully apart.
- **GPGPU has a cost floor.** Two extra render targets per frame — gate it behind your perf tier and skip entirely on low-power/reduced-motion, falling back to a static image.

## Build checklist
- [ ] Displacement field held in a ping-pong FBO (read A / write B / swap)?
- [ ] Update pass adds cursor velocity in a soft radius, then relaxes toward 0?
- [ ] Relaxation factor tuned first as the single "trail length" knob?
- [ ] RGB shift via three per-channel UV offsets, multipliers kept subtle?
- [ ] Strength clamped so fast flicks don't shred the image?
- [ ] Gated behind perf tier; static fallback for low-power / reduced-motion?

> Ties to our experience: the ping-pong-FBO "give a shader memory" pattern is directly reusable for 02b's accumulation-style effects (trails, foam/velocity fields) and is the principled version of state we'd otherwise fake. The perf-tier gate + static fallback is non-negotiable here, exactly per our hardware-adaptive rendering work.
