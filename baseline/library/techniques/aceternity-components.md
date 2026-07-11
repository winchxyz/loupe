---
technique: Aceternity UI — flashy hero/section components (catalog + signature effects)
section: components
source: Aceternity UI (ui.aceternity.com) — Manu Arora; registry https://ui.aceternity.com/registry/<name>.json
tags: [react, framer-motion, hero, background-fx, tailwind]
apply-when: building a React/Next hero or marketing section that needs a high-impact, low-effort flashy effect (glow, beams, aurora, 3d-tilt, animated text)
---

# Aceternity UI — applied build decisions

Aceternity is a **copy-paste shadcn-format registry** of 129 flashy React components. You don't `npm install`
a package — you pull one `.tsx` from `https://ui.aceternity.com/registry/<name>.json` (`files[].content`) and
drop it into `components/ui/`. Almost everything is **Tailwind + Motion (framer-motion, now `motion/react`)**.
8 signature components are saved in `snippets/aceternity/`. Use them as a starting block, then re-skin —
don't ship the demo colors.

## Decisions when reaching for these

- **Pick the lightest tool that gets the effect.** Several flagship effects need **zero JS / zero deps** — prefer them:
  - `spotlight` — a single blurred SVG `<ellipse>` (`feGaussianBlur stdDeviation=151`) animated by a CSS keyframe. No deps.
  - `aurora-background` — pure CSS: stacked `repeating-linear-gradient` vars + `blur` + `mix-blend-difference` + a radial `mask-image`. No deps.
  - `3d-card` — pointer-tracked transform, plain React state. No deps.
  Reach for Motion only when you actually need spring/stagger/layout (`text-generate-effect`, `card-hover-effect`, `lamp`, `background-beams`).
- **Register the Tailwind keyframes — this is the #1 reason an Aceternity paste "does nothing".** The components
  reference custom animations/utilities that DON'T exist in stock Tailwind: `animate-spotlight`, `animate-aurora`,
  `animate-meteor`, and `bg-gradient-conic`. You must add the matching `keyframes` + `animation` (and conic
  background) to `tailwind.config.ts` `theme.extend`, or the element renders static/invisible. Verify the
  effect actually moves, don't trust that the markup mounted (this is exactly our "said done, nothing changed" failure mode).
- **Provide `cn` and the right Motion import.** Every file imports `@/lib/utils`'s `cn` (clsx + tailwind-merge) —
  add it once. Newer pulls import from `motion/react`; older from `framer-motion`. Pick one and make the paste match.
- **3D tilt recipe (steal this pattern, not just the component):** parent gets `perspective:1000px`; the tracked
  layer gets `transform-style:preserve-3d` and `rotateX/rotateY` from `(cursor - center)/25`; children float by
  their own `translateZ`. Reset transform to 0 on mouse-leave with a `transition` so it eases back.
- **Shared-element hover (card-hover-effect):** the moving highlight is ONE `motion.span` with a constant
  `layoutId="hoverBackground"` inside `AnimatePresence`; Motion tweens it between cards for free. Use this whenever
  a single indicator should glide between siblings (tabs, nav, card grids) — don't animate N separate backgrounds.
- **Staggered text reveal (text-generate-effect):** split on spaces, render each word as a `<span>` starting at
  `opacity:0, blur(10px)`, then `useAnimate` + `stagger(0.2)` to 1/blur(0). Cheap, classy hero headline; keep
  `duration` ~0.5 so it doesn't feel slow.
- **Glow/lamp sections are layered blur, not images.** `lamp` = two `conic-gradient` `motion.div`s whose `width`
  animates on `whileInView`, plus stacked `blur-2xl/3xl` plates and linear `mask-image` fades. Recolor by swapping
  the `from-cyan-500` / `bg-cyan-400` tokens; it's all Tailwind.
- **Performance: these stack big blurs + `mix-blend` + `will-change-transform`.** On a heavy hero (or alongside a
  WebGL scene) they cost real GPU. Gate the expensive ones (`sparkles` runs a full tsParticles engine; `aurora`,
  `lamp`, `background-beams` are blur-heavy) behind our perf tiers and honor `prefers-reduced-motion`.

## Catalog (129 components, by effect family)

Full list lives in our `indexRows`; the high-value flashy families:
- **Backgrounds / ambient FX:** aurora-background, background-beams (+ with-collision), background-lines,
  background-gradient-animation, background-boxes, vortex, wavy-background, shooting-stars, sparkles,
  meteor-effect, grid/dot backgrounds, spotlight (+ spotlight-new), lamp.
- **Hero / scroll:** hero-highlight, hero-parallax, macbook-scroll, container-scroll-animation, google-gemini-effect,
  tracing-beam, sticky-scroll-reveal, github/3d-globe, world-map, 3d-marquee.
- **Cards / tilt:** 3d-card-effect, card-hover-effect, card-spotlight, glare-card, evervault-card, wobble-card,
  comet-card, focus-cards, glowing-effect, card-stack, expandable/draggable cards, apple-cards-carousel, lens.
- **Text animations:** text-generate-effect, typewriter-effect, flip-words, text-hover-effect, text-reveal-card,
  colourful-text, container-text-flip, pointer-highlight, encrypted/squiggly text.
- **Inputs / buttons / nav:** moving-border, hover-border-gradient, stateful-button, magnetic-button,
  placeholders-and-vanish-input, gooey-input, floating-dock, floating/resizable navbar, animated-tabs, multi-step-loader.

## Build checklist
- [ ] Pulled the `.tsx` from the registry JSON and saved with attribution header (don't re-type from memory)?
- [ ] Added `cn` (`@/lib/utils`) and matched the Motion import (`motion/react` vs `framer-motion`)?
- [ ] Registered any custom Tailwind keyframes / utilities (`animate-spotlight`, `animate-aurora`, `bg-gradient-conic`, `animate-meteor`)?
- [ ] Re-skinned demo colors/copy — not shipping the cyan/blue defaults as-is?
- [ ] Verified the effect actually ANIMATES on screen (not a static mount)?
- [ ] Blur/particle-heavy effects gated behind perf tiers + `prefers-reduced-motion`?

> Ties to our experience: the "Tailwind keyframe not registered -> paste mounts but nothing moves" trap is our
> exact "said done, nothing visually changed" PAIN — verify motion, not mount. Blur/`mix-blend`/tsParticles cost
> maps straight onto our 02b perf-tier + poster-fallback discipline; gate these like any heavy GPU layer.
