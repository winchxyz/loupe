---
technique: Golden ratio (phi proportioning)
section: ui-ux-principles
source: figma-resource-library/golden-ratio.md
tags: [layout, typography, spacing, hierarchy, logo, proportion]
apply-when: setting a type scale, sizing layout columns/sections, or proportioning a logo when you want harmony without arbitrary numbers
---

# Golden ratio (Φ ≈ 1.618) — applied rules

Core idea: phi is a ready-made proportioning constant, not a mandate. Reach for it to derive sizes/spacing from each other instead of guessing — it gives a layout coherent rhythm without you inventing a magic number per element. Treat it as a STARTING grid you then correct for usability, never a law you obey past legibility.

## The rules (each = a build decision)
1. Derive the type scale by phi, don't hand-pick sizes — pick a base (e.g. body 16px) and step by ×1.618: 16 → 26 → 42 → 68. Use it for the *ratio between* heading levels, then round to clean px. Don't apply phi to every micro-step; it gets too aggressive for dense UI — use a gentler ratio (1.2–1.33) for tight scales and reserve 1.618 for hero/display jumps.
2. Set leading and major spacing off the same constant — line-height and big section gaps scaled by phi (or 1/phi) inherit the type rhythm, so vertical spacing reads as deliberate, not random.
3. Split a two-pane layout at 1:1.618, not 1:2 — for content+sidebar or hero+aside, divide the width by phi: a 1000px frame → 618 / 382. The asymmetric split reads more "designed" than a 50/50 or 2:1 and gives the dominant pane clear primacy.
4. Build the proportion as a recursive ladder — each step = previous / 1.618 (1000 → 618 → 382 → 236). Reuse those exact numbers for column widths, card sizes, indents, and inset spacing so the whole page shares one number family.
5. Place the focal point where phi divides the frame, not dead-center — the ~0.618 line (horizontal or vertical) is the natural resting spot for a CTA, headline, or hero subject. Combine with rule-of-thirds: put the focal point where the phi line meets a thirds gridline.
6. Proportion logos/marks with phi circles or rectangles — size and space mark elements (counter, stroke, padding around the glyph) on overlapping golden circles so the mark stays balanced and scales cleanly across sizes/formats.
7. Use phi for STRUCTURED ASYMMETRY, symmetry for the frame — keep the overall layout symmetric/aligned, then let phi proportion the internal details. Don't make everything golden; the contrast is what reads as intentional.
8. Know when to drop it — abstract, extremely minimalist, or data-dense layouts gain nothing from phi, and it must never win over readability, tap-target size, or accessibility. Practical needs and contrast/accessibility override the ratio every time.

## Quick reference numbers
- Ratio: 1 : 1.618 (and its inverse 0.618).
- Descending ladder from 1000: 1000 → 618 → 382 → 236 → 146.
- Type scale ×1.618 from 16: ~16 / 26 / 42 / 68 (round to taste).

## Build checklist (use when proportioning a layout or scale)
- [ ] Is the type scale derived from a single ratio rather than ad-hoc sizes (phi for display jumps, gentler ratio for dense steps)?
- [ ] Do column / pane splits use 0.618 rather than a default 50/50 or 2:1 where asymmetry is wanted?
- [ ] Do spacing and section gaps come from the same number family as the type scale?
- [ ] Is the primary focal point near a phi (or phi×thirds) line, not centered by default?
- [ ] For a logo/mark: are element sizes and padding proportioned so it scales cleanly?
- [ ] Did I stop short of forcing phi where it hurts readability, tap targets, or accessibility?

> Ties to our experience: maps to 02b's matte-glass UI sizing — the sticky-pinned section headings, card scale, and hero type jumps want a single proportional family rather than per-section guesswork; a phi-derived type/spacing scale is the kind of one-source-of-truth that prevents the column-similarity drift we hit in the repos-table header bug.
