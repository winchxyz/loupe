---
recipe: ref-oryzo
source: https://oryzo.ai/ (reference, observed 2026-06-18)
palette: [warm-cream, near-black-cocoa, burnt-orange, olive-green, cork-brown]
mood: warm premium minimalism, cork/earthy, playful-satirical, tactile product showcase
stack: [astro, three.js, rive, gsap, webgl-shaders, adobe-typekit]
tags: [reference, product-showcase, webgl, three, rive, gsap, warm-palette, variable-font, satirical, premium, landing]
---

# ref-oryzo — Oryzo AI (by Lusion)

A fictional, deliberately over-engineered "AI-powered cork coaster" — a satirical creative
project by the studio **Lusion** (the site itself states "Oryzo doesn't exist"). It parodies AI
hype and premium product launches while being executed at genuine Awwwards/studio production
quality. The lesson to harvest: how a **warm, earthy, tactile palette** + **variable-font type
system** + **heavy WebGL/Rive motion** dress up a single physical object as a high-end product
story. Tagline: *"Made for mugs. Built for tables."*

## Palette

Earthy, warm, low-contrast-but-rich. NOT a cold tech palette — everything is cocoa/cork/cream
with a single hot accent. Tokens observed verbatim in `:root`:

| Role | Hex | Token |
|------|-----|-------|
| Primary background ("white") | `#ffedd7` | `--color-white` (warm cream, not pure white) |
| Primary text / dark ground ("black") | `#100904` | `--color-black` (near-black warm cocoa) |
| Accent (hot) | `#dc5000` | `--color-orange` (burnt orange) — buttons, glow |
| Glow halo | `rgba(220,80,0, 0→1)` | `--glow-color` (animated orange bloom) |
| Deep brown (dark buttons/surfaces) | `#382416` | `--color-brown` |
| Muted text / grey-brown | `#6c5f51` | `--color-grey-brown` |
| Green (accent secondary) | `#445231` | `--color-green` |
| Green light | `#5d6c49` | `--color-green-light` |
| Green lightest / panel | `#f6e0c6` | `--color-green-lightest` |
| Pure white (rare, UI only) | `#fff` | `--color-pure-white` |
| Pure black (rare, UI only) | `#000` | `--color-pure-black` |

Transparent twins are defined for fades (`--color-white-transparent: #ffedd700`,
`--color-black-transparent: #10090400`) — used for gradient masks, not new colors. Other hexes in
the CSS (`#ff6b6b`, `#cd197d`, `#8c019c`, `#250187`, `#ffbf02` …) appear to be incidental
illustration/gradient bits, not part of the core system.

**Decision:** one warm cream ground, one warm near-black, ONE hot accent (burnt orange) carrying
all the energy via buttons + an animated glow halo. Greens are a quiet secondary. Inverts cleanly
to a dark mode (cream-on-cocoa) — the header toggles `.is-light`/`.is-dark`.

## Type

Three families, all purposeful:

- **Display** — `halyard-display-variable` (Adobe Typekit, `--display-font`). Variable weight
  axis `200 900`. Drives the big hero/section headlines.
- **Body / text** — `halyard-text-variable` (Typekit, `--text-font`). Workhorse for copy and UI.
- **Serif accent** — `Literata` (self-hosted `/fonts/Literata.woff2`) — editorial/quote voice.
- **Mono** — `DM Mono` (self-hosted `/fonts/DM-Mono-400-Latin.woff2`) — spec/technical labels,
  the "academic paper / thermal model" satire bits.

Fonts loaded via Typekit `@import "https://use.typekit.net/pmn6ngx.css"` (Halyard) + two
self-hosted woff2 (Literata, DM Mono). No Google Fonts.

**Weights observed:** 200, 300, 400 (most common after 500), **500 (dominant)**, 600. Variable
display axis `200 900` for fluid weight animation.

**Tracking:** tight on display (`letter-spacing:-.018em`), opened up on labels
(`+.018em`).

**Type scale** is fully fluid — sizes are `calc(N * var(--screen-unit))` where `--screen-unit`
is a viewport/aspect-derived unit, so the whole scale breathes with the window. Desktop values
(the larger of each responsive pair):

