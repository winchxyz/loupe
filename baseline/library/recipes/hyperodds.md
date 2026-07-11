---
recipe: hyperodds
source: sondaven.com (Son Daven design-resort hotel, Yaremche UA) — harvested 2026-06-11, recipe distilled at baseline/sites/01b-prediction-aggregator-ref/RECIPE.md; applied to our build "HyperOdds" (prediction-market aggregator, site #1 v2)
palette: strict two-tone duotone — terminal mint-on-dark OR resort sand/umbra; accent IS the ink
mood: quant-terminal-as-blueprint — cinematic, austere, engraved, slow
stack: static HTML/CSS/JS, GSAP + ScrollTrigger (vendored), canvas dither, CSS-var dual theme
tags: [duotone, dither, caps-display, editorial, scroll-scrub, sticky-scene, terminal, canvas-texture, our-build]
---

# Recipe — HyperOdds (sondaven duotone applied to a trading product)

A harvested reference (sondaven.com) re-pointed from a resort hotel to a crypto trading
landing. The discipline transfers wholesale: strict duotone, caps-only two-extreme type,
corner metadata, manifesto interludes, poster numerals, and ONE signature texture
(ordered-dither pixel dust — which fits market data even better than it fit landscapes).
Our build ships BOTH palettes as themes on one codebase. Values below are measured from
`baseline/sites/01b-prediction-aggregator-ref/{styles.css,app.js,index.html}`.

## Palette — strict duotone, two themes, accent = ink

Two complete palettes, switched by `data-theme` on `<html>` (toggle persisted in
`localStorage`). Each palette is only THREE inks; "muted" is the same ink at lower alpha,
never a grey. White never appears.

- **terminal** (HyperOdds, the product's native voice):
  - paper `#07090b`, ink `#e6edeb`, accent `#4fe3c1` (Hyperliquid mint), down `#e36a6a`.
  - inverted sections swap to accent-as-background with ink `#06231c` — dark↔mint, never white.
- **resort** (the sondaven duotone, ported intact):
  - paper/sand `#a89474`, ink/umbra `#2c2824`. Accent and down both `#2c2824` — i.e. in
    resort mode **the accent IS the ink**; there is no second hue at all.
- Mechanism: `--c-paper / --c-ink / --c-accent / --c-down` per theme; layout reads
  `--bg / --fg / --accent`; `.invert` flips bg↔fg. Sections alternate light-on-dark and
  dark-on-light full-bleed so the page reads as one material flipped, not a theme break.

## Type — one family, all caps, two extremes

- **Families:** `Archivo` (wght 400/500/800, geometric grotesk standing in for commercial
  KTF Metro) for everything; `IBM Plex Mono` (400/500, `tabular-nums`) for all figures —
  the product requirement that numbers are first-class objects.
- **Everything is uppercase.** Hierarchy = size + tracking + placement, not weight contrast.
- **Two extremes, almost nothing between:**
  - micro-labels / kickers: `0.7rem`, `letter-spacing 0.14em`, `line-height 1.6`;
    tape/ticker labels `0.74–0.8rem` at `0.05–0.08em`.
  - display: `letter-spacing -0.04em`, `line-height ~0.95`. Hero/manifesto/CTA display
    `clamp(3rem, min(10vw, 20vh), 13rem)`; poster numerals `clamp(3.4rem, min(10vw, 20vh), 12rem)`;
    editorial index names `clamp(2.4rem, 6.4vw, 7.5rem)`.
- `min(10vw, 20vh)` (not pure vw) keeps display legible on wide/short Full-HD viewports —
  added after the owner flagged proportions blowing out at 1920×1030.
- Gotcha: at display sizes Archivo's native word-space is fine, but its commercial twin
  Clash Display (used on site #1 v1) needs `word-spacing: 0.12em`.

## Grid + composition

- **Full-viewport cinematic sections:** each scene `min-height: 100dvh`, full-bleed, near-zero
  container padding. Content that needs a measure uses `width: min(96vw, 1500px)`.
- **Corner-anchored metadata:** tiny caps labels pinned to the four corners of the hero and
  footer frame (credits, location, nav) — blueprint stamps. On dithered fields they sit on
  bg-colored bordered "stamp plates" so dust can never eat the text.
- **Manifesto interludes:** a full solid-color `100dvh` field holding ONE centered caps
  statement with a tiny ornament above. The page breathes between dense moments.
- **Poster numerals:** the Hyperliquid stats are giant digits in a `grid-template-columns:
  auto auto auto` (natural widths, `gap: 4rem`) with small-caps captions — not a bento.
- **Editorial index** of market categories (politics/sports/crypto/macro/culture) replaces a
  bento dashboard: full-width rows that invert on hover.
- Radius system: `999px` pills for chrome, `50%` circles for buttons/ornaments, `20px` on
  framed insets.

## Motion

- **Tempo tokens, slow:** `--dur-s 0.4s / --dur-m 0.6s / --dur-l 1.2s`,
  `--ease cubic-bezier(0.65, 0, 0.35, 1)`. No bounce, no elastic.
- **Scene-cover (the reference's real scroll mechanic):** scenes are `position: sticky; top:0`;
  while the NEXT block rolls over a scene, a scrubbed `fromTo` dollies it `scale 1→1.1` +
  `brightness(1)→brightness(0.7)`, `ease:"none"`, `scrub: 0.5`, trigger `start "top bottom"`
  → `end "top top"`. Long content sections scroll normally between scenes. A hero-only dolly
  was tried first and rejected by the owner — use scene-cover, not a lone-hero parallax.
  - Critical gotcha: scrubbed `fromTo` must set `immediateRender: false` + explicit `from`
    values, or it captures a half-done entrance (opacity ~0) and returning to the top leaves
    the scene invisible. (PAIN-class lesson, logged.)
- **Reveals are dissolve/fade, not card slides.** Count-ups for figures.
- **Signature texture = ordered-dither pixel dust** (Bayer 4×4 threshold), three uses, all
  drawn in theme ink, all paused off-screen via a `ScrollTrigger` `onToggle` visibility flag:
  - dot-matrix wordmark: "HYPERODDS" sampled from an offscreen canvas into 7px cells, redrawn
    at ~8fps so a few cells rest each frame — reads as a refreshing display, not video.
  - hero dust mountains: liquidity rendered as a dithered dust ridge (summed sines), ~8fps.
  - numerals cloud: interactive water-ripple dither — `pointermove` drops expanding/decaying
    radial rings (max 28 sources, `~25fps`) into the dither field; ambient drift underneath.

## Mood

Quant-terminal-as-blueprint. Austere, engraved, slow. Market widgets stay functional but are
reframed as blueprint instruments — hairlines, stamps, poster numerals — never glassy cards,
never gradients. The single dither texture is what makes the flat duotone read as crafted
(engraving + CRT at once) instead of cheap.

## When to use

- A **data-dense, numbers-first product** (trading, analytics, fintech, dashboards-as-marketing)
  that wants to feel like an instrument, not a brochure — and you want a hard anti-slop stance:
  no glassmorphism, no purple gradients, no bento.
- When a **single signature texture** can carry the brand and the subject literally maps to
  dot-dust (market depth, point clouds, scatter data, halftone engraving).
- When **two-tone discipline** is acceptable or desired (one brand hue, or a duotone art
  direction) — and you can commit to caps-only, weight-flat type.
- Pairs with a **dual-theme requirement** (e.g. product theme + editorial theme on one
  codebase) — the CSS-var structure here ships both for free.
- Avoid when the product needs photographic richness, many accent colors, soft/friendly
  consumer warmth, or readers who need hand-holding copy — this is an expert-audience language.

> Ties to our experience: site #1 was built twice — v1 best-effort prompting, v2 from this
> harvested recipe — specifically to cold A/B whether a reference visibly beats prompting
> (Pilot C, risk #4). The recipe drove every structural decision above; record the verdict in
> SITES.md before reusing.
