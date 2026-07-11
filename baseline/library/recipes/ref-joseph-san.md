---
recipe: ref-joseph-san
source: https://joseph-san.com/ (reference, observed 2026-06-18)
palette: [dark teal-black, white, amber]
mood: [immersive, cinematic, dark, technical, reverent]
stack: [three.js, webgl, gsap, scrolltrigger, tailwind-v4, vite]
tags: [webgl-hero, scroll-narrative, portfolio, creative-developer, custom-cursor, dark, fullscreen-canvas, audio-reactive]
---

# Joseph San — immersive WebGL scroll-narrative portfolio

Single-page WebGL portfolio for Joseph Santamaria, a "Creative Software Engineer & UI/UX
Designer" based in Ecuador (Creative Developer at OFF+BRAND). The whole page is a fullscreen
Three.js stage that the visitor scrolls through as a sequence of "scenes" (`#scene-0-ui`,
`.stage`), opening with a 3D loader ("Loading 3D experience") and closing on a personal,
faith-themed narrative coda (John 3:16 / Romans 3:23). HTML/CSS carry only the thin UI overlay;
the experience itself lives in the canvas. Observed from real HTML + CSS + the JS bundle.

## Palette (hexes + roles)

- `#07161a` — **background** / loader fill. Near-black desaturated teal (deep ink). The signature
  base; set on `#fish-loader` and `.bg-[#07161a]`.
- `#ffffff` (`#fff`) — **foreground / text.** `body { color:#fff }`. Almost all type is white.
- `#f99c00` — **accent** (Tailwind `--color-amber-500`, defined in wide-gamut as
  `lab(72.7% 31.9 97.9)`). Warm amber; used sparingly as the single highlight against the teal-black.
- White-alpha tints for hairlines, dim UI and overlays: `#ffffff1a` (~10%), `#ffffff4d` (~30%),
  `#ffffff80` (~50%).
- `#d0d0d0` — light gray (secondary/muted text or UI lines).
- `#00000040`, `#01010100`, `#0000` — black/transparent shadows and fades.

Roles: a two-tone dark system (teal-black ground + white ink) with exactly one warm accent
(amber). High contrast, near-monochrome; color is reserved, not decorative.

## Type (families + scale)

Two self-hosted custom faces, no Google Fonts:

- **PP Neue Montreal** (Medium, `/fonts/ppneuemontreal-medium.otf`) — primary display/sans
  (`.f-pnm`, `font-family:PPNeueMontreal`). Carries the headlines.
- **Modern Era Mono** (Regular 400, `/fonts/modern-era-mono-regular.woff2`, `font-display:swap`)
  — monospaced labels/metadata (`.f-mem`, `font-family:ModernEraMono`). Used for small uppercase
  tags like the role/credit lines.

Fluid sizing system (the distinctive part): everything is in `em`, scaled off a single CSS root
size that tracks viewport width.
- `--size-container: clamp(992px, 100vw, 1920px)` (min 992, max 1920, ideal 1440).
- `--size-font: calc(var(--size-container) / (1440 / 16))` → `body { font-size: var(--size-font) }`.
  So the whole type scale breathes with the viewport between the clamp bounds.
- Headings then use em multiples: `h1` hero `text-[2em]` (mobile `2.25em`), secondary headings
  `1em`/`1.4em`, mono tags `text-[0.6em]`–`0.8em`. Observed em steps across the page:
  `.6 .7 .8 1 1.1 1.2 1.25 1.3 1.4 1.5 1.6 2 2.1 2.25`.
- Weights present: 400 (mono), 500 (PP Neue Montreal Medium). Tailwind tokens for
  medium/semibold/bold exist but the look is light-to-medium, not heavy.
- Tracking: `tracking-widest` (`.1em`) and `tracking-wider` (`.05em`) on the uppercase mono
  labels; headings run `leading-none` (tight). Liberal `uppercase` on labels.

## Grid & composition

- **Fullscreen fixed canvas, not a scrolling document in the usual sense.**
  `body { width:100vw; height:100svh; overflow:hidden; overscroll-behavior:none; cursor:none;
  user-select:none }`. The page hides the OS cursor (custom WebGL/DOM cursor) and locks the
  viewport; "scroll" drives scene progression rather than moving a tall page.
