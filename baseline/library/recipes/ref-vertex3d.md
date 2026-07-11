---
recipe: ref-vertex3d
source: https://www.vertex3d.asia/ (reference, observed 2026-06-18)
palette: [dark-navy, off-white, vertex-red, dark-teal]
mood: cinematic, immersive, technical-premium, dark, editorial
stack: [Webflow, GSAP 3.15 (ScrollTrigger, Observer, ScrambleText, Inertia, ScrollTo), Lenis 1.1.20 smooth-scroll, jQuery, WebGL/PlayCanvas, MediaPipe (face_mesh + hands) head/hand tracking]
tags: [webgl, 3d, immersive, digital-twin, studio-portfolio, dark, scroll-driven, case-study, awwwards-fwa, head-tracking]
---

# ref-vertex3d — Immersive WebGL Experience Studio

A dark, cinematic studio site for Vertex3D — an immersive experience studio doing WebGL,
real-time 3D, digital twins, and strategic UX for interactive products and brand experiences
(clients incl. Schlumberger/SLB; "Featured on FWA & Awwwards"; HQ Hong Kong). The whole site is
built around a live WebGL/PlayCanvas canvas with optional **webcam head-tracking and hand-tracking**
controls (MediaPipe) — the page IS the demo. Layout is a sequence of full-bleed case-study panels
over a near-black navy field, with restrained light-weight type and a single red accent.

## Palette
Defined as Webflow CSS variables; brand surface is dark, accent is one warm red.

- `#0f1130` — primary background (`--bkg`), deep blue-black navy. The dominant surface.
- `#0c0f28` — darker background (`--bkg-dark`), used for recessed/overlay areas.
- `#000000` — loading screen + pure-black sections (`--blak`); hero loader is solid black.
- `#16303f` — dark teal, secondary dark surface / panel accent (heavily used: 14+ background uses).
- `#f4f4f6` — off-white, primary heading/text on dark (`--alley...neutral--off-white`).
- `#ffffff` — white (`--white`), body/subtitle text on dark.
- `#de4758` — **vertex-red, the brand accent** (`--vertex-red`), buttons / highlights / CTAs.
- `#cf2d3b` — red hover (`--red-hover`).
- `#777e89` — muted grey for secondary/caption text (`--grey`).
- `#8c7a66` — muted warm tan/bronze (`--patek`), sparing tertiary accent.
- `#222222` — near-black, used as `--black` for dark-on-light contexts.

Roles: near-black navy field → off-white/white type → single red accent for action + emphasis,
with dark teal as the one secondary surface. Greys/tan are sparing. High contrast, low chroma
except the red. (Note: Webflow ships many default hexes like `#fff/#222/#3898ec` in the reset and
the embedded Relume/Alley component libraries — the brand-meaningful set is the variables above.)

## Type
WebFont loader (Google Fonts) requests six families; **Inter** is the working text/UI face,
with a display/editorial second voice available.

- **Inter** (300, 400, 500, 600, 700) — primary UI + heading face. `bodyexperience` is Inter 400.
  Headings run **light (300)** with tight tracking — e.g. panel heading: Inter 38px / weight 300 /
  line-height 1.2 / `letter-spacing: -.04em`.
- **Lato** (100–900) — most-requested weights; secondary body/legacy face across case pages.
- **Oswald** (200–700) — condensed, for uppercase labels / index numbers.
- **Montserrat** (100–900) — alternate sans.
- **Outfit** (300–700) — geometric sans, occasional UI.
- **Playfair Display** (300–700) — serif, the editorial/display contrast voice.
- Webflow icon font for nav/UI glyphs.

Type scale (distinct font-sizes seen): 10, 11, 12, 14, 16, 17, 18, 22, 24, 32, 38, 40, 42, 48,
52, 59, 60, 62, 72 px, plus rem steps (.7 / .8 / 1 / 1.125 / 1.2 / 1.5 / 1.75 / 2 / 2.25 / 2.5 /
2.75 / 3 / 4.2 rem) and fluid hero `8vw` / `16vw`. So: tiny labels ~10–14px, body ~16–18px,
section headings ~32–42px, big display 52–72px and fluid viewport for the largest hero type.

Tracking is intentional and two-mode: **negative on large/light headings** (`-.04em`, `-.02em`)
and **positive + uppercase on small labels** (`.2em`, `2px`, `1px`, `3px`). `text-transform:
uppercase` is the dominant label treatment (25 uses). Index/nav labels read like
"01 // Digital Twin", "[ INSPECT CASE ]", "SCROLL TO DISCOVER" — editorial, mono-ish, bracketed.

## Grid & composition
- Containers: Webflow defaults present (`940px` / `728px`), but the design system is built on
  **`60rem` (~960px) as the dominant max-width** (55 uses) with `80rem` (~1280px) and `48rem`
  (~768px) as the wider/narrower steps. Some full-bleed at `80svw` / `100%` for canvas + media.
