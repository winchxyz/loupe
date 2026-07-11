---
technique: User flow mapping (journey-before-screens)
section: prototype-wireframe
source: figma-resource-library/user-flow.md
tags: [user-flow, ux, journey, navigation, ia, prototyping]
apply-when: before laying out a multi-step site/feature (signup, onboarding, checkout, scroll-journey) to lock the path users take before you build any screen
---

# User flow — applied rules

Core idea: a user flow is the route a single user takes to finish ONE task — entry → steps → decisions → endpoint. Map it before you build screens so the structure is decided on purpose, not discovered mid-build. One flow = one goal.

## Build decisions (each = a do/choose/avoid)
1. Name the user + goal first — write "who" and "what they want to finish" in one line before any layout. No goal statement → no flow; a vague goal makes every later step arbitrary.
2. One goal per flow — map exactly one task (sign up, add-to-cart, complete onboarding). Avoid stuffing multiple journeys into one diagram; split them so each is testable in isolation.
3. Pin the entry point explicitly — name where the user lands (search result, hero CTA, push notification, deep link). Design the first screen for THAT origin; don't assume everyone starts at the homepage.
4. Map only meaningful moments — capture the forms, the decisive buttons, the components that advance the user. Avoid logging every click; the flow is the skeleton, not a click-by-click transcript.
5. Make every decision point an explicit fork — wherever the path branches (round-trip vs one-way, success vs error), draw both branches. Frustration lives at unhandled forks; always design the error/alternative branch, not just the happy path.
6. Define the endpoint and make it feel like an arrival — confirmation page, success dashboard, or return-to-previous-screen. Choose one and design a clear "done" state; a flow with no defined end reads as incomplete to the user.
7. Keep the path short — fewer steps and branches between entry and endpoint. If a flow has too many steps to follow at a glance, the real UI will feel that long too; cut steps before you build them.
8. Stay consistent across the flow — reuse the same labels, shapes, and component patterns for the same action everywhere. A "Continue" that changes wording or position per step breaks the user's learned pattern.
9. Reach for a flow at the right moment — at the idea stage (before wireframes/prototypes), when adding a feature (to spot gaps), and before usability testing (to script the scenarios). Map first, build second.
10. Pick the right artifact for the job — flow ≠ flowchart (broader system, not just UI) ≠ task flow (one single action, zoomed in) ≠ wireframe (the screen layout itself) ≠ journey map (emotions across all touchpoints) ≠ sitemap (content hierarchy) ≠ UI flow (per-screen interactions). Use a user flow for "what actions across which screens"; drop to a task flow for a single isolated action, up to a journey map for the whole cross-touchpoint experience.

## Build checklist (tick while planning a multi-step feature)
- [ ] User + goal written in one sentence before any screen exists
- [ ] Exactly one goal in this flow (split if it drifted into two)
- [ ] Entry point named, and the first screen designed for that origin
- [ ] Every branch has its alternative/error path drawn, not just the happy path
- [ ] A single, clearly designed endpoint/"done" state
- [ ] Step count minimized — no step survives that isn't load-bearing
- [ ] Same action = same label/shape/component everywhere in the flow

> Ties to our experience: 02b is itself a scroll-journey (water → space → sun) where "structure IS the style" — its sections are a user flow with one entry, sticky-pinned decision moments, and a defined arrival; mapping the path before building screens is exactly how the journey was kept legible rather than improvised section by section.
