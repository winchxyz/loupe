---
recipe: ref-sanrita
source: https://sanrita.ca/en (reference, observed 2026-06-18)
palette: [icy-blue #dde2e4, forest-green #2d3329, deep-green #161b13, adventure-yellow #e2ffcc, terrain-grey #84907f]
mood: [exploratory, cartographic, outdoorsy, editorial, playful-premium, agency-studio]
stack: [Next.js (App Router, RSC), Tailwind v4 / lightningcss, GSAP (@gsap/react useGSAP), Lenis smooth-scroll, DatoCMS, bilingual EN/FR]
tags: [creative-studio, portfolio, agency, map-metaphor, expedition-theme, scroll-reveal, uppercase-display, preloader, no-webgl, light-mode]
---

# ref-sanrita — Atelier San Rita / "Into The Wild" creative studio

A full-service creative studio (web design + full-stack dev + branding + content), branded as an
expedition into the wilderness. The whole site is an extended **map / trail metaphor**: nav items are
Map / Projects / About / Playground / Contact, projects are "hot spots", routes are "roads / trails /
fishing spots / viewpoints", and a "Terraforming activated" preloader narrates world-building steps
(Atmosphere deployment, Geosystem creation, Vegetal matter generation, Rivers and lake deployed,
Known trails emerging...). Hero tagline (verbatim): *"A creative studio / where brands and / stories
move off-trails."* Light, airy, confident — not dark/techy. Established 2024.

## Palette
A tight 5-token named system (Tailwind v4 `@theme`-style custom properties). Light mode only.

- **Background / surface — `--color-icy-blue` `#dde2e4`** — page background (`body { background-color }`),
  the dominant field. Cool, near-white desaturated blue-grey (also written `hsla(197,11%,88%,1)`).
- **Foreground / display text — `--color-forest-green` `#2d3329`** — primary headline + body ink on the
  icy field. Warm near-black green.
- **Deep ink — `--color-deep-green` `#161b13`** — darkest tone; deep backgrounds / max-contrast text.
- **Accent — `--color-adventure-yellow` `#e2ffcc`** — the signature pop: a pale chartreuse/lime. Used as
  headline fill on dark blocks, highlight, and inverted-section background. NOT a saturated yellow —
  it's a soft highlighter green-yellow.
- **Muted / secondary — `--color-terrain-grey` `#84907f`** — sage grey-green for secondary text, labels,
  borders, captions.
- `#fff` appears for pure-white details; gradients are `to top` from `--color-forest-green` to transparent
  (soft fades, not decorative color gradients).

Roles in code: `--color-primary` = body bg (icy-blue), `--color-secondary` = body text. Sections invert —
green block with adventure-yellow type, or icy block with forest-green type.

## Type
Two custom web-fonts loaded via `next/font` (self-hosted `.woff2`), no Google Fonts.

- **Display — `F37stout` (Black, compressed)** — `F37stout_black_compressed_webfont`. Heavy condensed
  grotesque used for all big headlines (`.text-h1-like`, `.font-f37stout`). **Always UPPERCASE**
  (`text-transform:uppercase`), very tight leading.
- **Body / UI / mono — Centra Mono** — `centramono_book` + `centramono_bold` (book + bold weights),
  exposed as `--next-font-mono`. This is the default `body` family — a monospace sets the whole
  utilitarian, instrument-panel, "field-notes/coordinates" tone. `font-weight:700` for bold.
- Base: `body { font-size:1rem; line-height:1.2; letter-spacing:-.01em }`.

Scale (observed):
- **Display H1** (`.text-h1-like`): fluid `clamp(2.5rem, (2.5rem*100vw)/799.98px, 3.5rem)`, **line-height
  .9**, F37stout. Other heading steps: `clamp(2rem→2.5rem)`, `clamp(2.5rem→3rem)`.
- **Oversized hero numerals / map labels**: `clamp(100px, 20vw, 240px)`, also raw `25vw` / `45.6vw` —
  giant viewport-scaled type for the map/landmark moments.
- **Body**: `1rem` (16px). **Small/mono UI**: `.75rem`, `.625rem` (10px), `.5rem`, plus `font-size:10px`.
- **Tracking**: tight `-.01em` for display/body; **wide `.3em`** reserved for small uppercase mono labels
  (the spaced-out "EST.2024 / LATEST HOT SPOT ADDED" caption look). `line-height:.9`/`.8` on display.

## Grid & composition
- **Mobile breakpoint** `--breakpoint-mobile: 799.98px` (`.desktop-only` hidden below). Single-axis
  responsive; type is fluid via clamp tied to that breakpoint, so layout scales rather than re-flows hard.
- **Aside / map layout vars** (the signature): `--scroll-aside-width:350px`, `--scroll-aside-padding-40:40px`,
  `--scroll-aside-padding-55:55px`, `--scroll-aside:0%`. The home is a **fixed side-rail + central map**
  composition: `grid-template-columns: [pad-40] [aside 350px] 1fr [aside 350px] [pad-40]` — a centered
  stage flanked by two narrow rails ("The trails of San Rita" nav lives in the aside). Headings use
  `clip-path: inset(...)` driven by `--scroll-aside-width` to reveal/wipe across the rail boundary.
- **Grids**: 12-col base (`repeat(12,minmax(0,1fr))`) plus pragmatic `repeat(4|3|2|1, …)`, `subgrid`,
  and `auto-fit minmax(400px|250px,1fr)` card grids. Utility columns like `270px 1fr`, `1fr auto 1fr`,
  `auto 1fr auto` for header/footer bars.
- **Containers**: content widths via `clamp(800px,80vw,968px)`; percentage maxes (`75% / 66.6% / 50% /
  33.3%`) and many small fixed image maxes (150–320px) — a deliberately modular, card-ish catalogue feel.
- **Rhythm / spacing**: rem scale `.3125 / .625 / .75 / 1 / 1.25 / 1.5 / 1.875 / 2.5 / 3.125 rem`; common
  `gap:.75rem` & `1rem`, block padding `.625–1rem`, larger section pads `2.5rem` / `3.125rem`, and a
  dramatic `gap:300px` for big map spacing. `border-radius` is mostly **0/sharp**, with `20px` for the
  occasional soft card and a full-pill (`3.4e38px`) for round controls. `position:fixed` for the rails/HUD;
  `overflow-x:clip`, `overscroll-behavior:none`, hidden scrollbar (`scrollbar-width:none`).

## Motion
**Driver: GSAP** (`@gsap/react` `useGSAP`, `registerPlugin`) for orchestration + **Lenis** for
smooth/inertial scrolling (`lerp`-based, custom RAF loop). **No Three.js / WebGL / canvas** — this is a
DOM + CSS + GSAP site (verified: no `THREE`, `WebGLRenderer`, or `getContext('webgl')` in the bundles).
A `TransitionWrapper` + transition-mask keyframes drive page-to-page route transitions (barba-like, but
hand-rolled in GSAP). An `Observer`-style mechanism appears in the interaction chunks.

- **Easings (CSS)**: `cubic-bezier(0,.55,.45,1)` (smooth ease-out) and `cubic-bezier(0,.57,.46,2)`
  (overshoot/bounce — note the >1 control point) plus `ease-in-out` / `linear`.
- **Durations**: full ladder `.15s .2s .25s .3s .35s .5s .6s .8s 1s` (Tailwind `--tw-duration` tokens);
  most micro-interactions `.15–.35s`, set-pieces `.5–1s`.
- **Named keyframes (CSS)**: `reveal-scroll-content-{opacity,x,y}` (scroll-tied content reveals,
  `animation: linear both …` — i.e. scrubbed by scroll progress), `main-transition-mask-in` +
  `main-transition-scale-in` (route transition), `next-trail-arrow` / `-mirror` (.5s ease-in-out arrow
  trails), `spin` (8s linear infinite), `flicker` (.7s infinite), `pulse`, `shake`.
- **Backdrop blur** `blur(5px)` on a couple of HUD/overlay surfaces; `prefers-reduced-motion` not
  obviously branched in CSS (verify visually).
- **Loader**: scripted "Terraforming" preloader that lists world-building steps then a "Scroll to enter
  our world" prompt — a narrative gate before the map.

> Gap — code-only fidelity limit: scroll-scrubbed reveals, the Lenis feel, route-transition mask choreography,
> and the map's hover/drag interactions are GSAP-runtime + scroll-driven. Exact timing curves, the map
> interaction model, and the loader sequencing need **visual/motion capture** to reproduce faithfully; the
> values above are the static CSS tokens, not the full timeline.

## Mood
Cartographic adventure-journal meets premium agency. The metaphor is total and committed:
wilderness/expedition language ("off-trails", "seekers", "Republic of collaborative minds", "Purveyors of
hand-crafted digital design Refuge", "Gold idEAs"), a literal interactive map as the homepage, monospace
"field instrument" typography, and a soft icy-blue + forest-green + highlighter-lime palette that reads
outdoorsy and calm rather than corporate. Confident, witty, world-building; light and spacious, sharp-edged,
EN/FR bilingual. Restraint in color (5 tokens) carries the polish; the personality is in the copy + map
conceit + heavy condensed uppercase display.

## When to use
Reach for this recipe for a **creative-studio / agency / portfolio** site that wants a strong unifying
**concept/metaphor** (map, journey, world, archive) rather than a generic grid of work. Fits when you want:
a **light, calm, desaturated palette with one soft accent**; **heavy condensed uppercase display + monospace
body** for an editorial-instrument feel; **GSAP + Lenis scroll-reveal motion without WebGL** (achievable, DOM-
only, performant); a **fixed side-rail + central stage** composition; and **playful, committed copy** that turns
navigation into part of the story. Good template for brand studios, design portfolios, and
"about us as a place" narrative sites. Skip it for dense dashboards, dark-tech/SaaS, or anything needing a
neutral corporate tone — its whole value is the committed wilderness/map conceit.
