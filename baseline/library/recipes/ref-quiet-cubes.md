---
recipe: ref-quiet-cubes
source: https://quietcubes.com/ (reference, observed 2026-06-18)
palette: [warm off-white canvas, near-black ink, sand/beige surface, orange accent]
mood: calm modern-luxury product / premium-but-approachable, single-typeface restraint, warm-neutral with one warm accent
stack: [Webflow, GSAP 3.15.0, ScrollTrigger, SplitText, Lenis 1.2.3, Swiper 11, Finsweet modal, jQuery]
tags: [product, e-commerce-adjacent, marketing, modern-luxury, warm-neutral, single-typeface, inter-tight, gsap, scrolltrigger, splittext, lenis, swiper, webflow]
---

# ref-quiet-cubes — "Maximize Focus & Productivity at Your Workplace"

Marketing/product site for **QuietCubes** — premium modular soundproof pods and booths (office, home,
outdoor, nursing variants). Positioning: "The World's Most Advanced Pods & Booths." The design language
is calm modern-luxury: a warm-neutral canvas, a single grotesk typeface used at one weight, and a single
warm orange accent. Built on **Webflow**, with a serious motion stack (GSAP + ScrollTrigger + SplitText
for text reveals, Lenis for smooth scroll, Swiper for carousels). No WebGL/canvas — motion is DOM + media.

## Palette
A warm-neutral system driven by four named CSS custom properties, plus a small set of supporting greys
and contextual product-color swatches. Observed `:root` variables (`quietcubes.webflow.shared…css`):

- `--white: white` (`#fff`) — primary page background (the dominant surface; ~37 hex hits + var refs).
- `--black: #1d1d1d` — primary foreground / ink (near-black, not pure `#000`; ~17 hits). This is the
  text color, slightly softened.
- `--beige: #dbd5ca` — warm sand/greige surface, the secondary background panel that gives the site its
  "calm/warm" feel (paired with offsets `--beige-offset: 17.7rem`).
- `--orange: #ff8333` — the single warm accent (`--orange-offset: -18rem`); used for emphasis/CTA, used
  sparingly. Hover/deeper variants observed: `#eb762d`, `#db6e2b`, `#cc6712`, `#86370f`.
- `--background-black: #0a0a0a` — near-pure black for dark sections (distinct from the `#1d1d1d` ink).
- `--navbar-logo-color: white` — logo flips to white over dark/imagery.

Supporting neutrals (hierarchy, hairlines, surfaces): `#fafafa`, `#f5f3f0`, `#e8e8e8`, `#ebe8e5`,
`#ddd`, `#ccc`, `#c8c8c8` and warm-grey tints `#928275`, `#8c7d70`, `#7d7165`, `#b7ada1`, `#aea59a`,
`#cac3bd` — note the greys are *warm* (brownish), keeping the whole palette in a warm key rather than
cool. A muted slate `#758696` appears as a secondary/desaturated text color.

The nine "Home Pod" product colors (Navy/Teal/Nut/Sage/Yolk/Haze/Blush/Flame/Shadow) surface as
contextual swatches in the CSS (`#4a719d`, `#8e9a77`/`#78865d`/`#74825b`, `#dda575`/`#eec39f`, etc.) —
these are *content* colors for the product picker, not part of the core brand system.

Roles: warm-white page, soft near-black ink, sand/beige as the secondary surface for rhythm, one warm
orange accent for emphasis/CTA, near-black `#0a0a0a` for dramatic dark sections.

## Type
**Single-typeface system.** Everything is **Inter Tight Variable** (`Inter Tight Variable, Arial,
sans-serif`) — a modern grotesk. No second display face, no Google-Fonts `<link>` (Webflow self-hosts /
inlines the variable font; the variable axis range `100 900` is declared but the design uses essentially
one weight).

- **Dominant weight: 500 (medium)** — overwhelmingly (~36 of the weight declarations). 400 is used for
  lighter passages; `bold`/700 appears only incidentally. The whole site reads at medium weight, which is
  a key part of its calm, even, "quiet" texture.
- **Tracking:** slightly negative on display/headings — `-.01em`, `-.0125em`, `-.02em`, `-.03em` — and
  slightly positive (`.01em`/`.04em`) on small uppercase labels. Headlines set tight, eyebrows/labels
  set with a little air.
- **Case:** `text-transform: uppercase` on eyebrows/labels/nav (13 occurrences); body and headings are
  sentence/normal case.

Type scale is a **fixed rem scale** (not fluid/clamp). Distinct sizes observed, largest→smallest:

- Hero / display: `7.5rem`, `5.8125rem`, `5rem`, `4rem`, `3.75rem`, `3.5rem`, `3.13rem`/`3.125rem`, `3rem`
- Sub-display / large headings: `2.5rem`, `2rem`, `1.875rem`, `1.63rem`, `1.5rem`, `1.38rem`, `1.375rem`
- Body / UI: `1.25rem`, `1.13rem`, `1rem` (base), `18px`, `14px`
- Small / captions / labels: `.88rem`/`.875rem`, `.75rem`, `.63rem`/`.625rem`, `.6rem`

Leading: display/headline tiers set solid — `line-height: 100%` / `1` / `.88` for the biggest type;
body relaxes to `1.2` / `120%` / `130%`. So big type is set tight and dense, copy is comfortable.

