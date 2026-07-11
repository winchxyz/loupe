---
technique: HCI principles (Shneiderman's 8 + interaction model)
section: ui-ux-principles
source: figma-resource-library/human-computer-interaction.md
tags: [interaction, feedback, accessibility, error-handling, ux, input-modalities]
apply-when: designing any interactive flow — making a UI feel responsive, recoverable, and trustworthy under real user action
---

# Human-computer interaction — applied rules

Core idea: an interface is a contract between a person and a system. Every user action must produce a perceptible, reversible, low-memory response. Build for the action loop (intent → input → feedback → next), not just the static frame.

## Frame every interaction with 4 elements (decide these first)
1. The user — design for their actual behavior/ability, not an idealized one. If you haven't tested the flow with a real person, you're guessing.
2. The task — name the single goal of the view, then strip anything that doesn't move the user toward it. Map the task flow and cut steps.
3. The interface — pick the primary input (click / touch / voice / scroll) and size targets, contrast, and resolution for THAT modality. Don't design a touch flow with hover-only affordances.
4. The context — design for the worst real environment, not the demo: poor network, bright sunlight, one-handed, distracted. Provide a graceful degraded mode (offline cache, poster fallback) instead of a dead screen.

## Shneiderman's 8 principles (each = a build decision)
1. Consistency — reuse the same icon/color/spacing/word for the same meaning across the whole site. A control that looks different must DO something different; never vary chrome for decoration.
2. Shortcuts — give power users a faster path (keyboard, gesture, saved state) without hiding the basic path from newcomers. Additive, never the only route.
3. Feedback — every action gets a visible acknowledgment within ~100ms: state change, progress bar, loader, color shift. Silence reads as "broken." Choose feedback proportional to wait length (instant tick vs. determinate progress).
4. Dialogue (closure) — mark the end of a flow explicitly ("Confirmed", success state). A task with no clear finish leaves users hovering and re-clicking.
5. Error handling — prevent errors first (constrain inputs, disable invalid actions); when one happens, say what went wrong AND how to fix it, inline and in plain language. Never a bare code or a dead end.
6. Reversal — make destructive/irreversible actions undoable (undo-send, confirm-then-act). The easy way out lowers the cost of trying, which raises engagement.
7. Control — let the user drive: don't autoplay, don't trap scroll, don't hijack navigation. Offer customization/personalization where it's cheap.
8. Memory load — never make users hold info across screens. Surface choices in place (filters, breadcrumbs, persistent selections, recognition over recall).

## Match feedback to the input modality
- Sight — visual state change is the default ack; ensure contrast and motion are legible.
- Touch — targets >= comfortable thumb size; pair with haptic/visual confirm on tap.
- Sound — optional audio cue for completion/notification; must be skippable and never the only signal.
- Voice — confirm parsed intent back to the user before acting.
- Spatial/gesture — give a continuous visual response that tracks the movement so the user knows it registered.

## Build checklist (tick while wiring up interactions)
- [ ] Every clickable/tappable element gives visible feedback within ~100ms (hover, active, loading, done).
- [ ] Same meaning → same icon/color/word everywhere; no decorative inconsistency.
- [ ] Each flow has an explicit closure state ("done"/"confirmed"), not just a silent return.
- [ ] Destructive actions are reversible or confirmed; there's always an easy way out.
- [ ] Errors are caught early and explained with a fix, inline and in plain language.
- [ ] No cross-screen memory required — choices are shown in place (filters, breadcrumbs, persisted state).
- [ ] A degraded context (slow/offline, weak hardware, sunlight, one-handed) still yields a usable state, not a dead screen.
