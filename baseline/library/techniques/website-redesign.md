---
technique: Website redesign process (research -> ship in 5 phases)
section: web-design
source: figma-resource-library/website-redesign.md
tags: [process, redesign, information-architecture, accessibility, conversion, launch]
apply-when: rebuilding or substantially reworking an existing site/UI rather than starting from a blank page
---

# Website redesign — applied rules

Core idea: a redesign is a foundation change (architecture, functionality, UX), not a skin swap. Decide first whether you're doing a *refresh* (visual tweaks to match current brand) or a *redesign* (strategic restructure). Don't pay redesign cost to deliver a refresh, and don't call a refresh a redesign and skip the research.

## Refresh vs. redesign — pick deliberately
1. Refresh = restyle only — color, imagery/icons, subtle layout shifts, brand alignment. Choose it when structure and flows already work.
2. Redesign = restructure — sitemap, navigation, functionality, UX, and visuals all on the table. Choose it when the architecture itself is the problem.
3. Anchor every redesign in how people ACTUALLY use the thing. Map real user activities/interactions first; let that drive the new visual language (not the other way round).

## When a redesign is actually warranted (don't redesign on a whim)
4. Trigger on evidence, not boredom: outdated-vs-competitors look, poor UX (high bounce, confusing nav, weak responsiveness), performance issues (slow loads, errors, interaction delay), declining conversion, or security/compliance debt in old code.
5. If none of those fire, prefer a refresh — a full redesign risks breaking flows that already convert.

## Phase 1 — Discovery & research (do BEFORE touching design)
6. Audit the current site on four axes: technical performance (load speed, mobile responsiveness, server response), user behavior (bounce, time-on-site, paths), conversion (form completion, CTA effectiveness, cart abandonment), and UX (nav paths, IA, flows).
7. Run competitor + gap analysis to find missing features/content and your differentiators — don't redesign in a vacuum.
8. Pull real friction signals: support tickets, path tracking, usability tests, journey maps. These tell you what to actually fix.

## Phase 2 — Planning & strategy
9. Set baseline metrics FIRST, then SMART targets (load time, mobile score, conversion, lead-gen, bounce). No baseline = you can't prove the redesign won later.
10. Write a plan with scope, timeline, resources, budget, target audience, and user personas before design starts.

## Phase 3 — Design (structure before pixels)
11. Sitemap -> wireframes -> visual design, in that order. Establish IA and hierarchy first; minimize clicks to key pages; group related content. Don't jump to visuals before function/hierarchy is settled.
12. UI/UX building blocks to nail: CTAs/buttons with contrasting color + hover state and large enough tap targets on every device; forms kept simple and uncluttered (they're the conversion point); microinteractions (animation/hover) that give real feedback, not decoration.
13. Visual layer: pick a palette tied to brand personality and use it to highlight; keep type readable/consistent and use weights for hierarchy; use high-quality, message-supporting imagery; lean on hierarchy/contrast/alignment as the structural decisions.
14. Accessibility is a build requirement, not a pass: keyboard-friendly nav, alt text on images, color contrast meeting guidelines. Bake it in during design, don't bolt it on.
15. Prototype interactively and test key flows BEFORE dev. Build responsive layouts and verify the design behaves as intended on real screen sizes (remote user testing on a prototype can surface usability issues early — Patagonia's prototype testing led to a 3% conversion lift).

## Phase 4 — Development & testing (redesign != greenfield)
16. Reconcile new with legacy: audit existing code to decide keep-vs-replace, balance new features against current functionality, keep the backend working through the swap.
17. Hand off with specs + code snippets (Dev Mode-style) to kill design/dev back-and-forth.
18. Usability-test with real users before go-live (nav, key functions, responsiveness, accessibility); iterate until it meets expectations.

## Phase 5 — Launch & post-launch
19. Prefer a phased rollout over a big-bang launch — ship improvements gradually, validating each phase before the next, to minimize disruption to the live site.
20. Keep monitoring performance and engagement after launch and iterate fast; continuous monitoring heads off bigger issues.

## Build checklist (use when reworking an existing site)
- [ ] Decided refresh vs. redesign on evidence — not paying redesign cost for a refresh outcome?
- [ ] Baseline metrics captured BEFORE changes so post-launch win is provable?
- [ ] Sitemap + wireframes settled before any visual design started?
- [ ] CTAs, forms, and microinteractions each reviewed as conversion/feedback decisions?
- [ ] Accessibility verified (keyboard nav, alt text, contrast) during design, not after?
- [ ] Prototype tested on real screen sizes before handing to dev?
- [ ] Rollout phased + post-launch monitoring in place, not a one-shot launch?
