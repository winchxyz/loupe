---
technique: Animista — on-demand pure-CSS animations
section: motion
source: https://animista.net/ (Ana Travas, v1.1.0; generator output, FreeBSD-style per site terms)
tags: [animation, css, keyframes, micro-interaction, entrance, motion]
apply-when: you need a self-contained CSS @keyframes for an entrance, exit, text-focus, attention, or ambient background effect — no JS animation library
---

# Animista — on-demand pure-CSS animations

Animista is a CSS animation GENERATOR: you pick an effect, tune duration/easing/delay/origin live, and copy the resulting `@keyframes` + `animation:` shorthand. Output is plain CSS — zero runtime, zero dependency. Reach for it when GSAP/Framer is overkill: one-shot reveals, hover/click feedback, looping accents, ambient hero motion. The whole catalog is 6 categories / 75 groups / 662 variations; our `snippets/animista/animations.css` ships one canonical variation per useful group.

## Pick the category by INTENT, not by look
1. **basic** (18 groups) — transform-only states (scale-up/down, rotate, flip, swing, slide, shadow-pop). Use as the *target* of a transition, or as a building block. Not opacity-gated, so they don't double as reveals.
2. **entrances** (20 groups) — play ONCE on mount/scroll-in. scale-in, slide-in, slide-in-blurred, fade-in, rotate-in, swirl-in, flip-in, bounce-in, roll-in, puff-in, tilt-in, flicker-in. **Default to these for scroll reveals.**
3. **exits** (18 groups) — mirror of entrances; play on dismiss. You MUST keep the node mounted until the animation ends (listen for `animationend`) or the exit never shows.
4. **text** (8 groups) — type-specific: tracking-in/out (letter-spacing), focus-in / blur-out (blur), text-pop-up (shadow depth), flicker. For headlines/kickers, not boxes.
5. **attention** (8 groups) — LOOP these: heartbeat, pulsate, ping, shake, vibrate, jello, wobble, bounce, blink. Set `iteration-count` > 1 or `infinite`. For nudges, error feedback, "new" dots.
6. **background** (3 groups) — long ambient loops: ken-burns (zoom/pan a still image — fakes a video hero with zero bytes), bg-pan (slide a gradient), color-change (cycle bg colors).

## Build decisions
- **Always set `animation-fill-mode: both` on entrances/exits.** Without it the element flashes its un-animated state before play and snaps back after. Every Animista entrance/exit defaults to `both` — keep it.
- **Choose the easing Animista chose, then leave it.** Animista's defaults are hand-tuned per effect (e.g. slide-in-blurred uses easeOutQuint `cubic-bezier(0.230,1,0.320,1)` for the snap; fade-in uses easeOutSine). Don't flatten everything to `ease` — the curve is half the effect. The label→bezier map is in the snippet header.
- **`slide-in-blurred-*` is the single highest-value entrance** for a "designed" feel: motion-blur + non-uniform scale that resolves to crisp. Prefer it over a plain slide when one hero element should feel premium.
- **Direction/origin is a free axis.** Every directional group has 8–15 variations (…-top, -tr, -right, -br, -bottom, -bl, -left, -tl, plus -center/-hor/-ver). Pick the one whose motion vector points FROM where the element conceptually comes from. Don't ship everything sliding up.
- **3D effects (flip-*, swirl-*) need `perspective` on the PARENT** (e.g. `perspective: 600px`) or the rotation looks flat/wrong. The keyframe alone isn't enough.
- **text-focus / focus-in-expand depend on the font rendering blur well** — test on the actual face; thin weights smear. tracking-in needs a non-zero base letter-spacing to animate toward.
- **Stagger reveals with `animation-delay`, don't author N keyframes.** Same class on siblings + incrementing inline `--d` / `animation-delay` gives a cascade for free.
- **Respect reduced motion.** Wrap looping/large-travel effects in `@media (prefers-reduced-motion: no-preference)`; ken-burns, bounce-in, shake, vibrate are exactly what motion-sensitive users opt out of.

## Avoid
- Don't loop entrances/exits (they're authored for one pass) or one-shot the attention set (they're authored to loop).
- Don't stack a blurred entrance (slide-in-blurred, puff-in) on a long list — the `filter: blur()` repaint is expensive per element; reserve it for hero-tier nodes.
- Don't treat this as a full motion system. For scroll-scrubbed, pinned, or timeline-sequenced motion you want GSAP/ScrollTrigger; Animista is for discrete, self-contained effects.

> Ties to our experience: ken-burns is the cheap honest fallback for our perf-tier work — a still image with a 5s zoom/pan reads as "cinematic hero" on a CPU-only tier where the Three.js scene is gated off, with zero GPU cost and no poster/video swap.

## Build checklist
- [ ] Picked the category by intent (entrance=once, attention=loop, background=ambient), not by appearance?
- [ ] `animation-fill-mode: both` on every entrance/exit; kept Animista's default easing?
- [ ] Chose the directional variation whose motion vector matches the element's origin?
- [ ] Added `perspective` on the parent for any flip-/swirl- 3D effect?
- [ ] Exits stay mounted until `animationend`; loops have `infinite`/`iteration-count` set?
- [ ] Large-travel & looping effects gated behind `prefers-reduced-motion`?
- [ ] Blur-based effects limited to hero-tier nodes (not long lists)?
