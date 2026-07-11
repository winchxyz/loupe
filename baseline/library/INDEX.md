# library INDEX — consult before building a site

> One row per harvested source / recipe / technique. **Consult before building.**
> Last updated 2026-06-18 · Status: 🟢 Figma resource library fully harvested (122 articles → techniques). Next gaps: owner reference links (CSS/Three.js sites), a pass over our own builds (01/02b), and the ready-stack curation into `standards/`.

## Sources (raw sites harvested into `sources/`)

| Name | URL | Date | Items | Raw location |
|------|-----|------|-------|--------------|
| Figma resource library | https://www.figma.com/resource-library/ | 2026-06-18 | 122 articles | `sources/figma-resource-library/` (+ `_manifest.json`) |
| Inspiration galleries (Awwwards, FWA, GSAP Showcase, Site Inspire, Godly, Land Book, Lapa Ninja) | various | 2026-06-18 | 7 registered | [inspiration-sources.md](inspiration-sources.md) — discovery tools; owner picks → recipes |
| Asset sources (Poly Pizza, Poly Haven, Kenney, Sketchfab, SVGRepo icons) | various | 2026-06-18 | 5 registered | [asset-sources.md](asset-sources.md) — 3D/HDRI/textures/icons; **search → propose → approve** protocol when a build needs an asset |
| Component / effect sources (21st.dev, CodePen, GreenSock, shadcn/ui, Magic UI, Aceternity, React Bits) | various | 2026-06-18 | 7 registered | [component-sources.md](component-sources.md) — React/Tailwind UI + effects; owner-paste + **on-demand search→propose→approve**; lands in `snippets/` |
| CodePen picks (owner-curated effects) | various | 2026-06-19 | 29 runnable | [techniques/codepen-picks.md](techniques/codepen-picks.md) catalog + `snippets/codepen-picks/` (self-contained `.html`, chrome stripped) |
| Code & component sources (List A — Hover.css, React Bits, shadcn, Magic UI, Aceternity, Three.js, Codrops, CSS-Tricks, Olivier Larose, Animista, system-design.space, Poly Haven) | various | 2026-06-18 | 46 digests + 68 snippets | see **Code & component sources** table below + `snippets/<source>/` |

## Recipes (`recipes/`)

| Recipe | Reference seed | One-line |
|--------|----------------|----------|
| [HyperOdds](recipes/hyperodds.md) | sondaven.com | Strict two-tone duotone + caps-only two-extreme type + ordered-dither pixel dust as THE texture; ships terminal + resort themes on one codebase. |
| [TESQ](recipes/tesq.md) | hubtown.co.in | Midnight-space ice duotone + Earth→Moon journey-as-structure; Inter Tight / Inter / JetBrains Mono; 70/20/10 editorial-HUD-glass; glow never crosses body text. |
| [ref-cipher-digital](recipes/ref-cipher-digital.md) | cipherdigital.com | Dark institutional data-center site: charcoal ramp + hypergreen accent, Articulat CF, 12-col grid, GSAP+Lenis, video hero |
| [ref-clapat-hayler](recipes/ref-clapat-hayler.md) | demo.clapat-templates.com · WebGL | Minimal image-led studio portfolio: white/black invertible sections, lavender cursor accent, huge clamp() type, GSAP+Lenis+WebGL |
| [ref-crav-burgers](recipes/ref-crav-burgers.md) | cravburgers.shop | Loud smashed-burger food site: giant fluid-vw outlined display type on flat warm blocks, GSAP+Lenis |
| [ref-sutera](recipes/ref-sutera.md) | sutera.ch | Type-led monochrome lab/portfolio: black-on-white + cobalt/mint accents, 4 mixed typefaces, fluid svw scale, GSAP/ScrollTrigger |
| [ref-fifth-and-dune](recipes/ref-fifth-and-dune.md) | fifthanddune.com | Dark luxury home-builder: near-black + single antique-gold accent, Cinzel over Montserrat, Lenis+GSAP scrub reveals |
| [ref-oryzo](recipes/ref-oryzo.md) | oryzo.ai · WebGL | Warm cream/cocoa + burnt-orange premium product showcase; Three.js+Rive+GSAP, fluid 16-col Halyard type |
| [ref-vertex3d](recipes/ref-vertex3d.md) | vertex3d.asia · WebGL | Dark cinematic WebGL studio: deep navy + red accent, light Inter, Lenis+GSAP, live 3D + head/hand tracking |
| [ref-joseph-san](recipes/ref-joseph-san.md) | joseph-san.com · WebGL | Immersive Three.js+GSAP scroll-narrative portfolio; teal-black/white/amber, fullscreen canvas, custom cursor |
| [ref-quiet-cubes](recipes/ref-quiet-cubes.md) | quietcubes.com | Calm modern-luxury product site: warm-white/beige + one orange accent, single Inter Tight medium, Webflow + GSAP/SplitText/Lenis |
| [ref-sanrita](recipes/ref-sanrita.md) | sanrita.ca | Expedition/map-metaphor studio: icy-blue + forest-green + lime, condensed uppercase + mono, GSAP+Lenis |
| [ref-fantik-studio](recipes/ref-fantik-studio.md) | fantik.studio · WebGL | Award-studio WebGL scroll experience: black canvas, white Inter Display, per-case jewel themes; r3f+GSAP+Lenis |
| [ref-jesko-jets](recipes/ref-jesko-jets.md) | jeskojets.com · WebGL | Private-jet charter: warm cream+brown editorial luxury, ultra-wide GT America, Webflow+GSAP/Lenis/Barba, WebGL globe |
| [ref-madbox](recipes/ref-madbox.md) | madbox.io · WebGL | Playful candy-gradient game studio: white base, pink-to-yellow gradients, Changa+Work Sans, Three.js/Barba/GSAP |
| [ref-lando-norris](recipes/ref-lando-norris.md) | landonorris.com · WebGL | Dark olive-green ground + electric-lime accent, Brier/Mona Sans, Rive+WebGL+Matter.js motion |
| [ref-happyrobot](recipes/ref-happyrobot.md) | happyrobot.ai | Premium enterprise-AI B2B SaaS: serif Tobias display + Suisse body, warm neutrals, video hero, Tailwind v4/shadcn, restrained motion |
| [ref-kvs-services](recipes/ref-kvs-services.md) | kvs.services · screenshot | Dark "underground-luxe" studio: near-black + one hot-orange, bracketed-mono UI, blackletter logo, CRT texture, dithered illustration |
| [ref-itomdev](recipes/ref-itomdev.md) | itomdev.com · screenshot | Hand-drawn explorable 3D portfolio: pencil-NPR room you walk, doodle-code, paper white + selective hand-color, gamified |
| [ref-chartogne-taillet](recipes/ref-chartogne-taillet.md) | chartogne-taillet.com · screenshot | Antique terroir-map champagne house: cream parchment + charcoal engraving + one brick-red, tracked Didone serif, map-as-nav |
| [ref-2019-bruno-simon](recipes/ref-2019-bruno-simon.md) | 2019.bruno-simon.com · screenshot | Drivable low-poly physics portfolio: warm orange gradient + flat low-poly + red car, Three.js+physics, content = places you drive to |
| [ref-messenger-abeto](recipes/ref-messenger-abeto.md) | messenger.abeto.co · screenshot | Cel-shaded narrative 3D world: teal/seafoam + red jacket pop, blocky display font, walk a Ghibli-ish street, sound |
| [ref-igloo-inc](recipes/ref-igloo-inc.md) | igloo.inc · screenshot | Icy "cryo-lab specimen" Web3 holding co: monochrome cold grey-blue + glowing seams, all-mono HUD, exploding igloo + point-cloud specimens |
## Techniques (`techniques/`) — 122 from Figma resource library