## Grid & composition
- **Centered max-width container: `87.5rem` (1400px)** is the primary content wrapper; secondary inner
  widths at `52.5rem`/`50rem` for text columns and `~15–21rem` for cards/media. Edge padding uses
  `calc(100% - 1.75rem)` / `96vw` style insets.
- **Grids are mostly two-column** — `grid-template-columns: 1fr 1fr` is by far the most common (7×),
  with `40% 60%`, `auto 1fr`, and single-column `1fr`/`100%` for stacked/mobile. This is a calm,
  editorial two-up rhythm (text ↔ media), not a dense multi-column system.
- **Gaps:** common `grid-column-gap` / `gap` values are `.5rem`, `1rem`, `1.25rem`, `1.88rem`, `2rem`,
  `2.5rem` — a tight-to-medium spacing ladder.
- **Breakpoints:** standard Webflow set — `991px`, `767px`, `479px` (tablet / mobile-landscape /
  mobile-portrait). Layout collapses two-up grids to single column at the lower tiers.
- **Section rhythm:** generous vertical padding tiers (`5rem`, `6rem`, `6.63rem` at the large end down
  through `2rem`/`1.25rem`), giving sections room to breathe — consistent with the "calm/spacious"
  modern-luxury feel. Beige panels (`--beige` + `--beige-offset`) alternate with white to mark sections.
- Product galleries / testimonials / color pickers run through **Swiper 11** carousels.

## Motion
**GSAP 3.15.0 + ScrollTrigger + SplitText**, with **Lenis 1.2.3** smooth scroll, on top of Webflow's
own interactions engine. No three.js / WebGL / Locomotive / Barba — the hero is DOM + imagery, not a
canvas.

- **SplitText** is loaded → the signature move is almost certainly **per-line / per-word headline
  reveals** on scroll (split the heading, stagger the lines in). This is the defining motion gesture to
  reproduce.
- **ScrollTrigger** → scroll-linked section reveals / pinning as content scrolls past.
- **Lenis** → smooth/inertial scrolling underpins the whole feel (the "quiet", gliding scroll).
- **Swiper 11** → product / testimonial / color carousels.
- **Finsweet `attributes-modal`** → accessible modal dialogs.
- CSS-side transitions are short and restrained: durations cluster at **`.2s`** (13×), then `.3s`,
  `.5s`, `.25s`, `.1s`; easing is **`ease-in-out`**. A `.8s linear infinite spin` loader exists. So
  micro-interactions (hover/state) are quick and gentle; the *expressive* motion (text reveals, scroll
  choreography) is owned by GSAP, where exact durations/easings live in the JS and aren't in the CSS.

Feel (from the stack + CSS): smooth Lenis scroll, SplitText line-reveals on headings as they enter,
quick `.2s ease-in-out` hovers — composed, premium, unhurried. Matches the "quiet" brand.

## Mood
Calm modern-luxury product marketing. Warm-white canvas + soft near-black ink + a sand/beige secondary
surface put the whole palette in a warm, restful key; a single warm-orange accent does all the
emphasis. One typeface (Inter Tight) at one weight (medium) gives an even, quiet typographic texture —
discipline over decoration. Spacious section rhythm, two-up text/media grids, and smooth Lenis scroll
with SplitText reveals make it feel premium and considered rather than flashy. Target reads as
corporate/office, education, healthcare, and remote-work buyers — "privacy & productivity as a lifestyle
upgrade." Professional yet approachable.

## When to use
Reach for this recipe when building a **premium product / marketing site for a physical or lifestyle
product** that should feel calm, warm, and expensive without a WebGL hero — modern-luxury furniture,
hardware, wellness, workspace, DTC home goods. Strong fit when: you want a **warm-neutral system**
(off-white + warm near-black + a sand/beige second surface) with exactly **one warm accent**; a
**single grotesk (Inter Tight or similar) used at medium weight** for an even, quiet voice; a
**centered ~1400px container** with **calm two-up (1fr 1fr) text↔media grids** and generous section
padding; and motion built from **Lenis smooth scroll + GSAP/ScrollTrigger + SplitText headline reveals**
plus **Swiper** carousels for product/testimonials. It's the "quiet luxury" counterpart to a loud,
high-contrast brand page — restraint, warmth, and a single accent are the whole idea. Not the recipe for
dense dashboards, maximalist/experimental type-collage sites, or anything that needs a canvas/WebGL hero.

## Gaps
- **Hero is DOM/media, not WebGL** — but the *exact* SplitText/ScrollTrigger choreography (which lines
  stagger, scrub vs. trigger, pin behavior, real durations/easings) lives in GSAP JS and Webflow's
  interaction data, not in the CSS. The motion description is inferred from the loaded libraries; the
  real feel needs later **visual capture** to confirm.
- Webflow inlines/obfuscates its interaction config and self-hosts the variable font, so per-element
  font weights along the `100 900` axis and exact per-section animation params weren't fully recoverable
  from the shared CSS alone.
- The nine product-color swatches are content colors (the Home Pod picker), not brand tokens; listed for
  completeness, not as part of the core palette.
- `grid-template-columns` shows the structural intent (mostly `1fr 1fr`), but precise per-section column
  spans / nesting are best confirmed visually.
