---
recipe: ref-crav-burgers
source: https://www.cravburgers.shop/ (reference, observed 2026-06-18)
palette: [beige #f5e3cd, mustard #ffd750, red #f91814, ink #1b1b1b, white #fff, accent-orange #ef6f2e, accent-green #60a905, deep-maroon #4c0016]
mood: loud playful cartoon-appetite — oversized outlined display type, smashed-burger food site, energetic and confident
stack: [next.js, tailwind-v4, gsap, scrolltrigger, scrollsmoother, lenis]
tags: [reference, food, restaurant, burger, playful, cartoon, big-type, outlined-type, fluid-vw, smooth-scroll, gsap, tailwind]
---

# ref-crav-burgers

A loud, appetite-forward smashed-burger restaurant site (CRAV, "Artisan Smashed Burgers",
est. 1997 framing). The whole design language is **oversized outlined display type on warm
food-poster color blocks**, scrolled with GSAP + Lenis smooth scroll. Built on Next.js +
Tailwind v4 (utility classes, `--tw-*` custom props, `color-mix(in oklab, ...)` tints).

## Palette

Five named brand tokens drive the UI chrome (declared as CSS vars in the theme):

| Role                  | Hex        | Token       |
|-----------------------|------------|-------------|
| Warm paper background | `#f5e3cd`  | `--beige`   |
| Primary accent / pop  | `#ffd750`  | `--mustard` |
| Hot red (headlines)   | `#f91814`  | `--red`     |
| Ink / near-black text | `#1b1b1b`  | `--black`   |
| Paper white           | `#ffffff`  | `--white`   |

Section backgrounds are flat solid blocks of these (`bg-beige`, `bg-mustard`, white) — no
gradients on chrome. Tints are produced with `color-mix(in oklab, var(--white) 80%, transparent)`
etc. (glassy overlays at 5–90% white, plus red/mustard/black mixes) rather than hand-picked hexes.

Beyond the chrome, the burger/illustration artwork carries a richer cartoon-food palette pulled
from inline SVG fills — keep these for any food/illustration asset, not for UI:
`#4c0016` deep maroon, `#ef6f2e` / `#ff9d3f` / `#ed900a` oranges, `#f4a804` / `#ffc614` golden,
`#60a905` / `#77c41e` lettuce greens, `#ef1624` / `#b21222` tomato reds, `#662c00` toasted-bun brown.

Roles in practice: **beige = canvas**, **mustard = energy block**, **red = the headline color**,
**ink = body text**, **white = the outline/stroke around the big type**.

## Type

Two self-hosted Google display faces via `next/font` (with named fallbacks `Modak Fallback` /
`Mouse Memoirs Fallback` to cut layout shift). No serif, no separate body face observed — the
display faces carry almost everything; system `ui-sans-serif` stack is the silent default.

- **Modak** (`--font-modak`) — fat rounded poster display. Used for the single biggest moment.
  `.heading600 { font-family: Modak; font-size: 35vw }`.
- **Mouse Memoirs** (`--font-mouse-memoirs`) — condensed uppercase poster face. The workhorse
  heading. `.heading300 { font-family: Mouse Memoirs; font-size: 15vw }` (24vw on small screens),
  `.heading180 { font-size: 9vw; text-transform: uppercase }` (14vw small).

Scale is **almost entirely fluid `vw`**, not a fixed px ramp — the page is meant to fill the
viewport at any width. Observed font-sizes form a continuous vw ladder rather than discrete steps:
hero `text-[30vw]` (26vw mobile), then `35 / 24 / 15 / 14 / 9 vw` display tiers down through
`8 / 7 / 6.5 / 5 / 4 / 3 / 2.8 / 1.8 / 1.4 / 1 / 0.9vw` for sub-copy. Weights are simple
(`400` everywhere; the faces ARE the boldness). Line-height is crushed tight: `leading-[.8]`,
`.85`, `.75`, even `.5` on the giant Modak line. Tracking tokens exist (`tracking-wide .025em` →
`widest .1em`, plus hand `.12–.4em`) for the small uppercase labels.

**Signature move — outlined display type.** Headlines are red (or beige/white) fill with a thick
white (or translucent-mustard) `-webkit-text-stroke` and `paint-order: stroke fill`, so the stroke
sits behind the fill:
```
.text-stroke        { -webkit-text-stroke: 2.5vw var(--white); paint-order: stroke fill }
.text-stroke-180    { -webkit-text-stroke: 1vw  var(--white); paint-order: stroke fill }
.text-stroke-180-mustard { -webkit-text-stroke: 1vw #f4a8044d; paint-order: stroke fill }
.text-stroke-small  { -webkit-text-stroke: 5px  var(--white); paint-order: stroke fill }
```
The stroke width is itself `vw`-fluid, so the outline scales with the type. This is the core
identity of the site — reproduce it for any CRAV-flavored build.

## Grid & composition

- **Full-bleed, viewport-sized sections**, not a centered max-width column. Hero is
  `h-screen w-full`; following sections are `h-fit w-full` with `vw` padding
  (`px-[2.5vw]`, `pt-[8vw]/[18vw]`). Layout is `flex flex-col` body, stacked sections by `id`:
  `#hero → #about → #ingredients → #map-desktop / #map-mobile → #cta`.
- **Spacing rhythm is vw-based**, matching the type: `space-y-[2vw]`, `gap-[2vw]` (also `.6 / 4 /
  5 / 6 / 8 / 50vw` gaps), section pads `8–18vw`. Tailwind's px spacing scale (`--spacing: .25rem`)
  exists but the bespoke layout leans on `vw`.
- **Where a real grid appears it's a simple 3-up**: `grid-template-columns: repeat(3, minmax(0,1fr))`
  collapsing to `repeat(1, ...)` on mobile. Most "layout" is absolute/translated poster
  composition, not grid.
- **Single hard breakpoint at ~1025px** (`max-md` ↔ desktop): `@media (min-width:1025px)` /
  `(max-width:1025px)`, with Tailwind's `40 / 64 / 80 / 96rem` queries present but lightly used.
  Mobile gets its own map section (`#map-mobile` shown, `#map-desktop` hidden) — desktop and
  mobile are composed separately, not just reflowed.
- Container caps where they appear are loose and vw-ish (`max-width: 92vw / 70vw / 62vw / 35vw`,
  plus a few rem caps `64 / 80 / 96rem` and px caps `340 / 450px`). Corners are big and soft on
  cards/blobs: `border-radius: 1–5vw`, plus pill (`3.4e38px`) and `50%`.

## Motion

Driven by **GSAP** with **ScrollTrigger + ScrollSmoother**, plus **Lenis** for the smooth-scroll
feel (strong Lenis + ScrollSmoother signatures in the bundles; also GSAP `Observer`, `Flip`,
`MotionPath` plugins present). No WebGL / three.js / canvas renderer detected — motion is
DOM/transform + scroll-driven.

- Scroll is the primary input: smoothed (Lenis/ScrollSmoother) with section-pinned / scrubbed
  reveals (ScrollTrigger). `transition-property: transform,translate,scale,rotate` is the hot path,
  and the CSS is full of `--tw-translate-y` in `vw` (`±1–10vw`, `±100%`) and `--tw-scale-*`
  (`90 / 100 / 105 / 110 / 150%`) — i.e. things slide and pop in on scroll.
- CSS transition durations span `0.1 → 0.7s` (`.1/.2/.3/.4/.5/.6/.7s`, plus a `75ms` micro and
  `1ms`/`15s` edge cases). Tailwind default transition is `.15s cubic-bezier(.4,0,.2,1)`.
- Notable bespoke easing: a slight-overshoot bounce `cubic-bezier(.45,.85,.34,1.12)` (the
  >1 final value gives a pop past target — fits the playful "smash" feel), alongside the standard
  `ease-out` `cubic-bezier(0,0,.2,1)`.
- `@media (hover:hover)` gates hover effects to real pointers.

GAP — exact scroll choreography (which sections pin, scrub distances, stagger, parallax depth,
the burger-assembly / map animations) can't be read from minified bundles. The *vibe* is
confident scroll-jacked poster reveals; precise timing/composition needs a live visual capture pass.

## Mood

Playful-yet-premium fast-casual food poster. Copy is motivational + sensory: "Smashed fresh",
"Bold flavor", "Smashed patties · toasted buns · est. 1997", "Smashed for the bold, built for the
hungry", "feel the Change", "QUALITY THAT TRAVELS WITH YOU", "A story in every bite." Energetic and
loud without being juvenile — the restraint is in the tight 5-color chrome and the single bold
device (giant outlined type on flat warm blocks) repeated with discipline. Positioned as artisan
smashed burgers with an organic / "food that feels good" angle and a global locations story
(Berlin, London, New York, Sydney, Tokyo).

## When to use

Reach for this recipe when the build is a **loud consumer/food/lifestyle brand** that wants
appetite and energy over corporate calm: burger/pizza/snack/drink brands, playful product
launches, anything that benefits from **oversized fluid display type, thick outlined headlines, and
flat warm color blocks scrolled with smooth GSAP/Lenis reveals**. It fits single-page,
viewport-filling "poster" sites where each scroll beat is its own full-bleed composition. Borrow
specifically: the `-webkit-text-stroke` + `paint-order: stroke fill` outlined-type system, the
all-`vw` fluid scale with crushed `leading`, the 5-token warm palette (beige canvas / mustard
energy / red headline / ink text / white stroke), and the GSAP-ScrollTrigger-ScrollSmoother-Lenis
motion stack. Avoid it for dense, information-heavy, or restrained/minimal/enterprise UIs — the
language is built to shout.
