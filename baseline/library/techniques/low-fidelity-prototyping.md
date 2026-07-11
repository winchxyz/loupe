---
technique: Low-fidelity prototyping (wireframe-first ideation)
section: prototype-wireframe
source: figma-resource-library/low-fidelity-prototyping.md
tags: [wireframe, prototyping, ideation, user-flow, process, layout]
apply-when: starting a new site/section/UI — before writing any styled markup, to lock layout, content hierarchy, and flow cheaply
---

# Low-fidelity prototyping — applied rules

Core idea: a lo-fi prototype is a deliberately rough diagram of an early concept. Its whole value is being cheap to change — so you commit to layout, content order, and flow BEFORE spending build time on polish. Stay rough on purpose; detail invites bikeshedding and makes feedback slower.

## Rules (each = a build decision)
1. Prototype before you style. Sketch the screen as boxes/blocks first; do NOT open the shader, the glass blur, or the type ramp until structure is settled. Visual polish on an unproven layout is wasted build time.
2. Pick the fidelity for the job — two kinds. Use a **paper/whiteboard sketch** for the fastest internal alignment; use a **wireframe** (greybox blueprint) when you need to capture real layout + content hierarchy + a clickable flow for testing. Don't reach for hi-fi (animations, pixel-perfect, clickable polish) until the concept is validated.
3. Keep each screen simple and high-level. Limit interactions, transitions, and visual design per screen. One screen should answer one structural question, not preview the final art direction.
4. Lead with a problem statement, not a layout. Before sketching, write the one concept/need you're testing. Every block on the screen must earn its place against that statement; if it doesn't serve it, cut it.
5. Map core functionality as a flow first. Capture structure AND sequence — a storyboard or user flow of which screens connect to which — before detailing any single screen. Layout without flow hides dead ends.
6. Make blocks legible as roles, not decoration. In a greybox, distinguish nav / hero / content / CTA by size and position alone (Gestalt similarity + proximity do the work). If you can't tell the CTA from a content block in grey, the structure is wrong — fix it here, not later in CSS.
7. Annotate intent on the prototype. Add notes/comments explaining what a feature does or where attention should go. A wireframe reviewer should never have to guess the interaction.
8. Reuse readymade layout scaffolds. Start from a known screen template / your own design-system blocks rather than re-inventing the skeleton each time — faster, and it keeps the lo-fi synced to real components.
9. Iterate cheaply, then graduate. Align the team on ONE direction from the lo-fi options, and only then invest in the hi-fi build of the chosen one. Branching into polish on multiple directions is the expensive mistake this whole step exists to prevent.

## Build checklist (use when starting any new screen/section)
- [ ] Problem statement written — one line, the concept this screen tests?
- [ ] User flow / screen sequence sketched before any single screen is detailed?
- [ ] Screen exists as greybox blocks first, with zero final styling applied?
- [ ] Each block's role (nav/hero/content/CTA) readable from size + position alone?
- [ ] Anything not serving the problem statement removed, not just shrunk?
- [ ] Interaction intent annotated where it isn't obvious?
- [ ] One direction chosen before any hi-fi/polish build begins?

> Ties to our experience: 02b's section-design work lives exactly here — keep the 5-block concept, settle STRUCTURE/composition before skin (per "style means structure not skin"), and prove the greybox layout before pouring in the glassmorphism + Three.js polish.
