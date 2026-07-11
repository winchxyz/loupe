---
recipe: HappyRobot — premium enterprise-AI, maritime/freight-themed B2B SaaS
source: https://happyrobot.ai/ (reference, observed 2026-06-19)
palette: anchor-black + hull-white/harbor-gray neutrals; cargo-khaki & sage warm accents; CTA green & red gradients; ocean/dark-navy deep grounds
mood: premium, confident, technically sophisticated yet approachable; "battlefield-tested" enterprise credibility over AI hype
stack: Next.js (App Router) + Tailwind v4 token system (shadcn/ui base layer) + Framer Motion (light) + CDN MP4 hero video loop
tags: [b2b-saas, enterprise-ai, agentic, logistics, freight, maritime-theme, serif-display, video-hero, tailwind-v4, shadcn, light-mode-primary, premium]
---

HappyRobot is an enterprise AI-workforce platform (autonomous agents that run end-to-end
operations for Fortune-500 logistics / utilities / airlines / retail / manufacturing —
DHL, Kuehne+Nagel, Naturgy). The design language is a restrained, premium B2B SaaS system
with a subtle **maritime / freight** identity baked into its brand tokens (anchor, hull,
harbor, cargo, ocean, deck). Light-mode-primary; a serif display face does the emotional
work while the body stays in a clean grotesque. Built on Tailwind v4 + a shadcn/ui token
layer, so light/dark themes ship as paired custom-property values.

## Palette

Brand-specific tokens (the real identity — observed in `--hr-*` custom props):

- **Anchor black** `#0e0d0c` — primary ink / dark section grounds. Dominant text color
  (used as `text-hr-anchor-black` ~219× in markup).
- **Hull white** `#fcfcfc` — near-white surface; hero text on dark/video grounds (`text-hr-hull-white`).
- **Harbor gray** `#f2f2f2` — the workhorse light section background (`bg-hr-harbor-gray`, most-used section bg).
- **Cargo khaki** `#ebe6d2` — warm sand accent block / alternating section ground.
- **Dark navy** `#0a1929` and **Ocean blue** `#112b42` — deep grounds for high-contrast / inverted sections.
- **Sage** `#dde8d8` / **Deck green** `#a9c59d` — soft natural accents (cards, fills).
- **Rust** `#d59566` — warm tertiary accent.
- Neutral ramp: `#cacaca` (neutral), `#d9d9d9` (light), `#858585` (dark), `#333` (darker),
  muted-heading `#858484`.

CTA gradients (buttons):
- **Green CTA** `#72ff88 → #0abb2d` (`--hr-cta-green-from/to`) — primary action.
- **Red CTA** `#ff6b6b → #d12a2a` (`--hr-cta-red-from/to`) — secondary / urgent action.

Status: success-green `#027a48`, error-red `#b42318`.

Underlying shadcn token layer (light → dark pairs), if you scaffold from primitives:
- `--background` `#fcfcfb` / `#0a0a0a`; `--foreground` `#0a0a0a` / `#fafafa`
- `--primary` `#171717` / `#fafafa`; `--muted-foreground` `#737373` / `#a1a1a1`
- `--border` `#e5e5e5` / `#262626`; `--ring` `#525252` / `#a1a1a1`; `--radius` `.625rem` (10px)
- chart accents (light): `#1447e6 #009588 #104e64 #ac4bff #f99c00`

Roles: warm off-white grounds + near-black ink = the default canvas. Color enters sparingly
— a khaki/sage/navy section to break rhythm, gradient pills for CTAs only. It reads premium
because saturation is rationed.

## Type

Three families (all self-hosted woff2; no Google Fonts link):

- **Display — `Tobias`** (serif; fallback `Georgia, serif`), `--font-display`. Carries every
  hero and section headline. Hero H1 observed at `font-display text-5xl md:text-7xl lg:text-[104px]`
  with `leading-[0.9]` and `tracking-[-0.02em]`, in hull-white over the video. The serif on a
  tech product is the signature move — it's what makes it feel editorial/premium rather than generic SaaS.
- **Body — `Suisse Intl`** (`--font-body`, fallback `Arial, sans-serif`); a lighter
  `Suisse Intl Book` variant for long-form body (`--font-body-book`). Clean Swiss grotesque.
- **Mono — `Geist Mono`** (`--font-geist-mono` / `--font-mono`). Used for eyebrows / labels:
  `uppercase tracking-wide opacity-60` (and `tracking-wider` at `text-hr-anchor-black/60`).

Type scale (Tailwind v4 defaults, observed in `--text-*`):
`xs .75 / sm .875 / base 1 / lg 1.125 / xl 1.25 / 2xl 1.5 / 3xl 1.875 / 4xl 2.25 / 5xl 3 /
6xl 3.75 / 7xl 4.5 / 8xl 6` rem, plus an arbitrary hero step `104px`.

