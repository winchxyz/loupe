---
recipe: ref-lando-norris
source: https://landonorris.com/ (reference, observed 2026-06-19)
palette: [dark-green-ground #282c20, white-ink #f4f4ed, lime-accent #d2ff00, orange-accent #ff6b00, green-light #ebeee0, near-black #111112]
mood: athletic premium motorsport — dark olive-green ground, off-white ink, a single electric chartreuse-lime accent; "redefining limits, fighting for wins"; confident, sporty, expensive
stack: Webflow + Rive (multiple ScrollTrigger-driven state-machine canvases) + WebGL canvas (.gl) + GSAP ScrollTrigger + Lenis smooth scroll + Matter.js physics + jQuery. Built by OFF+BRAND studio. Hero/feature motion = Rive + WebGL, code-opaque.
tags: [motorsport, sport, athlete, personal-brand, premium, dark, olive-green, lime-accent, chartreuse, expanded-display, tight-tracking, variable-font, gsap, scrolltrigger, lenis, rive, webgl, matterjs, physics, webflow, off-brand]
---

# Lando Norris — F1 driver personal brand, dark olive-green ground with one electric-lime accent

Reference distilled from the live HTML + the two Webflow shared CSS bundles
(`lando-offbrand.shared.043b62fef.css` base + `lando-offbrand.shared.4f53262f0.css` themed).
The official site of Lando Norris, 2025 McLaren Formula 1 driver — built by motion studio
**OFF+BRAND** (`*.itsoffbrand.io` JS). The design language is **athletic premium**: a deep
**olive/dark-green** ground (not black), an off-white ink, and a single **electric
chartreuse-lime** accent (`#d2ff00`) that does all the "energy" work. A custom condensed-ish
**Brier Bold** display face carries impact headlines with very tight negative tracking;
**Mona Sans Variable** handles body. The set pieces are **Rive** animation canvases and a
**WebGL** layer, scroll-driven via GSAP ScrollTrigger + Lenis, with **Matter.js** physics.

## Palette (hexes + roles)

Brand tokens live in a flat Webflow `:root` variable map (`--color--*`). The whole site sits
on the **dark green**, not on black — the warmth of the olive is deliberate.

- **Ground / background — `#282c20`** (`--color--dark-green`). The `body` background; the dark
  olive the whole site sits on. Tints `#3b3c38` (`dark-green-tint-1`) and `#535450`
  (`dark-green-tint-2`) layer panels/cards above it.
- **Ink / text — `#f4f4ed`** (`--color--white`, a warm off-white, never pure `#fff`). Default
  `body` color on the dark ground. `#efefe5` (`--color--cream`) is a near-twin used for surfaces.
- **Accent (signature) — `#d2ff00`** (`--color--lime`, electric chartreuse / "tennis-ball"
  yellow-green). The single loud color — CTAs, highlights, active states, the energy of the
  brand. Companions: `#b2c73a` (`--color--lime-off`, a muted/desaturated lime for hovers or
  secondary marks) and `#d2ff0000` (`--color--lime-zero`, the same lime at 0 alpha — used as a
  gradient/fade stop).
- **Secondary accent — `#ff6b00`** (`--color--orange`). A warm orange used sparingly as a second
  pop (also `#ff4c24` appears in the base CSS). Lime is primary; orange is the supporting hit.
- **Light/neutral surfaces** (for inverted or "card" sections that flip light): `#ebeee0`
  (`--color--green-light` / `--color--grey-1`, a green-tinted off-white), `#dde1d2`
  (`green-off-white-1`), `#c8cbbd` (`--color--grey-2`), `#b4b8a5` (`green-off-white-2`),
  `#b9bbad` (`--color--grey-on-track`, the muted grey for secondary/disabled text). Note every
  "grey" here is **green-tinted**, not neutral — the olive bias runs through the whole ramp.
- **Near-black — `#111112`** (`--color--black`) — for the deepest shadows/overlays, distinct
  from the green ground.
- Webflow platform defaults (`#3898ec` / `#0082f3` blue, `#5d6c7b`/`#758696` slate, greys
  `#ddd/#ccc/#222/#333`) exist in the base stylesheet but are framework boilerplate, unused by
  the design.

Spend: ~70% dark-green ground / ~20% off-white ink / ~10% lime (with orange as a rare second
accent). The composition is **one dark warm-green field + off-white type + one electric lime** —
high-contrast, sporty, and disciplined about its single accent.

## Type (families + scale)

Two self-hosted custom cuts (both `.woff2`, `font-display: swap`):

- **Display / impact — `Brier`** (`Brier, Arial, sans-serif`; loaded as `Brier-Bold.woff2`,
  **weight 700 only**). Carries the hero, impact headlines, and big titles — HTML class hooks
  `text-impact-*-brier`, `text-title-lg/reg-brier`, `font-brier`. This is the brand voice face.
- **Body / UI — `Mona Sans Variable`** (`Mona Sans Variable, Arial, sans-serif`; variable axes
  `wght 200–900` and width `wdth`). Set on `body`; body text uses
  `font-variation-settings: "wght" 500, "wdth" 100`. Used at multiple weights for body, labels,
  nav, captions. (Mona Sans is GitHub's open variable family — pairs an open workhorse body with
  the custom Brier display.)
- `webflow-icons` is an embedded base64 icon font (platform), not part of the type voice.

**Type scale** is defined as role tokens in `:root` (mix of rem + a fluid clamp on the biggest
size). Observed:

- **impact** `--text--impact: 7.9375rem` (also raw `8.25 / 7.7 / 7.6 / 7rem` impact sizes, and a
  fluid `max(4em, 8vw)` on the very largest type) — the viewport-filling hero tier.
- **h1** `--text--h1: 4rem`
- **h2** `--text--h2: 4.5rem`  (h2 is set *larger* than h1 here — impact/h2 are the big display tier)
- **h3** `--text--h3: 2rem`
- **h4** `--text--h4: 1.5rem`
- **h5** `--text--h5: 1.2rem`
- **h6** `--text--h6: 1rem`
- **med** `--text--med: 2.76rem`, **reg** `--text--reg: 1.6rem` — sub-display / lead body.
- **buttons:** `--text--btn-primary: 1rem`, `--text--btn-nav: 1.25rem` (→ `1.7rem` at large),
  `--text--btn-footer: 1.875rem`, `--text--btn-tertiary: .875px`.
- **eyebrow** `--text--eyebrow: .578125rem` — tiny uppercase labels (text-transform: uppercase
  appears 23×, the eyebrow/label convention).
- Fixed UI px also seen: **24 / 18 / 14 px**.

Weights: **700** dominant (Brier Bold display, 8×), plus body **500** (Mona default), **400**,
**600/800**, one **300**, and the **200 900** variable range. Brier is bold-only; Mona carries
all the lighter/variable weight.

**Tracking is a signature:** impact/display runs very tight and negative — `-.25rem`, `-.225rem`,
`-.21875rem`, `-.1875rem`, `-.125rem` on the big type — loosening through `-.1 / -.0625 / -.0125rem`
to small positive `.05rem` / `.05em` on uppercase eyebrows. Tight negative display tracking +
the impact face = the confident, sporty, modern-editorial feel. Line-heights run very tight on
display (`.886`, `.97`, `1`) and open to `1.25 / 1.3` for body.

## Grid & composition

- **Container** widths cluster around **78rem / 80rem** main columns (plus a `96rem` outer and a
  `var(--fluid-container)`); `--padding--container: 1.25rem` (→ `1rem` on small) and a base
  `--gap: 1.25rem`.
- **Webflow CSS grids** are mostly **2-up (`1fr 1fr`, 19×)** and **4-up (`1fr 1fr 1fr 1fr`, 7×)**,
  with several **asymmetric editorial tracks** using `minmax(0, …fr)` — e.g.
  `minmax(0,.4fr) minmax(0,2fr) minmax(0,1fr) minmax(0,.6fr)` and 5-column
  `minmax(0,.5fr) minmax(0,1fr) minmax(0,2fr) minmax(0,1fr) minmax(0,1fr)`, plus a
  percentage micro-grid `11.775% 35.325% 23.55% 1fr 1fr`. So: simple 2/4-up content blocks
  alongside deliberately lopsided multi-column "data/stat" rows.
- **Spacing tokens** (rem ramp): `--padding--mini 1rem / --padding--small 2rem / --padding--med 3rem /
  --padding--large 4rem / --padding--xlarge 5rem`; `--gap--med 2rem`.
- **Radii** are large and soft: `--radius--small: 1rem`, `--radius--med: 3rem`,
  `--radius--large: 6.25rem` (pill). Big rounded panels are part of the look.
- **Layout vars hint at set-piece geometry:** `--grid-col: 25.4375rem`, `--grid-spacer: 31.51vh`,
  `--oval-side-offset: 3rem`, `--poduim-offset: -17.5rem` (a "podium" element), `--max-vh / --vh`
  for full-viewport sections.
- **Breakpoints** are stock Webflow: `991px`, `767px`, `479px` (plus `min-width:768px`).
- **Structure** (single long scroll personal-brand hub): hero (Rive + WebGL, tagline
  *"Redefining limits, fighting for wins…"*) → **On Track** (race results, career stats,
  trackside photography) → **Off Track** (campaigns/branded content) → **Partnerships** (Ralph
  Lauren, PlayStation, Google, Hilton, Uber…) → **Helmet Hall of Fame** (2019–2025 designs) →
  **Store** (championship merch) → social (TikTok / Instagram / YouTube / Twitch) → footer.

## Motion

Motion is **JS- and canvas-driven, not CSS** — the page CSS holds only utility transitions; the
real motion is a Rive + WebGL + GSAP + Lenis + Matter.js stack (studio: OFF+BRAND):

- **Rive** is the centerpiece: multiple `<canvas data-rive-*>` (e.g. `data-rive-ln4`,
  `data-rive-mob-landscape`, `data-rive-primary`) driven by **state machines**
  (`data-rive-state-machine`, `data-rive-artboard`, `data-rive-file`) and wired to scroll
  (`data-rive-scrolltrigger-start/end/target`). 16+ rive files referenced — interactive vector
  animations are the brand's hero/section set pieces.
- **WebGL** — a `<canvas class="gl">` layer (custom shader/3D), separate from Rive.
- **GSAP ScrollTrigger** (22 references) ties beats to scroll position and drives the Rive
  state machines.
- **Lenis** (12 references) owns smooth/inertial scroll, feeding ScrollTrigger.
- **Matter.js** — a 2D physics engine present (likely a tactile, throw/collide interaction — e.g.
  draggable merch/helmet objects or a physics playground section).
- **CSS transitions** (the small-move house feel): `all .3s`, plus targeted
  `background-color .1s, color .1s`; durations `.6s / .2s`; easing
  **`cubic-bezier(.19, 1, .22, 1)`** (expo-out — fast start, long soft settle) alongside `ease`
  and `linear`. One keyframe: `spin` (loader). The dominant easing intent is **expo-out**:
  snappy, athletic, then a smooth glide-to-rest.
- Maps onto the library's `smooth-scroll-lenis` and `scroll-journey-choreography`; the **Rive
  state-machine + ScrollTrigger** pattern and the **Matter.js physics** interaction are set
  pieces to capture separately (we have no Rive recipe yet — gap).

## Mood

Athletic, premium, and personable — *competitive intensity* with a human, fan-facing warmth.
The dark **olive-green** ground (warmer and more distinctive than corporate black) plus the
single **electric chartreuse-lime** accent reads as fast, modern, and energetic without being
garish — disciplined to *one* loud color doing all the work, orange as a rare second hit. The
**Brier impact face with very tight negative tracking** at viewport-filling sizes is the
confident, sporty editorial signal; copy is short and declarative
(*"It doesn't matter where you start, it's how you progress from there."*). Big rounded panels
(`6.25rem` pills), green-tinted neutrals, and a relentless motion layer (Rive state machines,
WebGL, physics, smooth Lenis scroll) make it feel expensive and alive — a sponsor-grade athlete
hub that balances premium sophistication with track-side dynamism.

## When to use

Reach for this recipe for a **premium personal-brand / athlete / sports / motorsport site** that
needs energy and motion without looking cheap — a driver, team, performance brand, or any
high-profile individual with sponsors and merch. The formula: a **dark warm-green ground**
(`#282c20`, not black) + **off-white warm ink** (`#f4f4ed`) + **one electric accent**
(chartreuse-lime `#d2ff00`, with `#ff6b00` orange as a rare second pop) and a fully
**green-tinted neutral ramp**; a **custom impact display face** (Brier-like, bold-only) for
viewport-filling headlines with **very tight negative tracking** paired with a **variable
workhorse body** (Mona Sans Variable); ~78rem containers with simple **2/4-up grids plus
deliberately asymmetric `minmax` "stat" rows**; **large soft radii** (up to `6.25rem` pills);
and a heavy **scroll-choreographed motion layer** — **Lenis + GSAP ScrollTrigger** with an
**expo-out `cubic-bezier(.19,1,.22,1)`** house curve, optionally **Rive** state-machine canvases
and a **Matter.js** physics interaction as set pieces. Pair with the library's
`smooth-scroll-lenis` and `scroll-journey-choreography`. Do **not** use it for quiet, minimal,
or text-only content, or where you can't budget for the motion/canvas work — most of its
identity lives in the animation layer, not the static layout.

> Gap / fidelity flag: the hero and key sections are **Rive animation canvases + a WebGL layer**,
> so exact MOTION and COMPOSITION fidelity is **limited from code alone**. The Rive artboard
> contents, state-machine logic, scroll-mapped beats, the WebGL shader, the Matter.js physics
> interaction, and the GSAP reveal staging all live in `.riv` files and bundled JS
> (`*.itsoffbrand.io`), not in the CSS — a static read cannot recover their look or pacing. Flag
> for a later **visual capture** to recover the animation feel. Also note: the `:root` token map
> gives role sizes (some with a base + large-screen value) but the live rendered px depends on
> the active breakpoint; and **Rive is not yet covered by any library technique** — capturing the
> Rive-state-machine + ScrollTrigger pattern is a recommended library gap to fill.
