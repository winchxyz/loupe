---
recipe: ref-sutera
source: https://www.sutera.ch/ (reference, observed 2026-06-18)
palette: [black-on-white, electric-blue accent, mint-green accent]
mood: experimental-lab / cybernetic-portfolio, playful but refined, type-led, viewport-fluid
stack: [Nuxt 3, Vue, Prismic CMS, GSAP, ScrollTrigger, Tailwind utilities]
tags: [portfolio, lab, editorial, monochrome, fluid-type, viewport-units, gsap, scrolltrigger, mixed-typefaces, awwwards-tier]
---

# ref-sutera — "Reality, By Design"

Personal portfolio + lab site for a human-machine-interaction designer (XR/MR/VR; "living cybernetic
symbiosis"). Experimental, playful (pop-culture GIFs, easter eggs) but built on a disciplined,
type-led monochrome system. Everything is fluid to the viewport (`svw`/`svh` units), not a fixed grid.
Tech: Nuxt 3 + Vue + Prismic, motion by GSAP + ScrollTrigger, layout via Tailwind utility CSS.

## Palette
Near-pure monochrome canvas with two saturated accents reserved for emphasis. Observed CSS custom
properties (`entry.BR_myX4x.css`):

- `#000` / `#000000` — `--color-black`, primary foreground/text (the dominant ink; 26 occurrences)
- `#fff` — `--color-white`, primary background
- `#121212` — `--color-dark`, near-black surface variant
- `#344dbb` — `--color-blue`, electric/cobalt accent
- `#293ca9` — deeper blue (hover/active state of the blue)
- `#59e7ca` — `--color-green`, mint/cyan accent (the "lab" highlight)
- `#b5e9ff` — pale ice-blue (soft tint / fill)
- `#9e9e9e` — `--color-grey`, secondary text / muted
- `#cbcbcb` — `--color-dark-grey`, hairlines / disabled / borders

Roles: white page, black type. Blue (`#344dbb`) and mint (`#59e7ca`) are the only chromatic notes —
used sparingly as accent/interaction color, not as broad fills. Greys carry hierarchy and rules.

## Type
Four-typeface system, each mapped to a thematic role via CSS vars (the "reality/lab/blueprint/cyber"
naming is the site's own concept):

- `--font-main` → **PP Neue Montreal** (400) — primary grotesk, body + general UI.
- `--font-lab` → **Neue Haas Grotesk Text** (400/700) — also bound to `--reality-font`; the workhorse
  for the "reality/lab" content.
- `--font-blueprint` → **Bitter** (300/400/700) — a slab-serif, used for "blueprint"/editorial accents.
- `--font-cyber` → **BrunoAce (SC)** (400) — display/techno face for the "cyber" flourish.

All `@font-face` are self-hosted woff2 with `font-display:swap`. No Google Fonts link.

Type scale is **fluid, viewport-driven** (`svw` = small-viewport-width), defined as named tiers that
swap values across breakpoints (mobile → tablet/`768px` → desktop). Observed desktop-ish values:

- `--text-xxl`: ~7.19svw (up to 11.19svw on mobile) — hero display, `line-height ~0.9`
- `--text-xl` / `--text-xl-alt`: ~3.24svw / 2.54svw (mobile up to 9.66 / 7.63svw), `lh 0.9`
- `--text-l` / `--text-ls`: ~1.38svw / 1.15svw (mobile 4.83–6.36svw), `lh 0.9`
- `--text-m`: ~0.92svw, `lh 0.9`
- `--text-s`: ~0.81svw, `lh 1.1`
- `--text-xs`: ~0.75svw, `lh 1.1`
- `--text-xxs`, `--text-10`: small UI / captions, clamped `max(10px, …svw)`

Note the tight display leading (`line-height: 0.9`) on every large tier — headlines set solid/condensed
vertically. Small text relaxes to 1.1. Body UI floors use `max(14–16px, …svw)` so text never gets too
small on narrow screens.

## Grid & composition
- **Fluid, not container-locked.** No fixed `max-width` wrapper (only `100%` / `150%` edge cases);
  layout scales with the viewport via `svw`/`svh`. This is the defining structural choice — it reads
  as a single responsive "canvas" rather than a centered column.
- Grid spacing via custom props: `--grid-margin` and `--grid-gutter` = **24px desktop, 20px** at the
  smaller tier.
- Breakpoint logic is single-step at **768px**, plus **aspect-ratio media queries**
  (`min-aspect-ratio: 9/10`, `8/9` combined with `min-width:768px`) — i.e. the layout adapts to screen
  *shape*, not just width. `@media(pointer:fine)` gates hover affordances.
- Composition is editorial/portfolio: oversized type sections ("Core threads of my work", "Some
  Project Examples", "Lectures, Talks & Writing") interleaved with a loose gallery of Prismic-served
  imagery (PNG/WebP/GIF, many cropped via Prismic's `rect`/`w`/`h` params).

## Motion
**GSAP + ScrollTrigger** drive everything (32 gsap refs, 14 ScrollTrigger refs in the entry bundle).
No Lenis, no Locomotive, no Barba, **no three.js / WebGL** — the hero is DOM + media, not a canvas.

Observed GSAP parameters (from `ZF73RuYw.js`):
- Durations cluster at **0.4s** (most common), **0.7s**, with **0.1s** micro-states and **1s / 3s**
  for slow ambient moves.
- Easings: **`expo.out`** (signature reveal), **`power1.out` / `power1.in` / `power1.inOut`**,
  **`expo.inOut`**, plus **Elastic** for a few playful pops. `ease:"none"` (7×) is the linear ease used
  for scroll-scrubbed, position-mapped tweens.
- `stagger:0` appears — grouped reveals fire together in places rather than cascading.
- CSS-side transitions are essentially absent (`transition-duration:1ms` only) — motion is owned by JS,
  not CSS, so all timing/easing lives in GSAP.

Feel: snappy `expo.out` entrances on scroll, scroll-linked linear moves, occasional elastic
personality — matching the "serious system, playful surface" tone.

## Mood
Experimental lab / cybernetic-portfolio. Black-on-white rigor as the base, with two electric accents
(cobalt + mint) and a deliberately mixed four-typeface palette to signal different "registers"
(main / reality-lab / blueprint-serif / cyber-display). Playful content layer (pop-culture GIFs,
easter eggs, a dog "running experiments") sits on top of a precise, viewport-fluid type system. The
result is approachable-yet-serious — a thinking space, not a corporate page.

## When to use
Reach for this recipe when building a **type-led personal portfolio, designer/researcher site, or
"lab"/studio page** that should feel premium and experimental without a WebGL hero. Strong fit when:
the content is a single scrolling narrative of oversized headlines + a curated media gallery; you want
a strict monochrome base with one or two saturated accents; you want the layout to scale fluidly to the
viewport (and adapt to screen *shape*) rather than sit in a fixed column; and motion is GSAP/ScrollTrigger
scroll reveals with tight `expo.out` timing. The mixed-typeface "register" system (a grotesk + a slab +
a techno display) is a copyable move for sites that want personality inside discipline. Not the recipe
for dense dashboards, e-commerce, or anything needing a centered max-width content column.

## Gaps
- Exact section-by-section composition, pinning/scrub choreography, and the real *feel* of the scroll
  reveals can't be fully reconstructed from minified CSS/JS — flagged for later visual capture.
- `grid-template-columns` / explicit column counts weren't present in the bundle (layout is
  utility/flex + viewport units), so per-section grid structure is inferred, not measured.
- Per-tier exact `svw` values vary across the breakpoint swaps; the values above are representative,
  not an exhaustive table.
