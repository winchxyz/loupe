---
technique: UX storyboarding (map the flow before building it)
section: ui-ux-principles
source: figma-resource-library/how-to-create-a-ux-storyboard.md
tags: [ux, user-flow, planning, journey, ideation, scroll-narrative]
apply-when: before building any multi-step flow or scroll-journey — to lock the sequence, states, and emotional arc on paper before writing a line of layout
---

# UX storyboarding — applied build rules

Core idea: a storyboard is the cheapest place to fix a flow. Sketch the user's path as numbered panels FIRST, get it wrong on paper, and you avoid getting it wrong in built UI. For our work the panels ARE the scroll sections / journey beats — storyboard them before coding the pin sequence.

## The rules (each = a build decision)
1. **One goal per board.** Pick a single flow (checkout, signup-upgrade, the water→space→sun journey) and storyboard only that. If research surfaces several problems, make several boards — never cram them into one tangled story.
2. **Choose the goal before the fidelity.** Decide first whether the board is for your own ideation, for stakeholder review, or for handoff — that decision dictates fidelity. Don't default to pretty.
3. **Start LOW fidelity; ban polish.** First-pass panels are stick figures, boxes, and arrows — no color, no font choices, no pixel-perfect layout. The point is "does the sequence work," and polish at this stage hides flow problems and burns time you'll redo anyway.
4. **Escalate fidelity only to persuade decision-makers.** Add real layouts / screenshots / prior design artifacts only when the audience needs to picture the scene. Reuse existing assets instead of redrawing from scratch.
5. **Match aspect ratio to the medium.** Horizontal panels for desktop layouts and for full-body "how the user feels" beats; vertical panels for mobile flows. Decide this up front so the board reads like the thing you're building.
6. **Pick the starting panel by focus.** If the board is about UI and interactions, open on the user's *first interaction with the product*. If it's about journey and emotion, open *before* they touch the product (the problem state). Wrong entry point = the whole arc misframes.
7. **One protagonist, stated explicitly.** Name the hero and write their job, goal, blocker, and how the product helps. Multiple personas → multiple boards, never one shared cast.
8. **Write the scenario as ONE sentence** that bakes in the external constraint, e.g. "A user with low vision uses the zoom feature while checking out." The constraint in the sentence is what keeps the design honest (accessibility, hardware, context).
9. **Walk the real flow before drafting**, then write each step down: notifications, screen-to-screen navigation, form submits, dropdown selections. Each discrete interaction = one panel; a missing interaction = a missing panel = a gap users will fall into.
10. **Annotate the emotional arc, not just the clicks.** Per panel, note the user's changing feeling (anxious → relieved) or a real research quote. The arc must resolve: it has to be visibly clear how the product moved them from problem to "happy ending."
11. **Panel anatomy is fixed:** numbered title + caption + main sketch + arrows/annotations for flow between panels. Number every panel — the numbers ARE the order, and they survive reordering.
12. **Review for flow defects, then cut and patch.** Hunt panels that don't flow, feel too busy, or confuse. Add panels for missing steps; delete redundant ones. A dense panel is a smell that one beat is doing two jobs — split it.

## Don't confuse it with neighbors (pick the right artifact)
- **Storyboard** — ONE flow, sequential, emotion + interaction. Use to plan a journey before building.
- **Wireframe** — page/component structure and layout. Comes *after* the board.
- **User journey map** — the whole multi-phase relationship, not one process.
- **Use case** — multiple branching flows; storyboards stay single-path.
- **Empathy map** — feelings/behaviors of a user, not a step sequence.

## Build checklist (tick before you start coding a flow)
- [ ] Single goal stated; extra goals split into their own boards?
- [ ] Fidelity chosen from audience (ideation / review / handoff), starting low?
- [ ] One named protagonist + a one-sentence scenario carrying the real constraint?
- [ ] Every interaction has its own numbered panel — no implied/missing steps?
- [ ] Aspect ratio (horizontal desktop / vertical mobile) matches the target?
- [ ] Emotional arc annotated and visibly resolved by the last panel?
- [ ] Reviewed for busy/confusing/redundant panels and patched?

> Ties to our experience: storyboarding the 02b water→space→sun scroll as numbered panels — each with its scenario, the user's feeling, and the interaction — is exactly the cheap-paper pass that would catch a missing or out-of-order pin section before we build it, the same class of gap our PAIN.md verification-coverage misses (a mode left untested, the wrong frame trusted) keep biting in the built site.
