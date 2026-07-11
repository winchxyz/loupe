---
technique: Infinite auto-scrolling WebGL gallery with scroll-curve (OGL/Three.js + GLSL)
section: webgl-motion
source: codrops/2021-01-05-infinite-auto-scrolling-gallery-ogl-glsl
tags: [webgl, ogl, three.js, shaders, scroll, infinite]
apply-when: a never-ending marquee/strip of images that loops forever and bends with scroll speed (hero strip, project ribbon)
---

# Infinite auto-scrolling WebGL gallery

A strip of image-planes that scrolls forever (drag, wheel, or auto) and bows with scroll velocity. Two mechanisms: a modulo wrap that recycles planes as they leave the viewport, and a vertex-shader curve driven by scroll speed.

## Build decisions

- **Wrap by repositioning, never by adding nodes.** Track scroll `direction`. When a plane's far edge passes the viewport edge, add/subtract one full strip height/width (`this.extra ±= total`) so it teleports to the other end. You reuse a fixed set of planes forever — do NOT clone DOM/meshes to fake infinity; that leaks memory.
- **Total = sum of plane size + gap; wrap against that.** The recycle distance is the full content length, not the viewport. Compute it once on resize.
- **Curve in the vertex shader by velocity.** `newPosition.z += sin(pos.y / viewportH * PI + PI/2) * -uStrength`, where `uStrength = ((scroll.current - scroll.last) / screenWidth) * N`. The half-sine bows the strip toward/away from camera proportional to speed. Lerp `uStrength` to 0 so it relaxes when scrolling stops.
- **OGL when you want it lean; Three.js when you want the ecosystem.** OGL is a tiny WebGL wrapper — good for a single-purpose strip. Use Three.js if the same scene also needs loaders/postprocessing you'd otherwise reimplement.
- **object-fit:cover in the fragment** (the `uPlaneSizes/uImageSizes` ratio remap) so mixed-aspect images don't stretch in the strip.
- **Auto-scroll + input share one velocity.** Add a constant baseline to the velocity for auto-scroll and let wheel/drag add to it; one value drives both position and the shader curve, so a flick momentarily speeds the marquee and bends it harder.

## Build checklist
- [ ] Fixed pool of planes recycled by modulo wrap (no cloning to fake infinity)?
- [ ] Recycle distance = full content length, recomputed on resize?
- [ ] Vertex bow driven by lerped scroll velocity (`uStrength`), relaxing to 0 at rest?
- [ ] object-fit:cover UV remap so mixed-aspect images don't stretch?
- [ ] Auto-scroll baseline + input feed one shared velocity?

> Ties to our experience: a self-contained, lean WebGL ribbon that reuses 02b's scroll-velocity-into-shader pattern at marquee scale. The fixed-pool recycle rule is the same bounded-memory discipline as the Barba "dispose what you left" note — both keep an immersive effect from quietly bloating, consistent with our perf-tier mandate.
