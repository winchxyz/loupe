---
technique: React Bits — animated component library (catalog + reuse rules)
section: components-and-effects
source: github.com/DavidHDev/react-bits (MIT + Commons Clause)
tags: [react, animation, backgrounds, text-effects, ogl, framer-motion]
apply-when: you need a drop-in animated React effect — shimmering/rotating/decrypt text, a WebGL/canvas background, or an interactive card/border — instead of hand-rolling it
---

# React Bits — applied rules

React Bits is a catalog of **134 copy-paste React effects** (no npm package to install — you paste the component file). Each ships in 4 flavours in the repo: `src/content/*` (JS + separate `.css`), `src/tailwind/*` (JS, Tailwind classes), `src/ts-default/*` and `src/ts-tailwind/*` (TS). **We harvested the `src/content` (JS+CSS) flavour** — most portable to a plain Vite/React project. 12 of the 134 are pulled into `snippets/react-bits/`; the rest are catalogued below so you know what exists before re-deriving it.

## Decide BEFORE you paste

1. **Check the dep cost first.** Three buckets:
   - **Zero-dep / canvas only** (paste and go): `ClickSpark`, `SpotlightCard`, `StarBorder`. These are the safe defaults — reach here first.
   - **`motion` (Framer Motion v12)**: every text animation + `TiltedCard`. One dependency, cheap. Fine for a marketing/landing layer.
   - **WebGL via `ogl`** (`Aurora`, `Particles`, `Threads`, `Waves`, `Iridescence`, `Silk`, `Beams`, `LiquidEther`, `Prism`, `Plasma`, `Hyperspeed`, `Galaxy` …) **or `three`** (`Ballpit`, `Lanyard`, `ModelViewer`, `FluidGlass`, `Orb`) **or `gsap`** (`DotGrid` needs `gsap` + `InertiaPlugin`). These add a real render loop — treat them like any other WebGL layer (see perf rule below).
2. **One heavy background per page, max.** These run a `requestAnimationFrame`/WebGL loop forever. On our cinematic Three.js sites we already own the canvas — do NOT stack a React Bits `ogl` background *on top of* a Three.js scene; pick one. For a mostly-static page, exactly one `Aurora`/`Particles`/`DotGrid` is the budget.
3. **Gate the loop on visibility + reduced-motion.** None of these components self-pause when scrolled offscreen or when `prefers-reduced-motion` is set. Wrap them: `IntersectionObserver` to mount/unmount, and a `matchMedia('(prefers-reduced-motion: reduce)')` early-return that renders the static fallback (e.g. plain text for `ShinyText`, a flat gradient for `Aurora`). This is required, not optional.
4. **Prefer CSS-driven text effects over JS-driven where both exist.** `GradientText`, `StarBorder`, `SpotlightCard` are essentially CSS (gradient + `background-clip`/`radial-gradient` + custom props) — cheap, GPU-friendly, no layout thrash. `DecryptedText`/`RotatingText`/`SplitText` mutate the DOM per-frame/char — fine for one hero headline, never for body copy or a list.
5. **Accessibility: keep the real text in the DOM.** `RotatingText` already renders an `sr-only` span with the current word — preserve that pattern. For `DecryptedText`/`ScrambledText`, ensure the final settled text is the accessible text, and don't animate anything a screen reader reads mid-scramble.
6. **License nuance — internal use only.** MIT **+ Commons Clause**: free to use inside the owner's own sites/apps, but you may **not resell, sublicense, or redistribute the components themselves** (alone, bundled, or ported). For deZign-pro (build the owner's sites) this is fully fine; never ship these as a "components pack" product.

## What we pulled (12 in `snippets/react-bits/`) and when to reach for each

- **Text** — `ShinyText` (subtle metallic sheen sweep across a label/CTA; `motion`), `GradientText` (animated multi-stop gradient fill + optional border pill; `motion`), `RotatingText` (cycle words with per-char spring stagger; `motion`), `DecryptedText` (scramble→resolve on view/hover; `motion`), `CountUp` (spring-eased number roll, fires on `useInView`; `motion`).
- **Backgrounds** — `Aurora` (flowing aurora ribbons, `ogl`/WebGL), `Particles` (3D parallax particle field, `ogl`), `DotGrid` (interactive dot grid that reacts to cursor with inertia, `gsap`+`InertiaPlugin`).
- **Interactive** — `SpotlightCard` (radial spotlight follows cursor via CSS custom props; **zero-dep**), `ClickSpark` (canvas spark burst on click anywhere in its bounds; **zero-dep**), `StarBorder` (animated glowing travelling border on any element; **zero-dep CSS**), `TiltedCard` (3D tilt + parallax caption on hover; `motion`).

