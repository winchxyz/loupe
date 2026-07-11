---
technique: UX design principles & process (the seven principles)
section: ui-ux-principles
source: figma-resource-library/what-is-ux-design.md
tags: [ux, usability, accessibility, hierarchy, consistency, user-control]
apply-when: structuring any site/UI's flow, navigation, and interaction model so it reads as intuitive, not just pretty
---

# UX design — applied rules

Core idea: UX is the *overall experience*, not the skin. UI is buttons/colors/layout; UX is whether the journey works. A gorgeous WebGL site still fails if the user can't tell where they are or undo a mistake. Treat the seven principles below as build constraints you check the structure against — separate from visual polish.

## The 7 principles (each = a build decision)
1. **User-centric** — design for the actual user's goal, not the demo. Decide who the primary user is and cut anything that doesn't serve their top task. Personalize/surface the path they came for; bury the rest.
2. **Consistency** — make patterns predictable across screens and devices. Reuse the same component for the same role: one nav style, one button system, one card. A new look for an existing role = a bug. Match platform conventions instead of inventing new ones users must relearn.
3. **Hierarchy** — use size, weight, color, and position to rank importance so the eye lands on the primary action first. One dominant focal point per view; demote secondary actions visually. If everything shouts, nothing reads.
4. **Usability** — minimize steps and learning. Keep the core task reachable in a few clicks; default to the simplest interface that does the job. Don't make the user think about *how* to use it.
5. **User control** — let users steer and recover. Provide undo, back, cancel, and escape from any state. Never trap the user; confirm or make destructive actions reversible. On a scroll-journey, give an exit / skip / jump-to-section so the cinematic doesn't become a cage.
6. **Accessibility** — design for all abilities. Captions, alt text, sufficient contrast, keyboard reachability, respect `prefers-reduced-motion`. Treat this as a requirement, not a finishing touch — bolt-on accessibility is always worse.
7. **Context** — design for how/when/where it's used. Bigger touch targets and streamlined layouts on mobile / on-the-go; adapt density and input model to the device. Same content, context-appropriate delivery.

## Process discipline (don't skip stages)
- Define the problem before designing — a one-line problem statement keeps scope honest.
- Prototype to test *before* committing build effort; cheap to change a prototype, expensive to change shipped code.
- Test → gather feedback → iterate; products are never "done." Treat launch as the start of refinement, not the end.

## Build checklist (tick while applying)
- [ ] One clear primary action per view, visually dominant (hierarchy)?
- [ ] Same role always uses the same component/pattern (consistency)?
- [ ] Core task reachable in a few clicks, no relearning (usability)?
- [ ] Every state has undo / back / skip / escape (user control)?
- [ ] Contrast, alt text, keyboard, and reduced-motion handled (accessibility)?
- [ ] Mobile/context variant has appropriate targets + density (context)?
- [ ] Did a real flow get tested, not just a settled-looking frame?

> Ties to our experience: TESQ/02b is a cinematic scroll-journey — exactly the case where "looks done" can hide a UX trap. User control means the journey needs a skip/jump-to-section escape, and context means the mobile/perf-tier variant must keep targets and legibility, not just downscale resolution. Our PAIN.md verification-coverage gaps (trusting a settled frame, leaving a mode untested) map directly to the checklist's last line: test the flow, don't trust the frame.
