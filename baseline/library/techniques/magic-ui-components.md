---
technique: Magic UI animated marketing components — catalog + the animation trick each teaches
section: web-design
source: magicui.design registry (magicuidesign/magicui, MIT)
tags: [animation, motion, marketing, react, tailwind, shadcn]
apply-when: building a React/Next + Tailwind marketing surface (hero, feature grid, CTA, social-proof) that needs one tasteful motion accent without hand-rolling the math
---

# Magic UI animated marketing components — applied rules

Magic UI is a shadcn-format registry: each component is one self-contained `.tsx` you pull with
`npx shadcn add "https://magicui.design/r/<name>.json"` (or copy the snippet). It is a **menu of
single-purpose motion accents**, not a design system. The discipline here is the same as our own
art-direction rule: **one feature accent per section, not five.** Pick ONE of these per fold; stack
two and the page reads as a demo, not a product.

74 UI components exist in the registry. We pulled 9 (the highest-value animated-marketing set) into
`snippets/magic-ui/`. Below: what each pulled one teaches, plus the rest of the catalog by family so
you know what's available before improvising.

## The 9 pulled snippets — pick by what you need, not by name

1. **marquee** (`marquee.tsx`, deps: none + `@keyframes marquee`) — infinite logo/testimonial ribbon.
   Technique: render the children `repeat` times (default 4) in a flex row, translate the row by
   `calc(-100% - var(--gap))` on a linear loop; duplication is what hides the seam. Decisions: set
   `--duration` (default 40s) high for logos, lower for urgency; `pauseOnHover` for clickable cards
   (toggles `animation-play-state:paused`); `vertical` + two columns with opposite `reverse` for the
   classic two-lane testimonial wall. Avoid using it for anything the user must read at rest.

2. **animated-beam** (`animated-beam.tsx`, dep: `motion`) — the "connect two nodes" SVG line used in
   every integrations/architecture diagram. Technique: measure `from`/`to`/`container` rects via
   `getBoundingClientRect`, draw a quadratic-bezier `path` (control point = `curvature` above the
   midpoint), then animate a `motion.linearGradient`'s x-coords along the stroke with easeOutExpo so a
   light pulse travels the wire. A `ResizeObserver` recomputes the path on layout change. Decisions:
   parent must be `relative`; give each node a ref; fan multiple beams into one hub with staggered
   `delay`; `reverse` flips travel direction. This is the component to reach for over a hand-drawn SVG.

3. **border-beam** (`border-beam.tsx`, dep: `motion`) — a light dot that travels the card's border.
   Technique: a transparent `inset-0` border with a `mask-intersect` of two linear-gradients clips a
   gradient square to the border ring; `motion` animates `offsetDistance 0%→100%` along an
   `offsetPath: rect(...)` so the square rides the perimeter. Decisions: parent needs `rounded-*` +
   `overflow-hidden`; `colorFrom`/`colorTo` to match brand; two beams with opposite `reverse` +
   `delay` for a dual-chase. Cheapest way to make ONE pricing/feature card feel "live."

4. **bento-grid** (`bento-grid.tsx`, dep: `@radix-ui/react-icons`) — the feature-grid skeleton, not a
   motion piece. Technique: `grid-cols-3 auto-rows-[22rem]`, each `BentoCard` spans cols via its own
   className; hover lifts the icon/title (`group-hover:-translate-y-10`) and reveals the CTA from the
   bottom. The `background` slot takes any node (a marquee, a globe, an image) bleeding under the
   copy. This is our archetype "bento tech grid" — snap everything to the grid; misalignment kills it.

5. **shimmer-button** (`shimmer-button.tsx`, deps: none + `@keyframes shimmer-slide`/`spin-around`) —
   premium CTA with a sweeping spark. Technique: a `conic-gradient` spark element spun by `spin-around`
   and slid by `shimmer-slide` (uses container-query units `cqw`/`cqh`), sitting behind the button
   body via a `--cut` inset backdrop; inset box-shadows shift on hover/active for tactility. Decisions:
   one shimmer button per view (the primary CTA only); tune `--speed` slow (~3s) so it reads as sheen,
   not a spinner.

6. **particles** (`particles.tsx`, deps: none) — canvas dot-field that parallaxes toward the cursor.
   Technique: a `<canvas>` paints N circles, each with a `dx/dy` drift and a `translate` eased toward
   the mouse offset; respects `devicePixelRatio`, recomputes on resize, fades particles near edges via
   an `edge` distance. Decisions: keep `quantity` modest (100–200) for perf; place absolutely behind a
   hero; set `color` to a single brand tint. A self-contained, dependency-free hero background.

