# Kinetic type marquee (outline letters)

tags: marquee, kinetic, typography, outline, stroke, ticker, motto, band

**Use when:** the page needs a burst of typographic energy between sections — a motto, a value
chant, a product mantra. One per page. It doubles as a section divider.

## Skeleton

```css
.marquee { border-block: 1px solid var(--line); padding: 18px 0; overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent); }
.marquee .track { display: flex; width: max-content; animation: mq 36s linear infinite; }
.marquee span { font: 800 clamp(2.6rem, 5.8vw, 4.6rem)/1 var(--display);
  letter-spacing: -.02em; white-space: nowrap;
  color: transparent; -webkit-text-stroke: 1.6px var(--ink); }
@keyframes mq { to { transform: translateX(-50%); } }
```

```html
<div class="marquee" aria-hidden="true"><div class="track">
  <span>VERIFIED, NOT CLAIMED · PICK → EDIT → PROVE ·&nbsp;</span>
  <span>VERIFIED, NOT CLAIMED · PICK → EDIT → PROVE ·&nbsp;</span> <!-- duplicate = seamless -->
</div></div>
```

The `-50%` trick needs the content DUPLICATED exactly twice. Mask-fade the edges so letters
dissolve instead of clipping. Hairlines top+bottom make it read as a deliberate band.

## Why outline (not filled)

Filled giant type overwhelms a page; OUTLINE type gives poster scale at whisper weight —
it reads as texture. Fill is the accent: fill ONE word, or fill on hover.

**Legibility contract — outline text shatters easily; get this right or it looks broken:**
- POSTER SCALE ONLY (≥ ~2.6rem). Shrunk small, hollow letters fragment into a mesh of thin
  rectangles and read as broken. If it must be small, FILL it instead of outlining it.
- SOLID, HIGH-CONTRAST stroke: `-webkit-text-stroke: 1.6px var(--ink)` at FULL opacity. NEVER a
  faint low-alpha stroke (`rgba(255,255,255,.55)`) — a translucent stroke on a dark band is the exact
  thing that reads as fragmented / wireframe letters.
- MODERATE weight (500–700). A heavy 800 glyph outlined with a thin stroke shows two close contour
  lines per stem → a busy mesh. If you want heft, thicken the stroke, don't just crank the weight.
- Keep the band background CLEAN behind the letters — no scanlines / stripes / dots showing THROUGH
  the transparent counters (they shatter the glyphs). Texture belongs on a fill, not behind hollow type.

## Variation axes

- Direction (reverse), speed 24-48s (slower = more luxury), single vs double band crossing.
- Stroke 1-2px; uppercase vs italic serif; separators: · / → / ✦.
- Upgrade: per-glyph hover fill, or a second slower band behind at lower opacity.

## Don'ts

- Never put body copy or links inside; it's aria-hidden texture.
- Don't run two marquees in view at once; don't animate `left` (use transform).
