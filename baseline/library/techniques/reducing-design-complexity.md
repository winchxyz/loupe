---
technique: Reducing design complexity (simplify a busy screen)
section: ui-ux-principles
source: figma-resource-library/reducing-design-complexity.md
tags: [simplicity, layout, content, progressive-disclosure, forms, accessibility]
apply-when: a screen feels overloaded — too many fields, controls, or words competing at once (forms, login, dense hero, settings)
---

# Reducing design complexity — applied rules

Core idea: a screen that shows everything at once overwhelms the user. Simplicity is not a default you fall into — it takes deliberate iteration. The job is to subtract, shorten, and sequence until only what the user needs *right now* remains. "Simple is not always easy."

## The rules (each = a build decision)
1. Cut, don't decorate — remove any element that doesn't serve an essential function for this step. The first pass on a busy screen is deletion, not restyling. If you can't name why an element is on screen, it goes.
2. Shorten the words — edit every label, helper text, and heading to be shorter or more valuable. Prefer one concrete sentence over three hedging ones. Long copy is complexity wearing a different hat.
3. Sequence instead of stacking — when one screen carries too much, break it into multiple steps the user moves through over time (progressive disclosure). A 3-step flow with 3 fields each beats one wall of 9 fields.
4. Use accessible, audience-matched language — drop jargon; write for the actual user (a bank's customer, not a banker). Plain language *is* a complexity reduction, not just a tone choice.
5. Let color and shape do organizing work — choose a restrained palette and consistent shapes so structure reads at a glance; don't add visual noise to "fill" the simplification you just earned by deleting.
6. Expect iteration, not a one-shot win — simplicity is hard to define and measure; don't expect to nail it the first pass. Redesign, view it fresh, cut again. Treat "still too busy?" as a recurring review question, not a one-time check.
7. Reuse a proven simple pattern — when you have a working simplified flow (e.g. a clean login), make it the template for the next product's version of the same screen instead of re-deriving from scratch.

## Build checklist (use when a screen feels heavy)
- [ ] Can I name an essential function for every element on screen? (if not, delete it)
- [ ] Is every label/helper text as short as it can be while staying valuable?
- [ ] Would splitting this into sequential steps lighten any single view?
- [ ] Is the language plain and matched to the real user, not insider jargon?
- [ ] Are palette and shapes restrained enough that structure reads instantly?
- [ ] Did I look at it fresh and ask "still too busy?" at least once after the first cut?

> Ties to our experience: 02b's matte stacked-blur glass UI and 5-block section concept lean on this — the section-design phase keeps the blocks but upgrades their structure rather than piling on chrome, and the "style = structure, not skin, legibility-first" directive is rule 1 and 5 in practice.
