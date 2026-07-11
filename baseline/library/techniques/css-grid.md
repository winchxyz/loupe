---
technique: CSS Grid layout (complete property model)
section: css-layout
source: css-tricks/complete-guide-grid
tags: [css, layout, grid, responsive, alignment]
apply-when: building true two-dimensional layouts — page shells, dashboards, card galleries, anything where rows AND columns must line up
---

# CSS Grid — applied rules

Core idea: Grid is **two-dimensional** — you define columns and rows on the parent and place children into the resulting cells/areas. Use it whenever rows and columns must align together (page shell, dashboard, gallery). For a single-direction flow use Flexbox; the two compose well (a grid cell can itself be a flex container).

## Container decisions (each = a build decision)
1. **Turn it on with `display: grid`** (or `inline-grid`).
2. **Define tracks with `grid-template-columns` / `grid-template-rows`.** Track sizes accept: fixed (`200px`, `25%`), the **`fr` unit** (a share of *leftover* free space — `1fr 3fr` = 1:3 split of remaining space, computed after fixed tracks), `min-content`/`max-content`/`auto`, and functions `minmax(min, max)`, `fit-content()`, `min()`/`max()`.
3. **`repeat()` for regular tracks** — `repeat(3, 1fr)`. Combine with `auto-fill`/`auto-fit` for responsive grids without media queries.
4. **The famous responsive one-liner:** `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` — cards are ≥250px, wrap automatically, and stretch to fill the row. Use **`auto-fit`** (empty tracks collapse so existing cards stretch to fill) vs **`auto-fill`** (empty tracks are preserved, leaving gaps) — `auto-fit` is what you want for card galleries 95% of the time.
5. **Space tracks with `gap`** (`gap`, `row-gap`, `column-gap`), default `0`. Gutters only, never outer edges.
6. **Name regions with `grid-template-areas`** for readable page shells:
   ```css
   grid-template-areas:
     "header header header"
     "nav    main   aside"
     "footer footer footer";
   ```
   `.` = empty cell; every row needs equal cell counts. Then place children with `grid-area: header`. This is the most maintainable way to do app/page layout — the CSS visually mirrors the layout.
7. **Two distinct alignment layers — don't confuse them:**
   - **Items inside their cells:** `justify-items` (row axis), `align-items` (block axis), shorthand `place-items`. Default `stretch`. `place-items: center` centers every item in its cell.
   - **The whole grid inside the container** (only when the grid is smaller than the container): `justify-content` / `align-content` / `place-content`, with `start`/`center`/`space-between`/`space-evenly`/`stretch`.
8. **Implicit grid = rows/cols the browser auto-creates** when content overflows the explicit template. Size them with `grid-auto-rows` / `grid-auto-columns`; control direction/packing with `grid-auto-flow` (`row` default, `column`, or add `dense` to backfill holes — but `dense` can reorder visually, an a11y risk, so avoid for tab-ordered content).

## Item decisions
9. **Place by line number** with `grid-column` / `grid-row` (shorthands for `*-start / *-end`): `grid-column: 1 / 3` (line 1 to line 3) or `grid-column: 1 / span 2` (start at 1, span 2 tracks). Negative line numbers count from the end — `grid-column: 1 / -1` spans the full width. Omitting the end side spans 1 track.
10. **Place by name** with `grid-area: <name>` (matches `grid-template-areas`), or use the 4-value form `grid-area: rowStart / colStart / rowEnd / colEnd`.
11. **Override one item's alignment** with `justify-self` / `align-self` / `place-self` — same values as the `*-items` versions, scoped to that item.
12. **Items can overlap** by placing them on the same lines; use `z-index` to stack — useful for layered hero/figure compositions.

## Gotchas
- `fr` distributes *leftover* space, so `1fr 1fr` columns are NOT always equal if one has wide content — add `minmax(0, 1fr)` to force truly equal columns that can shrink (the grid analogue of flex's `min-width: 0`).
- `auto-fill` vs `auto-fit` is the single most-confused pair: visually identical until the row isn't full — then `auto-fit` stretches items, `auto-fill` leaves phantom empty tracks.

## Build checklist
- [ ] Genuinely 2D (rows AND columns align) — Grid is the right tool, not Flexbox?
- [ ] Page/app shell uses named `grid-template-areas` for readability?
- [ ] Card galleries use `repeat(auto-fit, minmax(<min>, 1fr))` instead of media-query column counts?
- [ ] Equal columns that must shrink use `minmax(0, 1fr)`, not bare `1fr`?
- [ ] Alignment intent mapped to the right layer (`place-items` for content-in-cell vs `place-content` for grid-in-container)?
- [ ] No `dense` packing on content that relies on source/tab order?

> Ties to our experience: dashboard-style section blocks and any future card/gallery layouts on the sites should lean on the `auto-fit minmax` one-liner so they reflow across the perf-tier/responsive breakpoints with zero per-breakpoint column math.
