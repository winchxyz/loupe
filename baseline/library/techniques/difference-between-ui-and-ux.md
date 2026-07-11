---
technique: UI vs UX — separating interface craft from experience design
section: ui-ux-principles
source: figma-resource-library/difference-between-ui-and-ux.md
tags: [ux, ui, process, information-architecture, research, accessibility]
apply-when: scoping any build — deciding whether a complaint is a UI fix or a UX/structure problem, and sequencing the work
---

# UI vs UX — applied rules

Core idea: UI is a specialized SUBSET of UX. UI is the look/feel/interactivity of a single screen; UX is the user's whole journey through the product. When something feels wrong, first decide which layer it lives in — a restyle won't fix a broken flow, and a perfect flow won't survive a sloppy interface. Build the experience skeleton before you polish the surface.

## Rules (each = a build decision)

1. **Diagnose the layer before you touch code.** "It feels off" splits two ways: is it the *interface* (color, type, spacing, button states on this screen) or the *experience* (the journey, where things live, what comes next)? Fix the matching layer — never restyle a screen to paper over a navigation/flow problem.
2. **Lock layout as deliberate decisions, not defaults.** Header position and white-space amount are explicit choices, not accidents. Make the organization read intuitively so the user never has to think about *where* things are.
3. **Treat color + type as a system, judged on three axes: consistency, accessibility, brand alignment.** Don't pick a font/color because it looks nice in isolation — verify it's consistent across screens, passes contrast, and matches the brand. All three, every time.
4. **Style interactive elements so the flow is self-evident.** Buttons, dropdowns, menus should make the next action obvious. If a user has to hunt for how to proceed, the interactive styling failed.
5. **Don't ship low-fidelity as final.** Wireframes/prototypes are throwaway scaffolds; convert them to high-fidelity, functional, interactive mockups before they count as done. Verify the polished state, not the sketch.
6. **Front-load research; let it set the structure.** Know the audience's likes, pain points, and behavior before laying anything out. Build for a concrete user persona, not an imagined average.
7. **Draw the information architecture before wireframes.** Map navigation, content hierarchy, features, and key user flows (a flowchart of decision points) first. The IA blueprint exposes gaps and missing features *before* you've spent effort styling them.
8. **Run Morville's 7-question UX gate before calling it done.** For the product/page ask: useful? usable? desirable? findable? accessible? credible? valuable? A "no" on any one is a real defect, not a nice-to-have.
9. **Cover responsiveness and accessibility as core skills, not afterthoughts.** These are exactly what a static/graphic-design instinct misses. A pretty desktop frame that breaks responsive or fails accessibility is unfinished.
10. **Plan for ongoing updates driven by analytics.** Launch isn't the end. Watch back-end signals (e.g. a long checkout → high cart abandonment) and streamline the offending steps. Let real behavior, not taste, trigger changes.

## Build checklist
- [ ] Classified the issue/task as UI (surface of one screen) or UX (journey/structure) and aimed the fix at that layer?
- [ ] IA / user flow mapped before any styling, with gaps surfaced?
- [ ] Color and type checked on all three axes — consistency, accessibility, brand?
- [ ] Interactive elements make the next step obvious without hunting?
- [ ] All fidelity raised to high-fidelity functional state — no leftover wireframe placeholders shipped?
- [ ] Passed Morville's 7 questions (useful/usable/desirable/findable/accessible/credible/valuable)?
- [ ] Responsive + accessibility verified, not assumed?
