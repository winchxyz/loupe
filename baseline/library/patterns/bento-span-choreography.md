# Bento with span choreography

tags: bento, grid, features, tiles, span, mosaic, dashboard

**Use when:** a features/capabilities section, a studio overview, anything with 5-8 unequal ideas.
The point of a bento is UNEQUAL cells that still tile perfectly — equal cards are just a grid.

## Skeleton

```css
.bento { display: grid; grid-template-columns: repeat(6, 1fr); grid-auto-rows: minmax(200px, auto); gap: 16px; }
.w4 { grid-column: span 4; } .w2 { grid-column: span 2; } .tall { grid-row: span 2; }
```

Choreograph the spans so each ROW sums to 6 (or 12) with a different split:
`4+2(tall)` → `2+2 (+ the tall continuing)` → `2+4`. One tall tile anchors the composition;
never two talls side by side.

```html
<article class="tile w4">…</article>
<article class="tile w2 tall">…</article>
<article class="tile w2">…</article>
<article class="tile w2">…</article>
<article class="tile w2">…</article>
<article class="tile w4">…</article>
```

## What fills a tile (this decides whether it looks premium or empty)

- Top: a hand-built CSS micro-visualization of the feature (mini device frame, terminal lines,
  org-chart, score card, chip row) — `flex: 1` so it takes the free space.
- Bottom: `h3` + one short paragraph pinned with `margin-top: auto`.
- A tile with only an icon + text is a WEAK tile; earn each cell with a drawn viz.

## Variation axes (so two bentos never look alike)

- Column base: 6 vs 12; gap 12-24px; row height 180-260px.
- Span melody: 4+2 / 3+3 / 2+2+2 / 5+1 — pick ONE melody and a single accent violation of it.
- Tile surface: bordered panels on flat bg / flat cells with hairline separators (gap: 0) / mixed.
- Hover: border-color promote + translateY(-4px) — pick one, apply to all.

## Don'ts

- Don't make every tile the same span (that's a card grid, not a bento).
- Don't put photos in more than ~2 tiles; bentos live on drawn vizzes and type.
- Don't exceed 8 tiles; merge weak ideas instead.
- Collapse: ≤980px → 2 columns (`.w4,.w2 { grid-column: span 2 }`), talls become normal.
