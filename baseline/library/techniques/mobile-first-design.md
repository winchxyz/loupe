---
technique: Mobile-first design
section: web-design
source: figma-resource-library/mobile-first-design.md
tags: [responsive, layout, performance, accessibility, navigation, typography]
apply-when: starting any responsive site/UI — design and code the smallest screen first, then scale up at breakpoints
---

# Mobile-first design — applied rules

Core idea: build the SMALL screen first and scale UP, not the desktop first and cram DOWN. Constrained space forces you to ship only the essentials, so the mobile build doubles as a ruthless content/priority audit. Desktop then earns extra columns/features — it doesn't inherit clutter. (CSS: author base styles for mobile, layer enhancements in `min-width` media queries, never the reverse.)

## The rules (each = a build decision)

1. **Audit before you lay out.** List the content/features, rank by what an on-the-go user needs at the first tap, and cut or defer the rest. Do this BEFORE choosing a layout — the priority order IS the mobile information architecture.
2. **Author base styles for mobile, enhance with `min-width`.** Default = single column, stacked, full-width. Add columns, side-by-side, and hover affordances only inside `@media (min-width: …)`. Avoid max-width/desktop-down cascades that leave mobile carrying dead desktop weight.
3. **Touch targets first.** Make tappable elements large with real spacing between them (thumb-sized, generously padded). Choose chunky readable buttons over dense link clusters; never place two tap targets close enough to mis-hit.
4. **Put primary actions in the thumb zone.** Prefer a bottom nav bar or bottom-anchored CTA over a top-only menu. Use familiar patterns (hamburger, bottom tab bar) and add a "back to top" control so long scrolls don't trap the user.
5. **One clear hierarchy per view.** Limited space rewards a single focal action per screen. If everything competes, nothing reads — pick the one thing this view is for and make it dominant.
6. **Fluid, legible typography.** Use a fluid type + spacing scale so text stays comfortable from phone to desktop (avoid fixed px that's fine on desktop and tiny on mobile). Pick typefaces legible at small sizes; pair a display face with a clean reading face rather than relying on one to do both.
7. **Images: responsive formats + right-sized files.** Serve `srcset`/responsive formats so images stay sharp and small. Author at sizes that look right on the phone and scale UP cleanly — small, high-quality source files beat oversized desktop images downscaled on mobile. Square/portrait crops fit phone columns and still enlarge for desktop.
8. **Budget performance like a feature.** Compress images, trim assets, minimize third-party scripts, favor lightweight frameworks. Slow first paint on a mobile network = bounce before content is seen. Load time is a design constraint, not an afterthought.
9. **Make images double as actions where it fits.** A photo tile that is itself the tap target (to a service/detail page) saves space and reads as one obvious gesture — good for galleries, service menus, and recipe/blog cards.
10. **Don't block with pop-ups.** Modals on mobile cover content and break flow. Avoid them; if unavoidable, make the close target large and obvious and never hide critical info behind them.
11. **Hold the brand across breakpoints.** Same colors, type, and tone phone-to-desktop — the mobile view is not a stripped-off-brand variant; it's the brand at its most essential.
12. **Test on real devices, not just the resize handle.** Check actual phones, real touch, and degraded/slow-connection conditions. A clipped or untested viewport is a real bug, not a rounding error — verify each breakpoint you ship.

## Accessibility (carry through every screen)
- Meet color-contrast minimums (matters more under glare/outdoors).
- Readable font sizes; helpful `alt` text on every meaningful image.
- Navigation operable by screen reader; tap targets reachable and labeled.

## Build checklist (use when reviewing a responsive build)
- [ ] Content prioritized for mobile FIRST; non-essentials deferred, not crammed in?
- [ ] Base CSS is mobile; desktop added via `min-width` (not desktop scaled down)?
- [ ] Tap targets large + well-spaced; primary action in the thumb zone?
- [ ] Type and spacing fluid and legible from 360px up to desktop?
- [ ] Images use responsive `srcset`/formats and are weight-budgeted for mobile networks?
- [ ] No flow-blocking pop-ups; any modal is easy to dismiss?
- [ ] Brand (color/type/tone) consistent across every breakpoint?
- [ ] Verified on a real device and a slow connection — every breakpoint checked, none clipped?

> Ties to our experience: our 02b/TESQ work already runs sticky-pin responsive sections and hardware-adaptive performance tiers + dynamic resolution scaling — this is the same instinct (rule 8: treat load/perf as a design constraint, scale up not down). And PAIN.md's clipped-screenshot / untested-mode misses are exactly rule 12: a breakpoint you didn't actually look at on-device is unverified, not done.
