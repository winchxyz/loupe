---
technique: Visual hierarchy (ordering elements by importance)
section: ui-ux-principles
source: figma-resource-library/what-is-visual-hierarchy.md
tags: [visual-hierarchy, layout, typography, color, contrast, spacing]
apply-when: composing any screen/section so the eye lands on the most important thing first, then flows in intended order
---

# Visual hierarchy — applied rules

Core idea: arrange elements in order of importance so attention lands on the primary thing first, then flows in the order you intend. The viewer should never have to hunt for the focal point. Hierarchy is built from the same levers Gestalt grouping uses (alignment, proximity, similarity) plus the loudness levers (size, color, contrast, texture, time).

## The 7 levers (each = a build decision)
1. Alignment — line related elements up on a shared edge/baseline so they read as one group; break alignment only to signal a deliberately separate role. Lean on the layout grid — alignment does most of the "these belong together" work for free.
2. Color — don't pick hue first; choose by luminance/contrast. Use a pre-set palette with verified contrast (color-wheel generator); reserve your most saturated/brightest value for the single thing you want seen first (CTA, hero number).
3. Contrast — place notably different elements next to each other to create a focal point: warm vs cool, complementary pairs, light vs dark. Push contrast up for accessibility, not just looks — it raises the ratio AND ranks importance at once.
4. Proximity — "chunk" related items with tight spacing and push unrelated groups apart; let the gap, not a divider line, carry the grouping. Spacing IS the hierarchy signal.
5. Size — make the most important element the biggest; scale is the loudest lever, especially on billboards, heroes, and mobile. Keep interactive targets (buttons) large enough for accessibility, and let low-vision users scale text/images — never lock sizes.
6. Texture — use texture (highlights, material cues) to rank or signal affordance instead of leaning only on color; it tells the eye "this is interactive/this is raised." Avoid literal skeuomorphism — it reads dated; use restrained, suggestive texture.
7. Time — on screens, hierarchy is temporal too: stagger reveals, motion, and state changes so the eye is led through the order over time, not all at once. Use entrance/scroll sequencing to enforce a reading order a static layout can't.

## 5 pro tips (turn into build defaults)
- Design for the user's real context, not an idealized one — rushed, one-handed, variable viewing distance. Don't assume everyone is the "ideal" distance from the screen; make the primary action survive a glance.
- Let the medium pick the dominant lever — for a hero/billboard/mobile screen, size/scale usually wins; choose the loudest lever for that surface rather than spreading effort evenly.
- Make exactly one thing loudest per view — "when everything looks the same, nothing stands out." If two elements both shout, demote one.
- A little goes a long way — use white/negative space to elevate the focal point (the Apple/Google tactic); when a layout feels busy, remove before you add.
- Use progressive disclosure — break dense info/steps across screens or reveal-on-demand so no single view overwhelms; sequence rather than dump.

## Build checklist (use when reviewing a layout)
- [ ] Is there exactly ONE clear focal point per view, and is it the most important thing?
- [ ] Does the eye flow in the intended order after the focal point (size → contrast → position leading it)?
- [ ] Is color/contrast chosen by luminance and contrast-checked, with the loudest value reserved for the primary action?
- [ ] Does spacing/proximity group related items and separate unrelated ones without relying on borders?
- [ ] Are text and interactive targets large/scalable enough for low-vision users?
- [ ] If motion is used, does the reveal sequence reinforce the reading order instead of distracting from it?

> Ties to our experience: on 02b, time-as-hierarchy is literal — the cinematic scroll-journey (water → space → sun) uses staggered/scroll-pinned reveals to lead the eye, so the "Time" lever and the progressive-disclosure tip are core, not optional. And PAIN.md's per-cell stagger that read as crooked is the failure mode of this same Time lever — a reveal sequence that fights the layout's order instead of reinforcing it.