- Layout is a `<main>` → `.stage`, with per-scene UI overlays absolutely positioned over the
  canvas (`header#scene-0-ui.absolute.inset-0`, `.absolute.bottom-20`, `.absolute.bottom-6`).
  Content is pinned to edges (bottom-left hero block, bottom-right meta) — typical WebGL-overlay
  composition, not a column grid.
- Tailwind v4 utility flexbox throughout (`flex`, `justify-between`, `items-center`, `gap-3/4/6/12`).
  No multi-column CSS grid for content; alignment is flex + absolute insets.
- Container widths from Tailwind tokens: `--container-2xl:42rem`, `3xl:48rem`, `4xl:56rem`
  (`max-w-4xl` used on the closing text block). Generous padding in em (`px-[2em]`) so margins
  scale with the fluid root.
- A thin (`w-[7px]`) full-height scroll-progress rail is fixed at the right edge with
  `mix-blend-difference` so it inverts against whatever scene is behind it.
- Loader: a centered `#fish-loader` over `#07161a` with `[Please wait] / Loading 3D experience`,
  `pulseText` animation, gating the experience.

## Motion

Driven by **GSAP + ScrollTrigger over a Three.js (WebGLRenderer) scene** — confirmed in the JS
bundle (271 webgl / 98 three / 38 gsap / 34 WebGLRenderer / 15 ScrollTrigger / 19 ShaderMaterial;
plus a few `ogl` and one `cannon` reference). Scroll position scrubs through scenes.

GPU-side: heavy use of `ShaderMaterial`, `InstancedMesh`, GPU **points/particles**, and
`noise`/`fbm`/`displacement` shaders (104 "points", 112 "displacement", 34 "noise", 23
"InstancedMesh", `RenderPass` postprocessing). There is also an `AudioContext` (sound design /
audio-reactivity). This is a custom shader-driven particle/displacement world — the actual look
and feel of the hero is NOT recoverable from CSS.

DOM-side easings + durations observed in the CSS (the UI-overlay motion vocabulary):
- `transition: opacity .3s` (the workhorse — most overlay fades), plus `opacity .5s ease-in-out`.
- Tailwind durations in use: `.15s` (default), `.3s`, `.7s`.
- Custom cubic-beziers, all expressive: `cubic-bezier(.87,0,.13,1)` (sharp ease-in-out),
  `cubic-bezier(.625,.05,0,1)` (heavy ease-out), `cubic-bezier(.35,1.75,.6,1)` (overshoot/back),
  plus Tailwind's standard `cubic-bezier(.4,0,.2,1)`.
- Text reveal helper `.transition-text { will-change: transform, opacity }`.
- `@keyframes pulseText` (2s ease-in-out infinite) on loader text; `spin` for a loader spinner;
  a `.flicker-line` class on the secondary heading (CRT-style flicker on the WebGL/Three.js label).
- Page-transition guard `.transitioning { pointer-events: none }`.

Vocabulary to copy: long, eased opacity fades for UI; tight `leading-none` text that
reveals on scroll; one overshoot easing for playful accents; a blend-mode progress rail.

## Mood

Immersive, cinematic, and technical — a creative-developer showreel that wants to feel like
entering a 3D world rather than reading a page. Dark teal-black void, crisp white type, a single
amber spark; mono labels give an engineering/terminal register ("[Please wait]", "[Scroll] to
unfold", "/// Creative Developer at [OFF+BRAND]"). Copy is confident and self-aware ("Architect of
immersive / High-end" experiences, "Working worldwide since 2021"). The closing scenes turn
unexpectedly personal and reverent — a faith testimony (John 3:16, Romans 3:23, "The Creator loves
you") — so the arc is craft-showcase → intimate message. Overall: high-end, restrained, moody,
sincere.

## When to use

Reach for this recipe when the build IS the hero — a creative-developer / studio / WebGL
portfolio where a fullscreen Three.js scene carries the experience and HTML is just a thin overlay.
Good fit for: scroll-as-narrative single-pagers, particle/shader showcases, immersive product or
art launches, anything that should feel like a "3D experience" with a loader gate, custom cursor,
and reserved near-monochrome dark palette + one warm accent + a display sans / mono pairing. Not
for content-dense, SEO-driven, or document-style sites (it hides the cursor, locks scroll, and
ships almost no semantic page body). Requires real WebGL/GSAP engineering budget — the CSS here is
the easy 10%.
