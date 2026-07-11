---
technique: Flexbox layout (complete property model)
section: css-layout
source: css-tricks/a-guide-to-flexbox
tags: [css, layout, flexbox, alignment, responsive]
apply-when: laying out a one-dimensional row/column (nav bars, toolbars, card rows, centering, distributing space)
---

# Flexbox — applied rules

Core idea: flexbox is **one-dimensional** — you lay out along a single main axis (row or column) and the cross axis is whatever's perpendicular. Reach for it when items flow in one direction and you want the browser to distribute/align free space for you. For true 2D layout (rows AND columns interlocking) use Grid instead.

## Container decisions (each = a build decision)
1. **Turn it on with `display: flex`** (block-level) or `inline-flex` (inline-level). Direct children become flex items; `float`, `clear`, and `vertical-align` stop working on them.
2. **Set the main axis with `flex-direction`** — `row` (default, L→R), `row-reverse`, `column` (top→bottom), `column-reverse`. This decides what "main" and "cross" mean for every other property below; set it first.
3. **Decide wrapping with `flex-wrap`** — `nowrap` (default; items shrink onto one line) vs `wrap` (overflow flows to new lines) vs `wrap-reverse`. Use `flex-flow: <direction> <wrap>` to set both at once (e.g. `flex-flow: row wrap`).
4. **Distribute along the main axis with `justify-content`** — `flex-start` (default), `flex-end`, `center`, `space-between` (first/last touch edges), `space-around` (equal space *around* each, so edge gaps are half), `space-evenly` (truly equal gaps incl. edges). Pick `space-between` for nav bars, `center` for centering, `space-evenly` when edge gaps should match inner gaps.
5. **Align on the cross axis with `align-items`** — `stretch` (default; items fill cross size), `flex-start`, `flex-end`, `center`, `baseline` (align text baselines — use for mixed font sizes in a row). `stretch` is why flex children become equal-height by default.
6. **`align-content` ONLY matters with multiple wrapped lines** (`flex-wrap: wrap`). It distributes the *lines* in leftover cross-axis space (`flex-start`/`center`/`space-between`/`stretch`…). On a single line it does nothing — don't reach for it expecting per-item alignment (that's `align-items`).
7. **Space items with `gap`** (`gap`, `row-gap`, `column-gap`), default `0`. Prefer `gap` over item margins/padding — gap only applies *between* items, never on outer edges, so no double-spacing or `:last-child` hacks.

## Item decisions
8. **Use the `flex` shorthand, not the three longhands.** `flex: <grow> <shrink> <basis>`, default `0 1 auto`. Memorize the four idioms:
   - `flex: 1` → `1 1 0%` — item grows/shrinks from a zero basis; **equal-width columns** when applied to all.
   - `flex: auto` → `1 1 auto` — grows/shrinks but respects content/`width` as the starting size (unequal but flexible).
   - `flex: initial` → `0 1 auto` — won't grow, will shrink; sizes to content.
   - `flex: none` → `0 0 auto` — fully rigid, never grows or shrinks (use for fixed sidebars/icons).
9. **`flex-basis` is the size BEFORE free space is distributed.** `auto` = "use my width/height"; `0` = ignore content size and split purely by grow ratios. A bare `flex: 5` sets basis to `0%` — that's why single-value flex makes equal columns, not just "grow 5×".
10. **`flex-grow` (default 0) and `flex-shrink` (default 1)** are unitless *ratios* of leftover/overflow space, not absolute sizes. Negatives are invalid.
11. **Override one item's cross alignment with `align-self`** (`auto`/`flex-start`/`flex-end`/`center`/`baseline`/`stretch`) — e.g. push one item to the bottom of a row without touching siblings.
12. **`order` (default 0) re-sequences visually only** — the DOM/source order (what screen readers and tab order follow) is unchanged. Never use `order` to fix reading order; only for purely visual rearrangement.

## Gotchas (the ones that bite)
- **`margin: auto` eats free space.** A flex item with `margin-left: auto` shoves itself and everything after it to the far end — the cleanest way to push a logout button to the right of a nav without `justify-content` juggling. `margin: auto` on all sides centers an item both axes.
- **Flex items won't shrink below their content** unless you add `min-width: 0` (or `min-height: 0` in a column). This is the #1 cause of overflowing flex children with long text or `<pre>`.
- `align-content` needs `flex-wrap: wrap` to do anything.

## Build checklist
- [ ] One-dimensional layout (not interlocking 2D) — confirmed flex is the right tool, not Grid?
- [ ] `flex-direction` set first; `justify-content` (main) and `align-items` (cross) chosen against THAT axis?
- [ ] Spacing via `gap`, not per-item margins?
- [ ] Items use the `flex` shorthand idiom that matches intent (`1` equal cols / `none` rigid / `auto` content-flexible)?
- [ ] Any item that might overflow has `min-width: 0`?
- [ ] No `order` used to fix reading sequence (source order kept correct for a11y)?

> Ties to our experience: the matte-glass UI's nav/toolbar rows and pinned-section control clusters are exactly flex's sweet spot — `gap` + `margin-left:auto` keeps them clean across the responsive sticky-pin breakpoints without margin hacks.
