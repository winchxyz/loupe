---
recipe: ref-cipher-digital
source: https://cipherdigital.com/ (reference, observed 2026-06-18)
palette: [neutral-90 #202427 bg, neutral-05 #f5f6f7 text, hypergreen #abd233 accent, full neutral ramp #f5f6f7→#0d0e10]
mood: institutional dark-tech / energy-infrastructure; calm authority, cinematic, restrained, one acid-green spark
stack: WordPress (custom "okd" theme, Blockstudio blocks) + GSAP 3.14.2 (ScrollTrigger, SplitText) + Lenis 1.3.18 + Locomotive Scroll 5.0.1; full-bleed hero VIDEO (not WebGL); cross-document curtain page transitions
tags: [reference, dark, infrastructure, energy, data-center, corporate, editorial-grid, video-hero, gsap, lenis, splittext, monochrome, single-accent, odometer-metrics]
---

# Cipher Digital — reference recipe

A dark, institutional infrastructure/energy site ("Built for Hyperscale.", "Rapidly
scaling the energy capabilities of today, to power the potential of tomorrow"). Reads as
a serious data-center / hyperscale-energy company: corporate-confident, cinematic,
near-monochrome with a single acid-green accent. Heavy use of full-bleed looping video,
a strict 12-column editorial grid, hairline divider lines, and animated odometer metrics.

## Palette (hexes + roles)

Built on a single 12-step neutral ramp (named `neutral-05`→`neutral-110`) with ONE
chromatic accent. The whole site is monochrome charcoal + one spark of green.

- **Page background** `#202427` — `neutral-90`, a cool near-black charcoal (the body bg).
- **Body text** `#f5f6f7` — `neutral-05`, off-white on the dark bg.
- **Accent (sole brand color)** `#abd233` — `hypergreen`, an acid lime-green. Used as the
  text-selection highlight (`::selection` bg = hypergreen, text = `#0d0e10`); reserved as
  the brand spark, NOT spread across surfaces.
- **Darkest surfaces** `#141618` (`neutral-100`), `#0d0e10` (`neutral-110` / `contrast`) —
  used for darker section themes (`-theme-neutral-100` / `-110`) and page-transition curtain.
- **Light section theme** `#eff0f1` (`neutral-10`) with dark text — the rare inverted block.

Full neutral ramp (light→dark) as observed:
`#f5f6f7` (05) · `#eff0f1` (10) · `#e4e9ed` (20) · `#c4ccd1` (30) · `#939ca2` (40) ·
`#5a636a` (50) · `#4c555c` (60) · `#3d454b` (70) · `#2d3438` (80) · `#202427` (90) ·
`#141618` (100) · `#0d0e10` (110).

Role mapping observed: headings-on-dark = `neutral-05`; body-on-dark muted = `neutral-30`
(#c4ccd1); hairline/divider lines = `neutral-50` (#5a636a); error = `#E43A3A`.

Note: the page also exposes the stock WordPress preset palette + gradients (blush,
luminous-dusk, midnight, etc.) — these are CMS boilerplate, NOT used in the design.
The real system is: charcoal ramp + hypergreen, nothing else.

## Type (families + scale)

- **Display / UI font:** **Articulat CF** (`articulat-cf`), self-hosted woff2
  (`ArticulatCF-Normal.woff2`, weight 400, `font-display: swap`). A clean geometric-grotesque
  sans. Fallback stack: `-apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui",
  "helvetica neue", ..., sans-serif`. Only the 400 (Normal) weight is shipped as a webfont —
  hierarchy comes from SIZE, not weight.
- **Mono font:** `Roboto Mono, Menlo, Consolas, Monaco, ...` — used for small label / eyebrow /
  monospace UI (e.g. horiz-scroll captions `ui-monospace, monospace`).
- **Heading scale (fluid `clamp`, viewport-driven):**
  - h-1 `clamp(41px → 69px)` (other hero variants go `clamp(41px→80px)` and up to
    `clamp(48px→96px)` for the biggest display)
  - h-2 `clamp(36px → 57px)`
  - h-3 `clamp(32px → 48px)`
  - h-4 `clamp(29px → 40px)`
  - h-5 `clamp(26px → 33px)`
  - h-6 `clamp(23px → 28px)`
- **Body scale (fixed px):** body-lg 19px · body-md 16px · body-sm 13px · body-xs 12px.
- **Line-height:** ~1.5 for body, ~1.2 for headings (tight display lines like `line-height:80px`
  / `90px` on the largest hero type).
- **Tracking:** near-neutral — body `+.01em` to `+.02em`; large display nudged tight `-.01em`.
  Restrained, no dramatic letter-spacing.

Headline observed: **"Built for Hyperscale."** rendered through GSAP **SplitText** (per-character
/ per-word reveal).

## Grid & composition

- **System:** one shared `.u-grid` utility — CSS Grid, `repeat(N, 1fr)`, responsive column counts:
  - sm (mobile) = **4 cols**, md = 6, lg = 6, xl (desktop) = **12 cols**.
  - Column gap scales 24px (md) → 48px (lg/xl); row-gap independent.
- **Container widths:** `--okd-block-max-width: 2108px` (very wide, full-bleed friendly) and a
  narrow reading measure `--okd-block-max-width-narrow: 928px` for text blocks.
- **Inline padding (gutters):** 40px, opening to 48px (`spacing--48`) at ≥1025px.
- **Header:** fixed top bar, inline height 80px (mobile) → 90px (desktop). Primary nav:
  Company · Infrastructure · Insights · Investors · Careers.
- **Section rhythm:** hairline divider lines everywhere — `--okd-line-width: 0.5px`,
  `--okd-line-color: neutral-50` (#5a636a) — plus small **8–10px dot/circle markers**
  (`--circle-size: 8px/10px`) at line intersections (a blueprint / schematic motif).
- **Spacing ramp (px tokens):** 8 · 16 · 24 · 32 · 48 · 72 · 96 · 128 · 164.
- **Corners:** essentially square. `border-radius: 4px` on small UI (tags/buttons), `50%` only on
  the dot markers. No big rounded cards — sharp, technical feel.
- **Section themes:** blocks opt into `-theme-neutral-100` / `-110` (darker) or `-theme-neutral-10`
  (light inverted) — most of the page sits on the `neutral-90` charcoal.
- **Signature sections:** full-bleed video hero with a "Trusted by" logo rail; a horizontal-scroll
  (pinned) video gallery; an odometer **metrics** band (Contracted / Pipeline / Operating Capacity
  in MW / GW that count up from 0); investor-resources CTA.

## Motion

- **Driver:** **GSAP 3.14.2** + **ScrollTrigger** + **SplitText**, smooth-scroll via **Lenis
  1.3.18** with **Locomotive Scroll 5.0.1**. (Loaded from jsDelivr CDN.)
- **Page transitions:** custom GSAP "column curtain" overlay; `@view-transition { navigation: none }`
  (native cross-doc VT deliberately disabled so only the GSAP curtain shows). Curtain bg =
  `neutral-90`.
- **Scroll behaviors:** `data-okd-scroll-text-reveal` attributes drive on-scroll text reveals
  (SplitText char/word stagger); odometer metric counters animate 0 → value on scroll into view;
  horizontal-scroll section is pinned and scrubbed.
- **Durations observed (CSS layer):** clustered in a slow, weighty range — 0.55s, 0.58s, 0.65s,
  0.8s, 1.08s are the most common; quick UI states at 0.12–0.42s; long staggered chains up to ~2.1s.
- **Easings observed:** `cubic-bezier(.625,.05,0,1)` (sharp-in, long glide-out) and
  `cubic-bezier(.22,1,.36,1)` (easeOutQuint-ish overshoot-free settle) — the two signature curves;
  plus `ease-in-out`. Honors `prefers-reduced-motion` (0.01ms fallbacks present).
- **Hero motion = full-bleed looping VIDEO** (`Cipher_Hero_60fps.webm/mp4`, portrait alt for
  mobile), autoplay/muted/playsinline, `fetchpriority="high"`. Footer also runs a background
  video. NOT WebGL/canvas.

> ⚠️ GAP: the hero and footer rely on prerendered 60fps video whose actual content,
> composition, and color grade can't be read from code. Exact hero look + the feel of the
> scroll-pinned transitions need real visual capture to reproduce faithfully — treat the
> motion/hero fidelity here as approximate until screenshotted.

## Mood

Institutional, infrastructural, "serious money" energy-tech. The vibe is a calm, confident
data-center / hyperscale-power company, not a flashy startup: near-monochrome cool charcoal,
a single acid-green spark used sparingly, hairline schematic lines + dot markers (blueprint
language), big quiet fluid-scaled display type in one geometric sans, slow weighty GSAP motion,
and cinematic full-bleed video. Energy = restraint + scale, not decoration. Copy is declarative
and short ("Built for Hyperscale.", capacity metrics in MW/GW).

## When to use

Reach for this recipe for **dark, institutional, infrastructure-/energy-/B2B-deep-tech sites**
that need to feel large, credible and cinematic: data centers, energy/power, hyperscale/cloud,
industrial, fintech-infra, or any "serious operator" company site. Best when you have real video
or strong full-bleed media for the hero, want a strict wide 12-col editorial grid with hairline
dividers, a single-accent monochrome system, animated count-up metrics, and slow GSAP+Lenis
scroll choreography. Avoid for playful consumer, content-dense dashboards, or anything that needs
multiple bright colors — this system is deliberately one ramp + one spark.
