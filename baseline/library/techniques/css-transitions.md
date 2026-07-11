---
technique: CSS transitions (state-change animation)
section: css-animation
source: css-tricks/almanac-transition
tags: [css, animation, transitions, performance, interaction-states, accessibility]
apply-when: animating a change between two states — hover/focus/active feedback, open/close, theme swaps, any A→B style change
---

# CSS transitions — applied rules

Core idea: a transition interpolates a property smoothly when its value *changes* (via `:hover`, a toggled class, etc.). It always needs a from-state and a to-state — for an animation that runs on its own with no state change, use `@keyframes`/`animation` instead.

## The rules (each = a build decision)
1. **Shorthand order is `transition: <property> <duration> <timing-function> <delay>`.** Defaults: duration `0s` (so with no duration nothing animates), timing `ease`, delay `0s`. Example: `transition: background-color 0.2s ease;`
2. **Declare the transition on the BASE element, not the `:hover`.** Putting it on the resting state makes it apply both entering *and* leaving the state; putting it only on `:hover` animates in but snaps out.
3. **Name the specific property — avoid `transition: all`.** `all` watches every property (slower, and animates things you didn't intend, e.g. an unrelated layout shift). List exactly what changes: `transition: transform 0.3s ease, opacity 0.3s ease;` (comma-separate multiple). In each comma group the **first** time value is duration, the second is delay.
4. **Animate `transform` and `opacity` — basically nothing else, for movement/fades.** These are compositor-only (GPU), so they don't trigger layout or paint and stay at 60fps. Animating `width`/`height`/`top`/`left`/`margin` thrashes layout every frame — replace "animate `left`" with "animate `transform: translateX()`", "animate `width`" with a `scale()` where possible.
5. **You can't transition to/from `auto` or `display`.** `height: auto` and `display: none` aren't interpolatable. For expand/collapse use `max-height` to a known value, or `grid-template-rows: 0fr → 1fr`, or animate `opacity`/`transform` and toggle `display` at the ends.
6. **Pick the timing function for intent:** `ease` (default, gentle), `ease-out` (fast start, soft landing — best for things *entering* the screen), `ease-in` (for things *leaving*), `linear` (mechanical/looping), `cubic-bezier()` for custom snap/overshoot, `steps()` for sprite/typewriter stepping.
7. **Use negative `transition-delay` sparingly and `will-change` even more sparingly.** `will-change: transform` hints the browser to promote a layer *before* the animation — apply it just before animating and remove it after; leaving it on everything wastes memory.

## Accessibility (non-negotiable)
- **Honor `prefers-reduced-motion`.** Gate or kill motion for users who ask for less:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { transition-duration: 0.01ms !important; }
  }
  ```
  Prefer reducing/replacing (cross-fade instead of slide) over a blanket kill where a transition conveys meaning.

## Build checklist
- [ ] Transition declared on the base/resting element so it runs both directions?
- [ ] Specific properties listed (no `transition: all`)?
- [ ] Movement/fade uses `transform` + `opacity` only — no animating `width/height/top/left`?
- [ ] No attempt to transition `auto` height or `display` (used `max-height`/`grid 0fr→1fr`/opacity instead)?
- [ ] Timing function matches intent (`ease-out` enter, `ease-in` leave)?
- [ ] `prefers-reduced-motion` handled?
- [ ] `will-change` only on actively-animating elements, removed after?

> Ties to our experience: directly reinforces the matte-glass UI's interaction states (button hover/active at 100–200ms) and is the discipline that keeps the cinematic Three.js sites smooth — every DOM-overlay transition stays on transform/opacity so it never competes with the WebGL frame budget across the perf tiers.
