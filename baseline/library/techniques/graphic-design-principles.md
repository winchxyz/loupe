---
technique: 13 graphic design principles (composition fundamentals)
section: ui-ux-principles
source: figma-resource-library/graphic-design-principles.md
tags: [layout, visual-hierarchy, composition, color, spacing, ui]
apply-when: composing any screen, section, hero, or component when you need structure, focus, and cohesion to read instantly
---

# 13 graphic design principles — applied rules

Core idea: a layout reads as "designed" when visual weight, spacing, and repetition are deliberate. Each principle below is a lever; pull the few that fix the specific weakness in front of you, not all 13 at once.

## The 13 rules (each = a build decision)
1. Alignment — pin every element to a shared edge, center, or baseline; run one layout grid per frame and let nothing float off it. Default text left-aligned (LTR reading order); a stray off-grid element reads as a bug.
2. Contrast — make the one thing that matters obviously different (size, weight, color, texture, shape). Push contrast hard on the CTA / hero; do NOT contrast everything or the page turns to noise.
3. Balance — distribute visual weight on purpose. Choose symmetrical for calm/formal, asymmetrical for dynamic/editorial; counterweight a heavy block on one side with whitespace or a lighter cluster on the other.
4. Hierarchy — rank content by importance, then place + style top-down: most important biggest/highest/boldest, supporting detail smaller/lower/lighter. One primary message per view.
5. Color — pick a palette from theory (complementary/analogous on the wheel) AND psychology (intended mood), never at random. Lock accessible contrast so color-blind users still distinguish states — never encode meaning by hue alone.
6. White space — treat negative space as an active tool, not leftover. More whitespace for minimal/premium feel, less for dense/utility UIs; set uniform padding/gaps so breathing room is consistent, not accidental.
7. Proportion — size elements relative to each other so weight signals importance; bigger = more important. Keep type/icon/logo ratios harmonious (logo mark complements wordmark, neither overpowers); exaggerate only for deliberate, playful effect.
8. Repetition — reuse the same colors, type, shapes, and spacing across the build via tokens/components. Repetition is what makes a set of screens feel like one product and builds brand recall.
9. Rhythm — control the spacing between repeated elements. Regular (even cadence) for structured grids; flowing/progressive (curves, gradual change) for movement and energy; random only when chaos is the intent.
10. Movement — steer the eye along a deliberate path. Lay key content on a known scan pattern (Z-pattern for sparse pages, F-pattern for text-dense, layer-cake for sectioned content) so the important beats land where eyes already go.
11. Emphasis — establish exactly one focal point per view and make it win using color/contrast/whitespace/proportion together. If two things shout, neither is heard.
12. Proximity — group related items tight, push unrelated groups apart; spacing IS the relationship signal (nav links cluster, unrelated blocks get a wide gutter). Don't let a gap lie about what belongs together.
13. Unity — the audit pass: consistent colors/fonts/shapes + correct proximity + one grid = a composition that feels whole. If it feels "off," one of the above is being violated.

## Build checklist (tick while composing)
- [ ] Every element sits on one shared grid/baseline (alignment); nothing floats off it
- [ ] Exactly one focal point per view, and it visibly wins (emphasis + contrast)
- [ ] Top-to-bottom order matches importance order (hierarchy)
- [ ] Related items grouped tight, unrelated ones clearly separated (proximity)
- [ ] Spacing/padding is uniform and intentional, not leftover (white space + rhythm)
- [ ] Colors, type, and components are reused via tokens, not re-invented per screen (repetition + unity)
- [ ] Color carries accessible contrast and never encodes meaning by hue alone (color)

> Ties to our experience: PAIN.md's per-cell stagger that read as crooked was a rhythm/alignment break (repeated cells lost a consistent cadence and shared baseline), and the repos-table header misalignment broke alignment + proximity (the column grouping stopped reading as one unit).
