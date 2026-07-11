---
technique: UX research methods (choosing the right one per phase)
section: ui-ux-principles
source: figma-resource-library/ux-design-research-methods.md
tags: [ux-research, validation, user-testing, process, analytics]
apply-when: deciding how to validate a design decision or pick a UX method at a given build phase instead of guessing
---

# UX research methods — applied rules

Core idea: don't improvise design decisions you could cheaply validate. Pick the method that fits the PHASE you're in and the question type (what users *do* = quantitative/behavioral; *why* they do it = qualitative/attitudinal). Research early and often so you make small adjustments instead of backtracking a whole UX.

## Match the question to the method
1. Need numbers on *what* users do (clicks, conversions, drop-off) → run **quantitative**: analytics + statistical comparison. Use it to settle "does version A or B convert better?" — not to explain motive.
2. Need to know *why* a user did something in a flow → run **qualitative**. Choose **attitudinal** (interviews, surveys) for self-reported beliefs/sentiment; choose **behavioral** (task analysis, observation, eye tracking) for what they actually do — and trust behavioral over attitudinal when the two disagree.
3. Don't pick a single method — pair one quantitative and one qualitative so you get both the *what* and the *why*.

## Pick by build phase (do X at phase Y)
4. STRATEGY (before building) — define **user personas** first; "if you don't know who you're building for, the time you invest is wasted." Then run **interviews** to de-risk the concept, and **card sorting** to let users dictate information architecture / nav grouping rather than imposing your own mental model.
5. DESIGN (while building) — run **task analysis** against concrete jobs-to-be-done to confirm users can finish the goal; use **eye tracking** (or attention proxies) to check where attention actually lands; use **surveys** to probe sentiment about colors, fonts, and overall feel.
6. LAUNCH & POST-LAUNCH — ship a change as an **A/B test** (compare new CTA/screen/page against the old) instead of asserting the new one is better; wire **analytics** for time-on-page, bounce, key-CTA clicks; run **usability bug testing** even though it's tempting to skip — it has outsized quality impact; use **diaries** for how the product fits into daily life over time.

## Turn observations into decisions
7. Observe the whole reaction, not just clicks — capture where users hesitate, get stuck, or visibly delight, then **tag/cluster responses** to surface common themes. The cluster that recurs is the thing to fix first; one anecdote is not a signal.
8. Validate against the stated goal, not vibes — "can the user order an item / finish the task?" is the pass/fail bar. If a redesign doesn't move that, it didn't work regardless of how it looks.

## Build checklist (tick while applying)
- [ ] Have I framed the question as *what* (quant/behavioral) or *why* (qual/attitudinal), and picked the matching method?
- [ ] Am I at strategy / design / or launch — and using a method that fits THAT phase?
- [ ] Did I pair at least one quantitative and one qualitative signal?
- [ ] Is there a concrete task-completion goal the design must pass (not just "looks good")?
- [ ] Did I A/B a change before declaring it an improvement?
- [ ] Did I tag/cluster feedback so I fix the recurring theme first, not the loudest one-off?
