---
technique: Interaction design (behavior, feedback, the five dimensions)
section: ui-ux-principles
source: figma-resource-library/interaction-design.md
tags: [interaction, motion, feedback, behavior, ui, accessibility]
apply-when: defining how any element BEHAVES on input — clicks, hovers, transitions, loading states, error recovery
---

# Interaction design — applied rules

Core idea: UI design decides how an element *looks*; interaction design decides how it *behaves* when touched. Every interactive element needs a defined response, clear feedback, and a recovery path. Design the behavior, not just the still frame.

## The five dimensions (each = a layer you must actually decide)
1. Words (1D) — write the actual microcopy before styling. Button labels are verbs that name the action ("Submit", "Download" — not "OK"). Every error message states what went wrong AND the next step to recover; never a dead-end "Error".
2. Visual representations (2D) — use conventional icons (trash = delete, down-arrow = download) so meaning reads without a label; don't invent a novel glyph where a known one exists. Let layout signal hierarchy.
3. Physical objects/space (3D) — design for the actual input: tap/swipe (touch), click/hover (mouse), type. Size hit targets for fingers on touch; never ship hover-only affordances that vanish on touch devices.
4. Time (4D) — motion IS feedback. Confirm presses with a subtle state change; transition between screens to show spatial relationship, not decoration; ALWAYS show progress for any operation with a wait (progress bar / loader / busy cursor) so the user knows the system is working, not frozen.
5. Behavior (5D) — every action has a predictable, visible result. Build the recovery path (undo, back, clear error) as a first-class state, not an afterthought. Predictable behavior across the UI lowers cognitive load.

## Principle decisions to apply
6. Clarity & feedback — make affordances look operable (a button looks pressable) and disabled states look disabled (grayed-out = constraint). After every user action fire confirming feedback (visual/auditory/tactile); silence reads as failure.
7. Consistency & predictability — reuse one pattern for one job across the whole site (same nav position, same hover behavior, same transition timing). A learned interaction in one section must transfer to the next. Stick to conventions (primary nav up top) unless you have a strong reason.
8. Fitts' Law — make frequent/primary actions bigger and closer to where the cursor or thumb already is; don't bury the main CTA in a small far-corner target.
9. Hick's Law — fewer choices = faster decisions. Cut or progressively disclose options; don't dump every control on screen at once.
10. Gestalt — group related controls by proximity/similarity so the interaction surface reads as structured clusters, not a flat field of widgets.

## Build checklist (tick while wiring up interactivity)
- [ ] Every clickable/tappable element has a defined hover/active/focus AND disabled state
- [ ] Every async action shows progress (loader/bar/cursor) — no silent waits
- [ ] Every action gives immediate confirming feedback; no action is silent
- [ ] Every error states the cause + a recovery step; recovery (undo/back/retry) actually works
- [ ] Same interaction pattern reused for the same job site-wide (consistency)
- [ ] Hit targets sized for the real input device; nothing is hover-only on touch
- [ ] Primary action is large and reachable (Fitts'); choice count is trimmed (Hick's)