Tracking: display & large headings tight at **`-.02em`** (consistently); mono eyebrows go
wide (`.08em`–`.16em`, plus `tracking-wide`/`tracking-wider`). Line-heights: `0.9` for the
big hero, `1.5`–`1.6` for body. Weights available 300/400/500/600/700.

## Grid & composition

- **Container:** widest content rail `86rem` (≈1376px, the `2xl` breakpoint); the hero copy
  column is capped narrower (`max-w-[62rem]` then larger at `lg`). Long-form / centered text
  blocks at `48rem` and `64rem`. So: a wide outer frame, deliberately narrow measure for reading.
- **Breakpoints** (rem): sm 40 / md 48 / lg 64 / xl 80 / 2xl 86.
- **Grids:** plain Tailwind `repeat(N, minmax(0,1fr))` — 2/3/4-col are the common content grids;
  asymmetric splits appear (`minmax(0,1fr) minmax(0,1.4fr)`, `20rem 1fr`, `16rem 1fr`) for
  feature/sidebar layouts. Logo wall uses higher counts (5–8 col).
- **Section rhythm:** alternating full-bleed background grounds (harbor-gray ↔ hull-white ↔
  cargo-khaki ↔ anchor-black/navy) to segment the page; centered hero, then trust/logo strip,
  philosophy, three-pillar platform, metric case studies, CTA. Generous vertical padding.
- **Radius:** base `.625rem` (10px); UI elements use `.25–.6rem`; some pills/cards larger.

## Motion

Deliberately restrained — this is **not** a heavy scroll-animation site.

- **Hero = autoplaying CDN video loop.** `<video autoplay muted loop playsinline
  class="w-full h-full object-cover">` sourcing `HappyRobot_HeroLoop_v01_up.mp4`
  (bunny.net CDN). All the "wow" motion lives in this pre-rendered loop, not in code.
- **Framer Motion present but light** — only a single `"motion"` reference across the entire
  JS bundle set; used for small entrance/in-view reveals, not orchestrated timelines.
- **CSS/Tailwind transitions:** durations cluster at **`.2s`** and **`.15s`** (hover/state),
  with a few `.3–.8s` for larger reveals. Easings: `--ease-out: cubic-bezier(0,0,.2,1)`,
  `--ease-in-out: cubic-bezier(.4,0,.2,1)`, plus `cubic-bezier(.65,.05,.36,1)`.
- Keyframes observed: `demoFadeIn` (`.2s ease-out`), shadcn `enter`/`exit`, `ping`.

**No** GSAP, ScrollTrigger, Lenis, Three.js/WebGL, Locomotive, Barba, Rive runtime, or
Embla/Swiper in the bundles (verified by scanning all script chunks). Motion budget is small
and tasteful: video does the heavy lifting, everything else is fast micro-transitions.

## Mood

Premium, confident, "battlefield-tested." Corporate but not stiff; technical but not cold.
The trick is the contrast: a **serif display face (Tobias)** over **Swiss-grotesque body**
on **warm off-white grounds**, color rationed to a few khaki/sage/navy accent sections and
gradient CTA pills. Credibility signals (real client logos, hard metrics like "78% autonomous
execution") carry the page; the visuals stay calm and let the proof talk. Eyebrows in
uppercase mono at 60% opacity add an engineered/operational texture without shouting.

## When to use

Reach for this recipe for a **premium enterprise / B2B SaaS** site that must feel
trustworthy and grown-up rather than flashy — agentic-AI, logistics/operations, infra, or any
"serious software for serious companies" pitch. Specifically when you want:

- a **serif-display + grotesque-body + mono-label** type system for editorial-premium tone;
- **warm-neutral, light-mode-primary** palette with color rationed to a few accent sections;
- a **video-loop hero** carrying the motion (no scroll-animation engineering);
- a clean Tailwind-v4 / shadcn token foundation with paired light/dark themes;
- credibility-led composition (logo walls, metric callouts, alternating section grounds).

Avoid it for playful/consumer, maximalist, or motion-heavy creative work — this is restraint
as a feature.

## Gaps

- **Hero motion fidelity is unrecoverable from code** — the signature animation is a
  pre-rendered MP4 (`HappyRobot_HeroLoop_v01_up.mp4`); its content, timing, and look can't be
  reconstructed from CSS/JS. Treat "video-loop hero" as the takeaway, not exact frames.
- Exact **section-by-section spacing / vertical rhythm** wasn't measured precisely (Tailwind
  utility padding read from class hints, not computed box metrics).
- **Tobias** and **Suisse Intl** are licensed commercial faces (self-hosted woff2) — not
  freely available. For a build, substitute comparable serif (e.g. a transitional serif) +
  grotesque (e.g. Inter/Söhne-like) and keep Geist Mono for labels.
- Light vs dark token pairs are both present in CSS; which sections use which was inferred
  from `bg-hr-*`/`text-hr-*` class frequency, not a live theme audit.
