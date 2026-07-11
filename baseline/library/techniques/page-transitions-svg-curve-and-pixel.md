---
technique: Page / route transitions — SVG curve loader and pixel dissolve
section: transition
source: Olivier Larose — svg-curve-loading + pixel-transition-effect (github.com/olivierlarose)
tags: [transition, page-transition, svg, framer-motion, raf, loader]
apply-when: covering/revealing the page on route change or initial load with a designed overlay instead of a hard cut
---

# Page / route transition overlays — applied build decisions

Two reusable cover-and-reveal overlays for route changes and intro loaders.

Snippets: `snippets/olivierlarose/svg-curve-page-loader.jsx`, `snippets/olivierlarose/pixel-transition.jsx`.

## A. SVG curve loader (rubber-band slide-up)
A full-screen panel slides up while its bottom edge bends with an SVG quadratic curve, then flattens.
1. **The whole effect is one SVG `<path>` whose `d` is recomputed each rAF frame** — a rect with a `Q` (quadratic) bottom edge whose control point is pulled down by a `curve` value. No animation library.
2. **`easeOutQuad` on two things in lockstep:** `curve` 200 → 0 (edge flattens) and `loader.top` 0 → −height (panel slides off). The bend trailing the slide is the elastic feel.
3. **Recompute width/height on each `setPath`** so it survives resize; rebuild on `window.innerWidth` change.
4. **For a Next route transition:** render the overlay in `layout`, key it on `pathname`; play curve IN (0→200, slide down to cover) on exit, then this OUT animation on enter.

## B. Pixel dissolve (block grid wipe)
A grid of square blocks fades in column-by-column with randomized per-block delay → "dissolve into pixels".
1. **20 columns of 5vw blocks**; each block is a `motion.div` with variants `open/closed` and `transition.duration: 0` so each block POPS (hard pixel), the choreography is purely in the staggered `delay`.
2. **Fisher–Yates shuffle the block order within each column** + `delay: 0.03 * i` so the reveal is scattered, not a boring top-down sweep. The randomness IS the effect.
3. **`custom={index}` feeds the per-block delay** into the variant (framer-motion `custom` prop).
4. **`pointer-events: none`** on the overlay so it never traps clicks when transparent.
5. Horizontal / vertical variants only change how the delay index is derived (column vs row), not the blocks.

## Shared
- **Reduced-motion:** collapse both to a quick crossfade (or none) — full-screen wipes are disorienting for motion-sensitive users.
- **Keep overlays `position: fixed; inset: 0; z-index` high; un-mount/`pointer-events:none` when idle** so they never block the page.

> Ties to our experience: a designed transition between scroll-journey chapters (or our loader) reinforces the cinematic feel; the curve loader composes with our matte-glass loader work — use the glass panel as the curve's fill.

## Build checklist
- [ ] Curve loader: single SVG `<path>`, `d` rebuilt per rAF, `easeOutQuad` on curve + top together
- [ ] Curve loader resize-safe (width/height recomputed); route version keyed on pathname
- [ ] Pixel grid: shuffled order + `delay: 0.03*i`, `duration: 0` blocks, `custom` prop wired
- [ ] Overlays `fixed inset-0`, high z-index, `pointer-events:none` when idle
- [ ] Reduced-motion fallback (crossfade/none)
