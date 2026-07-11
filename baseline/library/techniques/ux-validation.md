---
technique: UX validation (stress-test interaction patterns early)
section: prototype-wireframe
source: figma-resource-library/ux-validation.md
tags: [prototyping, edge-cases, responsive, states, validation, accessibility]
apply-when: before calling any flow/section/component "done" — verify it holds up under real data, every state, and every viewport
---

# UX validation — applied build rules

Core idea: a layout that looks perfect in a settled, happy-path frame still hides the failures users actually feel. UX validation is NOT "do users understand it" (that's usability/concept testing) — it's "does the design itself hold up under real data, every state, and every viewport." Catch a logic break during design = minutes; catch it mid-build = days.

## The rules (each = a build decision)
1. Push past the happy path before declaring done — explicitly exercise error, empty, loading, and success states for every interactive element, not just the nominal one. A component that works at rest is not a component that works.
2. Stress-test count, not just presence — design a nav/list/menu so it survives 3 items AND 15+; a card grid that's clean with short labels must stay clean when labels and product names run long. Decide overflow/wrap/truncate behavior up front.
3. Feed it realistic, messy data — long names, failed image loads, a 50-item list where you mocked 5, a pasted paragraph in a single-line field. If a component breaks on a long label or collapses when the list is empty, fix it now.
4. Validate the in-between, not just start/end states — hover effects, loading sequences, transitions, error states, and dismissal behavior (what happens when a modal is dismissed mid-form?) all need explicit design. Unspecified = a judgment call someone makes later, badly.
5. Test every viewport for spacing and containment — modals overlapping content, form layouts collapsing at small widths. Responsive failures are containment failures; verify the small viewport, don't assume it.
6. Build a control panel to switch states on the fly — wire toggles/variables for user state, permissions, locale, and UI treatment so you can flip through loading/error/empty/success without rebuilding separate flows. One flow, all states, instantly inspectable.
7. Pressure-test localization as its own axis — translated copy changes length, currencies and number formats change, regional conventions shift. Compare market variants side by side instead of assuming one layout generalizes.
8. Run a heuristic audit without recruiting anyone — walk the interaction patterns against known usability principles (e.g. Nielsen's 10) to surface inconsistencies and logic gaps cheaply, before any user session.
9. Audit accessibility early, not at handoff — screen-reader, keyboard-nav, and assistive-tech support cost far more to retrofit; bake it into validation, don't bolt it on.
10. Validate continuously, not at the handoff gate — technical blockers surface the night before handoff or mid-sprint when there's no room to redesign. Validate as you go so the heavy fix never lands at the worst moment.

## Build checklist (tick while validating a flow/section)
- [ ] Every interactive element exercised in error / empty / loading / success — not just the resting state
- [ ] Tested with messy real data: long names, missing images, an over-full list, pasted-paragraph input
- [ ] Nav/list/grid survives both the minimum and a large item count
- [ ] In-between moments (hover, transition, dismissal, mid-form interrupt) explicitly designed
- [ ] Checked at small viewport: no modal overlap, no collapsed form layout
- [ ] Localization sanity-checked if copy/currency/format can vary
- [ ] Keyboard + screen-reader path works (not deferred to handoff)

> Ties to our experience: this is exactly our PAIN.md verification-coverage failure mode — trusting a settled frame, checking the wrong CSS property, leaving a mode untested, shipping off a clipped screenshot. Rules 1, 4, and 6 (exercise every state via a control panel, never trust one frame) are the direct antidote; on 02b that means flipping every perf tier and ?perf/?poster/?review mode, not eyeballing the default look once.
