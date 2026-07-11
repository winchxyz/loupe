---
technique: Wireframe vs. mock-up — pick the right fidelity for the stage
section: prototype-wireframe
source: figma-resource-library/wireframe-vs-mockup.md
tags: [wireframe, mockup, fidelity, process, information-architecture, handoff]
apply-when: deciding what fidelity to produce at each stage of a site/UI build, and what to lock vs. leave open
---

# Wireframe vs. mock-up — applied rules

Core idea: fidelity is a tool, not a goal. A wireframe answers *what goes where and in what order* (structure + flow, low fidelity); a mock-up answers *what it looks like* (visual design, high fidelity, static — no behavior). Match the artifact to the question you're actually trying to answer, and don't pay for polish before the structure is settled.

## The rules (each = a build decision)
1. Start at structure, not skin. Before touching color/type/imagery, lock page hierarchy, content order, and the user flow between screens. Resolve "what info does this screen need to move the user forward?" first — visual decisions made on a wrong skeleton get thrown away.
2. Keep wireframes grayscale on purpose. Strip color, real imagery, and final copy from a structure pass so reviewers critique layout and flow, not the shade of a button. Color in a wireframe invites the wrong feedback.
3. Use low fidelity to *generate* feedback; use high fidelity to *sell* a direction. For internal critique and user testing → low-fi (fast, disposable, focused). For investors/clients who need to picture the finished thing → high-fi wireframe or mock-up that builds the stronger case.
4. Treat wireframes as disposable. Make them, harvest the input, then let them go — don't sink effort polishing an artifact whose only job is to surface problems before they get expensive. Roll the feedback into the next iteration, not back into the wireframe.
5. A mock-up is form without function. It's a *static* render: buttons, colors, images, icons, text, typography, fonts — but no interaction or behavior. Validate the look here; defer behavior to the prototype stage. Don't conflate "the mock-up looks done" with "the product works."
6. Build the design system before the mock-ups, then re-use it. Establish tokens/components (color, type, buttons, icons) once, then assemble mock-ups from them. Re-using shared elements across screens is what keeps the visual design consistent and on-brand — and it's the fast path, not the slow one.
7. Let wireframe decisions feed the mock-up. The structure and flow you proved in low-fi are the brief for the high-fi pass — don't re-litigate layout while you're choosing typography.
8. Apply familiar UI patterns. In mock-ups, lean on conventions users already know and simplify the experience; novelty in interaction patterns is a cost, spend it deliberately.
9. Sequence the whole pipeline: wireframe (structure/discovery) → mock-up (visual design/validate) → high-fidelity prototype (behavior) → dev handoff. Each stage validates one layer so the next stage isn't built on an unverified one.

## Build checklist (use when starting or reviewing a screen)
- [ ] Is the page hierarchy, content order, and flow settled before any visual styling started?
- [ ] Is this artifact's fidelity matched to its audience (low-fi to gather feedback, high-fi to win buy-in)?
- [ ] Is the wireframe still grayscale/placeholder, so critique lands on structure not color?
- [ ] Is the mock-up purely visual (no behavior promised that isn't built)?
- [ ] Are mock-up elements pulled from a shared design system / re-used components, not re-styled per screen?
- [ ] Did wireframe feedback get carried forward — and the wireframe itself set aside, not polished?

> Ties to our experience: matches our own "style means structure, not skin" rule — the owner rejected CSS-skin "styles" and required each visual style be built as its own full structural layout, exactly the wireframe-before-mock-up sequencing above (lock structure/flow, then skin from a shared system).