- Grid: overwhelmingly **two-column `1fr 1fr`** (68 uses), then single-column `1fr` (39); asymmetric
  splits `1.75fr .5fr`, `1.75fr 1fr`, `1.25fr .25fr` for text-beside-media case rows; 4-up `1fr 1fr
  1fr 1fr` for tile/index grids. So: large 2-col panels, occasional 4-up index, asymmetric
  text/media pairings.
- Rhythm: a **vertical sequence of full-bleed case-study panels** (`.panel`, `.panel-wrapper`,
  `.panel-heading`, `.panel-subtitle`, background video) each pairing a short title + one-line
  subtitle + body + "Case Study / Project Link / Explore All Projects" CTA, over the WebGL field.
- Structure: fixed black **loading screen** (z-index 9999, progress ring + "LOADING 0%") →
  WebGL/PlayCanvas hero section → stacked case panels → trust/validation band ("GLOBAL VALIDATION
  / Trusted by Industry Leaders") → manifesto ("THE Z-AXIS / The Web is FLAT — We fix that") →
  index list → contact (HQ Hong Kong / Director / Legal). Side panel nav + head/hand-tracking FAB.

## Motion
GSAP-driven, scroll-orchestrated, with a WebGL camera at the center.

- **Smooth scroll:** Lenis 1.1.20 (its CSS + min.js are loaded) — momentum scrolling is the base feel.
- **Animation engine:** GSAP 3.15.0 with **ScrollTrigger, Observer, ScrollToPlugin, ScrambleTextPlugin,
  InertiaPlugin**. ScrambleText explains the "decode"-style label reveals; Inertia/Observer drive
  throw/drag and pointer-reactive camera; ScrollTrigger pins/scrubs the panel sequence.
- **WebGL/PlayCanvas hero** is the primary motion — a real-time 3D scene (digital twin) the user
  navigates. Optional **MediaPipe head-tracking** ("turn your head left/right/up/down to control the
  camera") and **hand-tracking** ("hold index + middle fingers, swipe to navigate") — gesture input,
  not just scroll. WebGL capability is feature-detected (`getContext('webgl', { failIfMajor
  PerformanceCaveat })`) with fallbacks.
- **CSS transitions (the small stuff):** short and quick — `color .2s`, `opacity .2s`, `all .2s`,
  `transform .35s`, `box-shadow .2s`; a few longer `all .5s cubic-bezier(.6,.6,0,1)` and `.3s`.
  Signature easing **`cubic-bezier(.6, .6, 0, 1)`** (fast-out / settle). Loader ring spins `.8s
  linear infinite`.
- Feel: cinematic and reactive — heavy real-time 3D + gesture control up top, then disciplined,
  fast (~0.2–0.5s) micro-transitions on UI. Not bouncy; controlled and premium.

> GAP — hero is WebGL/PlayCanvas + webcam gesture tracking. Exact camera motion, scene composition,
> scroll-scrub choreography, and the head/hand-tracking interaction quality CANNOT be read from
> code. Flagged for later visual/motion capture before reusing the hero behavior faithfully.

## Mood
Cinematic, immersive, and technical-premium with editorial restraint. Positioning: "The immersive
Experience Studio — Strategic UX with Real-Time 3D and WebGL." The argument is literally "The Web is
FLAT / We fix that … we believe the next generation of the web is immersive … we don't just show your
product, we let users experience it." Credibility-forward (Fortune-500 / SLB clients, US Patent No.
EP3501007A4, FWA & Awwwards). Tone is confident, depth-obsessed ("THE Z-AXIS"), serving energy-sector
digital twins, luxury real-estate configurators, and complex SaaS UX. Visually: near-black navy
field, light-weight tight type, bracketed uppercase micro-labels, one red accent, and a live 3D scene
doing the talking. The site demonstrates the service rather than describing it.

## When to use
Reach for this recipe when the build is a **dark, cinematic studio / portfolio / single-product site
whose centerpiece is a real-time WebGL/3D scene** — digital-twin or data-visualization showcases,
luxury 3D product/real-estate configurators, immersive agency sites, or any "the demo is the page"
case-study sequence. It fits: deep navy-black surface + off-white light type + one red accent + dark
teal secondary; Inter at weight 300 with tight negative tracking for heads and uppercase
positive-tracked bracketed labels; a vertical stack of full-bleed 2-column case panels over a smooth
(Lenis) scroll; GSAP ScrollTrigger/Observer + ScrambleText for decode-reveals; optional gesture
(head/hand) control for an extra "alive" layer. Do NOT use it for content-dense, bright, or
information-first products — this is a low-text, high-spectacle, credibility-backed showcase aesthetic.