| Token | Desktop px-equiv | Role |
|-------|------------------|------|
| `--h1` | 164 | hero headline (massive) |
| `--h2` | 68 | section headline |
| `--h3` | 45 | sub-headline |
| `--h4` | 32 | |
| `--h5` | 20 | |
| `--quote` | 30 | pull-quote (Literata) |
| `--sub1` | 24 | |
| `--sub2` | 16 | |
| `--body1` | 38 | lead/intro body |
| `--body2` | 24 | |
| `--body3` | 18 | |
| `--default` | 18 | base UI/body |
| `--link-header` | 16 | nav |
| `--btn` | 16 | button label |

(Mobile pairs roughly halve these, e.g. `--h1` 164→96, `--h2` 68→38.) Plus oversized decorative
sizes up to `calc(var(--px) * 340)` for giant background numerals.

**Line-height:** `1` for display, `1.5` for body, `1.2` mid, with tight `0.9`/`1.09` on the
biggest headlines.

## Grid & composition

A studio-grade **16-column fluid grid** (not a fixed max-width container):

- `--grid-columns: 16` desktop → `6` tablet → `4` mobile.
- No pixel max-width. Layout is a computed column/gap system: `--grid-gap-scale: 24/90`, with
  `--grid-span-1 … --grid-span-16` helpers so any element can span N columns. Widths derive from
  `100vw - 2*--site-padding-x`.
- **Side padding** `--site-padding-x: 3.125vw` desktop (≈ `16/375*100vw` on mobile) — gutters
  scale with the viewport.
- Vertical rhythm from `--site-row-height` (`--site-padding-x * 8/60`), `--site-padding-y` =
  4 row-heights.
- **Radius scale** `--r`: `0.75rem` / `1.5rem` / `2.5rem` (small/med/large); plus pill shapes
  (`border-radius: 3em`, `2em`) for buttons and `50%`/`100%` for circular product/canvas frames.

**Composition pattern:** full-bleed sectioned single-page scroller. Each section is its own
WebGL/Rive "stage" (hero, `wearable`, `features-curve`, `sustainability`), with copy sitting in a
few grid columns beside a large canvas. Product tiers shown as Standard / Pro / Pro Max. Heavy use
of circular framed canvases, dashed-line dividers (`--dashline-color`), and a glowing orange CTA.

## Motion

**This is a motion-first, WebGL-heavy site — code alone under-describes it.** The JS bundle
(`hoisted.CRsATKbF.js`, ~1.07 MB) is dominated by:

- **Three.js / WebGL** — 200+ `WebGL` refs, 105 `THREE`, **99 `ShaderMaterial`** → custom GLSL
  shaders drive the hero and product visuals. Multiple `<canvas>` stages:
  `#preloader-canvas`, `#canvas`, `#wearable-main-canvas`, `#features-curve-canvas`,
  `#sustainability-rive-canvas-*`.
- **Rive** (`rive`, 124 refs) — vector state-machine animations (the "harvesting" / text
  sustainability pieces).
- **GSAP** (10 refs) — DOM/UI tweening and orchestration.
- **Astro** static shell, hoisted ES module, Cloudflare beacon.

No Lenis/Locomotive/Barba detected in the bundle — scroll-smoothing (if any) is likely handled
inside the custom rig, not a named off-the-shelf lib.

**CSS-level motion (the small stuff):** transitions cluster at **`.18s` / `.2s` / `.3s`** (most
common), with `.5s`, `1s`, `3s` for slower reveals. Easing is mostly `linear` and
`ease-in-out`; one expressive overshoot `cubic-bezier(.3,0,.66,-.3)`. Keyframe loops:
`hero-card-dot-blink`, `bikini-btn-pulse-animation`, `grip-instruction-wheel-dash`,
`newsletter-btn-loading` (all ~`1s`). Buttons carry an animated orange **glow** via
`--glow-color` rgba going 0→1. One `filter: blur(.75em)` for soft focus.

**Stack verdict:** Three.js (custom shaders) + Rive + GSAP, Astro shell. The signature "look"
lives in the GLSL — not reconstructable from CSS.

