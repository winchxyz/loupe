---
technique: UX strategy (ladder UX decisions to business goals)
section: ui-ux-principles
source: figma-resource-library/what-is-ux-strategy.md
tags: [ux-strategy, prioritization, roadmap, user-research, goals]
apply-when: scoping a site/feature build — deciding WHAT to build and in what order before touching layout or code
---

# UX strategy — applied rules

Core idea: every UX decision must "ladder up" to a business goal AND a real user need. Strategy is the filter you run a build request through BEFORE designing — it decides what to build, why, and how you'll know it worked. Skip it and you polish things nobody asked for.

## Rules (each = a build decision)
1. Anchor to a goal before building — for any new page/section/feature, name the business goal AND the user need it serves. If you can only name one, it's not ready to build; push back or descope.
2. Prioritize, don't accumulate — pick what to build by impact on business + users, not by what's easy or what was asked last. When two deliverables compete, weigh the tradeoff explicitly (user need vs. business goal) rather than building both.
3. Match scope to leverage — a small change (a toggle, a copy tweak) and an app-wide change both deserve the same goal-check, but spend effort proportional to the ROI the change can actually move.
4. Gut-check against the overall direction — every component should be consistent with the product's stated vision/values. If a flashy idea contradicts the through-line (e.g. "make it accessible to all"), cut it or flag it.
5. Validate goals with research, not assumption — before committing a roadmap, confirm it against three inputs: stakeholder expectations, competitor strengths/gaps, and real user signal (personas, support tickets, social/usage data).
6. Define one core persona and design for them — name whom this view is for. A view built for "everyone" reads as built for no one; let the persona resolve layout and content ambiguity.
7. Pair quant with qual — usage metrics tell you what to prioritize; qualitative feedback tells you where to add moments of delight. Don't roadmap on numbers alone.
8. Decide success metrics up front — write down how you'll measure "did this work" before you build, so the change is verifiable instead of a matter of taste.
9. Build a roadmap of milestones, then expect to iterate — sequence work into milestones tied to goals, but treat the plan as provisional: user feedback and testing either confirm the direction or force a pivot.

## The 4-step build sequence (run before designing)
1. Set goals — marry stated business goals with user needs into concrete UX goals.
2. Validate with research — stakeholders + competitor analysis + user research (personas, social, support tickets).
3. Evaluate and ideate — surface the recurring themes, decide what makes the cut, then brainstorm the tools/tech/people needed.
4. Build the roadmap — milestones → tasks → execute, and prepare to iterate.

## Build checklist (run before scoping any new page/feature)
- [ ] Can I name the business goal AND the user need this serves? (both, or descope)
- [ ] Is this the highest-leverage thing to build right now, vs. alternatives I'm skipping?
- [ ] Does it stay consistent with the product's stated vision/values?
- [ ] Who is the one core persona this is for?
- [ ] Have I checked at least one real signal (usage data, support tickets, competitor) not just opinion?
- [ ] Is "success" defined as a measurable outcome before I build?
- [ ] Is the roadmap sequenced into milestones I'm willing to revise after feedback?
