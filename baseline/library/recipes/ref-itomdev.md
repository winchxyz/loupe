---
recipe: ITOMDEV — hand-drawn explorable 3D portfolio
source: https://itomdev.com/ (reference; VISUAL estimate from owner screenshots, 2026-06-19 — not code-extracted)
palette: paper white · pencil black · grey shading · selective hand-color
mood: playful, sketchbook, whimsical; an explorable pencil-drawn world
stack: WebGL 3D with an NPR pencil-sketch shader, first-person navigation, gamified, sound
tags: [npr, sketch, hand-drawn, webgl, first-person, explorable, gamified, playful, portfolio]
---

# ITOMDEV — recipe (visual)

A "creative developer" portfolio rendered as a **navigable 3D room drawn in pencil**. You walk a
first-person corridor between doors that are the site sections — content lives as doodles on the walls.

## Palette (approx)
- **Paper** `~#f4f3ef` ground/walls with a grain/noise texture.
- **Pencil ink** `~#1b1b1b` for all linework + grey hatching/shading.
- **Selective hand-color** for emphasis only: a warm **wood-brown** door, a **yellow** sticky note. Otherwise monochrome.

## Type
- **Hand-written marker** for the doodles and the `ITOM` wordmark — casual, imperfect.
- Code rendered AS doodles: `while(true){ explore(); }`, an `IDEA → DEV → BUG!` flow sketch.

## Grid & composition
- **First-person navigable 3D corridor** (WebGL): doors = sections (`ABOUT` with a smiley sticky, etc.), a small character avatar, hand-drawn furniture, floating code/idea sketches on the walls.
- **Top-right gamified icon cluster** (menu · sound · trophy) — achievements framing, drawn as torn-paper buttons.
- No scrollbar — you move/look to explore.

## Motion (inferred)
- Walk-through 3D (move + look). **NPR pencil-sketch shader** + paper grain over the whole scene. Hand-drawn elements animate; gamified rewards; ambient sound.

## Mood
Personal, charming, low-stakes fun — a sketchbook you can walk inside.

## When to use
Playful personal / creative-dev portfolios; "explorable world" concept sites; any time an **NPR hand-drawn** look + first-person exploration + light gamification beats a conventional scroll page.

## Gaps
Hexes, fonts, the sketch shader, and the navigation/physics are estimated from two screenshots — not code-verified. Needs a visual-capture / code pass to pin exact values.
