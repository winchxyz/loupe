---
technique: Scroll-pinned layout switch with GSAP ScrollTrigger + Flip
section: scroll-motion
source: codrops/2023-07-20-scroll-based-layout-animations
tags: [gsap, scrolltrigger, flip, layout, scroll, pin]
apply-when: a section should morph between two different layouts (grid->list, stacked->spread) as the user scrolls through it, with everything animating in place
---

# Scroll-pinned layout switch (ScrollTrigger + Flip)

Morph a section from one layout into a structurally different one mid-scroll, with every element gliding to its new slot — without hand-animating a single box. You author only two static CSS layouts; GSAP Flip computes the motion between them; ScrollTrigger pins and scrubs it.

## Build decisions

- **Author two static states in CSS, never keyframes.** Default layout + a `.layout-switch` class that redefines `grid-template`, `flex`, `order`, sizes. The whole animation is: `Flip.getState(items)` -> toggle the class -> `Flip.from(state)`. Do not write per-item from/to tweens; that defeats the point and breaks on reflow.
- **Pin the section, scrub the progress.** `ScrollTrigger.create({ trigger, pin: true, scrub: true, end: '+=100%' })`. Pin freezes the section as a stage; scrub ties the morph to scroll position so it's reversible and scrubbable. Decide the morph trigger at a crossing (e.g. `self.progress > 0.5`) and only act on the crossing, not every `onUpdate`.
- **Use `absolute: true` in `Flip.from`** so items are taken out of document flow during the tween — this kills the reflow jitter you get when neighbouring elements shift mid-animation.
- **Flip survives DOM surgery.** You can reparent/reorder/add/remove nodes between `getState` and `from`; Flip still tweens the visual delta. Use this for grid->detail or list->card restructures, not just CSS-grid swaps.
- **Set `pin-spacing` and test the scroll length.** A pinned section consumes scroll distance (`end`); too short and the morph finishes instantly, too long and it drags. Tune `end` to taste.
- **Respect reduced motion.** Under `prefers-reduced-motion`, skip Flip and just toggle the class at the crossing (instant layout change, no glide).

## Build checklist
- [ ] Two static layouts in CSS (default + switch class), zero hand-keyframed tweens?
- [ ] Section pinned and the morph scrubbed/triggered at a scroll crossing?
- [ ] `Flip.from({ absolute: true })` to prevent reflow jitter?
- [ ] Scroll `end` length tuned so the morph neither snaps nor drags?
- [ ] Reduced-motion path toggles the class instantly without Flip?

> Ties to our experience: this is the sticky-pin responsive mechanic in our toolkit, done right — and matches 02b's "a style = different STRUCTURE/composition, not a CSS skin" directive: Flip is exactly how you move between two genuinely different layouts on scroll instead of faking it with opacity. Pairs with our perf-tier gating (drop to instant class-toggle on low tiers / reduced motion).
