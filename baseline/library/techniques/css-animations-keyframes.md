---
technique: CSS animations (@keyframes)
section: css-animation
source: css-tricks/almanac-animation
tags: [css, animation, keyframes, performance, accessibility]
apply-when: building self-running or looping motion with no state-change trigger — loaders, ambient/idle motion, attention pulses, multi-step sequences
---

# CSS @keyframes animations — applied rules

Core idea: `@keyframes` + the `animation` property runs motion on its own (looping, sequenced, multi-step) without needing a hover/class toggle. Reach for it when motion runs by itself or has more than two steps; for a simple A→B on state change, a `transition` is lighter.

## The rules (each = a build decision)
1. **Define steps in `@keyframes`** with `from`/`to` (two-step) or percentages for more:
   ```css
   @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
   ```
   Group identical stops: `0%, 100% { … }`. Anything not declared at a stop is interpolated from the neighbours.
2. **Shorthand order:** `animation: <name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state>`. Sub-property defaults: name `none`, duration `0s` (must set it or nothing runs), timing `ease`, delay `0s`, iteration `1`, direction `normal`, fill-mode `none`, play-state `running`.
3. **`animation-iteration-count: infinite`** for loaders/ambient motion; a number for finite runs.
4. **Pair looping motion with `animation-direction: alternate`** so it ping-pongs (1→2→1) smoothly instead of hard-cutting back to the start each cycle. `reverse` plays backwards; `alternate-reverse` ping-pongs starting reversed.
5. **`animation-fill-mode: forwards` to HOLD the end state.** By default (`none`) the element snaps back to its un-animated style the instant the animation ends — a classic "why did it jump back?" bug. Use `forwards` to keep the last keyframe, `backwards` to apply the first keyframe during the delay, `both` for either end.
6. **Negative `animation-delay` starts mid-cycle** — the killer trick for staggered/offset sets: give N identical looping elements `animation-delay: -0.1s, -0.2s, …` so they're phase-shifted without separate keyframes (wave loaders, particle fields).
7. **Stagger or sequence with multiple comma-separated animations** on one element, each with its own timing:
   ```css
   animation: pulse 3s ease infinite alternate, drift 5s linear infinite;
   ```
8. **`animation-play-state: paused`** lets you freeze/resume via a class or JS — useful for pausing ambient motion on `:hover` or when offscreen (perf).

## Performance & accessibility (non-negotiable)
- **Animate `transform` and `opacity` only** for movement/fades — compositor-only, 60fps. Avoid keyframing `width`/`height`/`top`/`left`/`background-*`: they relayout/repaint every frame and tank framerate.
- **Honor `prefers-reduced-motion`** — disable or simplify looping/auto motion (it's the most disorienting kind):
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; }
  }
  ```
- Pause offscreen/idle infinite animations (`animation-play-state: paused`) to save battery/CPU.

## Build checklist
- [ ] Truly self-running/looping/multi-step motion — `@keyframes` is right, not a `transition`?
- [ ] `animation-duration` set (non-zero) and `iteration-count` correct (`infinite` for loaders)?
- [ ] Looping motion uses `alternate` to avoid the hard cut back to start?
- [ ] `fill-mode: forwards` where the end state must persist (no snap-back)?
- [ ] Staggered sets use negative `animation-delay` rather than duplicated keyframes?
- [ ] Only `transform`/`opacity` animated; no layout-triggering properties in keyframes?
- [ ] `prefers-reduced-motion` handled and idle/offscreen loops pausable?

> Ties to our experience: this is the toolset for the matte-glass loader (DECODE) and any ambient idle motion layered over the cinematic Three.js scenes — keeping keyframes on transform/opacity and pausing offscreen loops is what protects the WebGL frame budget across the perf tiers.
