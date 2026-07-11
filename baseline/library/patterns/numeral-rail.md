# Oversized numeral rail

tags: numerals, steps, process, sticky, outline, index, chapters, timeline

**Use when:** 3-5 sequential steps/chapters/phases that deserve weight — "how it works",
a method, a story in acts. The numeral IS the composition; the copy rides beside it.

## Skeleton

```css
.phases { list-style: none; }
.phase { display: grid; grid-template-columns: clamp(120px, 18vw, 230px) 1fr;
  gap: clamp(18px, 3vw, 48px); padding: 44px 0; border-bottom: 1px solid var(--line); }
.phase__n { font: 800 clamp(4.6rem, 9vw, 8.2rem)/0.9 var(--display); letter-spacing: -.05em;
  color: transparent; -webkit-text-stroke: 1.5px var(--ink-2);
  position: sticky; top: 96px; }             /* the numeral dwells while its copy scrolls */
.phase__body { min-width: 0; }               /* never let content blow the 1fr track */
```

```html
<li class="phase">
  <span class="phase__n" aria-hidden="true">01</span>
  <div class="phase__body">
    <h3>You write the brief</h3>
    <p>…</p>
    <div class="log mono">PLAN · 4 pages · tokens locked</div>  <!-- a machine-voice strip grounds it -->
  </div>
</li>
```

## Why it works

- The outline numeral gives poster scale without ink weight (same trick as the marquee).
- `position: sticky` makes the numeral DWELL as its step scrolls — cheap, dependency-free
  scroll choreography.
- The hairline between phases + a mono log/detail strip gives each step a floor.

## Variation axes

- Numerals filled vs outline; left rail vs alternating sides; roman numerals / act names.
- Add a thin progress line filling per-phase on scroll (IntersectionObserver → scaleY).
- Numbers as background watermarks behind the copy (absolute, low opacity) for denser pages.

## Don'ts

- Below ~720px: numeral goes static above the copy (`position: static`), scale down one step.
- Don't exceed 5 phases; don't put the numeral in the accent color (ink/outline only).
