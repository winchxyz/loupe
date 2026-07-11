---
recipe: ref-clapat-hayler
source: https://demo.clapat-templates.com/hayler/ (reference, observed 2026-06-18)
palette: ["#ffffff", "#000000", "#b880ff", "#0c0c0c", "#999999", "#e93735"]
mood: minimal editorial showcase-portfolio; light base with invertible dark sections; lavender accent + custom cursor; image-led, drag-to-explore craft tone
stack: [html, css, gsap, scrolltrigger, gsap-flip, gsap-observer, scrollsmoother, lenis, webgl-canvas]
tags: [portfolio, agency, creative-studio, showcase, minimal, editorial, custom-cursor, dark-light-invert, gsap, lenis, scroll-driven, drag-slider, clapat]
---

# ref-clapat-hayler

Distilled from the Clapat **Hayler** template (a premium creative-studio / agency portfolio
theme). Observed from real HTML + CSS on 2026-06-18. It is a **showcase-driven, image-led**
portfolio: a featured-project carousel ("Drag to Explore"), case-study grids, a services/expertise
list, client logos, and a marquee footer. Tone: "multi award winning global creative production
studio" — minimal, confident, craft-forward, motion-rich.

All values below are observed from the stylesheets (`css/variables.css` carries the design tokens),
not invented.

## Palette (hexes + roles)

A **light base that inverts per section** — the page ships `dark-content`/`light-section` and
`dark-section` modifiers that swap fg/bg, not a fixed dark theme.

- `#ffffff` — **base background** (`html, body { background-color: var(--color-white) }`); also the
  text color inside `dark-section` blocks.
- `#000000` — **primary text / foreground** on the light base; also the background of `dark-section`
  blocks. Light/dark sections simply flip black/white.
- `#b880ff` — **accent (soft lavender / lilac)**. This is `--primary-color` AND `--secondary-color`.
  Its main job is the **custom cursor** (`--cursor-background-color`, `--cursor-border-color`) — the
  accent lives in the pointer, not splashed across the layout. Use it sparingly as the single hue.
- `#0c0c0c` — **near-black** for the fullscreen-menu overlay background (`--fullscreen-menu-bg-color`).
- `#999999` / `#999` — muted gray for cursor info text, loader, and highlight states.
- `#e93735` — **error-state red only** (`.error_message`); not a brand accent — do not promote it.
- Faded utility tokens: `rgba(0,0,0,0.15)` (`--color-black-faded`), `rgba(255,255,255,0.15)`
  (`--color-white-faded`), plus `rgba(0,0,0,0.05)` / `rgba(255,255,255,0.05)` hairline fills for
  `pre`, table, and divider surfaces.

Roles in one line: **white canvas, black ink, one lavender accent carried by the cursor, sections
invert black/white for rhythm.**

## Type (families + scale)

Three self-hosted families (woff2/woff in `webfonts/`), declared as CSS vars:

- `--default-font-family: 'Inter Tight'` — body / UI. Loaded at three weights via `@font-face`:
  **Regular (normal), Medium (500), SemiBold (600)**. Body default is **500** weight.
- `--primary-font-family: 'FunnelDisplayWeb'` — display / headings emphasis, loaded **SemiBold (600)**
  (file `FunnelDisplay-SemiBold.woff2`). This is the show-off display face.
- `--secondary-font-family: 'Roboto Mono'` — mono accents (captions / metadata / labels).

Body metrics: `--default-body-font-size: 1rem`, `line-height: 24px`, `weight 500`,
`letter-spacing: 0.01em`. Medium body `1.2rem/1.3`; large body `1.6rem/1.4` with `-0.015em`.

**Fluid type scale** — all headings use `clamp()` (min, preferred-with-vw, max), tight tracking,
line-height ~1.05, weight **600**:

- `--bt` (big type / hero display): `clamp(2rem, 1.5rem + 12vw, 14rem)`, lh 1.05, ls **-0.02em**.
- `--title` (hero / page-nav primary): `clamp(2rem, 1.5rem + 6vw, 8rem)`, lh 1.15, ls -0.02em.
- `--h1`: `clamp(2rem, 1.5rem + 4vw, 5.5rem)`, lh 1.05, ls -0.02em.
- `--h2`: `clamp(1.75rem, 1.25rem + 3vw, 4.5rem)`, lh 1.05, ls -0.02em.
- `--small-title`: `clamp(2.25rem, 1.25rem + 3vw, 4.5rem)`, lh 1.15, ls -0.015em.
- `--h3`: `clamp(1.75rem, 1.1rem + 2vw, 3rem)`, lh 1.1.
- `--h4`: `clamp(1.35rem, 1rem + 1.2vw, 2.25rem)`, lh 1.1.
- `--h5`: `clamp(1.1rem, 0.95rem + 0.6vw, 1.6rem)`, lh 1.15.
- `--h6`: `clamp(0.95rem, 0.9rem + 0.3vw, 1.25rem)`, lh 1.2.
- `--subtitle`: `clamp(1rem, 1rem + 0.3vw, 1.5rem)`, lh 1.35, weight **500**.

Fullscreen-menu items: `clamp(2rem, 1.5rem + 4vw, 5.5rem)`, weight 600, ls -0.02em.

Type signature: **huge fluid display headings (up to 14rem) with negative tracking on a quiet
500-weight Inter Tight body; mono for metadata.**

## Grid & composition

- **Content cap:** `.content-max-width { max-width: 1320px; box-sizing: border-box }`. Full-bleed
  rows also exist (`content-full-width`, `width: 100vw` negative-margin breakouts).