Distilled build decisions (not summaries). Grouped by the 7 source sections. Each links to its `techniques/<slug>.md`; raw article alongside in `sources/figma-resource-library/<slug>.md`.

### Our own builds & techniques (10)

Distilled from our shipped sites (02b/TESQ, HyperOdds) + project rules. Code in `snippets/our-builds/`.

| Technique | One-line |
|-----------|----------|
| [HDRI / background selection](techniques/hdri-background-selection.md) | Pick by tags not name, handle the lower hemisphere, verify what's actually on screen — no "sky → houses". |
| [Matte stacked-blur glass UI](techniques/matte-stacked-blur-glass.md) | Opaque dark-tint fills + hairline border + inner top-highlight for legibility; full-screen loader nests two backdrop-filter passes to beat Chrome's single-blur cap. |
| [Sticky-pin scroll-dwell sections](techniques/sticky-pin-responsive.md) | Pure-CSS `position:sticky` dwell over a tall track (fixed scene reads through); hamburger ≤1080, pins off ≤920 so stacked content never overlaps. |
| [WebGL time-of-day journey](techniques/webgl-time-of-day-journey.md) | One palindromic keyframe array + one `applyTOD(t)` shared by dev slider and prod sun-clock; smoothstep staging + `__dz` probe hooks. |
| [Gerstner ocean + planar SSR](techniques/gerstner-water-ssr.md) | Vertex Gerstner trochoidal chop + fragment Beer-Lambert/SSS/GGX optics + mirrored-camera planar reflection via render target + cat's-paw gust lanes. |
| [WebGL perf tiers + dynamic resolution](techniques/webgl-perf-tiers-dynamic-resolution.md) | Tier from GPU/cores/memory/pointer → one `Q(lo,md,hi)` knob; FPS-EMA loop rescales internal resolution (0.55–1.0) to hold framerate; ?perf/?res/?poster/?review flags. |
| [Glass loader + poster/context-loss fallback](techniques/loader-glass-poster-fallback.md) | Self-dismissing matte-glass WebGL loader paired with a static poster for no-WebGL / context-loss, sharing one `window.__loaderClose` seam. |
| [Static site → Docker → Railway](techniques/static-site-docker-railway.md) | Zero-npm-dependency Node container (node:20-alpine): env PORT + 0.0.0.0 bind, WebGL MIME table, split cache headers, railway.toml UPPERCASE enums, mirrored .dockerignore/.gitignore. |
| [Scroll-journey choreography (Lenis + ScrollTrigger)](techniques/scroll-journey-choreography.md) | One normalized `pCur` drives a Catmull-Rom camera spline AND every DOM beat; Lenis owns scroll, `lenis.on('scroll',ScrollTrigger.update)` syncs GSAP; fixed canvas replaces pinning — no drift. |
| [Generated-page review (block rhythm + robustness)](techniques/single-shot-page-robustness.md) | Each major block ≈ one viewport (`min-height:100svh`) with content composed to FILL it — not shorter (next block bleeds in) nor over-tall (dead space); use the width; + font-reflow `ScrollTrigger.refresh` guard. Verify block height/proportion at the user's real width, not overflow. |

### Code & component sources (List A, 2026-06-18)

Build-decision digests in `techniques/`, runnable code in `snippets/<source>/` (each file headered with source · author · license). Large sources are curated — every digest logs what it capped.