## Full catalog (134 total — names are the import/folder names)

**TextAnimations (23):** ASCIIText, BlurText, CircularText, CountUp*, CurvedLoop, DecryptedText*, FallingText, FuzzyText, GlitchText, GradientText*, RotatingText*, ScrambledText, ScrollFloat, ScrollReveal, ScrollVelocity, ShinyText*, Shuffle, SplitText, TextCursor, TextPressure, TextType, TrueFocus, VariableProximity.

**Backgrounds (45):** Aurora*, Balatro, Ballpit, Beams, ColorBends, DarkVeil, Dither, DotField, DotGrid*, EvilEye, FaultyTerminal, Ferrofluid, FloatingLines, Galaxy, GradientBlinds, Grainient, GridDistortion, GridMotion, GridScan, Hyperspeed, Iridescence, LetterGlitch, LightPillar, LightRays, Lightfall, Lightning, LineWaves, LiquidChrome, LiquidEther, Orb, Particles*, PixelBlast, PixelSnow, Plasma, PlasmaWave, Prism, PrismaticBurst, Radar, RippleGrid, ShapeGrid, SideRays, Silk, SoftAurora, Threads, Waves.

**Animations / effects (30):** AnimatedContent, Antigravity, BlobCursor, ClickSpark*, Crosshair, Cubes, ElectricBorder, FadeContent, GhostCursor, GlareHover, GradualBlur, ImageTrail, LaserFlow, LogoLoop, MagicRings, Magnet, MagnetLines, MetaBalls, MetallicPaint, Noise, OrbitImages, PixelTrail, PixelTransition, Ribbons, ShapeBlur, SplashCursor, StarBorder*, StickerPeel, Strands, TargetCursor.

**Components (36):** AnimatedList, BorderGlow, BounceCards, BubbleMenu, CardNav, CardSwap, Carousel, ChromaGrid, CircularGallery, Counter, DecayCard, Dock, DomeGallery, ElasticSlider, FlowingMenu, FluidGlass, FlyingPosters, Folder, GlassIcons, GlassSurface, GooeyNav, InfiniteMenu, Lanyard, MagicBento, Masonry, ModelViewer, PillNav, PixelCard, ProfileCard, ReflectiveCard, ScrollStack, SpotlightCard*, Stack, StaggeredMenu, Stepper, TiltedCard*.

(* = pulled into `snippets/react-bits/`. Harvested 12 of 134; the rest are catalogued, not copied — fetch on demand from `raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/<Category>/<Name>/<Name>.jsx`.)

> Ties to our experience: `GlassSurface`/`GlassIcons`/`FluidGlass`/`ReflectiveCard` map directly to the matte-glass UI we settled on for 02b — worth a look before hand-rolling glass; but the 02b background is FINALIZED on a Three.js scene, so do NOT bolt an `ogl` React Bits background onto it. For a *new, mostly-static* page, one gated `Aurora`/`Particles` is the sanctioned use.

## Build checklist
- [ ] Reached for a **zero-dep** option (`SpotlightCard`/`ClickSpark`/`StarBorder`) before adding a `motion`/`ogl`/`three`/`gsap` dependency.
- [ ] At most **one** WebGL/canvas background loop on the page; not stacked on an existing Three.js canvas.
- [ ] Wrapped any animated component in an `IntersectionObserver` mount-gate **and** a `prefers-reduced-motion` static fallback.
- [ ] Kept the real/settled text in the DOM (sr-only or final value) for every text-scramble/rotate effect.
- [ ] Pasted the **required CSS** (bottom of each snippet) into a `.css` file or `<style>`; matched the component's expected custom props.
- [ ] Confirmed use is internal (own site) — not redistributing the components as a pack (Commons Clause).
