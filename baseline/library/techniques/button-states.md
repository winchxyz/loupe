---
technique: Button states (interactive feedback)
section: ui-ux-principles
source: figma-resource-library/button-states.md
tags: [buttons, interaction-states, css, accessibility, feedback, forms]
apply-when: building or reviewing any clickable control (button, toggle, filter, CTA) so every interaction gives correct feedback
---

# Button states — applied rules

Core idea: a state is the button's *interactive condition at a moment* — separate from its type (role) and style (hierarchy). The same primary "Submit" moves through default → hover → active → focus → disabled without changing type or style. Ship all states or the interface has feedback gaps that quietly erode trust.

## The 5 core states (each = a build decision)
1. Default — make it obviously clickable at rest: real contrast, an interactive shape/size, and a label that names the outcome. If it reads as plain text or decoration, it's broken before the click. This is the baseline every other state derives from.
2. Hover — confirm interactivity BEFORE the click, and keep it subtle: a slight bg darken, gentle shadow lift, or minor border change. Avoid dramatic color swaps or heavy motion — they pull focus off the task. Remember `:hover` does not exist on touchscreens, so never make it load-bearing.
3. Active / pressed — fire instant tactile feedback on click/tap: small fill darken, ~0.98 scale-down, or inset shadow to mimic a physical press. Briefest state (lasts only the click) but users need it to know input registered. Works on both desktop and mobile.
4. Focus — always render a visible focus ring for keyboard nav (`:focus-visible`, e.g. 3px outline + offset). Prefer `:focus-visible` over `:focus` so mouse clicks don't show it. NEVER `outline: none` without a custom replacement — that cuts off keyboard + assistive-tech users entirely.
5. Disabled — muted fill, reduced contrast, `cursor: not-allowed`, keep it visible so the action reads as "possible, not yet." Tune the dimming: too subtle → users keep clicking; too heavy → the feature looks hidden. Always pair with a tooltip/inline message saying WHY it's blocked.

## The 4 functional states (for real flows, not the happy path)
6. Loading — show after click while awaiting a response, and disable the button to block duplicate submits. Pick by wait type: spinner for short/indeterminate (login, form submit); progress bar for measurable/long (upload, export).
7. Success — confirm completion unambiguously: green fill + checkmark + brief animation. Use a concrete verb ("Saved" / "Sent" / "Done"), not a generic "Success."
8. Error — red fill/border + warning icon, then RESET to clickable so the user can retry. The reset + a specific inline message is the part most error states skip ("Payment failed. Check your card details and try again" beats a bare red button).
9. Selected / toggled — persists until turned off (filters, toggles, segmented controls); use a filled/inverted style to separate it from default. Add a tooltip on state change when the icon flips, the action is hard to undo, or the effect is off-screen.

## CSS mapping (use the right hook)
- `:hover` cursor-over (desktop only) · `:active` click/tap (both) · `:focus-visible` keyboard-only (prefer over `:focus`) · `:disabled` native attr (use `aria-disabled` for non-native) · `.is-loading` / `.is-error` custom classes for states the browser doesn't track.
- Disable interaction during loading/disabled with `pointer-events: none`; mark toggles with `[aria-pressed="true"]`.

## Non-negotiable cross-state rules
- Contrast ≥ 4.5:1 for normal text in EVERY state, not just default (WCAG 2.2).
- Never signal a state by color alone — pair it with an icon, border-weight change, or underline (colorblind users).
- Mobile tap target ≥ 44×44px.
- Transition timing 100–200ms — slower feels sluggish, faster is missed.
- Same button type behaves identically everywhere; inconsistency erodes trust.

## Map states before building
Don't design only the happy path. "Explode" each screen into one variation per button-state outcome (a UX state diagram) and answer up front: payment fails → does the button reset? does an error appear? Documenting this before dev prevents rework.

## Build checklist (tick while building any control)
- [ ] All 5 core states present (default, hover, active, focus, disabled) — no feedback gaps?
- [ ] Focus ring visible via `:focus-visible`; no naked `outline: none`?
- [ ] Loading state disables the button (no duplicate submits) and matches wait type (spinner vs bar)?
- [ ] Error state resets to clickable + carries a specific recovery message?
- [ ] No state relies on color alone; contrast ≥ 4.5:1 in every state?
- [ ] Disabled buttons explain WHY (tooltip/inline), tap targets ≥ 44px, transitions 100–200ms?
- [ ] State diagram drawn for the screen's failure/edge paths, not just the happy path?