## Mood

Warm, tactile, **premium-but-winking**. It reads like a flagship product launch (Apple-grade
restraint, huge fluid Halyard display type, one hot accent, generous space) but the *copy* is
absurdist satire of AI hype — "Powered by AI" (= Adobe Illustrator), fake testimonials from a
pirate and a flat-earther, a mock academic paper, Standard/Pro/**Pro Max** coaster tiers. The
visual seriousness is the joke's straight-man. Earthy cork/cream/cocoa palette + burnt-orange
glow makes it feel handmade and warm rather than cold-tech.

## Visual capture & live re-validation (2026-06-25)

Re-harvested live via headless computed-styles. **Every recorded token matched the live site** — palette
(`#ffedd7` cream dominant, `#100904` ink, `#dc5000` orange, `#445231`/`#5d6c49` olive, `#bbac97` stone),
families (`halyard-display-variable`, `Literata`, `DM Mono`), weights (500 dominant, then 400), and the
fluid scale (hero h1 **123px**, weight 500, tracking **-2.214px**, line-height 0.9; h2 51px lh 1.0; body 18px).
So this recipe is accurate, not guessed. Ready CSS variables: `ref-oryzo.tokens.css` (sibling file).

**Hero composition (screenshot: `assets/ref-oryzo-hero.png`)** — fills the "visual capture" gap below for the
*static* composition (motion still needs video). The hero is a **warm photographic flatlay** (a cork coaster on a
green cutting mat with a pencil, craft knife, paperclip — a "maker's desk", warm directional light) with type
**anchored in the margins like an editorial poster**: a giant cream `ORYZO` wordmark top-left, a small-caps kicker
"MADE FOR MUGS. BUILT FOR TABLES.", a slim text nav top-right, a short considered body line on the right
("Designed to lift, insulate, and grip…"), and a mono studio credit bottom-left ("DESIGNED BY LUSION, THE
AWARD-WINNING DESIGN STUDIO" + "the world's most unnecessarily sophisticated cork coaster"). The lesson: the
**photo + corner-anchored display type carry it** — the product itself is small; negative space + warmth do the work.

## When to use

Reach for this recipe when the build is a **single-hero product showcase / launch page** that
should feel **warm, premium, and tactile** rather than cold-corporate — especially one physical
object you want to make feel extraordinary. Specifically a fit when:

- you want a **warm earthy palette** (cream + cocoa + one hot accent) instead of the default
  blue/black SaaS look;
- you're committing to **WebGL/Three.js or Rive hero motion** as the centerpiece (this is not a
  CSS-only recipe — budget real shader/animation work, or downscale the ambition);
- you want a **fluid, unit-driven 16-col type+grid system** that breathes with the viewport
  rather than fixed breakpoints;
- the tone can carry **playful/satirical copy under a straight, premium visual** (great for
  tongue-in-cheek brand or campaign sites).

Not a fit for dense dashboards, text-heavy editorial, or anything that can't justify a heavy
WebGL bundle.

## Gaps (could not determine from code alone)

- **Exact hero/product MOTION & shader look** — driven by custom GLSL in a 1 MB JS bundle; the
  actual visual behaviour (displacement, lighting, transitions, scroll-scrub feel) is NOT
  reconstructable from CSS/markup. ✅ *Static* composition now captured (`assets/ref-oryzo-hero.png`,
  2026-06-25 — see "Visual capture" above); the **motion** still needs a short video grab to record
  the real scroll-scrub / shader feel.
- **Scroll mechanics** — no named smooth-scroll lib (Lenis/Locomotive) found; whether/how scroll
  is smoothed or pinned is internal to the custom rig — unverified.
- **Rive state machines** — the vector animation content/triggers live in `.riv` assets, not in
  code we read.
- **Secondary/illustration hexes** (`#ff6b6b`, `#cd197d`, `#8c019c`, `#250187`, `#ffbf02`) —
  present in CSS but role unconfirmed; treated as incidental, not core tokens.
- **Halyard exact weights in use** — variable axis is `200 900`; which weights the design
  actually renders per element not fully mapped.
