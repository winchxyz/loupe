---
technique: App design end-to-end (idea -> wireframe -> prototype -> ship)
section: prototype-wireframe
source: figma-resource-library/how-to-design-an-app.md
tags: [wireframe, prototype, user-flow, information-architecture, mvp, mobile]
apply-when: scoping or structuring a new app/site before visuals, and deciding what to build first vs defer
---

# Designing an app — applied build decisions

Core idea: lock the structure (problem -> flow -> wireframe) BEFORE touching visuals. Every feature must trace back to one primary goal; cut anything that doesn't. Visuals and motion come last and serve usability, not decoration.

## Rules (each = a build decision)
1. Anchor on ONE primary purpose first. Write the "why" (who it's for, what they accomplish, what's missing elsewhere) before any layout. Use it as the cut-line for every later feature.
2. Define the audience, then build a persona, then check design decisions against it. If you can't name who a screen serves, don't design it yet.
3. Feature-trace: every feature must support a user task or improve the experience — if not, it's not in v1. Don't ship a feature because it's common; ship it because the goal needs it.
4. Prioritize with MoSCoW — must / should / could / won't-have. Launch the must-haves only; fewer features = less interface clutter and a clearer path to the key action.
5. Wireframe structure before style: nail each screen's main goal, content hierarchy, and interaction points first. Keep wireframes editable and low-fidelity — they exist for alignment, not commitment.
6. Design flows, not isolated screens. Outline key paths (e.g. browse -> add to cart -> checkout), then map screens onto each path so interactions are designed in order.
7. Apply information architecture deliberately: decide what belongs together and how users find it. Use card sorting to match users' mental model; pair it with clear labels, intuitive navigation, and search + filters + related suggestions.
8. Make the color palette do a job — drive hierarchy and signal intent, not just brand. Match hue to purpose: calming blues for relaxation/focus, energetic/urgent red for appetite + speed. Pick the emotional read first, then the swatch.
9. Typography must stay readable across every screen size before it's allowed to be expressive. Legibility is the gate.
10. Add motion only as feedback. Hover states, micro-interactions, and small animations (animated heart on like, color shift on hover) confirm an action and give instant feedback — they earn their place by improving usability, not by existing.
11. Prototype to validate, not to polish. A prototype is a rough draft of core flows, interactions, and transitions — just enough to test whether the design holds up when real people use it, before any code.
12. Ship an MVP of the core experience, test with real users, then iterate. Launch is the start, not the end: track what's used vs ignored, where users drop off, and what reviews flag; keep updating.
13. Friction-log your own product ("walk the store"): have different people run the real flows to surface confusion points before users hit them.
14. Choose the app type up front because it dictates the stack: native (best perf, per-OS cost), cross-platform (one codebase), hybrid (web tech in a native shell), or PWA (browser, easy deploy, lighter feature set).

## Build checklist (use when scoping/structuring a build)
- [ ] One stated primary purpose written down; every feature traces back to it?
- [ ] Features bucketed must/should/could/won't — and is v1 only the must-haves?
- [ ] Wireframe locks goal + hierarchy + interaction points per screen, still low-fidelity?
- [ ] Key user flows mapped end-to-end (not screens in isolation)?
- [ ] IA matches the users' mental model (labels, nav, search+filters) — verified, not assumed?
- [ ] Palette assigned by intent/emotion and type readable at the smallest target size?
- [ ] Motion present only where it gives feedback on a real action?
- [ ] Tested with real users on the core flow before broad launch?

> Ties to our experience: matches our pilot discipline — define the problem and lock structure before visuals (02b's art-direction book preceded the section-UI work), and our motion-as-feedback rule echoes the per-cell stagger PAIN.md miss where animation that didn't reinforce a real grouping read as broken.
