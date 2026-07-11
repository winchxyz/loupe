---
technique: High-fidelity prototyping
section: prototype-wireframe
source: figma-resource-library/high-fidelity-prototyping.md
tags: [prototyping, fidelity, interaction, user-testing, motion, workflow]
apply-when: building a polished interactive proof of a flow late in the design process, when direction is already validated and you need real feedback or sign-off
---

# High-fidelity prototyping — applied rules

Core idea: a hi-fi prototype is a *polished simulation of the final product* — real content, real visual detail, real interactivity. It earns its cost only late, after the concept is validated; use it to extract usability feedback, win stakeholder buy-in, and de-risk the build, not to explore "what if."

## Build decisions

1. Match fidelity to stage — avoid hi-fi too early. Lo-fi (paper, wireframes) for exploring concepts; switch to hi-fi only once direction is validated and you're refining/de-risking before development. Spending hi-fi effort on an unvalidated idea is wasted polish.
2. Use real content, not lorem/placeholders. The whole point is "look and feel of the end product." Swap dummy copy, images, and data for the real thing so feedback is about the actual experience, not the placeholders.
3. Make it actually clickable, not a static comp. The defining gap between lo-fi and hi-fi is interactions, animations, and transitions — build the real interactive states (hover, overlays, navigation), because immersion is what yields deep usability feedback.
4. Pick ONE user flow and finish it end-to-end. Step 3 says start from detailed mock-ups of *a* user flow — depth over breadth. A complete, believable single path beats many half-built screens for both testing and sign-off.
5. Decide the prototype's goal before building (Step 1). Define purpose and objectives up front (research findings, a sign-off, a usability question) so you build only the interactions that serve it.
6. Scope interactions to what testers/stakeholders need (Step 2). Identify the key features and interactions that carry the experience; don't gold-plate states no one will exercise in testing or review.
7. Pull from a design library / system, not ad-hoc styles. Step 3 assembles assets, interactions, and transitions from a shared library — reuse tokens/components so the prototype is consistent and the polish transfers toward production.
8. Use advanced behavior (conditional logic, dynamic overlays, rich media) only where realism demands it. Animated GIFs/MP4, conditional branches, and overlays raise realism — add them where they make the simulation honest, not as decoration.
9. Close the loop: test, then refine. The prototype isn't the deliverable — feedback is. Run user testing, show stakeholders, and iterate the design from what you learn before any code is written.

## Build checklist

- [ ] Direction already validated — is hi-fi the right fidelity for this stage, or is a wireframe enough?
- [ ] One specific goal stated (feedback question, sign-off, flow validation) before building?
- [ ] Real content and real visual detail in place — no placeholder copy/images?
- [ ] At least one full user flow clickable end-to-end with real interactions/transitions?
- [ ] Assets and interactions pulled from a shared library/design system, not one-offs?
- [ ] Advanced behavior (conditional logic, overlays, rich media) added only where it earns realism?
- [ ] A plan to test it and feed results back into a refinement pass?