- **Gutters / rhythm (tokens):** `--horizontal-gutter: 50px` (→ 40px ≤1537, 30px ≤1024, 20px mobile);
  `--vertical-gutter: 120px` (→ 100px, 80px down the breakpoints). `--gap: 24px` (→ 12px mobile).
- **Column system:** flexbox, not CSS grid. `.columns-group` is `display:flex; flex-wrap:wrap;
  gap: var(--gap)`. Children are fractional `inline-flex` columns sized by `calc()`:
  - `.one_half { width: calc(50% - (1*var(--gap))/2) }`
  - `.one_third { width: calc(33.3333% - (2*var(--gap))/3) }` ; `.two_third` = 66.6667%
  - `.one_fourth` = 25%, `.two_fourth` = 50%, `.three_fourth` = 75%
  - fifths and sixths follow the same pattern (`one_fifth`…`five_sixth`).

  So the layout grammar is **halves / thirds / fourths / fifths / sixths** with a shared 24px gap —
  classic editorial column mixing, gap-removable via `.columns-group.no-gap`.
- **Chrome:** `--header-height` / `--footer-height: 120px` (→ 100/80 responsive). Hero caption
  padding `230px` top / `120px` bottom (default hero); page-nav caption `160/120`.
- **Sections:** alternate `light-section` (black-on-white) and `dark-section` (white-on-black);
  `change-header-color`, `reveal-stripes-top/bottom`, and `disable-header-gradient` modifiers drive
  scroll-triggered section reveals and header recoloring.
- **Breakpoints:** 1537 / 1466 / 1024 (tablet) / 767 / 479. Desktop ≥1025.

Composition feel: **wide 1320px editorial column field with generous 120px vertical rhythm,
full-bleed image breakouts, and section-by-section black/white inversion.**

## Motion

Driven by **GSAP** (`lib/gsap.js`) with **ScrollTrigger, Flip, Observer, ScrollSmoother**, plus
**Lenis** smooth scroll (`body.enable-lenis`, `--lenis` wiring). A **WebGL canvas** layer is present
(`.webgl-canvas` is sized to 100%/100% on append in `common.js`) — used for the hero/showcase
imagery/transitions. There's a custom **DevTools-grade cursor** with many hover states (solid /
outline / blur / drag / loader / highlight) and a **drag slider** ("Drag to Explore").

Observed CSS timing (histogrammed across all stylesheets):

- **Dominant duration `0.2s`** (≈119 uses) for micro-interactions; secondary `0.1s`, `0.15s`,
  `0.05s` for hover/cursor; `0.3s`, `0.4s`, `0.5s` for larger UI; `0.735s`, `1.25s`, `1.5s` for
  reveal/section transitions.
- **Easings (most → least used):**
  - `cubic-bezier(0.215, 0.61, 0.355, 1)` — primary (easeOutCubic), the house ease.
  - `cubic-bezier(.625, .05, 0, 1)` — strong in-out for reveals.
  - `cubic-bezier(.19, 1, .22, 1)` — easeOutExpo, snappy settle.
  - `cubic-bezier(.69, 0, 0, 1)`, `cubic-bezier(.6, 0, .05, 1)` — heavy in-out.
  - `cubic-bezier(0.2, 1.33, 0.25, 1)` — slight overshoot/bounce.
  - keyword fallbacks `ease-in-out` / `ease-out` / `ease`.
- Keyframe animations are short (`0.6s`, `0.8s`) with a couple of long ambient ones (`1.5s`, `3s`).

Motion signature: **smooth Lenis scroll, GSAP Flip-based layout transitions, ScrollTrigger section
reveals + header recolor, a WebGL hero, and a heavily stateful custom cursor — fast 0.2s micro,
easeOutCubic as the default curve.**

## Mood

A **multi-award creative production studio** presenting itself with restraint and craft. Hero copy
(verbatim): *"A solution that goes above touch and imagination..."*; positioning: *"a multi award
winning global creative production studio that blends multidisciplinary talents and fields of
expertise under a roof."* Projects carry minimal metadata — title, date, disciplines (Photography,
Branding, Video, Web Design) — and the carousel invites *"Drag to Explore."* The vibe is
**confident-minimal, image-first, motion-rich**: white space and big type do the talking, the
lavender shows up only in the cursor, and the work is the hero. Design-conscious, agency/studio
audience.

## When to use

Reach for this recipe when building a **creative studio / agency / photographer / designer
portfolio** that should feel premium, minimal, and motion-led — where the **work is the hero** and
the chrome stays quiet. Specifically a fit when the brief wants:

- a **light editorial canvas** (white/black) with **per-section dark inversions** for rhythm;
- **huge fluid `clamp()` display headings** with tight negative tracking over a calm 500-weight body;
- a **single restrained accent** carried mostly by a **custom cursor**, not by colored UI;
- **showcase / drag-to-explore carousels** and full-bleed image grids on a 1320px column field;
- **GSAP + Lenis** motion: ScrollTrigger reveals, Flip layout transitions, smooth scroll, optional
  WebGL hero.

Not the right pick for dense data UIs, dashboards, content-heavy marketing pages needing strong
color systems, or anything that can't justify a heavy motion stack (GSAP+Lenis+WebGL) and a custom
cursor.

> **Gap / fidelity note (WebGL + motion):** the hero/showcase uses a `webgl-canvas` layer and the
> real feel is carried by GSAP Flip transitions, the drag slider, ScrollTrigger reveals, and the
> stateful cursor — **none of which are fully knowable from CSS alone.** Durations/easings above are
> the static CSS timings; exact transition choreography, the WebGL effect, scroll-scrub mapping, and
> cursor behavior need **visual capture** to reproduce faithfully. Treat the motion section as
> directional, not pixel-exact.
