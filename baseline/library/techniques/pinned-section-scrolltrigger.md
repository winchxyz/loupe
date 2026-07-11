---
technique: Pinned section with GSAP ScrollTrigger (pin one element while content scrolls)
section: scroll
source: Olivier Larose — smooth-scroll (github.com/olivierlarose/smooth-scroll)
tags: [scroll, gsap, scrolltrigger, pin, sticky]
apply-when: one element (an image, a 3D stage, a heading) should stay fixed in place while the rest of a section scrolls past it
---

# Pinned section with ScrollTrigger — applied build decisions

Hold one element on screen while sibling content scrolls. Olivier pins a hover-driven image preview
so a list of projects scrolls past while the chosen image stays put.

Snippet: `snippets/olivierlarose/pinned-section.jsx` (companion substrate in `snippets/olivierlarose/lenis-smooth-scroll.jsx`).

## Decisions
1. **Pin with `ScrollTrigger.create({ trigger, pin: true, start, end })`** — `pin:true` is enough; you do NOT need a tween to pin, just the trigger.
2. **Compute `end` explicitly** when pinning to the end of a tall section: `end: document.body.offsetHeight - window.innerHeight - 50`. Relative `end` strings (`'bottom top'`) are usually cleaner — prefer them unless you need an absolute pixel end like this.
3. **`start: 'top-=100px'`** to begin the pin slightly before the element hits the top, so it doesn't jump.
4. **Run pin setup in `useLayoutEffect`** (not `useEffect`) so the pin is measured before paint — avoids a flash of the un-pinned layout.
5. **`gsap.registerPlugin(ScrollTrigger)` once** at module or effect top.
6. **Pin + Lenis: sync the clocks** (see `smooth-scroll-lenis`) — an un-synced pin visibly lags the smoothed scroll.
7. **React cleanup:** kill the trigger on unmount (`ScrollTrigger.getAll().forEach(t => t.kill())` or `gsap.context().revert()`), or pins double up across HMR/route changes and the layout fights itself.
8. **`pin: true` reserves space** by default (`pinSpacing`) so following content doesn't jump — leave it on unless you deliberately want overlap.

> Ties to our experience: the core mechanic under our pinned cinematic Three.js sections. Pair `pin:true` with the Lenis substrate and the per-element transforms from the zoom-parallax / stacking-cards patterns; keep the absolute-`end` math in mind for full-height pinned stages.

## Build checklist
- [ ] `ScrollTrigger.create({ trigger, pin: true, start, end })`; plugin registered
- [ ] `start: 'top-=100px'` (or tuned); `end` relative unless an absolute pixel end is needed
- [ ] Setup in `useLayoutEffect`
- [ ] Lenis clocks synced; trigger killed/reverted on unmount
- [ ] `pinSpacing` left on so following content doesn't jump
