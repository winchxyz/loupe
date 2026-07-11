---
technique: Gestalt principles (perceptual grouping)
section: ui-ux-principles
source: figma-resource-library/gestalt-principles.md
tags: [layout, visual-hierarchy, grouping, spacing, motion, ui]
apply-when: laying out any section, grid, card, nav, form, or animated sequence so structure reads intuitively without extra chrome
---

# Gestalt principles — applied rules

Core idea: the brain organizes visual input into wholes and reads the whole before its parts. Use these to make a layout *feel* structured without piling on borders, boxes, or labels. Four drivers underlie them — emergence (whole seen before parts), reification (mind fills negative space), multistability (one image, two readings — avoid unless intended), invariance (same object recognized despite scale/color/angle shifts, so a component stays recognizable when restyled).

## The 11 rules (each = a build decision)
1. **Proximity** — group related items by spacing alone; widen the gap between unrelated groups. Spacing is the grouping signal, more reliable than borders. Pair an icon with its label by distance, not a box.
2. **Similarity** — make siblings share shape/color/size so they read as one set; give a different ROLE a deliberately different look. Don't make two unrelated things look alike, and don't restyle one card in a row.
3. **Continuity** — align elements on a shared line or curve so the eye flows along them to the next action. A strong baseline/column grid does most of this work; a broken column stops the flow.
4. **Closure** — let the eye complete a shape; imply a card/region with partial framing (a corner, a rule, a shadow) instead of a full outline. Trust the user to fill the gap — less chrome.
5. **Figure-ground** — guarantee one clear figure/background separation per surface (contrast, blur, dim, or shadow) so foreground UI never fights the background. On busy/photographic/WebGL backdrops, add a scrim or backdrop-blur behind text — never rely on raw contrast.
6. **Prägnanz (simplicity)** — when a layout reads as ambiguous or busy, simplify to the cleanest figure; prefer a few regular shapes over many irregular ones. The eye defaults to the simplest interpretation, so make that the intended one.
7. **Symmetry** — use balance/order for things meant to feel stable and trustworthy (logos, hero, pricing). Reserve deliberate asymmetry to create tension or a focal break — don't let it read as an accident.
8. **Connectedness** — an explicit visual connector (a line, shared container, bullet, divider chain) groups MORE strongly than proximity or similarity. Use a connecting element when you must override the default reading of distance/color.
9. **Common region** — wrap related controls in one shared region (card, panel, tinted area, bordered box) to bind them; items inside one region read as a unit regardless of spacing. Make sure module/sidebar/tab/accordion boundaries match the actual logical grouping.
10. **Focal point** — give each view exactly ONE element that breaks the pattern (size, color, motion, isolation) to pull the eye to the key CTA or content. Two competing focal points = none.
11. **Common fate** — elements that move together read as a group; animate a related set with ONE shared direction/timing to signal "these belong together." Per-element stagger that drifts apart reads as broken/crooked — reserve divergent motion for things that are genuinely separate.

## Build checklist (use when reviewing a layout)
- [ ] Related items closer than unrelated (proximity); is any gap lying about the grouping?
- [ ] Siblings visually consistent (similarity); does a different role actually look different — and nothing else?
- [ ] Alignment carries the eye to the next action (continuity); is any column/baseline broken?
- [ ] Exactly one focal point per view (focal point) breaking the pattern toward the CTA/hero?
- [ ] Foreground text/UI clearly separated from the background (figure-ground) — scrim/blur on busy or WebGL backdrops?
- [ ] Grouped controls share a region or connector (common region / connectedness) that matches the real logic?
- [ ] Animated sets move with one shared direction/timing (common fate); does any stagger drift into looking crooked?

> Ties to our experience: PAIN.md's per-cell stagger that read as crooked is a common-fate violation (cells should have shared one motion direction/timing); the repos-table header misalignment broke similarity + continuity of the column grid. On 02b's water→space→sun WebGL journey, figure-ground is why the matte stacked-blur glass scrim sits behind text — raw contrast over a moving backdrop isn't enough.
