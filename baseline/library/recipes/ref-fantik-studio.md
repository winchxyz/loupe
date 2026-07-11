---
recipe: ref-fantik-studio
source: https://fantik.studio/ (reference, observed 2026-06-18)
palette: [black-base, white-text, per-scene jewel accents]
mood: [immersive, cinematic, award-show, technical-craft, dark-canvas, scroll-driven]
stack: [react, react-three-fiber, three.js, glsl, gsap, scrolltrigger, gsap-flip, gsap-observer, lenis, lottie, vite]
tags: [webgl, 3d, scroll-experience, agency-portfolio, dark, motion-heavy, shader, case-study, single-page]
---

# Fantik Studio — reference recipe

Award-winning full-cycle creative studio (Kyiv, 2024). The site is a single-page,
WebGL-driven, scroll-controlled experience: a ~15000px virtual scroll track
(`#scroll-container { height: calc(15000px + 110vh) }`) drives a Three.js / GLSL
scene through case studies. Everything visible is rendered by react-three-fiber +
GSAP into a `#scroll-container` over a black canvas; the static HTML carries only an
`sr-only` SEO block. This is the high-production "immersive interactive agency
portfolio" archetype.

> **WebGL hero — fidelity caveat.** The hero and all case scenes are WebGL/GLSL
> (50 fragment shaders, heavy `displacement`, fbm noise, react-three-fiber). The
> *exact* motion choreography, shader looks, and 3D composition CANNOT be faithfully
> reconstructed from code alone. The palette/type/structure/easing below are observed
> and real; the live scene's feel is a **gap for later visual capture**.

## Palette (hexes + roles)

The DOM/CSS palette is austere monochrome; *color* lives in the WebGL layer and is
**swapped per case study** via theme objects in the JS bundle.

- **Canvas / page base** — `#000000` (`html, body, #root { background-color: #000 }`). Pure black is the default ground.
- **Text / foreground** — `#ffffff` (CSS var `--text-color: #ffffff`). White on black is the default contrast pair.
- **UI greys** — `#666666`, `#404040` (scrollbar / muted UI fills), `#111` (near-black panels).
- **Hairlines** — `rgba(255,255,255,.3)` for thin borders/dividers on the dark ground.

**Per-scene theme set (observed JS theme objects — `{background, star, sphere, button, caseBackground}`).** As you scroll between projects the whole WebGL scene re-themes: background, starfield, the central sphere, and the accent (CTA "button") color all change together. Observed sets:

- `bg #000000` · star `#ffffff` · sphere `#9370DB` (medium purple) · accent `#20B2AA` (light sea green) · caseBg `#040404`
- `bg #2e2e2e` · star `#ffffff` · sphere `#4B9CD3` (carolina blue) · accent `#008B8B` (teal) · caseBg `#000000`
- `bg #e0e0e0` (LIGHT scene) · star `#000000` · sphere `#4169E1` (royal blue) · accent `#228B22` (forest green) · caseBg `#ffffff` · caseTextColor `#000000`
- `bg #000000` · star `#ffffff` · sphere `#9DC183` (sage) · accent `#3CB371` (medium sea green) · caseBg `#000000`
- `bg #112C03` (dark green) · star `#ffffff` · sphere `#3CB371` · accent `#9932CC` (dark orchid) · caseBg `#020502`

Pattern: mostly very dark grounds (with one inverted light `#e0e0e0` scene), one
vivid jewel-tone sphere + one contrasting jewel-tone accent per case — saturated but
never neon-loud, drawn from CSS named-color territory.

## Type (families + scale)

Self-hosted via ImageKit (`ik.imagekit.io/wwtqlkixd/fantik/…`), TTF format:

- **InterDisplay-Regular** (`.ttf`) — primary UI/body face; also set as `--font-family`. Body fallback chain `Inter var, sans-serif`. Weights seen: 300 / 400 / 600 / 700, but 400 dominates.
- **Helvetica** family — `HelveticaLight` (HELVETICA-LIGHT.TTF), `HelveticaRegular` (HELVETICA.TTF), `HelveticaOblique` (HELVETICA-OBLIQUE.TTF) — used for select display/editorial bits.

**Type scale (distinct observed `font-size` values).** Mixed `px` for UI and `vh`
for scene-scaled display type (because type is composited into the full-viewport WebGL stage):

- Display / hero: `180px`, `120px`, `112px`, `64px`, `62px`, `50px` and viewport-relative `5vh`, `4vh`.
- Mid / headings: `42px`, `40px`, `36px`, `34px`, `32px`, `24px`, `22px`, `2.8vh`, `2.5vh`, `2.4vh`.
- Body / UI: `21px` (`--inner-text-font-size`), `18px`, `17px`, `16px`, `2vh`.
- Small / labels: `14px`, `12px`, `1.5vh`.
- Decorative: `--brace-font-size: 24px` (the `.brace` glyphs).

