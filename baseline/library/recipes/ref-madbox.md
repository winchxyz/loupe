---
recipe: ref-madbox
source: https://madbox.io/ (reference, observed 2026-06-18)
palette: [white, near-black, pink-to-yellow gradient, multi-hue candy accents]
mood: [playful, gamified, energetic, friendly-bold, candy-bright]
stack: [Nuxt.js, Three.js (WebGL), Barba.js, GSAP, Work Sans + Changa, CSS named-line 12-col grid]
tags: [reference, gaming, mobile-games, playful, webgl-hero, gradient, three-js, barba, light-theme, recruiting]
---

# ref-madbox — Madbox (mobile-game studio, Paris/Barcelona)

A bright, playful studio/portfolio site for a casual mobile-game publisher ("+500M downloads,
15 games live"). Light-themed, candy-colored gradients, a confident display face, a strict
12-column named-line CSS grid, and a Three.js / WebGL hero plus Barba.js page transitions on a
WebGL `transitionCanvas`. The whole tone is "fun, accessible, youthful" — pitched equally at
players and at recruits ("Casual people who achieve mad things").

## Palette (hexes + roles)

Light base, ink-black text, and a deliberately *multi-hue candy* accent system built around
gradients rather than flat fills.

- **Background / surface:** `#ffffff` (`--white`) — dominant page background; cards on white.
- **Ink / text:** `#000000` (`--black`) — primary text and on-light foreground.
- **Signature accent gradient (primary):** `linear-gradient(90deg, #ff3891, #ffbf04)`
  — hot pink → warm yellow. This is the brand's hero gradient (most frequent in CSS, used on
  logo fill via `url(#logoGradient)`, buttons, highlights). `--gradient-orientation` defaults
  let it be re-angled per element.
- **Primary flat accent:** `#ff3891` (hot pink) — buttons / `background-color` accent.
- **Secondary accent:** `#ffbf04` (amber/yellow).
- **Candy accent set (used in alternate gradients & section color-coding):**
  `#ad00ff` (purple), `#00c2ff` (cyan), `#4ff29f` (mint), `#38b7ff` (sky), `#ff5499`,
  `#ff49d7`, `#be65ff`, `#8e74ff`, `#ff7324` (orange), `#22d2ff`, `#03c4fc`.
- **Named secondary gradients (observed pairs):**
  `#ad00ff → #38b7ff`, `#00c2ff → #4ff29f`, `#ffbf04 → #ff6069`, `#ff5499 → #8e74ff`,
  `#ff49d7 → #ff7324` — each section/value can carry its own two-stop gradient.
- **Neutrals:** `#b7b7b7` (`--light-grey`), `#828282`, `#474747` — secondary/muted text.
- **Soft tints / depth:** `rgba(0,0,0,.06)` and `rgba(0,0,0,.15)` shadows; subtle colored
  glows like `rgba(58,230,186,.06)`, `rgba(3,196,252,.1)`, `rgba(255,104,19,.1)`;
  a near-white warm wash `linear-gradient(#fff1eb, #fff)`.

Decision: white canvas + black type is the constant; *color lives entirely in the gradients
and per-section candy hues*, never in the base surfaces.

## Type (families + scale)

Two families, loaded via Google Fonts (`Work Sans` ital + variable 100..900; `Changa` 800):

- **Display:** `Changa, Arial, sans-serif` at weight **800** — chunky, rounded, friendly
  headline face used for the big statements.
- **Body / UI / most headings:** `"WorkSans", Arial, sans-serif` — full variable weight range.
- **Weights in use:** 400, 500, 600 (most common UI), 700, 800 (display/emphasis).
- **Letter-spacing:** tight on big type — `-0.01em` to `-0.06em` (heading vars
  `--letter-spacing: -0.01em / -0.03em`); display goes as tight as `-.06em` / `-.04em`.
- **Line-height:** display set very tight (`93%`, `90%`, `100%`, `.98`, `1.1`); body/long-form
  loose (`140%`, `150%`).

**Type scale (rem, observed distinct `font-size` values):**
8.75 · 6.25 · 5.625 · 4.375 · 3.75 · 3.625 · 3.375 · 3.125 · 2.75 · 2.625 · 2.5 · 2.375 ·
1.875 · 1.75 · 1.5 · 1.375 · 1.25 · 1.125 (body default, most common) · 1.0625 · 1 · 0.9375 ·
0.875. Root is `16px` / `100%`.
Decision: a wide dramatic scale — hero around **8.75rem (~140px)** down to a **1.125rem** body —
with the display face carrying the largest steps.

## Grid & composition

A proper named-line CSS grid system, not ad-hoc flex:

- **Container max-width:** `--max-width: 90rem` (1440px) desktop; clamps to `1680px` and `100%`
  at the extremes.
- **Columns:** `--number-of-columns: 12` (drops to `6` on smaller layouts). Template uses named
  lines: `grid-template-columns: [wrapper-start] <margin> [start] repeat(12, 1fr) [end] <margin> [wrapper-end]`,
  so children place with `grid-column: start / end` (or `3 / span 4`, etc.).
