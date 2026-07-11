---
technique: UX fluency for product decisions (PM lens)
section: ui-ux-principles
source: figma-resource-library/ux-for-product-managers.md
tags: [ux, user-flow, discovery, metrics, collaboration, usability]
apply-when: deciding what to build/change in a site or section, briefing the design work, or judging whether a UI change actually helped the user
---

# UX for product decisions — applied rules

Core idea: you don't need to be a designer to make good UX calls — you need enough fluency to read a user flow, frame the problem instead of the pixels, and check the result against behavior, not taste. Each rule below is a build decision, not a job description.

## The rules (each = a build decision)
1. Read the flow before touching the screen. Trace exactly how a user moves through a task end-to-end; the friction is at the seams (onboarding step, checkout path), not in any single pretty frame. Map the path first, then design the screen.
2. Lead with the user problem, not the solution. Before you build, write the pain + the goal + the real constraints. Design from that. If a brief prescribes the interface ("put a modal here"), you've skipped the problem — go back.
3. Prototype to reason, don't spec to reason. When the interaction is non-obvious, build a throwaway prototype to think through it; a written feature description hides the friction that a clickable flow exposes.
4. Wireframe to pressure-test logic. Sketch the rough flow first — it forces the gaps in your reasoning out before they become someone's build problem. Cheap to redraw, expensive to rebuild.
5. Respect information architecture early. A structure that fights the user is nearly free to fix on paper and brutal to fix after it's built. Validate the IA (what lives where, what nests under what) before committing layout.
6. Decide on behavior, not assumption. Run a usability check (even a tiny one) and choose based on what users actually did. "I think this is clearer" is an assumption until someone completes the task.
7. Make trade-offs visible with a comparison. When two directions compete, prototype both and weigh UX value against effort — don't argue them in the abstract.
8. Anchor every review comment to an outcome. Frame feedback as "does this reduce onboarding friction / improve completion?" — never "I don't like this" and never pixel-nits that don't tie to a goal. Early async comment > late detailed critique after two weeks of work.
9. Keep one source of truth. Five stale versions of the same flow = decisions made on outdated context. Centralize the journey map / research / current design so nobody builds against the wrong version.

## UX metrics to judge a change (don't ship blind)
- Task success rate — % who actually complete the action (checkout, sign-up, find a setting). Break it down per feature; a high overall number masks one broken flow.
- Time on task — how long completion takes (usually shorter = better). Read it next to success rate: a user who finishes slowly is still struggling.
- CSAT / NPS — how it felt / whether they'd recommend. Both are lagging; pair them with the two behavioral metrics above so you catch friction before retention drops.

## Build checklist (use before/at a UX change)
- [ ] Stated the user problem + goal + constraints before deciding the interface?
- [ ] Traced the whole user flow, not just the one screen being edited?
- [ ] Pressure-tested the logic with a sketch/wireframe or quick prototype?
- [ ] Compared competing directions on UX value vs. effort, not opinion?
- [ ] Defined how I'll know it worked (success rate / time on task), not just "looks better"?
- [ ] Every review note tied to a user outcome, not taste or pixel-nits?
- [ ] One current source of truth — no stale duplicate flows in play?