**Treatment.** Tracking is restrained — only one explicit `letter-spacing: .025em`.
`text-transform: uppercase` and `capitalize` appear on labels/nav. Mobile collapses
display type to `2vh` and centers `.main-text` at `≤768px`.

## Grid & composition

- **No CSS grid, no flex column system** — `display: grid` count is **0**. Layout is
  free `position`-based composition over the WebGL stage: `position: relative ×30`,
  `absolute ×20`, `fixed ×15`. Elements are placed/animated, not flowed.
- **Body is locked** — `body { position: fixed; overflow: hidden; overscroll-behavior-y: none }`
  and `html, body, #root { overflow: hidden }`. The page does not native-scroll; a
  virtual scroll track + Lenis drives progress.
- **Content max-widths** for the few flowed text/overlay blocks: `1600px` (widest
  rails), `1280px` (primary content column), `630px` / `375px` (narrow copy measures).
- **Section rhythm** is *scroll-progress*, not vertical stacking: the `15000px+110vh`
  track is the timeline; "sections" are case-study scenes the camera/scroll moves
  through. Case info uses `margin-top: 40px` adjustments at `≤1599px`.
- **Glass + blend UI.** `backdrop-filter: blur(20px)` for glass panels; overlay
  chrome (`.overlay-logo`, `.book-call-button`) uses `mix-blend-mode: difference` so
  it stays legible inverting against any scene color underneath.
- `user-select: none` globally — it reads as an app/experience, not a document.
- Corners are gently rounded where chrome exists: `border-radius` 4 / 6 / 10 / 12 / 16 / 23px, `50%` for the sphere/dots.

## Motion

**Stack (detected in the JS bundle):** React + **react-three-fiber / Three.js**
(241 `THREE` refs, 37 `WebGLRenderer`, 40 `ShaderMaterial`, 50 `gl_FragColor`,
113 `varying vec`, 167 `displacement`) + **GSAP** (301 refs) with **ScrollTrigger**
(140), **Flip** (60) and **Observer** (79) + **Lenis** smooth scroll (31) +
**Lottie** (102). No locomotive / barba / framer-motion. Built with **Vite**.
GSAP+ScrollTrigger scrub the WebGL scene along the virtual scroll; Lenis smooths
wheel input; Flip handles layout-morph transitions between case states.

**CSS-layer transitions/easings (observed, for the DOM chrome over the canvas):**
- Workhorse micro-interaction: `transition: transform .3s ease, background-color .3s ease` (also `.3s ease-in-out` general). `.3s` is the house duration for hovers/buttons.
- Reveals / fades: `transition: opacity 1s ease-in-out, transform 1s ease-in-out`, and a delayed `opacity 1s .5s`.
- Snappy easing: `transition: cubic-bezier(0,0,0,1) .5s` — a sharp ease-out used for assertive entrances.
- Faster taps: `transform .2s`.
- **Keyframes:** `noise 1.2s steps(3) both infinite` (stepped grain/glitch flicker — loader/transition texture), `scroll 120s linear infinite` (slow infinite marquee), `pulse 2s infinite ease-in-out` (breathing indicator).
- Detail: `#oneko` — the classic "oneko" cat-cursor easter egg follows the pointer.

**Feel:** dark, cinematic, scrubbed-to-scroll; quick `.3s` chrome responses against
slow `1s` cinematic reveals; stepped `noise` grain for grit. (Exact scene
choreography is the visual-capture gap.)

## Mood

Award-show, technically-flexing creative studio. The site IS the portfolio piece:
immersive 3D, shader-driven, full-bleed black stage, white type, jewel-tone accents
that re-theme per case (Modus, Trinity, Zenith, Sage, Recur…). Contemporary,
aspirational, "memorable interactive website" energy — positioned for startups,
SaaS, B2B, Web3 / AI clients who want a distinctive brand + immersive site.
Confident restraint in the typography (Inter Display, mostly 400, minimal tracking)
lets the WebGL motion and per-scene color carry the spectacle.

## When to use

Reach for this recipe when the brief is a **high-production agency / studio / product
showcase** that should feel like an *experience*, not a page: a single-page,
scroll-driven, **WebGL/3D hero** on a **black canvas** with **white Inter-Display
type** and **per-section jewel-tone re-theming**. Best when the build budgets for
**react-three-fiber + GSAP ScrollTrigger + Lenis + Lottie** and GLSL shaders, and the
content is a small set of flagship case studies the user scrolls *through*. Use the
chrome conventions directly (`mix-blend-mode: difference` overlay UI, `backdrop-filter:
blur(20px)` glass, `.3s` hover / `1s` reveal timing, locked `position: fixed` body +
virtual scroll track). **Do NOT** reach for this for content/text-heavy, SEO-flow,
or low-motion/perf-constrained builds — it is deliberately a non-scrolling,
non-selectable, GPU-heavy app. For exact hero motion/composition, pair this recipe
with a later visual-capture pass (flagged gap).
