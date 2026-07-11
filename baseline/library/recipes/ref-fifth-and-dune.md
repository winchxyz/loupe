---
recipe: ref-fifth-and-dune
source: https://fifthanddune.com/ (reference, observed 2026-06-18)
palette: [charcoal #333333, ink #292929/#2E2E2E, near-black #000000, white #FFFFFF, antique-gold #C8AC6B]
mood: understated luxury craftsmanship — dark, restrained, editorial; "built to last forever"
stack: WordPress + Hello Elementor theme + Elementor/Elementor Pro; motion = GSAP 3.13 (SplitText, CustomEase, ScrollTrigger) + Lenis 1.1.18 smooth scroll; jQuery. No WebGL / no canvas hero / no background video.
tags: [luxury, construction, real-estate, dark, editorial, serif-display, gold-accent, gsap, lenis, splittext, scrolltrigger, elementor]
---

# Fifth & Dune — luxury home-builder, dark editorial with gold

Reference distilled from the live HTML + CSS (Elementor global "kit" CSS, page CSS
`post-14.css`, and inline GSAP). A luxury custom-home construction firm in The Hamptons.
The whole design language is **dark, quiet, and confident**: near-black grounds, a single
antique-gold accent, a variable Cinzel serif for display, and reveal motion that is
scroll-driven rather than decorative.

## Palette (hexes + roles)

Brand tokens come from the Elementor global kit (`.elementor-kit-1589`):

- **Accent / primary — `#C8AC6B`** (antique / muted gold). The one brand color; carries
  luxury without going loud. Used sparingly on emphasis, not as a fill.
- **Text — `#FFFFFF`** (global text + global link color). Body and headings run white on dark.
- **Secondary — `#54595F`** (Elementor default cool-grey; muted UI/secondary text).
- **Extra kit grey — `#2E2E2E`** (named custom global) — section ground.
- Section backgrounds observed in page CSS, light→dark: **`#333333`** (most common ground),
  **`#2E2E2E`**, **`#292929`**, **`#000000`**. The page lives in the dark `#29–33` band,
  dropping to pure black for the heaviest sections.
- Link hover = white at ~72% alpha (`#FFFFFFB8`) — a dim, not a color shift.
- Page-transition curtain color = **`#FFBC7D`** (warm peach; the Elementor page-transition
  overlay, a warmer sibling of the gold).
- Default Elementor swatches (`#61CE70` green accent, `#000000`) exist in the kit but are
  the platform defaults, effectively unused by the design.

Spend: ~70% dark neutral ground / ~25% white type / ~5% gold. One accent, used once per view.

## Type (families + scale)

Four families loaded, three doing real work:

- **Display — Cinzel** (a self-hosted variable cut, `CinzelVariable`, `Cinzel-1.woff2`,
  `serif !important`). High-contrast classical Roman serif → the "heritage / built to last"
  voice. This is the signature face; reserved for hero + section headlines.
- **Headings/UI — Montserrat** (`"Montserrat", Sans-serif`) — by far the most-declared family
  in page CSS (7×); geometric sans for sub-heads, labels, nav.
- **Body — Roboto** (kit global text family, weight 400; accent text weight 500).
- **Alexandria** is set as the kit's "primary typography" family (weight 400) and **Inter**
  appears once — both effectively minor next to Cinzel/Montserrat/Roboto.

Scale (distinct `font-size` values observed, px): **64 / 48 / 40 / 32 / 28 / 24 / 20 / 18 /
17 / 16 / 14**, plus a couple of rem display sizes (`2rem`, `1.8rem`). Read it as a display
tier (64/48/40), a sub-head tier (32/28/24), and body/labels (20→14).

Weights are light: **400** (most body/display) and **500** (accent/medium). No heavy/black weights.

Tracking: **`letter-spacing: -0.04em`** appears repeatedly on the large display text — tight,
negative tracking on the big Cinzel/Montserrat headlines, which reads modern-editorial.

## Grid & composition

- **Boxed container max-width `1140px`** (Elementor `--container-max-width: 1140px`;
  section-boxed cap = 1140). Steps down to **1024px** ≤1024px viewport and **767px** ≤767px.
- Layout is Elementor flex/grid containers. Grids seen: `repeat(1,1fr)` (the default stacked
  state), `repeat(2,1fr)` (two-up content/testimonial blocks), and a `repeat(5,1fr)` row
  (a 5-column band — logos / stats / value-pillars).
- **Fluid gaps via clamp:** the dominant gutter is
  `gap: clamp(1.5rem, -0.1522rem + 8.2609vw, 6.25rem)` — i.e. ~24px on small screens scaling
  up to 100px on wide ones. Tighter utility gaps of `40px`, `12px`, `1rem`, `0`.
- Widget rhythm token `--widgets-spacing: 20px`. So: generous, viewport-scaled section gutters
  between major blocks; a quiet 20px rhythm inside blocks.
- Structure is the conventional luxury-service narrative: hero ("Built to Last Forever") →
  three value pillars (**Legacy / Precision / Integrity**) → work/testimonials (named clients:
  David Gallo, Katherine Rayner, John Hill, the Morrises…) → "Let's Build Your Legacy" CTA →
  contact form (Elementor Pro form widget). Single long scroll.

## Motion

Motion is **JS-driven, not CSS** — there are essentially no CSS `transition`/`animation`
rules in the page CSS; everything is GSAP + Lenis:

- **Lenis 1.1.18** owns the scroll (smooth/inertial scrolling), feeding ScrollTrigger.
- **GSAP 3.13** with **SplitText** (per-word / per-line headline reveals), **ScrollTrigger**
  (heavily used — ~25 references), and a named **CustomEase**:
  `CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1")` — a slow-in / fast-settle curve used
  as the house easing on reveals (the "osmo-ease" naming nods to the Osmo/GSAP toolkit).
- Observed tween params: durations cluster at **1s** (big reveals), with **0.6 / 0.5 / 0.4 /
  0.3** for smaller moves; eases `osmo-ease`, `power2.inOut`, `power2.out/in`, `power1.in`,
  and `back.in/out(1.7)` for a slight overshoot on accents; `ease:"none"` for scrubbed pieces.
- **ScrollTrigger** uses **scrub** (`scrub: 0.5`, `scrub: 1`, `scrub: true`) so headline /
  layout beats are tied to scroll position, plus at least one `pin`. This is the
  Lenis + ScrollTrigger scroll-journey pattern already in our library
  (`techniques/scroll-journey-choreography.md`, `techniques/smooth-scroll-lenis.md`).
- A **page-transition** overlay (Elementor) sweeps in `#FFBC7D` between pages.

No WebGL, no `<canvas>` render loop (the only `canvas` hits are accessibility-widget feature
detection), no background `<video>`. The richness is type + photography + scroll-timed reveals.

## Mood

Understated, generational luxury — a builder of homes "worth passing down," not a flashy
developer. The Cinzel serif + antique gold + near-black ground say *heritage, permanence,
craft*; the tight negative tracking and Montserrat sub-heads keep it contemporary rather than
stuffy. Copy is calm and philosophical (Legacy / Precision / Integrity; "Built to Last
Forever"; "Let's Build Your Legacy"), trust signalled through named-client testimonials. The
motion is slow and deliberate (1s reveals, scrubbed-to-scroll), reinforcing "unhurried,
considered."

## When to use

Reach for this recipe for a **dark, premium, trust-led marketing site for a high-end
service or maker** — luxury construction / architecture / real-estate, a bespoke studio, a
heritage craft brand, or any one-page service narrative selling *permanence and taste*. The
formula: near-black grounds in the `#29–33` band, **one** antique-gold accent used at ~5%,
a classical variable serif (Cinzel) for display against a geometric sans (Montserrat) for
sub-heads, a 1140px boxed container with viewport-scaled clamp() gutters, and **Lenis +
GSAP/SplitText/ScrollTrigger** slow scrubbed reveals (house ease `0.625, 0.05, 0, 1`) instead
of CSS animation. Pair with the library's `scroll-journey-choreography`, `smooth-scroll-lenis`,
and `text-opacity-scroll-reveal` techniques. Do **not** use it where you need brightness,
density, or playfulness — its whole power is restraint.

> Gap / fidelity flag: motion *feel* (exact reveal staging, stagger, scrub mapping, the
> photography art-direction, and the page-transition timing) cannot be fully judged from code.
> The hero is image-led, not WebGL, so a later visual capture is only needed to confirm the
> reveal choreography and overall pacing — not to recover a shader.
