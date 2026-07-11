---
technique: Design constraints (use limits as a forcing function)
section: ui-ux-principles
source: figma-resource-library/constraints-in-design.md
tags: [process, scoping, accessibility, performance, brand, platform]
apply-when: starting any site/UI from a blank frame, or scoping a build before touching layout — name the constraints first so they drive the design
---

# Design constraints — applied rules

Core idea: a blank canvas is itself a paralysis-inducing boundary. Constraints aren't obstacles to route around — they're the forcing function that removes creative paralysis and gets you to a better solution faster. Name them up front; let them collapse the option space before you design.

## The rules (each = a build decision)
1. Never start from "anything is possible" — write the constraint list FIRST. Customer problem, deadline, and budget are the three baseline constraints; pin them before opening a frame so the empty canvas stops being the boundary.
2. Let the target device dictate type and layout. Designing for phone → choose bigger text and shorter line lengths from the start; don't retrofit a desktop comp down.
3. Treat asset weight as a hard constraint, not a polish step. Budget image/video/app file size against slow, metered, data-capped connections — decide the performance ceiling before adding heavy media.
4. Bake accessibility in as a non-negotiable constraint, always. Cap line length, hold sufficient color contrast, and assume users with dyslexia or color-vision deficiencies are in your audience — design to that floor, don't bolt it on after.
5. Honor brand/corporate guidelines as a given palette, not a suggestion. When brand colors are set, design within them; if a brand color fails contrast, the accessibility constraint wins.
6. Design for the real audience's literacy and language. Different reading levels and native languages are constraints; if any audience reads right-to-left, build the layout RTL-capable from the start, not as a later mirror.
7. Let implementation reality shape the design. Know enough about how the build works (code/platform limits) to design layouts and interactions that can actually ship — design with the medium's grain, not against it.
8. Adopt the platform's design language as a constraint that buys usability. Follow the conventions (e.g. Apple's Human Interface Guidelines) so the product is instantly learnable because users already know how it should behave.
9. Read the brief/scope as a constraint, and use self-imposed ones on purpose. Required features and a defined scope narrow the entry points productively; deliberately add limits (time-box, fixed feature set) to force momentum.

## Build checklist (use when scoping a layout)
- [ ] Constraint list written before the first frame (customer problem, deadline, budget)?
- [ ] Target device fixed, and type size / line length chosen to match it?
- [ ] Performance ceiling set — asset weights budgeted against slow/metered connections?
- [ ] Accessibility floor locked — contrast and line length pass for low-vision / dyslexic users?
- [ ] Brand palette and platform conventions treated as givens, with accessibility overriding on conflict?
- [ ] Audience language/literacy handled, including RTL if any audience needs it?
- [ ] Implementation feasibility checked against the design before sign-off?

> Ties to our experience: hardware-adaptive perf tiers + dynamic resolution scaling on 02b are exactly rule 3 — the slow-connection / low-end-device constraint chosen up front as a design driver, not patched in later (it sits in our mobile/perf backlog precisely because it should have been a constraint from the start).
