---
technique: Wireframing (fidelity ladder + build decisions)
section: prototype-wireframe
source: figma-resource-library/what-is-wireframing.md
tags: [wireframing, layout, fidelity, information-architecture, navigation, process]
apply-when: starting a new screen/section/site and deciding structure, navigation, and IA before any visual polish
---

# Wireframing — applied rules

Core idea: a wireframe is the skeleton — layout, navigation, information architecture — settled BEFORE visual design. Lock structure first so feedback targets user flow, not pixels. The artifact's fidelity is a dial you set deliberately, not a default.

## Pick a fidelity, on purpose (each = a build decision)
1. **Low-fi — choose for new/unfamiliar concepts.** Grayscale only, real boxes for media, no brand. Goal: agree on layout, navigation, and IA. Reach for this when the direction is genuinely open and you need cheap iteration.
2. **Mid-fi — choose to shape the chosen direction.** Add annotations, real content, and concrete interactions; map core functionality. Settle the framework here, still before any visual styling.
3. **Hi-fi — choose when you can capture look-and-feel.** Add fonts, colors, logos for user testing — but it's still a draft with no real functionality. Don't mistake it for "done."
4. **Skip straight to hi-fi when a design system already exists AND the screen resembles existing ones.** A mature system means visual details won't derail the conversation, so low-fi adds no value — go fast. (Maps directly to TESQ/02b: glass UI + tier system are established, so new sections start near hi-fi.)

## Structure-first build rules
5. **Name the design goal before laying anything out.** One concrete user action per screen (buy X, sign up for Y). Every block must advance that goal or get cut.
6. **Frame to real target sizes, not arbitrary ones.** Mobile 393x852, 11" tablet 834x1194, desktop 1440x1024. Lay out at these so the structure survives the actual viewport.
7. **Keep it spare while structure is unsettled** — grayscale, few fonts, boxes for graphics. Detail (color, copy, spelling) hides UX flaws; strip it until the flow is right.
8. **Use REAL content, not lorem ipsum, for content-rich / IA-heavy UI.** Placeholder "menu item 1-2-3-4" lies about information architecture. Real labels expose whether the hierarchy actually works. (Lorem is fine only for trivial early sketches.)
9. **Make identical components identical.** Same role -> pixel-same across screens/iterations; "slight variations" of a shared component breed dev uncertainty and bugs. (Echoes our repos-table header bug — a broken-consistency component.)
10. **Make navigation self-evident.** Flows fluid and intuitive; add wayfinding cues where IA gets dense. Litmus test: if a user needs a sitemap to navigate, the IA is broken — fix it, don't add chrome.
11. **Treat the wireframe as disposable.** Even hi-fi is a rough draft; the final product SHOULD look dramatically different. Don't over-invest before handoff — that's the point of going early.

## Judge success by feedback quality, not aesthetics
12. **Run moderated testing: can users complete the flow with zero instructions?** Getting "tripped up / not knowing what to do next" = a structural failure to fix in the wireframe.
13. **Watch what stakeholders react to.** Confident "move to next step" feedback = success. If they fixate on minor/aesthetic details, your fidelity is too high — strip polish back down until you get feedback on what matters.

## Build checklist (tick before a screen leaves wireframe stage)
- [ ] One named user goal per screen, and every block serves it?
- [ ] Right fidelity chosen on purpose (low-fi for new concepts; hi-fi only with an established system + familiar screen)?
- [ ] Framed at a real target size (393/834/1440 width)?
- [ ] Real content in place of lorem wherever IA matters?
- [ ] Repeated components truly identical across screens?
- [ ] Navigation passes the "no sitemap needed" test?
- [ ] Essential screens, user flows, and IA all represented — nothing critical missing?

> Ties to our experience: maps to PAIN.md consistency failures (the repos-table header that broke column similarity) — wireframing's "identical components stay identical" rule is the upstream guard. And rule 4 is our actual mode: with the 02b glass system + perf tiers settled, new sections can start near hi-fi instead of re-deriving structure from scratch.
