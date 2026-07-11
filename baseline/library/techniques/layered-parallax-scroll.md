---
technique: Layered parallax (multi-speed scroll depth) — GSAP and framer-motion
section: scroll
source: Olivier Larose — parallax-scroll (github.com/olivierlarose/parallax-scroll)
tags: [scroll, parallax, gsap, framer-motion, depth]
apply-when: you want elements (titles, images, words) to move at different speeds on scroll so the section reads with depth
---

# Layered parallax — applied build decisions

Different elements translate at different rates as the section scrolls, producing depth. Olivier ships
the SAME effect two ways; pick by which animation system the page already uses.

Snippet: `snippets/olivierlarose/parallax-scroll-two-ways.jsx`.

## Decisions
1. **Pick one engine, don't mix on the same element.** framer-motion (`useScroll` + `useTransform` → `style={{y}}`) when you're in motion land; GSAP (one scrubbed `timeline`, tweens at position `0` so they run in parallel) when you already use ScrollTrigger.
2. **`offset: ['start end', 'end start']`** (framer) / `start:'top bottom' end:'bottom top'` (GSAP) — animate across the element's FULL visible travel (enters bottom → exits top), so the parallax runs the entire time it's on screen.
3. **Speed = travel distance.** Map progress `[0,1]` to different `y` end-values per layer: small (-50) for foreground, large (-250) for background. Background moving FURTHER (faster) up reads as more distant.
4. **GSAP timeline position param `0`** runs all layer tweens simultaneously off one ScrollTrigger — cheaper and more in-sync than N separate triggers.
5. **`scrub: true`** so it's scroll-locked, not time-based playback.
6. **React + GSAP MUST `gsap.context()` + `ctx.revert()`** on unmount or triggers leak across HMR/route changes (real footgun).
7. **Avoid per-letter `useTransform` inside `.map()` in framer-motion** (the tutorial does it for a random-y title) — calling a hook in a loop is a rules-of-hooks violation that works by luck because the count is constant; for our code precompute the transforms or use GSAP for the random-letter variant.
8. **Animate `transform`/`y` only** (GPU), never `top`/`margin` on the heavy layers.

> Ties to our experience: the workhorse depth effect for DOM layers between WebGL beats. The GSAP `context/revert` discipline is mandatory in our React app to keep ScrollTriggers from piling up.

## Build checklist
- [ ] One engine per element; `offset` spans full visible travel
- [ ] Layer `y` end-values differ by depth (foreground small, background large)
- [ ] GSAP: single timeline, tweens at position `0`, `scrub: true`
- [ ] GSAP in React wrapped in `gsap.context()` with `ctx.revert()` cleanup
- [ ] No hooks called inside `.map()`; transforms precomputed
- [ ] Only `transform`/`y` animated on heavy layers
