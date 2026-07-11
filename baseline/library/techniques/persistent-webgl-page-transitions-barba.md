---
technique: Seamless page transitions over a persistent WebGL canvas (Barba.js + GSAP Flip)
section: scroll-motion
source: codrops/2026-02-02-scroll-revealed-webgl-gallery-gsap-three-astro-barba
tags: [barba.js, gsap, flip, three.js, page-transitions, astro]
apply-when: a multi-page WebGL site (gallery->detail) must transition without a hard reload, carrying an image/canvas across the navigation
---

# Persistent-canvas page transitions (Barba + Flip)

The "click a thumbnail, it flies into the detail page, no white flash" effect for a multi-page WebGL site. Barba.js intercepts navigation and swaps page containers via AJAX; the WebGL canvas lives *outside* the swapped container so it persists; GSAP Flip animates the clicked image from its grid slot to its detail position across the DOM change.

## Build decisions

- **Canvas outside the Barba container.** Mount the Three.js canvas once on a wrapper that Barba never replaces. Barba swaps only the `data-barba="container"` markup; the renderer, scene, and meshes survive, so there's no re-init flash. This is the whole reason it feels seamless.
- **Barba transition = before/leave/enter/after hooks.** In `leave`: capture `Flip.getState()` of the clicked image and freeze its position. In `after`: reparent it into the new container and `Flip.from()` to its destination. Return GSAP timelines' `.then`/promise so Barba waits for the animation.
- **Astro for static multipage, GSAP for the runtime.** Astro ships fast static HTML per route; ScrollSmoother (smooth scroll) + ScrollTrigger (reveals) + SplitText + Flip do the motion. Pick a static multipage generator so each route is real and indexable — don't fake routes in an SPA if SEO matters.
- **Drive the WebGL-DOM sync from one ticker.** Read `ScrollSmoother.scrollTop()` inside a single `gsap.ticker` callback and apply it to every media mesh each frame — one loop, not per-element listeners.
- **Destroy meshes you navigated away from.** In `after`, dispose Three.js meshes/geometries/textures that the new page doesn't need, or memory climbs across navigations. Persistence is for the canvas, not for every plane forever.
- **Reveal = `gsap.to(uProgress, { scrollTrigger })`.** Scroll reveals are the GSAP-uniform pattern with a ScrollTrigger and `toggleActions` so they replay correctly after a Barba navigation re-inits ScrollTrigger.

## Build checklist
- [ ] Canvas mounted outside the Barba-swapped container so it persists across navigation?
- [ ] Flip state captured in `leave`, applied in `after`, with Barba awaiting the GSAP promise?
- [ ] One `gsap.ticker` loop syncs scroll -> all meshes (no per-element scroll listeners)?
- [ ] Meshes/textures for the departed page disposed to bound memory?
- [ ] ScrollTrigger reveals re-init correctly after each Barba transition?
- [ ] Static multipage generator (Astro) used where routes must be real/indexable?

> Ties to our experience: this is the architecture for turning 02b-style single-scene WebGL into a multi-page site without losing the cinematic continuity — and the "dispose meshes you left" rule is the memory-discipline analogue of our perf-tier work. The persistent-canvas + Flip handoff is precisely the kind of closed-loop-verifiable transition (before/after frame diff across a navigation) the app is meant to nail.
