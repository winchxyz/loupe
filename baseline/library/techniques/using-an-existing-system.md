---
technique: Building within an existing design system
section: ui-ux-principles
source: figma-resource-library/using-an-existing-system.md
tags: [design-system, components, consistency, constraints, ui, scalability]
apply-when: assembling multiple screens/sections of one product so they read as a single cohesive experience
---

# Building within an existing design system — applied rules

Core idea: a design system is a fixed kit of reusable parts (buttons, icons, type styles, colors, spacing) you assemble "like LEGO bricks" — the constraint IS the feature. Cohesion across many screens comes from reusing the same vocabulary, not from inventing a fresh element each time you hit a new need.

## The rules (each = a build decision)
1. Assemble, don't invent — build every screen from the existing component set; reach for a defined button/icon/type style before drawing a new one. If the kit can express it, the kit wins.
2. Lock the categories — for buttons, icons, and type styles, use ONLY what the system defines. Do not add a second variant of the same kind (a one-off button shape, an off-system icon set, a bespoke heading size). Expanding the vocabulary arbitrarily breaks the system.
3. Photos are the one escape hatch — content imagery may go beyond the kit because photos are payload, not structure. Everything structural (controls, typography, color) stays on-system.
4. Design for the set, not the screen — aim for "one cohesive experience" across all screens at once; judge any single screen by whether it still feels like the same product as the other nine, not in isolation.
5. Reuse is the consistency mechanism — visual + functional consistency is a side effect of pulling from one source of truth. Same role → same component; a different look should mean a genuinely different role.
6. Constraint enables speed + scale — because the parts are pre-built and shared, you compose fast and the result stays brand-coherent. Treat "I need a new element" as a signal to first prove the existing kit truly can't do the job.
7. To extend the system, stop and decide deliberately — if a real gap exists, add it to the system as a named, reusable component (so it's available everywhere), never as a silent local one-off on a single screen.

## Build checklist (use when assembling screens)
- [ ] Every button / icon / type style on this screen comes from the defined kit (no one-off variants)?
- [ ] Same role rendered with the same component everywhere; different look means a different role?
- [ ] Only photos/content images go off-kit; all structural UI stays on-system?
- [ ] Set viewed together — do all screens read as one product, not a pile of unrelated pages?
- [ ] Any genuinely-new element promoted into the system as a reusable token/component, not a local hack?
- [ ] Spacing, color, and typography pulled from shared tokens rather than ad-hoc values?

> Ties to our experience: matches the 02b/TESQ matte stacked-blur glass UI being one settled component vocabulary reused across the water → space → sun journey; the PAIN.md repos-table header misalignment was exactly an off-system one-off breaking the shared column grid's consistency.
