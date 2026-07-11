# Diagram-as-layout

tags: diagram, flow, process, arrows, loop, steps, pipeline, how-it-works

**Use when:** the content IS a process/system (how it works, a pipeline, a loop, an architecture).
Instead of describing the process in prose cards, make the SECTION LAYOUT be the diagram.

## Skeleton (3 nodes + inline SVG arrows + a return arc)

```css
.diagram { position: relative; display: grid; grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 18px; align-items: stretch; padding-bottom: 90px; }
.node { border: 1px solid var(--line); border-radius: 8px; padding: 22px;
  display: flex; flex-direction: column; gap: 12px; min-height: 230px; }
.node .viz { flex: 1; display: grid; place-items: center; } /* a mini-mock of THIS step */
.arrow { width: 52px; align-self: center; }
.return-arc { position: absolute; left: 4%; right: 4%; bottom: 30px; height: 70px; }
```

```html
<svg class="arrow" viewBox="0 0 64 24"><path d="M2 12 H54 M46 4 L56 12 L46 20"
  fill="none" stroke="currentColor" stroke-width="2"/></svg>
<svg class="return-arc" viewBox="0 0 900 90" preserveAspectRatio="none">
  <path d="M 860 6 C 860 76, 40 76, 40 6" fill="none" stroke="currentColor"
        stroke-width="1.5" stroke-dasharray="5 7"/></svg>
```

A closed loop earns a dashed RETURN ARC under the row with a centered mono label
("↺ and again"); draw it on scroll via stroke-dashoffset for a quiet reveal.

## What makes it read as a diagram, not cards

- Each node carries a MICRO-MOCK of its step (a pick-box with selection handles, a typed
  command line with a blinking caret, a ✓ status readout) — not an icon.
- Node headers in mono/uppercase with index: `01 · PICK`.
- Arrows are part of the GRID (auto columns), not absolutely-positioned decorations.

## Variation axes

- Node count 3-5; vertical variant (spine + branches) for org-charts/swarms.
- Arc above vs below; solid arrows vs dashed; numbered vs verb-labeled nodes.

## Don'ts

- Don't fake it with "→" characters between cards; use real SVG strokes.
- Mobile: stack nodes 1-col, rotate arrows 90°, HIDE the return arc (it never survives stacking).