- **Gutter / margin tokens:** `--gutter-size` 20–40px; `--grid-margin-size` responsive
  (16px mobile → 80px → `calc(50vw - max-width/2)` to center the rail); content blocks often use
  `--content-column-number: 5`.
- **Header:** `--header-height` steps `3.125rem → 3.75rem → 5rem → 6.75rem` across breakpoints.
- **Section rhythm:** generous vertical spacing in rem (e.g. card margins `4.6875rem`,
  bottom gaps `10.625rem`) — big airy bands between sections.
- **Cards / shapes:** large friendly radii — `border-radius: 24px`, `.9375rem`, and very round
  pill/blob values (`8.5rem`, `5.9375rem`, `5.1875rem`); `50%` for circular bits. Buttons are
  full-pill (`border-radius: var(--button-size)`).
- **Layout primitives:** mostly `display:flex` (32×) with grid (5×) reserved for the page-level
  12-col scaffold and featured-game / numbers / community cards (often `-reversed` variants).
- **Breakpoints (min-width):** 480, 800, 959 (primary desktop switch), 1023, 1199, 1280, 1439,
  1919px.

Homepage section order (from content): hero / "Madbox Island" interactive 3D concept → numbers
("+500M Downloads", "15 games live") → featured games (Stickman Hook, Pocket Champs) →
culture/hiring → community (newsletter + Discord).

## Motion

Stack (from `_nuxt` bundles): **Three.js** (`WebGLRenderer` ×81, `PerspectiveCamera`, `THREE.` ×540 —
heavy WebGL), **Barba.js** for SPA page transitions (drives `<canvas class="a-transitionCanvas">`
WebGL wipe), and **GSAP** for tweening. Nuxt SSR app. No Lenis / Locomotive smooth-scroll lib
found in the bundles.

CSS transition language (this is the house easing — reuse it for hand-built parts):

- **Signature ease:** `cubic-bezier(.215,.61,.355,1)` (easeOutCubic-ish) — dominates, ×60.
  Used as `all .4s`, `.5s`, `.3s`, `.6s`, plus `transform`/`opacity` variants.
- **Expo-out ease:** `cubic-bezier(.19,1,.22,1)` (×12) — for snappier transform reveals.
- **Overshoot / back-out:** `cubic-bezier(.175,.885,.32,1.275)` (×12) — playful bounce on
  transforms (`transform .5s`/`.8s`), fitting the toy aesthetic.
- **Ease-in (exits):** `cubic-bezier(.55,.055,.675,.19)` and a strong back-in
  `cubic-bezier(.6,-.28,.735,.045)` for accelerating-away motion.
- **Durations:** mostly **.3s–.6s**, occasionally `.7s`/`.8s`; staggers via `--delay: 0.1s` and
  `transition-delay` tokens; some speeds multiplier-scaled (`calc(.2s * var(--multiplier))`).

Decision: fast, bouncy, candy-toy motion — quick easeOutCubic for most state changes, a back-out
overshoot for the hero/interactive toys, all over a Three.js hero and Barba canvas page wipes.

> **WebGL/Three.js hero — fidelity gap.** The hero ("Madbox Island", 4 islands) and the page
> transitions run in WebGL/Three.js on a canvas. Exact camera motion, the island/3D composition,
> scroll-driven choreography, and the transition wipe **cannot be read faithfully from CSS/JS
> alone** — flagged for later visual capture. Colors, type, grid, easings and the CSS-driven UI
> motion above ARE observed from real code.

## Mood

Playful, gamified, candy-bright, confident. A casual mobile-game studio that wants to read as
*fun and ambitious at once* — "Give smile to millions of players", "Together, we light up the
world with fun!", "Casual people who achieve mad things". Visually: white space + ink type kept
clean and legible, with all the energy concentrated in saturated pink→yellow (and per-section)
gradients, chunky Changa display type, big round blob/pill shapes, and bouncy WebGL toys. Targets
two audiences simultaneously — players and prospective hires (recruiting/culture is a first-class
section).

## When to use

Reach for this recipe when building a **playful, brand-led studio / product / game site on a
light theme** that needs personality without sacrificing legibility:

- mobile-game or casual-product studios, creative agencies, youthful consumer brands;
- "fun but credible" recruiting / culture pages where downloads/stats are a hero moment;
- sites that want a **gradient-driven candy palette** over a clean white base (color in
  gradients, never in surfaces);
- builds that can carry a **WebGL/Three.js hero + Barba page transitions + GSAP**, with a strict
  **12-column named-line CSS grid**, chunky display type (Changa-like) over a humanist sans
  (Work Sans), full-pill buttons, big radii, and **bouncy easeOutCubic / back-out** motion.

Not for: somber/luxury/editorial, dense data UI, or minimalist monochrome work — the whole point
here is saturated, friendly energy.
