---
technique: Web design grid layouts (5 reusable grid patterns)
section: web-design
source: figma-resource-library/web-design-grid-layout-examples.md
tags: [layout, grid, responsive, spacing, structure]
apply-when: choosing the underlying grid for a page or section so content placement is intentional, not improvised
---

# Web design grid layouts — applied rules

Core idea: pick the grid type that matches the page's job FIRST, then place content into it. The grid is the decision-maker for "what goes where"; improvising placement is the failure mode. Default to **soft grids** (consistent base-unit spacing, loose alignment) over **hard grids** (everything snapped to baseline rows/columns) — hard grids are print-era and fight the browser across device sizes.

## Spatial system (set this before any layout)
1. Choose a **base unit** and make every size/space a multiple of it. Use 0.5 REM (8px) or 1 REM (16px). Choose REM, not fixed px — it scales and meets accessibility size standards.
2. Express **margins and rows as REM/percentages**, never fixed px, so the layout reflows across breakpoints.
3. Set **sizing** (element height/width) and **padding** (space between elements) in base-unit increments only — no off-grid magic numbers.
4. Scale margins by device: small margins on mobile (keep content off the screen edge), liquid/flexible margins on desktop (stop text spanning a full widescreen line).
5. Let secondary elements (extra nav, side info living in wide margins) **collapse/hide on small screens** when they hurt readability — don't shrink them into illegibility.

## The 5 grid patterns (each = a pattern + when to use)
1. **Block / single-column (manuscript) grid** — one large centered column inside the margins. Use when: text-heavy reading (blog, article, newsletter, About page). Because it's plain, carry the rhythm with white space, headers, hero images, shape dividers, and bullets so it doesn't read monotonous.
2. **Column grid** — content flows inside vertical columns + flowlines. Use when: comparable side-by-side content (pricing tiers, newspaper-style media). Sites run 2–12 columns; **default to 3** (the UX sweet spot) unless the content demands more.
3. **Modular grid** — equal cells in rows AND columns. Use when: a gallery of like items (product grid, image/video feed, profile grid). Wins on intuitive navigation, dense product display, and clean responsive reflow.
4. **Baseline grid** — dense equally-spaced horizontal lines that text snaps to. Use when: long-form typographic alignment matters. Drives text size, line-height pairings, margin and padding spacing. Measure in REM (not the legacy 8px/4px-baseline px values) for accessibility.
5. **Hierarchical grid** — modules sized/placed by importance, intentionally NOT uniform. Use when: a landing/marketing page that needs flexible, responsive emphasis (e.g. a product hero with ranked content blocks). Most flexible; reach for it when uniform cells would flatten the hierarchy.

## Grid anatomy (vocabulary for placement decisions)
- **Margins** hold content off the page edge. **Gutters** (space between rows/columns) are a grouping tool — tighten to bind related content, widen to separate. **Flowlines** are horizontal bands that align type and guide the eye down the page. **Modules** are the content cells you fill.

## Build checklist
- [ ] Did I pick the grid type from the page's JOB (reading / comparison / gallery / emphasis) before placing anything?
- [ ] Soft grid by default; only hard-snapping where it genuinely helps?
- [ ] Base unit chosen, and every size/margin/padding is a REM multiple of it (no off-grid px)?
- [ ] Column grids default to 3 unless content needs more?
- [ ] Margins and rows in REM/% so they reflow; mobile margins small, desktop margins liquid?
- [ ] Gutter width actually reflecting grouping (tight = related, wide = separate)?
- [ ] Secondary margin content collapses/hides on small screens instead of becoming illegible?

> Ties to our experience: PAIN.md repos-table header misalignment broke a column grid's similarity/continuity — a real column grid with shared gutters and flowlines is the fix. Our 02b sticky-pin responsive sections are a hierarchical grid in practice; sizing margins/rows in REM (not fixed px) is what keeps them coherent across our hardware-adaptive resolution tiers.
