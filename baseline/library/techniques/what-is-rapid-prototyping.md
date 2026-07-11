---
technique: Rapid prototyping (fast, narrow validation builds)
section: prototype-wireframe
source: figma-resource-library/what-is-rapid-prototyping.md
tags: [prototyping, fidelity, scoping, iteration, validation, workflow]
apply-when: deciding how fast/rough to build a screen or feature to test an idea before committing full effort
---

# Rapid prototyping — applied rules

Core idea: build the smallest testable version that proves whether an idea holds up, in hours-to-days not weeks. The deliverable is a verdict on one idea, NOT a finished product. Optimize for speed of feedback, not polish.

## The rules (each = a build decision)
1. Scope to ONE idea — build a single feature or one user flow, never the whole journey. If a piece doesn't serve the original question, cut it and log it for a later cycle. (Scope creep is the #1 failure: a checkout flow that grows account-creation + error states + settings.)
2. Match fidelity to confidence — start low (grayscale sketches / wireframes) and add polish only as the flow firms up. Don't build high-fidelity before the flow or feature is confirmed; premature fidelity is wasted time.
3. Default to medium fidelity for working prototypes — key interactions + some design, assembled from reused components and drag-and-drop. Reserve high fidelity for user tests that need authentic reactions and only when a component library already exists.
4. Separate aesthetics from function — use unstyled grayscale elements so reviewers judge the experience, not the brand color or copy. Strip styling deliberately when the test is about flow.
5. Build from modular, reusable parts — buttons, cards, nav patterns as components you assemble, not rebuild. Reuse is what makes "rapid" actually rapid.
6. Schedule the test BEFORE you build — decide what you're testing and when you'll test it first; weak feedback comes from prototyping then scrambling to find testers. Capture what users say, where they hesitate, what surprises them, each iteration.
7. Frame the test for stakeholders up front — state what's intentionally incomplete (placeholder copy, missing brand colors) so reviewers evaluate the flow, not the polish. A five-minute walkthrough settles debate better than slides.
8. Don't ship the prototype — rapid/AI-generated builds carry technical debt and aren't production quality. Resist shipping early; gate a real QA pass before any of it goes live.

## Build checklist (use when reaching for a quick build)
- [ ] One feature / one flow only — anything off-goal cut and parked for later?
- [ ] Fidelity matched to confidence — starting rough, not jumping to high-fi?
- [ ] Function vs. aesthetics separated — grayscale when the test is about flow?
- [ ] Assembled from reusable components, not rebuilt from scratch?
- [ ] Test plan (who/when/what) set BEFORE building, with reactions logged?
- [ ] Stakeholders told what's intentionally unfinished before the walkthrough?
- [ ] Prototype code quarantined from production until a real QA pass?

> Ties to our experience: 02b's cube-layout work followed this — four cube-visibility concepts each built on its own isolated dev-site (02b-cube-A1/A2/B1/B2) with the baseline untouched, awaiting the owner's pick. That's rule 1 (one idea per build) plus rule 8 (don't ship the experiment into prod) in practice.