| Source | Digests (`techniques/`) | Snippets | License |
|--------|--------------------------|----------|---------|
| **Hover.css** | [hover-css-effects](techniques/hover-css-effects.md) | `snippets/hover-css/` (1, full lib) | MIT |
| **React Bits** | [react-bits-components](techniques/react-bits-components.md) | `snippets/react-bits/` (12) | MIT + Commons Clause |
| **shadcn/ui** | [shadcn-ui-foundations](techniques/shadcn-ui-foundations.md) | `snippets/shadcn/` (5) | MIT |
| **Magic UI** | [magic-ui-components](techniques/magic-ui-components.md) | `snippets/magic-ui/` (10) | MIT |
| **Aceternity UI** | [aceternity-components](techniques/aceternity-components.md) | `snippets/aceternity/` (8) | free (personal + commercial) |
| **Three.js Examples** | [threejs-examples-catalog](techniques/threejs-examples-catalog.md), [postprocessing-cinematic](techniques/postprocessing-cinematic.md), [sky-and-water](techniques/sky-and-water.md), [gpgpu-and-points](techniques/gpgpu-and-points.md) | `snippets/threejs-examples/` (8) | MIT |
| **Animista** | [animista-css-animations](techniques/animista-css-animations.md) | `snippets/animista/` (1) | generator output (free comm.) |
| **Codrops** | [webgl-scroll-velocity-distortion](techniques/webgl-scroll-velocity-distortion.md), [gsap-shader-uniform-animation](techniques/gsap-shader-uniform-animation.md), [gooey-noise-hover-reveal](techniques/gooey-noise-hover-reveal.md), [scrolltrigger-flip-layout-switch](techniques/scrolltrigger-flip-layout-switch.md), [persistent-webgl-page-transitions-barba](techniques/persistent-webgl-page-transitions-barba.md), [infinite-webgl-scroll-gallery](techniques/infinite-webgl-scroll-gallery.md), [gpgpu-cursor-displacement-rgb-shift](techniques/gpgpu-cursor-displacement-rgb-shift.md) | `snippets/codrops/` (5) | per-article (demos MIT) |
| **CSS-Tricks** | [css-flexbox](techniques/css-flexbox.md), [css-grid](techniques/css-grid.md), [css-custom-properties](techniques/css-custom-properties.md), [css-transitions](techniques/css-transitions.md), [css-animations-keyframes](techniques/css-animations-keyframes.md), [css-specificity](techniques/css-specificity.md), [css-centering](techniques/css-centering.md) | `snippets/css-tricks/` (4) | per-article |
| **Olivier Larose** | [olivierlarose-tutorials-catalog](techniques/olivierlarose-tutorials-catalog.md), [smooth-scroll-lenis](techniques/smooth-scroll-lenis.md), [zoom-parallax-sticky-gallery](techniques/zoom-parallax-sticky-gallery.md), [sticky-stacking-cards](techniques/sticky-stacking-cards.md), [text-opacity-scroll-reveal](techniques/text-opacity-scroll-reveal.md), [layered-parallax-scroll](techniques/layered-parallax-scroll.md), [r3f-3d-rotate-on-scroll](techniques/r3f-3d-rotate-on-scroll.md), [page-transitions-svg-curve-and-pixel](techniques/page-transitions-svg-curve-and-pixel.md), [pinned-section-scrolltrigger](techniques/pinned-section-scrolltrigger.md) | `snippets/olivierlarose/` (9) | per-tutorial |
| **system-design.space** | [web-rendering-strategies](techniques/web-rendering-strategies.md), [frontend-performance-architecture](techniques/frontend-performance-architecture.md), [caching-strategies](techniques/caching-strategies.md), [resilience-patterns](techniques/resilience-patterns.md), [scalable-systems](techniques/scalable-systems.md), [load-balancing](techniques/load-balancing.md), [cdn-and-cache-headers](techniques/cdn-and-cache-headers.md), [rate-limiting](techniques/rate-limiting.md), [observability-monitoring](techniques/observability-monitoring.md), [frontend-release-safety](techniques/frontend-release-safety.md), [api-gateway-and-bff](techniques/api-gateway-and-bff.md), [event-driven-architecture](techniques/event-driven-architecture.md) | `snippets/system-design-space/` (3) | reference/educational |
| **Poly Haven** | [cc0-3d-assets-poly-haven](techniques/cc0-3d-assets-poly-haven.md) | `snippets/poly-haven/` (2) | CC0 |

