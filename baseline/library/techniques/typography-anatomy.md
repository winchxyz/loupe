---
technique: Typography anatomy — choosing & tuning type by its parts
section: typography
source: figma-resource-library/typography-anatomy.md
tags: [typography, font-selection, font-pairing, legibility, spacing, hierarchy]
apply-when: picking a typeface, pairing two fonts, or tuning spacing/weight for body copy, UI labels, or display headings
---

# Typography anatomy — applied build decisions

Core idea: a typeface is a set of measurable parts (x-height, counters, stems, terminals, serifs, spacing). Pick and tune type by those parts, not by vibe — the parts predict how it reads at a given size, screen, and contrast.

## Decisions by letterform structure
1. **For body copy and UI labels, choose a tall x-height with open counters.** These survive small sizes and low contrast; avoid display faces with tiny x-heights for anything under ~16px. (x-height and counter aperture drive small-size legibility.)
2. **Reserve high stroke-contrast faces (thin/thick) for large display only.** Hairline strokes vanish at body size and on low-DPI screens; use even-weight strokes for running text.
3. **Lean on weight, not size alone, to mark emphasis inline.** Bolder stems pull the eye — but over-bolding flattens hierarchy and hurts legibility, so keep one or two emphasis weights, not five.
4. **Match terminals, spines, and serif treatment to tone.** Slab/sharp serifs read structured and editorial; soft terminals and rounded forms read friendly. Choose the detail to fit the voice, then hold it consistently.

## Pairing two typefaces by anatomy (not by name)
5. **Pair on x-height first.** Two faces with similar x-heights sit together without one looking shrunken; if x-heights differ, size-correct the smaller so optical sizes match.
6. **Create contrast on ONE axis, harmony on the rest.** e.g. serif heading + sans body (contrast = serif presence) while x-height and proportion stay close. Contrasting everything at once reads as a mistake.
7. **Default safe pairing = one sans + one serif/slab from the article's classes.** Sans for UI/body (Roboto, Montserrat, Lato); serif/slab for display or editorial accents (Libre Baskerville, Roboto Slab). Script/handwriting (Dancing Script, Caveat) only as a sparing personality accent, never body or UI.

## Spacing & measurement (the space is half the design)
8. **Tune tracking to size and case.** Tighten large display headings slightly; add positive tracking to small caps / all-caps labels and tiny UI text so letters don't collide.
9. **Set leading (line-height) by line length and density.** Denser/longer lines need more leading; raise line-height on body paragraphs before assuming the font is the problem.
10. **Kern by character shape, not globally.** Diagonals (A, V, W), round counters (o, c), and stroke endings create uneven gaps — fix problem pairs rather than tracking the whole block.

## Cross-font consistency
11. **Align mixed fonts on baseline, cap height, and descender length.** When two faces share a line or grid, optically match these so nothing floats or sinks; this is what keeps a multi-font system from looking crooked.

## Build checklist
- [ ] Body/UI face has a tall x-height + open counters; verified at the actual smallest render size?
- [ ] Stroke contrast appropriate to size (no hairlines in body text)?
- [ ] Heading/body pair contrasts on one axis (e.g. serif vs sans) but matches x-height/proportion?
- [ ] Tracking adjusted for all-caps and tiny labels; leading set by line length?
- [ ] Emphasis carried by 1–2 weights, not a pile of sizes/styles?
- [ ] Mixed fonts aligned on baseline + cap height so nothing floats?

> Ties to our experience: TESQ/02b's matte-glass UI rides on Inter Tight at small sizes over busy WebGL — exactly the open-counter / tall-x-height + adequate tracking case rule 1 and 8 cover. And rule 11 (baseline/cap-height alignment) is the typographic version of our repos-table header bug: mismatched alignment across a shared grid reads as broken.
