---
technique: Design research methods (pick the right artifact)
section: ui-ux-principles
source: figma-resource-library/design-research.md
tags: [research, discovery, information-architecture, journey-mapping, process]
apply-when: before/early in a build, deciding what to learn about users + how to structure the site before writing layout code
---

# Design research methods — applied rules

Core idea: design research is "learn from users before you commit pixels." This source is a hub indexing the standard research/mapping artifacts. Don't run all of them — pick the ONE artifact that answers the question you actually have right now, then build against its output. Each entry below = a build decision: *what it answers* → *when to reach for it*.

## The methods (each = a pick-this-when decision)
1. MVP testing / concept testing — validate that the idea is *desirable and feasible* with the cheapest possible artifact, at the START of the lifecycle. Reach for it when you're tempted to build a full thing on a hunch; ship a stub and test demand first instead of polishing an unvalidated concept.
2. Mood board — converge on *visual direction* (palette, type, texture, mood) before laying out a single section. Reach for it at kickoff when "what should it feel like" is still vague; lock the mood, then every later style choice references it rather than getting re-litigated per-section.
3. Information architecture — decide *what content exists and how it's grouped/labeled/nested* before nav and page structure. Reach for it whenever a site has more than a handful of pages or a non-obvious menu; IA is the skeleton the layout hangs on, so settle it before building nav.
4. User journey map — chart the user's path, goals, and emotional highs/lows *across* the experience. Reach for it when designing a multi-step or scroll-driven flow; it tells you where to put the payoff, the friction, and the call-to-action so structure follows the journey, not the other way round.
5. Service blueprint — map front-stage UI against back-stage systems/handoffs. Reach for it only when the product has real operational depth (support, fulfillment, multi-team handoffs); skip for a marketing/portfolio site.
6. Affinity diagram — *cluster raw findings* (notes, quotes, observations) into themes by similarity. Reach for it right after gathering messy qualitative data, to turn a pile of observations into a short list of design directives.
7. Flowchart / sequence / data-flow / context / UML / network / spaghetti diagram — model a *process, system, or interaction logic* precisely. Reach for one of these when behavior/state is the hard part (an interactive flow, a build pipeline, an animation state machine); pick the lightest that captures it — a flowchart for branching steps, a sequence diagram for ordered interactions, a spaghetti diagram to expose redundant back-and-forth.
8. Infographic — turn *findings into a shareable visual story*. Reach for it at the OUTPUT end, when research conclusions need to persuade or be remembered, not during discovery.

## How to choose (decision shortcuts)
- "Is this idea even worth building?" → MVP / concept testing (do this FIRST, cheapest artifact).
- "What should it feel like?" → mood board.
- "What pages/sections exist and how are they grouped?" → information architecture.
- "What's the user's path and where's the payoff?" → user journey map.
- "How does this behavior/state actually work?" → the lightest matching diagram.
- "How do I make sense of all these raw notes?" → affinity diagram.

## Build checklist (use at kickoff, before layout code)
- [ ] Idea validated (concept/MVP test) before investing in polish — not building on an untested hunch?
- [ ] Visual direction fixed in a mood board before per-section styling starts?
- [ ] Information architecture settled before nav and page structure are built?
- [ ] For any scroll-journey or multi-step flow, a journey map placing the payoff / CTA / friction points?
- [ ] Any genuinely complex behavior modeled with the lightest sufficient diagram (not over-documented)?
- [ ] Picked the FEWEST artifacts that answer the real open questions — not running the whole menu?

> Ties to our experience: 02b/TESQ is a scroll-journey (water → space → sun); a journey map is exactly the artifact that decides where each environment's emotional payoff and section CTA land, so structure follows the journey rather than being retrofitted onto finished WebGL scenes.
