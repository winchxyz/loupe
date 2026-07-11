---
recipe: ref-jesko-jets
source: https://jeskojets.com/ (reference, observed 2026-06-18)
palette: [warm-cream #fff8ed, dark-warm-brown #312726, warm-grey #7a716e, success #1ba64b, alert #ffa800, error #e23d3d]
mood: quiet aviation luxury — warm cream ground, near-black warm-brown ink, ultra-wide display type; "freedom, distinction, movement"
stack: Webflow + GSAP 3.13 (SplitText, ScrollTrigger, CustomEase) + Lenis 1.2.3 smooth scroll + Barba.js page transitions + Lottie 5.12 + globe.gl (Three.js WebGL globe) + jQuery. WebGL hero/feature = the rotating 3D globe.
tags: [luxury, aviation, private-jet, warm-neutral, cream, editorial, expanded-sans, tight-tracking, gsap, lenis, splittext, scrolltrigger, barba, lottie, webgl, globe, three, webflow, light-dark-theming]
---

# Jesko Jets — private-jet charter, warm-cream editorial luxury with a WebGL globe

Reference distilled from the live HTML + the Webflow shared CSS
(`jeskojets.webflow.shared.c930478cf.min.css`). A global private-jet charter operator
(Gulfstream 650ER; 150+ countries, 5,000+ missions). The design language is **warm,
quiet, and expansive**: a cream paper ground, a single dark warm-brown ink, ultra-wide
GT America display type with very tight negative tracking, and a centerpiece **3D rotating
globe** plotting destination cities. Restraint plus one technical set-piece.

## Palette (hexes + roles)

Brand tokens live in a structured Webflow variable system (`--_colors---base-*`). The site
runs a **light/dark theming inversion**: the *same* token resolves to either the dark ink or
white depending on the section's theme class, so dark and light sections share one token map.

- **Ground / background — `#fff8ed`** (`base-100--100`, warm cream / ivory). The default
  `body` background; the paper the whole site sits on.
- **Ink / text — `#312726`** (`base-1000--100` and `base-0--100`, a dark warm brown, near-black
  but never neutral-black). Default body + heading color on cream sections.
- **Inverted text — `white`** (`base-1000--100` / `base-0--100` resolve to `white` under the
  dark theme) — used where a section flips to a dark ground.
- **Secondary / muted — `#7a716e`** (`base-500--100`, warm taupe-grey) — secondary text, dividers, UI.
- **Tints of the ink** (used for borders / overlays / hairlines), all derived from `#312726`:
  `#3127261a` (~10–15% α), `#31272633` (~20–25% α), `#3127264d` (~30–40% α), plus transparent
  `#0000`. White equivalents (`#ffffff26`, `#ffffff40`, `#fff6`) appear for the inverted theme.
- **System accents (functional only, not brand color):** success `#1ba64b`, alert `#ffa800`,
  error `#e23d3d`. These are status colors, not decoration — the design otherwise has **no loud
  accent**; the "color" is the warm cream-vs-brown contrast itself.
- Webflow platform defaults (`#3898ec` blue, `#e23d3d`, greys `#ddd/#ccc/#222/#333`) exist in
  the base stylesheet but are framework boilerplate, effectively unused by the design.

Spend: ~70% warm-cream ground / ~25% dark-brown ink / ~5% warm-grey secondary. **No saturated
brand accent** — the whole palette is one warm neutral pair plus tints.

## Type (families + scale)

Two self-hosted custom cuts of GT America (loaded as `.woff2`), both *wide* widths — this is
the signature move:

- **Display — `GT America Expanded`** (`--_fonts---font-display`, `…Expanded, Arial, sans-serif`;
  GT-America-LC-Expanded-Medium). The widest cut; carries hero + all headings (declared 12× in
  CSS). Ultra-wide letterforms = the confident, spacious "luxury aviation" voice.
- **Body / UI — `GT America Extended`** (`--_fonts---font-body`, `…Extended, Arial, sans-serif`;
  GT-America-LC-Extended-Medium + Bold). A slightly-less-wide extended cut for body, labels, nav.
- `webflow-icons` is an embedded icon font (platform), not part of the type voice.

**Type scale is fully fluid (em-on-`1vw`).** The `body` is set to `font-size: 1vw; line-height: 1;
font-weight: 500`, and every size is expressed in `em`, so the whole scale scales linearly with
viewport width. The token system defines per-role sizes (two values each = base vs. responsive
breakpoint), e.g. (the larger `em` value is the wide-screen size):

- **h1** `17.204em` / `7.222em`, line-height `84.6–87.5%`, tracking `-0.08em`
- **h2** `10.753em` / `5em`, line-height `88.9–90%`, tracking `-0.08em`
- **h3** `8.602em` / `3.333em`, line-height `100%`, tracking `-0.08em`
- **h4** `6.452em` / `2.222em`, line-height `100–112.5%`, tracking `-0.072em`
- **h5** `5.376em` / `1.667em`, tracking `-0.064em`
- **h6 / t6** `4.301em` / `1.111em`, tracking `-0.032em`
- body / small (p7, t7, l1) ~ `0.833–0.694em`, tracking `-0.032em`, line-height up to `133%`

Read it as: a huge fluid **display tier** (h1–h3) that fills the viewport, stepping down to a
quiet body tier. Pixel sizes also seen for fixed UI: **40 / 38 / 32 / 24 / 18 / 17 / 15 / 14 / 12 / 10**,
plus a couple of raw `9vw` / `1vw` viewport sizes on the biggest type.

Weights: **500** dominant (display + body Medium, 20×), **700** (Extended Bold, 8×), **400** (6×),
one **300**. No black.

**Tracking is the signature:** large display runs at **`-0.08em`** (very tight, negative),
loosening to `-0.064 / -0.032em` at smaller sizes. Wide letterforms + tight tracking = the
modern-editorial, high-fashion feel.

## Grid & composition

- **No single fixed boxed max-width** — the layout is viewport-fluid (everything in `em` off
  `1vw`), with widths expressed as percentages / `vw` (`96vw`, `82.3vw`, `60%`, `100vw`).
  Constrained widths appear mainly inside set pieces. Behaves like a full-bleed fluid grid, not
  a centered 1140px column.
- **Webflow CSS grids** seen: `1fr 1fr`, `1fr 1fr 1fr`, up to `…1fr ×6/×7/×8/×9` and a `×21`
  micro-grid — i.e. simple 2/3-up content blocks plus fine column grids for diagrams/credits.
- **Spacing tokens** are em-based on a px-named scale: `--_margins---m-4 / m-6 / m-12 / m-24 /
  m-36 / m-60 / m-96 / m-156 / m-216` (each maps to its em equivalent of 4/6/12/24/36/60/96/156/216px).
  Dominant gaps: **m-12, m-6, m-4** inside blocks; **m-36 / m-60** between bigger sections;
  raw `16px` / `20px` for fixed UI.
- **Breakpoints** are stock Webflow: `991px`, `767px`, `479px` (and a `min-width:768px`).
- **Structure** (single long scroll, fixed CTA pinned bottom): hero
  ("We are movement. We are distinction. Your freedom to enjoy life") → About → Our Fleet
  (Gulfstream 650ER) → Advantages → **Global / "Fly anywhere"** — the 3D globe section plotting
  25+ cities (Zurich, Bangkok, Paris, Dubai, Tokyo…) with city-content masks, diagram lines,
  credits + contact blocks → footer. Nav: About / Our Fleet / Advantages / Global.

## Motion

Motion is **JS-driven, not CSS** — the page CSS holds only a few utility transitions; the real
motion is a Webflow + GSAP + Lenis + Barba + globe.gl stack:

- **Lenis 1.2.3** owns the scroll (smooth/inertial), feeding ScrollTrigger.
- **GSAP 3.13** with **SplitText** (headline per-line/word reveals), **ScrollTrigger** (scroll-tied
  beats), and **CustomEase** (a named house curve — defined in bundled JS, not inline).
- **Barba.js** drives **page transitions** (`data-barba="wrapper"/"container"`,
  `data-barba-namespace="home"`) — SPA-style animated route changes between pages.
- **Lottie 5.12** plays vector animations (4 lottie refs).
- **globe.gl** (Three.js / WebGL) renders the rotating destination **globe** — the hero set piece.
- **CSS transitions** observed (the house feel for small moves): `all 1s cubic-bezier(.165,.84,.44,1)`
  and `all .4s cubic-bezier(.165,.84,.44,1)` (easeOutQuart-ish — slow, soft settle), plus
  `1s cubic-bezier(.77,0,.175,1)` (easeInOutQuart) and `1s cubic-bezier(.23,1,.32,1)` (easeOutQuint).
  Durations cluster at **1s** for big moves, **.4 / .3 / .2 / .1s** for small ones. One CSS
  keyframe: `.8s linear infinite spin` (loader).
- The dominant easing — **`cubic-bezier(.165,.84,.44,1)`** (easeOutQuart) — is the house curve:
  quick start, long graceful settle, which matches the "effortless, gliding" aviation mood.
- This maps onto our library's `smooth-scroll-lenis` and `scroll-journey-choreography` patterns,
  plus a **Barba page-transition** layer and a **WebGL globe** set piece we should capture separately.

## Mood

Quiet, warm, aspirational luxury — *freedom and distinction* for private flight, not loud wealth.
The warm-cream-on-brown palette (no saturated accent) reads calm, expensive, and human-warm
rather than cold-black-luxury. The **ultra-wide GT America Expanded display + tight `-0.08em`
tracking** is the high-fashion / editorial signal; massive fluid headlines that fill the
viewport say *spaciousness and confidence*. Copy is short and declarative ("We are movement.
We are distinction."), trust signalled by scale (150+ countries, 5,000+ missions) and the
single interactive **globe** that literally maps "fly anywhere." Motion is slow and gliding
(1s, easeOutQuart) — unhurried, like the product.

## When to use

Reach for this recipe for a **warm, premium, single-accent-free marketing site for a global
luxury service** — private aviation / yachting, a travel or concierge brand, a high-end
destination or membership product. The formula: a **warm-neutral palette** (cream `#fff8ed`
ground + dark warm-brown `#312726` ink + taupe-grey `#7a716e`, *no* saturated accent), a
**light/dark theming inversion** on one shared token map, **ultra-wide display type** (GT
America Expanded or similar Expanded/Extended sans pair) with **very tight negative tracking
(`-0.08em`)** and a **fully fluid em-on-`1vw` scale** so headlines fill any viewport, simple
Webflow-style fluid grids with em spacing tokens, and a **Lenis + GSAP/SplitText/ScrollTrigger +
Barba** motion stack with the **easeOutQuart `cubic-bezier(.165,.84,.44,1)`** house curve.
Optionally anchor the page with **one technical set piece** (here a globe.gl WebGL globe) that
embodies the value prop. Pair with the library's `smooth-scroll-lenis` and
`scroll-journey-choreography`. Do **not** use it where you need brightness, density, multiple
accents, or playfulness — its power is warmth + space + restraint.

> Gap / fidelity flag: the hero/feature is a **WebGL globe (globe.gl / Three.js)**, so exact
> MOTION and COMPOSITION fidelity is **limited from code alone** — the globe's look (texture,
> arc/point styling, rotation speed, camera, how city diagrams animate in), the SplitText
> reveal staging/stagger, the Barba page-transition choreography, and the named GSAP CustomEase
> curve all live in bundled JS and the render loop, not in the CSS. Flag for a later **visual
> capture** to recover the globe shader/feel and the reveal pacing. Also note: the size tokens
> carry two values per role (base + responsive breakpoint); the live rendered px depends on the
> active `1vw` root, which a static read can only approximate.
