---
technique: Responsive website design (components + breakpoint rules)
section: web-design
source: figma-resource-library/responsive-website-design.md
tags: [responsive, layout, media-queries, typography, navigation, accessibility]
apply-when: building any site/section that must hold up across desktop, tablet, and mobile — reach for this when you set breakpoints, fluid layouts, or scale type/images
---

# Responsive website design — applied build rules

Core idea: one codebase that resizes, rearranges, or hides elements per viewport — not separate mobile/desktop builds. Manage content in one place, reuse code, keep visual hierarchy and the user journey consistent across screens. Five components carry it: flexible layout, media queries, responsive nav, responsive media, responsive text.

## Build decisions (each = a do/choose/avoid)

1. **Build once, adapt everywhere — never a separate mobile site.** One responsive layout means one place to edit; changes propagate to all screens. Avoid maintaining parallel desktop/mobile versions (costlier, drifts out of sync).

2. **Choose the layout engine by complexity.** For a simple, self-arranging grid use CSS Grid with `repeat(auto-fit, minmax(250px, 1fr))` — columns reflow with zero media queries. For precise control over order/sizing/distribution of items, use Flexbox with `flex-wrap: wrap` and `flex: 1 1 <basis>`. Grid for the page skeleton; Flexbox for component-internal layout.

3. **Make items shrink AND grow gracefully.** Pair a flex basis with a floor: `flex: 1 1 200px; min-width: 150px;` so cards never collapse below readability. Use `max-width` / `min-width` to cap and floor any fluid block.

4. **Set breakpoints by content, drive them with `@media`.** Add multiple `@media` rules at the widths where the layout actually breaks (common ones: 768px tablet, 600px small). Media features to target: `max-width`/`min-width`, height, resolution, and `orientation` (portrait/landscape). Don't scatter arbitrary breakpoints — add one where the design stops looking right.

5. **Collapse complex nav on small screens.** Desktop horizontal menu (`display: flex` on a `<ul>`) → at `max-width: 768px` hide `.nav-links` and reveal a hamburger toggle (accordion/tabbed are alternatives). Mark the toggle `aria-label="Toggle navigation menu"` — keep the menu semantic (`<ul>/<li>/<a>`) so it stays accessible and screen-reader-legible.

6. **Cap media to its container, lock aspect ratio.** Default rule for all images/video: `max-width: 100%; height: auto; display: block;`. `max-width: 100%` stops overflow; `height: auto` preserves aspect ratio; smaller scaled images also load faster. Use `display: block` to kill the inline-baseline gap.

7. **Scale type fluidly with `clamp()` instead of stepping it in every breakpoint.** `font-size: clamp(1rem, 10vw, 3rem)` = readable floor, viewport-relative middle, capped ceiling — fluid across all sizes in one line. Reserve per-breakpoint `@media` font overrides for cases `clamp()` can't express. Avoid raw `vw` font sizing with no clamp (text gets unreadably small/large at extremes).

8. **Use relative units, not fixed pixels, for the grid.** Percentages / fr / vw let content scale; fixed px widths break responsiveness. (Figma's stated "three basics": fluid grids, flexible images, media queries — text + nav round out a strong system.)

9. **Mobile-first is a strategy inside responsive, not an alternative.** Start at the smallest screen and progressively enhance upward — especially when mobile traffic dominates. Responsive = adapts to any size; mobile-first = the order you build it in.

10. **Avoid the named failure modes.** Watch for: text too small to read, tap targets too small to hit, layouts that clutter when columns stack, and oversized images that don't scale. Test touch interactions and spacing at every breakpoint, not just the desktop frame.

## Build checklist (tick while building a responsive view)
- [ ] Layout uses fluid units (fr / %, `auto-fit minmax`, or flex basis) — no fixed-px page columns?
- [ ] Every image/video has `max-width: 100%; height: auto` (no overflow, aspect ratio held)?
- [ ] Type scales via `clamp()` or breakpoint overrides — readable floor, sane ceiling?
- [ ] Nav collapses to an accessible toggle (`aria-label`, semantic `<ul>`) below its breakpoint?
- [ ] Breakpoints placed where the design actually breaks — checked portrait AND landscape?
- [ ] Tap targets large enough, spacing not cluttered, nothing clipped on the smallest screen?
- [ ] Verified on real device sizes / dev-tools simulators, not just one resized window?

> Ties to our experience: 02b is built on sticky-pin responsive sections, so breakpoint discipline here is load-bearing. And PAIN.md's recurring verification-coverage gaps (a clipped screenshot, an untested mode, checking the wrong CSS property) are exactly what the last checklist item guards against — "looks fine in one resized window" is the responsive version of trusting a settled frame.