7. **globe** (`globe.tsx`, deps: `cobe`, `motion`) — the rotating dotted globe with city markers.
   Technique: `cobe` renders a WebGL globe into a canvas; `phi` auto-rotates each frame; pointer drag
   feeds a `motion` spring (`r`) that adds to `phi` for inertial spin. Decisions: edit the `markers`
   array for your geography; `baseColor`/`markerColor`/`glowColor` are `[r,g,b]` 0–1 floats. The
   "global/network" hero — heavy, so make it the ONE effect on its fold.

8. **number-ticker** (`number-ticker.tsx`, dep: `motion`) — count-up stat for metrics/social proof.
   Technique: `useMotionValue` + `useSpring` (damping 60, stiffness 100); `useInView({once})` fires the
   target on scroll-in; a `springValue.on("change")` writes `Intl.NumberFormat` output to the span.
   Decisions: `tabular-nums` (already set) stops width jitter; `direction:"down"` to count down;
   `decimalPlaces` for currency. Reach for this over any homemade `setInterval` counter.

9. **text-animate** (`text-animate.tsx`, dep: `motion`) — staggered text reveal with 10 variants.
   Technique: split `children` by `by` (`text`/`word`/`character`/`line`), wrap each segment in a
   `motion` element, drive container `staggerChildren` so segments cascade; variant presets
   (`fadeIn`/`blurInUp`/`slideUp`/`scaleUp`…) supply the per-segment `hidden→show` keyframes;
   `startOnView` + `AnimatePresence` (exit) included. Decisions: `by="character"` only for short
   headlines (one span per char is costly); `by="word"` or `by="line"` for paragraphs; `blurInUp` is
   the safe editorial default.

Keyframes for the CSS-driven ones (`marquee`, `shimmer-button`) live in
`snippets/magic-ui/keyframes.css` — register them in Tailwind v4 `@theme` or v3 `theme.extend` or the
utilities (`animate-marquee`, etc.) do nothing.

## The rest of the catalog (not pulled) — know it before you improvise

- **Text effects:** `hyper-text` (scramble-decode), `morphing-text`, `typing-animation`,
  `word-rotate`, `flip-text`, `box-reveal`, `text-reveal` (scroll-scrub opacity), `sparkles-text`,
  `spinning-text`, `aurora-text`, `line-shadow-text`, `animated-shiny-text`, `animated-gradient-text`,
  `comic-text`, `highlighter`, `scroll-based-velocity`.
- **Backgrounds / patterns:** `retro-grid`, `ripple`, `dot-pattern`, `grid-pattern`,
  `animated-grid-pattern`, `interactive-grid-pattern`, `flickering-grid`, `warp-background`,
  `grid-beams`, `meteors`, `neon-gradient-card`, `magic-card`.
- **Buttons / CTAs:** `rainbow-button`, `pulsating-button`, `ripple-button`, `shiny-button`,
  `interactive-hover-button`, `animated-subscribe-button`, `cool-mode`.
- **Device / showcase frames:** `safari`, `iphone-15-pro`, `android`, `terminal`, `hero-video-dialog`,
  `code-comparison`, `script-copy-btn`, `video-text`, `pixel-image`, `lens`.
- **Special:** `orbiting-circles`, `icon-cloud`, `dock`, `confetti`, `scratch-to-reveal`,
  `animated-list`, `avatar-circles`, `tweet-card`, `arc-timeline`, `animated-theme-toggler`,
  `animated-circular-progress-bar`, `scroll-progress`, `smooth-cursor`, `file-tree`, `blur-fade`.

To pull any of these: `npx shadcn add "https://magicui.design/r/<name>.json"`.

## Cross-cutting build decisions (steal these)

- Stack `motion/react` (Framer Motion v12, the `motion` dep) is the runtime for ~half the set — if
  you already ship it, the marginal cost of these is near-zero. The other half is pure CSS keyframes.
- Every animated background (`particles`, `globe`, `retro-grid`, `meteors`) is **one accent per fold**.
- Anything users must read at rest (body copy, prices, nav) gets NO looping motion — marquee/beam/
  shimmer are for decoration and social proof only.
- Honour `prefers-reduced-motion`: gate the looping ones (marquee, border-beam, particles, globe)
  behind a reduced-motion check — Magic UI does not do this for you.

## Build checklist
- [ ] Consulted this catalog before hand-rolling any marquee / connecting-line / count-up / text reveal
- [ ] Exactly ONE animated accent owns each fold; nothing looping behind read-at-rest content
- [ ] For `marquee` / `shimmer-button`, registered the keyframes from `keyframes.css` (else no animation)
- [ ] `motion` (Framer v12) installed only if a pulled component needs it; CSS-only ones left dep-free
- [ ] `prefers-reduced-motion` path added for any looping/auto-rotating effect
- [ ] Bento/grid pieces snapped to the grid; CTA shimmer limited to the single primary action
