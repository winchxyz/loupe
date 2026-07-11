---
technique: Design brief (lock scope before pixels)
section: ui-ux-principles
source: figma-resource-library/how-to-create-a-design-brief.md
tags: [process, scope, requirements, brand, planning]
apply-when: kicking off any new site/UI or redesign, before writing layout or visual code
---

# Design brief — applied rules

Core idea: a brief is the north star that locks scope, goals, audience, and brand BEFORE design starts. For our solo evening workflow the "brief" is the project DESIGN.md + the goal you state to Claude — same function: pin the decisions so the build doesn't drift mid-stream. A brief is not a creative brief (big-picture marketing); it's the concrete spec a builder works inside.

## The rules (each = a build decision)
1. Write the project overview + scope FIRST. Decide what you're building and what you're explicitly NOT building. Avoid starting layout code while scope is still fuzzy — undefined scope is where evenings get burned.
2. State goals and objectives as outcomes, then list the steps. Choose one primary goal per build; if everything is a goal, the layout has no focal point to serve.
3. Write a problem statement: the one user challenge the design solves. Use it as the tiebreaker for every later decision — if a flourish doesn't serve it, cut it.
4. Capture brand guidelines as hard specs, not vibes: logos, colors, fonts, styles, imagery. Pin them in DESIGN.md (or design tokens) so every screen pulls from one source instead of being re-improvised per section.
5. Link the real assets in the brief — wireframes, mockups, prototypes, reference frames. Avoid working from memory of "the look"; point at the actual file.
6. Define brand messaging and tone (verbal identity) alongside visuals — copy voice is a design decision, not an afterthought bolted on at the end.
7. Profile the target audience (demographics + psychographics) before choosing density, type scale, and motion. Choose UX defaults that fit them, not your own taste.
8. Note competitors' hits AND misses. Steal what reads well; name what to avoid so you don't accidentally rebuild a known miss.
9. Set budget and timeline as guardrails up front. For us that's the evening budget and the perf/complexity ceiling — decide the ambient cost before adding the expensive WebGL feature, not after.
10. Spell out deliverables down to the concrete output: file formats, screen sizes, resolutions, breakpoints, perf tiers. Ambiguous "responsive" is how a mode ships untested.
11. Use a mood board to settle the visual aesthetic before committing: collect imagery/colors/elements until a cohesive mood emerges, then build to it. Avoid choosing the palette inside the first component.
12. Keep it clear, concise, and handy. A brief nobody re-reads is dead; keep DESIGN.md short enough to actually consult each session and refer back to it when a decision wobbles.

## Build checklist (tick before writing layout)
- [ ] Scope written down — what's in AND what's explicitly out?
- [ ] One primary goal + a one-line problem statement the design must serve?
- [ ] Brand specs (logo/color/font/style/imagery) pinned in DESIGN.md or tokens, with real asset links?
- [ ] Audience profiled, and density/type/motion defaults chosen to fit them?
- [ ] Deliverables nailed to concrete formats, screen sizes, resolutions, and perf tiers?
- [ ] Budget/timeline guardrails set before adding any expensive feature?
- [ ] Brief is short enough that you'll actually re-read it next session?

> Ties to our experience: 02b's authoritative art-direction book and DESIGN.md ARE this brief — pinning the 70/20/10 split, the glass-C direction, and deliverable specs (perf tiers, resolutions, breakpoints) up front is exactly what kept the cinematic build from drifting; and our PAIN.md "left a mode untested / clipped screenshot" failures trace straight to a deliverable line (screen sizes, perf modes) that wasn't nailed down before building.
