---
technique: Smooth scroll (Lenis) as the substrate for every scroll-driven effect
section: scroll
source: Olivier Larose tutorials — cards-parallax / 3d-earth-scroll / parallax-scroll (github.com/olivierlarose)
tags: [scroll, lenis, smooth-scroll, gsap, framer-motion, performance]
apply-when: a page has ANY scroll-linked animation (parallax, pinned, scrub, 3D-on-scroll) and you want it to feel buttery instead of steppy
---

# Smooth scroll with Lenis — applied build decisions

Native wheel scroll is discrete and jumpy; every scroll-linked effect (parallax, scrub reveals,
scroll-driven 3D rotation) inherits that jank. Lenis interpolates scroll position into a smooth value
that `framer-motion useScroll` and `GSAP ScrollTrigger` both read. This is the **base layer** of an
Olivier-Larose-style scroll journey — install it first, then layer effects on top.

Snippet: `snippets/olivierlarose/lenis-smooth-scroll.jsx`.

## Decisions
1. **Use the `lenis` package** (older tutorials say `@studio-freight/lenis` — same lib, renamed). One
   instance per page, started in `useEffect`, driven by a `requestAnimationFrame` loop calling `lenis.raf(time)`.
2. **Wrap the whole page**, not individual sections — Lenis hijacks the document scroll. A `<SmoothScroll>{children}</SmoothScroll>` wrapper component is the clean shape.
3. **`window.scrollTo(0,0)` on mount** before starting Lenis so the journey always begins at the top (kills browser scroll-restoration landing you mid-page on reload).
4. **ALWAYS clean up** (`return () => lenis.destroy()`). The tutorials omit this; in React/HMR/route changes the missing cleanup stacks duplicate RAF loops → speed-up jank. Add it.
5. **GSAP ScrollTrigger users MUST sync the clocks** or pinned/scrubbed triggers drift from the smoothed position. Drop the manual `requestAnimationFrame(raf)` loop and instead:
   `lenis.on('scroll', ScrollTrigger.update)`; `gsap.ticker.add(t => lenis.raf(t*1000))`; `gsap.ticker.lagSmoothing(0)`.
6. **framer-motion needs no sync** — `useScroll` reads `window.scrollY`, which Lenis already moves.
7. **Respect `prefers-reduced-motion`**: skip Lenis init (fall back to native scroll) when the user asked for reduced motion. Smooth-scroll hijack is exactly what that setting is about.

> Ties to our experience: this is the missing substrate under our cinematic scroll-journey work — our pinned Three.js sections will read as steppy without it. Reuse the same wrapper that hosts the WebGL canvas (see `r3f-model-on-scroll`).

## Build checklist
- [ ] `lenis` installed; single instance in a `<SmoothScroll>` wrapper around the page
- [ ] RAF loop running `lenis.raf(time)`; `window.scrollTo(0,0)` on mount
- [ ] Cleanup `lenis.destroy()` returned from the effect (not skipped)
- [ ] If GSAP: clocks synced via `gsap.ticker` + `ScrollTrigger.update`, manual RAF removed
- [ ] `prefers-reduced-motion` path falls back to native scroll
