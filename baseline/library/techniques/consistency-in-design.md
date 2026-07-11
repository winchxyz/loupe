---
technique: Consistency in design (cohesive systems)
section: ui-ux-principles
source: figma-resource-library/consistency-in-design.md
tags: [consistency, design-system, layout, typography, color, tone]
apply-when: building a multi-section/multi-screen site so every view reads as one continuous product
---

# Consistency in design — applied rules

Core idea: customers learn your interface once, then reuse that memory on every other screen. Consistency makes a product feel familiar and intentional; a deliberate BREAK of consistency is the cheapest way to create emphasis. The job is to keep everything cohesive, then break the pattern only where you want attention.

## The rules (each = a build decision)
1. Lock object positions across screens — keep recurring elements (nav, menu button, titles) in the SAME place on every view. A title 100px from the top on one screen sits 100px from the top on all of them. Don't let a shared element drift between sections.
2. Reuse established patterns — put the menu in a top corner, follow Material / Apple HIG conventions for common controls. Don't reinvent a control the user already knows; borrowed familiarity = zero learning cost.
3. Cap the type system at 2–3 type styles for the whole product. A 4th+ style reads as busy/unstructured. Add a typeface only for deliberate differentiation, and make it still feel inside the family.
4. Cap the palette: one primary + one secondary + a few tones of each + black/white. More colors are possible but get harder to control with every addition — default to fewer.
5. Keep density and "air" consistent screen-to-screen — if the homepage is airy with whitespace, don't make the product page dense and cramped. A radical visual shift makes users think they left the site.
6. Align to a shared left margin / baseline — line up logo, image, header, body text to the same vertical edge so the eye flows down the page and the layout reads as considered, not accidental. Use guides + Alt-drag distance checks to verify equal spacing.
7. Keep one voice in the copy — match interface tone across all screens. Enterprise/formal landing page → don't go casual-and-punny on inner pages. Tone is part of consistency, like color and font.
8. Break consistency ONLY to emphasize — deviation from the established pattern is what the brain notices. Indent a quote, shift a hero, vary one element to pull the eye. Use it intentionally, sparingly.
9. Don't stack emphasis — one signal is enough. Indenting AND bold AND red AND italic AND larger is overkill; pick one. "If everything is bold, nothing is bold" — the AMOUNT you emphasize matters as much as how.
10. Consistency serves the user, not itself — if a rigid system stops you solving a real customer problem, break it. It's a balance, not a law; user needs win over system purity.

## Build checklist (use when reviewing a layout)
- [ ] Recurring elements (nav, titles, CTAs) in the SAME position on every screen?
- [ ] Type styles ≤ 3 across the whole product?
- [ ] Palette = 1 primary + 1 secondary + tones + B/W, no creeping extras?
- [ ] Density/whitespace feel continuous from one section to the next?
- [ ] Shared left margin / baseline alignment across logo, headers, body?
- [ ] Copy tone consistent (one voice) across all views?
- [ ] Each emphasis is a single deliberate break, not a stack of effects?

> Ties to our experience: PAIN.md's repos-table header misalignment broke exactly rule 6 (a shared column edge that drifted), and the per-cell stagger that read as crooked was an unintended consistency break (rule 8 in reverse — deviation drew the eye to the wrong thing).
