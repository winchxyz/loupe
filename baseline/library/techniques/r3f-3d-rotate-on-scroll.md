---
technique: 3D model rotate/animate on scroll (React Three Fiber + framer-motion-3d)
section: 3d
source: Olivier Larose — 3d-earth-scroll (github.com/olivierlarose/3d-earth-scroll)
tags: [3d, three.js, react-three-fiber, scroll, framer-motion, lenis]
apply-when: a 3D object (globe, product, sculpture) should rotate or transform as the page scrolls, cheaply, without a manual render loop
---

# 3D-on-scroll with R3F — applied build decisions

Bind scroll progress (0..1) straight to a mesh transform. No `useFrame` delta math: `framer-motion-3d`'s
`<motion.mesh>` accepts `scrollYProgress` directly on `rotation-y`/`position`/`scale`. Lenis smooths it.

Snippet: `snippets/olivierlarose/r3f-model-on-scroll.jsx`.

## Decisions
1. **Load the `<Canvas>` with `dynamic(..., { ssr: false })`** in Next.js — WebGL can't render server-side. Give it a `loading` placeholder (static image) so layout doesn't jump while the bundle loads.
2. **Feed `scrollYProgress` into `<motion.mesh rotation-y={...}>`** from `framer-motion-3d`. Simplest possible binding — value updates with scroll, no render loop to write.
3. **Smooth the input, not the output.** If Lenis is in play it already smooths scroll → rotation is buttery. If NOT using Lenis, wrap progress in `useSpring(scrollYProgress, { damping: 20 })` so raw wheel steps don't make the model snap.
4. **`offset: ['start end', 'end start']`** on the `useScroll` target so the model animates the whole time its section is visible.
5. **Lighting is load-bearing for "expensive" feel:** low `ambientLight` (~0.1) + a strong `directionalLight` (~3.5) for shape-defining shadow. Flat full-ambient looks cheap.
6. **Sphere detail `args={[1, 64, 64]}`** — enough segments that the normal/AO maps don't facet. Drop segments on a low perf tier.
7. **Texture set = color + normal + AO** via `useLoader(TextureLoader, [...])` gives a believable surface without a heavy PBR setup.

> Ties to our experience: directly relevant to our cinematic WebGL scroll site. Mind our perf tiers — gate sphere segment count / texture resolution and consider a poster fallback on the low tier, consistent with how 02b handles `?perf`/`?poster`. The Lenis wrapper here is the same substrate as `smooth-scroll-lenis`.

## Build checklist
- [ ] `<Canvas>` loaded via `dynamic(ssr:false)` with an image placeholder
- [ ] `scrollYProgress` bound to `<motion.mesh>` transform (framer-motion-3d)
- [ ] Input smoothed: Lenis OR `useSpring` on the progress
- [ ] `offset: ['start end','end start']`; low ambient + strong directional light
- [ ] Geometry detail + texture res gated per perf tier; poster fallback on low tier
