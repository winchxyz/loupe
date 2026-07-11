---
technique: Design thinking (5-stage human-centered process)
section: ui-ux-principles
source: figma-resource-library/what-is-design-thinking.md
tags: [process, ux, user-research, prototyping, iteration, problem-framing]
apply-when: kicking off any new site/section/feature — before committing to a layout, decide what user problem it solves and how you'll validate it
---

# Design thinking — applied build decisions

Core idea: don't start by styling a screen — start by naming a real user problem, then iterate toward a solution you've actually validated. The process is non-linear: loop back, repeat a stage, or run stages in parallel. Use it to keep a build grounded in need + feedback instead of improvised taste.

## The three-lens gate (run before building anything)
1. Desirability — choose to build only what meets a real user need; if you can't name the need, you're decorating, not designing.
2. Feasibility — choose ideas you can actually ship with the stack/time on hand; avoid concepting an effect you can't build (e.g. a WebGL journey on a budget perf tier).
3. Viability — choose solutions that hold up long-term, not a one-off demo that rots. A strong idea sits at the intersection of all three; if any lens fails, rescope.

## The five stages (each = a build decision)
1. Empathize — before layout, gather real user input (interviews, observation, empathy map). Do design FROM lived experience, not FROM your assumptions about what looks cool.
2. Define — write ONE focused problem statement ("Users struggle to compare X quickly") and drill to root cause with 5 Whys. Avoid solving a symptom (restyling) when the cause is structural (info buried, scattered across tabs, not side-by-side).
3. Ideate — generate several testable options, not one "right" answer. Sketch 2-3 structurally different layouts before committing; the first idea is a candidate, not the decision.
4. Prototype & test — build the cheapest thing that puts the idea in front of users early. Avoid polishing a direction you haven't validated. Pick a test method to fit: moderated usability, unmoderated remote, A/B between versions, heatmaps + session recordings.
5. Implement — keep iterating after launch. Wire up event tracking + KPIs (conversion, feature usage, abandonment, satisfaction) and review heatmaps/recordings so the next change is data-driven, not guessed.

## The four d.school rules (mindset constraints)
1. Human rule — every decision (what to build, how it works, how it looks) traces back to a real need; if a flourish serves no need, cut it.
2. Ambiguity rule — when the direction is unclear, test instead of locking in early; treat uncertainty as a reason to prototype, not stall.
3. Re-design rule — don't start from a blank slate; reuse the pattern that already works (existing layout, prior recipe) and improve from there.
4. Tangibility rule — make ideas visible fast; a rough low-fi prototype communicates and tests better than a description or a debate.

## Build checklist (tick before and after a build)
- [ ] Named the real user problem in one sentence (Define), not just "make it look better"?
- [ ] Passed all three lenses — desirable, feasible on this stack/tier, viable long-term?
- [ ] Considered 2+ structurally different solutions before committing (Ideate)?
- [ ] Prototyped and got it in front of a user/test before polishing the final?
- [ ] Reused an existing working pattern instead of starting from scratch (re-design rule)?
- [ ] Wired up at least one feedback signal (KPI, heatmap, session recording) to judge it post-launch?