### UI/UX Design Principles (36)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [Understanding Button States in UI Design](techniques/button-states.md) | building or reviewing any clickable control | The 5 core + 4 functional button states, their CSS hooks, and accessibility rules for every state |
| [Consistency in Design](techniques/consistency-in-design.md) | building multi-screen sites that must read as one product | Keep object positions, type (2-3), palette, density and tone cohesive; break only to emphasize |
| [Constraints in Design](techniques/constraints-in-design.md) | scoping a build from a blank frame | Use design limits (device, budget, brand, a11y, platform) as a forcing function, not obstacles |
| [Content research & design](techniques/content-research.md) | starting a page before committing layout | Design to real/near-final copy or a committed content map, never blind lorem-ipsum filler |
| [Accessibility and inclusion in design](techniques/creating-accessible-and-inclusive-design.md) | building or reviewing any UI for low-vision, color-deficient, motor-limited, and older users | Bake accessibility in by default: never rely on color alone, verify contrast, keyboard/screen-reader test, readable type |
| [Design ethics](techniques/design-ethics.md) | scoping a feature and reviewing copy/data/visuals before ship | Impact-aware build decisions: solve real problems, i18n-safe components, opt-in data control, audit bias |
| [Design Research](techniques/design-research.md) | early in a build, before layout | Pick the right research artifact (mood board, IA, journey map, MVP test) before writing layout code |
| [12 design system examples to help you build your own](techniques/design-system-examples.md) | starting a UI with recurring elements that must stay consistent | 12 real-world design systems distilled into reusable structure patterns: tokens, kits, patterns, docs |
| [Design tokens: How to sync design and code in Figma](techniques/design-tokens.md) | setting up a UI's styling/theming foundation | Three-tier token system (primitive -> semantic -> component) that keeps design and code in sync. |
| [UI vs UX: What's the Difference between UI & UX Design?](techniques/difference-between-ui-and-ux.md) | scoping a build: UI fix vs UX/structure problem | UI is a subset of UX; diagnose surface vs. journey, build IA before styling, gate on Morville's 7 |
| [Fitts' Law: What Is It + How Does It Apply to UI Design?](techniques/fitts-law.md) | sizing & placing clickable targets (CTAs, nav, forms, mobile taps) | Target acquisition time grows with distance, shrinks with size — size and place clickable targets accordingly. |
| [What are the Gestalt Principles?](techniques/gestalt-principles.md) | laying out sections, grids, cards, nav, forms, or reveal animations | 11 perceptual-grouping laws (proximity, similarity, common fate...) that make layout read intuitively |
| [Getting Started in Design](techniques/getting-started-in-design.md) | kicking off a new site/UI — audience, research, build order | Orientation to digital design: compete on experience, build fundamentals (grid/color) before skin, sequence the work |
| [What is the golden ratio + how can it elevate your designs?](techniques/golden-ratio.md) | setting type scales, layout splits, or logo proportions | Use phi (1.618) to derive type scales, column splits, spacing, and logo proportions for harmony. |
| [13 Core Graphic Design Principles + How To Apply Them](techniques/graphic-design-principles.md) | composing any screen, section, hero, or component | The 13 composition fundamentals (alignment, contrast, hierarchy, proximity, unity...) as build decisions |
| [How to create a design brief](techniques/how-to-create-a-design-brief.md) | kicking off a new site/UI or redesign | Lock scope, goals, audience, and brand specs in a brief/DESIGN.md before writing any layout code. |
| [How to make a storyboard for UX design in 5 steps](techniques/how-to-create-a-ux-storyboard.md) | planning a multi-step flow or scroll-journey before coding | Map a single user flow as numbered storyboard panels (goal, persona, interactions, emotional arc) before building it |
| [What is human-centered design—and how does it work in practice?](techniques/human-centered-design.md) | starting any site/UI build | Anchor every design decision in a real user problem: empathize, prototype, test, and iterate with users. |
| [What is Human-Computer Interaction (HCI)?](techniques/human-computer-interaction.md) | designing any interactive flow for responsiveness and recoverability | HCI fundamentals: 4 interaction elements + Shneiderman's 8 principles (feedback, reversal, low memory load) |
| [What is Interaction Design? Everything You Should Know](techniques/interaction-design.md) | defining how elements behave on input | Five dimensions of interaction design plus feedback, consistency, and behavior rules for interactive UI |
| [Lateral thinking explained](techniques/lateral-thinking-explained.md) | first concept feels generic or stuck | De Bono's lateral thinking: 7 ideation moves to break the default concept before committing to a build |
| [How to reduce design complexity](techniques/reducing-design-complexity.md) | a screen feels overloaded or too busy | Subtract, shorten, and sequence a busy screen — cut non-essential elements, plain language, split into steps. |
| [Simplicity in Design](techniques/simplicity-design-principles.md) | deciding what to show vs hide on a screen | Reveal complexity progressively, hide non-essentials, reuse conventions, use white space; 3-5 tap test |
| [Seven essential UI design principles + how to use them](techniques/ui-design-principles.md) | building or reviewing any screen for clear structure and flow | Figma's 7 core UI principles: hierarchy, progressive disclosure, consistency, contrast, accessibility, proximity, alignment |
| [How to use an existing design system](techniques/using-an-existing-system.md) | assembling multiple screens from a shared component kit | Assemble screens from a fixed component kit (buttons/icons/type) so a multi-screen product reads as one cohesive experience. |
| [UX design research methods](techniques/ux-design-research-methods.md) | validating a design decision or choosing a UX method per phase | Pick the right UX research method by build phase and question type (what vs. why) to validate, not guess. |
| [UX for Product Managers: Building Better Products](techniques/ux-for-product-managers.md) | deciding/briefing/judging a UI change | PM-lens UX fluency: read the flow, frame the problem not the pixels, judge changes by behavior |
| [What are design aesthetics?](techniques/what-are-design-aesthetics.md) | setting a site/UI's visual direction | Visual levers (shape, balance, white space, color, type) as a usability multiplier — the aesthetic-usability effect |
| [What is design thinking? A guide to the 5 stages and principles](techniques/what-is-design-thinking.md) | starting a new site/section/feature before committing to a layout | Human-centered 5-stage process (empathize→define→ideate→prototype→implement) gated by 3 lenses |
| [What is graphic design](techniques/what-is-graphic-design.md) | composing any screen/hero/section | Core graphic-design elements (color, type, space, balance, hierarchy) as build decisions for clarity-first composition |
| [What is Product Design: A Comprehensive Guide](techniques/what-is-product-design.md) | starting a build — set scope, sequence function before polish, keep it coherent | Product design principles: own the whole product, fix interactions before polish, keep systems coherent |
| [What is skeuomorphism?](techniques/what-is-skeuomorphism.md) | deciding how much real-world realism a control should carry | Real-world visual affordances (texture/shadow/material) used sparingly to make controls read as interactive |
| [What is UI design?](techniques/what-is-ui-design.md) | starting any screen/section build | UI fundamentals: four element categories (input/info/nav/containers) + user-first, feedback, undo, a11y rules |
| [What is user experience (UX) design? Process + principles explained](techniques/what-is-ux-design.md) | structuring a site/UI's flow, navigation, and interaction model | UX = the whole experience, not the skin; the 7 principles + 5-stage process as build constraints |
| [What is UX Strategy?](techniques/what-is-ux-strategy.md) | scoping what to build (and in what order) before designing | Ladder every UX decision to a business goal AND user need; prioritize, validate with research, roadmap, iterate |
| [What is visual hierarchy](techniques/what-is-visual-hierarchy.md) | composing a screen so the eye lands on the key element first | Order elements by importance via size, color/contrast, alignment, proximity, texture, and timed reveals. |

### Prototype & Wireframe (12)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [What is high-fidelity prototyping—and how can it help?](techniques/high-fidelity-prototyping.md) | building a polished interactive proof of a validated flow | Polished, clickable simulation late in design — real content + interactions for feedback and sign-off |
| [How to Design an App in 5 Steps](techniques/how-to-design-an-app.md) | scoping a new app/site, structuring flows + wireframes before visuals | 5-step app design flow: lock problem/IA/wireframe/user-flows before visuals, MoSCoW-scope an MVP |
| [Low-fidelity prototyping: What is it and how can it help?](techniques/low-fidelity-prototyping.md) | starting a new screen/section before styling | Lock layout, content hierarchy, and flow with cheap greybox wireframes before any visual polish. |
| [No code vs. low code: Key differences and when to use each](techniques/no-code-vs-low-code.md) | choosing no-code vs low-code for a build | No-code vs. low-code: choose a build approach by scope, integrations, and who's building. |
| [What is a User Flow? Why it's Important in UX Design](techniques/user-flow.md) | planning multi-step flows before screens | Map a user's entry-to-endpoint path for one task before building screens; one goal per flow. |
| [UX Validation: How To Stress-Test Your Designs Early](techniques/ux-validation.md) | before calling any flow/component done | Stress-test interaction patterns early: every state, messy real data, and every viewport before "done". |
| [10 Vibe Coding Tools For Faster Prototyping](techniques/vibe-coding-tools.md) | spinning up a prototype or choosing an AI codegen tool | Pick the right AI-codegen archetype (design-faithful, prompt-to-app, in-editor agent) for a prototyping job |
| [What is a minimum viable product (MVP)](techniques/what-is-a-minimum-viable-product.md) | scoping a new site/feature's first cut | Scope the smallest viable build that solves one core problem and produces real user feedback |
| [What is prototyping](techniques/what-is-prototyping.md) | deciding prototype fidelity before build hours | Match prototype fidelity to the question: lo-fi to validate concepts cheap, hi-fi to test real interaction |
| [What is rapid prototyping? A quick definition and the different types](techniques/what-is-rapid-prototyping.md) | deciding how fast/rough to build before committing full effort | Build the smallest testable version to validate one idea in hours/days; match fidelity to confidence. |
| [What is Wireframing? The Complete Guide](techniques/what-is-wireframing.md) | starting a new screen/section before any visual polish | Wireframing fidelity ladder (low/mid/hi-fi) plus structure-first build rules for layout, IA, and navigation |
| [Wireframe vs. mock-up: what's the difference?](techniques/wireframe-vs-mockup.md) | choosing fidelity per build stage | When to use a low-fi structural wireframe vs. a high-fi visual mock-up at each stage of a build |

### Web Design (29)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [29 AI Website Examples for SaaS, E-commerce, + More](techniques/ai-website-examples.md) | choosing a site's structural skeleton + hero by archetype | 29 AI-generated site examples grouped into SaaS, dashboard, e-commerce, portfolio, and service archetypes |
| [19+ Call-to-Action Examples + Tips To Boost Clicks](techniques/call-to-action-examples.md) | designing or auditing any CTA button/link/pop-up | 20 real-brand CTA examples distilled into reusable button/copy/placement patterns + a build checklist |
| [79+ Design Statistics: Tools, Collaboration, and AI in 2026](techniques/design-statistics.md) | setting layout/perf/accessibility defaults for a site | 79+ data points on design jobs, AI, workflow, web/UX, and ROI — used to set evidence-backed defaults |
| [Guide to designing a hamburger menu + examples](techniques/hamburger-menu.md) | collapsing secondary nav on small screens | When to collapse nav behind the three-line icon, plus placement, ordering, feedback, and ARIA rules |
| [How to make a business website in 5 simple steps](techniques/how-to-make-a-business-website.md) | scoping a multi-page business or marketing site | 5-step build process for business sites: IA, wireframes, key-page recipes, layout, post-launch iteration |
| [21 Instagram Story Ideas + Free Templates](techniques/instagram-story-ideas.md) | composing a tall 9:16 promo/story/hero panel | Reusable 9:16 story/poster composition patterns + font-pairing and contrast rules for promo frames |
| [16 landing page examples + tips to reach your customers](techniques/landing-page-examples.md) | building a single-goal conversion landing page | Reusable conversion-focused landing-page patterns: one-goal layout, hero value, stripped nav, CTA, trust signals. |
| [Mobile-first design: Examples + strategies for modern Web development](techniques/mobile-first-design.md) | starting any responsive site/UI | Design and code the smallest screen first, then scale up at breakpoints — essentials before extras. |
| [Mobile website design: 10 inspiring examples + best practices](techniques/mobile-website-design.md) | building or adapting a site for phones | Mobile-first build rules: single column, 44px touch targets, hamburger nav, load budgets, a11y |
| [11 No-Code App Examples to Inspire Your Next Project](techniques/no-code-app-examples.md) | prototyping an interactive app/site fast | 11 no-code app examples distilled into 8 reusable interaction archetypes (game, randomizer, dashboard, checkout) with pick-when rules |
| [How to create a one-page website in four steps](techniques/one-page-website.md) | building a focused single-scroll site | Single-scroll site as a guided narrative: section flow, repeating CTA, sticky jump-nav, perf-aware ship |
| [10 Personal Website Examples + Templates](techniques/personal-website-examples.md) | starting a personal site / portfolio / resume page | 7 personal-site archetypes (resume, grid portfolio, immersive, editorial, community, occasion, signature) — pick by goal |
| [23 Inspiring Portfolio Website Examples & Tips](techniques/portfolio-website-examples.md) | building or restructuring a portfolio / work-showcase site | 8 reusable portfolio layout patterns (case-study, visual feed, site-as-demo) matched to the role being sold |
| [Pricing page best practices + examples](techniques/pricing-page-best-practices.md) | building or reviewing a pricing / plans / subscription page | 9 build rules for high-converting pricing pages: 3-4 tiers, badged middle, benefit copy, sticky CTAs |
| [Responsive website design: Key components + how to use them](techniques/responsive-website-design.md) | building a site/section across desktop, tablet, and mobile | Five responsive components (fluid layout, media queries, nav, media, type) with breakpoint build rules |
| [Static vs. Dynamic Websites: Key Differences](techniques/static-vs-dynamic-website.md) | choosing site architecture at kickoff | Default to static; escalate to dynamic only on a real trigger (auth, live data, CMS, e-commerce, search) |
| [10 Real-World Vibe Coding Examples to Jumpstart Your AI Workflow](techniques/vibe-coding-examples.md) | turning an idea into a validated interactive prototype fast | 10 prompt-to-prototype vibe-coding examples plus a map-logic - source-of-truth - verify - bridge-code workflow |
| [What is Web Design and Development?](techniques/web-design-and-development.md) | starting or auditing any site build | Design vs development split, the five basics (layout, content, interactivity, visuals, functionality) + ship process |
| [5 Top Web Design Grid Layout Examples](techniques/web-design-grid-layout-examples.md) | choosing a page or section's underlying grid | Five reusable web grid patterns (block, column, modular, baseline, hierarchical) + REM base-unit spatial system |
| [60+ Web design statistics: Accessibility, AI, and more industry insights for 2026](techniques/web-design-statistics.md) | setting perf/a11y/conversion targets at build start | Evidence-backed build defaults: mobile-first budgets, CWV/contrast gates, conversion guardrails, AI-with-human-gate |
| [Top Web Design Trends for 2026](techniques/web-design-trends.md) | choosing a site's signature visual direction or "wow" mechanic | 13 web + 4 AI design trends (3D, motion, dark mode, maximalism, etc.) as pick-one-or-two build patterns |
| [12 Defining Web Development Trends for 2026](techniques/web-development-trends.md) | choosing stack, rendering model, and interaction patterns for a new build | 12 web build patterns for 2026: server-first, full-stack TS, native Baseline APIs, functional motion, a11y-first |
| [53 Unique Website Color Schemes to Make a Lasting Impression](techniques/website-color-schemes.md) | choosing or sanity-checking a site's color palette | Pick a palette by mood family (minimal/warm/cool/bold/modern), one accent on a quiet base, contrast-checked |
| [12 Website Layout Ideas to Captivate Your Audience](techniques/website-layout-ideas.md) | choosing a page's overall layout skeleton | 12 reusable page-skeleton archetypes (grid, split, full-screen, card, zig-zag, F-pattern, more) matched to content and eye-scan path |
| [Website redesign: A comprehensive guide to boost your online presence](techniques/website-redesign.md) | reworking an existing site rather than starting blank | 5-phase redesign process (research, plan, design, build, launch) for reworking an existing site, not greenfield |
| [Website structure: How to plan the perfect site layout](techniques/website-structure.md) | planning page model and navigation hierarchy | Pick a site model (tree/linear/matrix/dynamic/hybrid) and wire nav, links, breadcrumbs, and URLs to match |
| [What is Model Context Protocol (MCP)? The Complete Guide](techniques/what-is-mcp.md) | wiring AI tooling to external apps/data | Open standard wiring AI tools/agents to apps via servers, clients, and hosts — write once, use anywhere |
| [What is Vibe Coding? Everything You Need to Know](techniques/what-is-vibe-coding.md) | starting a site/UI from a brief, exploring directions before locking structure | Intention-first, prompt-driven build: describe feel + function, generate fast, iterate via selective edits. |
| [Web Design Explained—Key Elements and Best Practices](techniques/what-is-web-design.md) | scoping or reviewing a whole site/page | The 5 web-design fundamentals (content, layout, nav, visual style, function) plus best practices. |

### Typography (16)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [25 best fonts for resumes that get you noticed](techniques/best-font-for-resume.md) | picking type for a legibility-first text document | 25 free Google Fonts for resumes/text-dense docs, by industry tone, with size ladder + ATS/PDF rules |
| [35 Best Fonts for Logos & How To Choose One](techniques/best-fonts-for-logos.md) | choosing a wordmark/logo or site-title typeface | 35 named logo typefaces grouped by brand tone, plus how to pick one and proven font pairings. |
| [25 best fonts for YouTube thumbnails to grab attention](techniques/best-fonts-for-thumbnails.md) | choosing a headline font that must read at small size over busy imagery | Named display/headline typefaces for thumbnails & image overlays, grouped by job, with weight/legibility rules |
| [24 Best Fonts for Websites in 2026](techniques/best-fonts-for-websites.md) | choosing and pairing site/UI typefaces | Named web font picks by role (body/display/serif/slab) with pairing and variable-font loading rules |
| [25 Best Sans Serif Fonts for Your Designs and Websites](techniques/best-sans-serif-fonts.md) | choosing a sans-serif for body, headings, or UI | Named sans-serif picks by job (UI body, dashboards, headings, long-form, multilingual) plus pairing rules |
| [29 best script fonts and how to choose one](techniques/best-script-fonts.md) | adding a script/cursive face to a logo, hero word, or event/luxury piece | 29 named script/cursive fonts grouped by job (formal, luxury, casual, display) + pairing & legibility rules |
| [31 Best Serif Fonts to Elevate Your Designs](techniques/best-serif-fonts.md) | choosing or pairing a serif font | 31 named serif fonts grouped by role (display/body/friendly) with pairing and readability rules. |
| [39 Font Pairings To Elevate Your Designs](techniques/font-pairings.md) | choosing headline + body typefaces for a site/UI | 39 named headline+body font pairings grouped into 8 reusable archetypes, plus 5 mechanical pairing rules. |
| [32 futuristic fonts to make your designs pop](techniques/futuristic-fonts.md) | choosing a display face for a tech/sci-fi/gaming/forward-looking brand | 32 named futuristic/sci-fi/pixel/glitch display fonts grouped by flavor, with when-to-use and pairing rules |
| [34 Minimalist Fonts for Sleek Designs](techniques/minimalist-fonts.md) | choosing a typeface for a clean minimalist site or UI | 34 named minimalist sans/serif fonts grouped by role (UI, headline, code, editorial, multilingual) + usage rules |
| [33 Modern Fonts to Elevate Your Designs](techniques/modern-fonts.md) | choosing typefaces for a site/UI | 33 free modern typefaces picked by role (UI/body/headline/mono) with pairing recipes |
| [28 Professional Fonts & How To Choose One](techniques/professional-fonts.md) | choosing a typeface or serif/sans pairing | Named professional font picks grouped by job (body/UI, reading serif, display, luxury) + pairing rules |
| [What is typography anatomy? A typeface design guide](techniques/typography-anatomy.md) | picking, pairing, or spacing type | The parts of a typeface (x-height, counters, stems, serifs, spacing) and how to pick/pair/tune type by them. |
| [Typography in Design](techniques/typography-in-design.md) | setting up a site/UI type system | Type-system build rules: typeface choice, em-based scale, leading, 40-60ch measure, case, tracking, contrast |
| [23 best wedding font pairings for your big day](techniques/wedding-font-pairings.md) | elegant/romantic/ceremonial UIs needing a display+body pairing | 23 script+text font pairings (all free Google Fonts) sorted by mood for elegant/romantic/luxe UIs |
| [What is Kerning & Why it Matters in Font Design](techniques/what-is-kerning.md) | setting wordmarks, headlines, or small captions | Kerning vs tracking vs leading: hand-kern logos/headlines, loosen small text, fix problem pairs (AV, WA, To) |

### Print Design (6)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [32 Brochure Examples and Templates to Kickstart Your Design](techniques/brochure-examples.md) | laying out a multi-panel brochure, one-pager, or company-profile spread | Brochure layout patterns: pick fold/format first, one job per panel, single CTA; color-by-connotation |
| [25 Flyer Examples + Templates to Customize](techniques/flyer-examples.md) | building a single-screen promo: hero, event card, sale banner, splash | 9 reusable promo-poster layout patterns (impact, premium, friendly, retro, structured) + flyer design rules |
| [A Complete Guide to Flyer Sizes and Print Dimensions](techniques/flyer-sizes.md) | setting up a print-bound artboard and its size + margins | Standard flyer/print sizes in px @ 300 DPI plus bleed, trim, and safe-area setup for print-ready artboards |
| [How to Design a Flyer: A Step-by-Step Guide for Beginners](techniques/how-to-design-a-flyer.md) | building a flyer, poster, hero, or one-screen promo | 6-step process for single-screen promos: one goal/audience, one CTA, glance-readable hierarchy, channel-correct export |
| [How to make a brochure: 12 templates + best practices](techniques/how-to-make-a-brochure.md) | designing panel-based or multi-fold print/sectioned layouts | Fold-first brochure layout: pick bi/tri/gatefold, one message per panel, obvious CTA, print-safe export |
| [49 thank you card ideas for any occasion (+ templates)](techniques/thank-you-card-ideas.md) | designing a thank-you, confirmation, or appreciation artifact | Tone registers (professional/sincere/funny/wedding/holiday/gift/teacher) + layout rules for gratitude cards |

### Brand & Storytelling (8)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [How to design a logo in five steps](techniques/how-to-design-a-logo.md) | designing or refining a site's logo/wordmark | Five-step logo process: pick a logo type, then drive color, type, shape, and scalable variants from brand values. |
| [Figma Exercise: How to design a resume](techniques/how-to-design-a-resume.md) | laying out a résumé/about/bio/profile page to scan fast | Content-first IA for self-presentation pages: rank by relevance, group via Similarity+Proximity, one page |
| [How to start a presentation: 20 ways to kickstart your slides](techniques/how-to-start-a-presentation.md) | designing a hero / opening frame | 12 opening-hook patterns for the first screen of a deck/site/scroll-journey: earn attention before features. |
| [60 Creative Presentation Ideas and Design Tips](techniques/presentation-ideas.md) | structuring any sequential narrative surface (deck, pitch page, scroll-journey site) | Reusable slide/narrative patterns: one idea per screen, strong hook, arc, constrained palette, single signal accent |
| [Storytelling with design](techniques/storytelling-in-design.md) | planning a site's overall flow and reveal pacing | Treat a product as a journey/story: map the visitor's questions, welcome plainly, reveal info progressively. |
| [12 Types of Logos to Express Your Brand's Unique Identity](techniques/types-of-logos.md) | choosing or building a brand logo/mark | The 12 logo forms (abstract, monogram, wordmark, mascot, dynamic...) and when to reach for each |
| [What is a style guide and how to create one?](techniques/what-is-a-style-guide.md) | starting a brand/site or codifying tokens + voice | Author a brand style guide (story, audience, visual identity, voice, writing) as the source of truth before building UI. |
| [6 diagrams that improve online workshops](techniques/what-is-a-workshop.md) | framing a problem, process, or decision visually | Six diagram patterns (lotus, timeline, fishbone, affinity, argument map, SMART) to structure workshops by phase |

### Color Theory (15)

| Technique | Apply when | One-line |
|-----------|------------|----------|
| [100 Color Combinations To Influence Your Next Design](techniques/color-combinations.md) | choosing or role-assigning a site palette | Mood/industry-to-hue mapping, harmony schemes, and bg/text/accent/CTA role assignment for UI palettes |
| [Color symbolism explained](techniques/color-symbolism.md) | choosing a palette, accent, or brand color | Pick hues for meaning: warm=energy/CTA, cool=trust; spend loud accents once; check contrast + culture. |
| [What are monochromatic colors?](techniques/monochromatic-colors.md) | building a cohesive single-hue minimalist palette | One-hue palettes via tints/shades/tones; engineer contrast + one accent, verify WCAG, avoid muddiness. |
| [25 Shades of Brown in Design](techniques/shades-of-brown.md) | building an earthy/warm/premium palette or neutral base | Brown as a warm-neutral ground: 13 named shades across light/medium/dark tiers, pairing and contrast rules. |
| [25 Shades of Green in Design](techniques/shades-of-green.md) | choosing a green for brand, CTA, accent, or background | Pick a green by sub-family (yellow/blue/gray/brown lean) for meaning, tune lightness for mood, lock contrast. |
| [25 Shades of Red in Design](techniques/shades-of-red.md) | choosing a red accent/CTA and what to pair it with | 25 named red shades (warm/cool/soft/deep) with hex codes, pairings, and UI/branding use rules |
| [Types of color palettes: Definition, examples, + tips](techniques/types-of-color-palettes.md) | choosing a site/UI palette and verifying contrast | Six color-wheel schemes (complementary→square), the 60-30-10 role split, and a WCAG contrast gate |
| [What are complementary colors?](techniques/what-are-complementary-colors.md) | picking an accent/CTA contrast against a base hue | Opposite-hue pairs for high-contrast accents; pick the RGB complement for screens and use sparingly |
| [What are primary colors?](techniques/what-are-primary-colors.md) | choosing a brand/accent color or defining a screen palette | Primary colors for screens: design additive RGB (not RYB/CMYK), pick brand hue, manage gamut/accessibility. |
| [What are secondary colors — and how to use them in design](techniques/what-are-secondary-colors.md) | choosing an accent/brand hue in a UI | Using secondary/accent hues in a palette: 60-30-10 spend, contrast, hierarchy, and emotional meaning |
| [What are split complementary colors?](techniques/what-are-split-complementary-colors.md) | picking a base + two accents when straight complementary is too loud | Base + the two colors flanking its complement: softer contrast than a head-on pair; 12 canonical triplets, 60-30-10. |
| [What are triadic colors?](techniques/what-are-triadic-colors.md) | choosing a vivid balanced multi-hue palette | Three hues 120° apart: pick a brand-driven dominant, derive two, weight 60-30-10, check contrast. |
| [What is CMYK? How to use CMYK in design](techniques/what-is-cmyk.md) | designing anything for print or matching brand color across web and print | CMYK subtractive print model vs RGB screen — when to use each, true vs rich black, RGB→CMYK conversion |
| [What is color theory?](techniques/what-is-color-theory.md) | choosing a palette, accent, or theme | Color-wheel relationships (mono/analogous/complementary/triadic/tetradic), temperature, and hue/value/saturation tuning |
| [What is RGB? How RGB color works in design](techniques/what-is-rgb.md) | defining on-screen palettes or RGB→CMYK conversion | Additive RGB color model — author screen palettes in 0–255 channels, convert to CMYK before print |

## Standards (`standards/`)

| Entry | Purpose |
|-------|---------|
| [design-standards](standards/design-standards.md) | Precedence arbiter (user-override at top, with mandatory warn-in-chat + log) + the **Propose → Critique → User decides** protocol. The top governance rule. |
| _(to add: verification/build playbook distilled from PAIN.md themes)_ | |

## Structure patterns (`patterns/`) — composition playbooks (added 2026-07-03, the anti-template layer)

Written from the sameness audit (hand-built deZign+ vs swarm output): the library had style recipes but ZERO
composition knowledge — these are injectable playbooks with real code cores. Each ≤90 lines, safe to inject whole.

| Pattern | Apply when | One-line |
|---------|-----------|----------|
| [Bento with span choreography](patterns/bento-span-choreography.md) | features/capabilities, 5-8 unequal ideas, bento, tiles, mosaic grid | 6-col grid with a span melody (4+2 / 2+2-tall / 2+4); every tile earns its cell with a drawn CSS micro-viz. |
| [Diagram-as-layout](patterns/diagram-as-layout.md) | how-it-works, process, pipeline, loop, flow, steps, architecture | The section layout IS the diagram: nodes in a 1fr-auto grid, real SVG arrows, dashed return arc drawn on scroll. |
| [Kinetic type marquee](patterns/kinetic-type-marquee.md) | motto band, divider energy, kinetic typography, ticker, outline letters | Outline-stroke poster type scrolling on hairline rails, mask-faded edges; fill is the accent (one word / hover). |
| [Oversized numeral rail](patterns/numeral-rail.md) | 3-5 steps, chapters, phases, method, timeline, sticky numerals | Outline numerals at 8rem dwelling via position:sticky while their copy scrolls; mono log strip grounds each step. |
| [Self-demonstrating hero](patterns/self-demonstrating-hero.md) | product/app/tool hero, demo, saas landing, scripted vignette | The hero PERFORMS the product: a chrome-framed CSS miniature runs a scripted loop (act → status → ✓), 6-10s cycle. |
| [Poster-scroll](patterns/poster-scroll.md) | festival, fashion, campaign, loud brand, full-bleed, dark bold pages | Page as a sequence of full-viewport typographic posters: 9-12vw scale, inversion as punctuation, edge tension. |
| [Split discipline](patterns/split-discipline.md) | any landing page spine, text+image sections, template-avoidance | Max TWO splits per page, never 50/50 twice, one container break, modulated rhythm — the anti-template rules. |
| [Scroll-dwell sequence](patterns/scroll-dwell-sequence.md) | pinned storytelling, 3-5 beat sequence, scrolltelling without GSAP | CSS sticky stage over a 320vh track + 10-line JS beat lighting; always ships the stacked mobile fallback. |
