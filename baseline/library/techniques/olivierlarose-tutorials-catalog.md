---
technique: Olivier Larose tutorials — full catalog (scroll / 3D / mouse / menu / transition)
section: index
source: https://blog.olivierlarose.com/tutorials (63 tutorials; code at github.com/olivierlarose) — harvested 2026-06-18
tags: [scroll, 3d, framer-motion, gsap, react-three-fiber, next.js, catalog]
apply-when: looking for a known scroll/3D/cursor/menu/transition effect to reuse — scan here first, then open the matching technique or pull the repo
---

# Olivier Larose tutorials — full catalog

The complete, finite list of all **63** tutorials on blog.olivierlarose.com (extracted from the site's
Next.js data, so this is the canonical set — not a scrape). Stack is consistently **Next.js + React +
framer-motion / GSAP ScrollTrigger / React Three Fiber**, with **Lenis** smooth scroll underneath the
scroll effects. Most have a public GitHub repo (linked); the rest are video-only on his YouTube
(@olivierlarose1) and the Web Animation Course.

**License note:** the repos have no explicit LICENSE file — treat as *reference implementations*. Reimplement
the pattern in our own code (the techniques distill the approach); don't ship his files verbatim.

**8 of these are distilled into `techniques/` with code in `snippets/olivierlarose/`** — the ones most
relevant to our scroll-journey work:
`smooth-scroll-lenis`, `zoom-parallax-sticky-gallery`, `sticky-stacking-cards`,
`text-opacity-scroll-reveal`, `layered-parallax-scroll`, `r3f-3d-rotate-on-scroll`,
`page-transitions-svg-curve-and-pixel`, `pinned-section-scrolltrigger`.

## High-value not-yet-digested (good candidates if a build needs them)
- **Horizontal Section / Horizontal Scroll** (Scroll) — pinned horizontal scroll galleries (video-only, no repo).
- **Infinite Text Move On Scroll** (Landing) — velocity-reactive infinite marquee.
- **Text Clip Mask / Text Mask Animation / SVG Mask Scroll** (Scroll) — clip-path/mask text reveals.
- **Magnetic Button / Sticky Cursor** (Mouse) — the standard Awwwards magnetic-hover + custom cursor.
- **3D Glass Effect / Ripple / Bulge / 3D Wave on Scroll** (3D) — GLSL shader distortions (Advanced).
- **Awwwards Landing Page** (Landing) — a full composed page assembling several of these effects.

---

### Scroll (20)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Mask Section Transition | Intermediate | — |
| Background Image Parallax | Intermediate | [background-image-parallax](https://github.com/olivierlarose/background-image-parallax) |
| Text Parallax | Beginner | [text-parallax](https://github.com/olivierlarose/text-parallax) |
| Sticky Footer | Beginner | [sticky-footer](https://github.com/olivierlarose/sticky-footer) |
| Perspective Section Transition | Beginner | [perspective-section-transition](https://github.com/olivierlarose/perspective-section-transition) |
| Text Along Path | Beginner | [text-along-path](https://github.com/olivierlarose/text-along-path) |
| SVG Path On Scroll | Advanced | — |
| Horizontal Section | Intermediate | — |
| Zoom Parallax | Beginner | [zoom-parallax](https://github.com/olivierlarose/zoom-parallax) |
| Parallax Scroll | Beginner | [parallax-scroll](https://github.com/olivierlarose/parallax-scroll) |
| Horizontal Scroll | Intermediate | — |
| Text Gradient Scroll Opacity v2 | Beginner | [text-opacity-scroll](https://github.com/olivierlarose/text-opacity-scroll) |
| Cards Parallax | Beginner | [cards-parallax](https://github.com/olivierlarose/cards-parallax) |
| 3D perspective Scroll | Intermediate | — |
| SVG Mask Scroll | Intermediate | — |
| Smooth Parallax Scroll | Beginner | [smooth-parallax-scroll](https://github.com/olivierlarose/smooth-parallax-scroll) |
| Smooth Scroll | Intermediate | [smooth-scroll](https://github.com/olivierlarose/smooth-scroll) |
| Text Gradient Opacity On Scroll | Beginner | [text-gradient-opacity-on-scroll](https://github.com/olivierlarose/text-gradient-opacity-on-scroll) |
| Text Clip Mask On Scroll | Intermediate | [text-clip-mask-on-scroll](https://github.com/olivierlarose/text-clip-mask-on-scroll) |
| Text Mask Animation | Beginner | [text-mask-animation](https://github.com/olivierlarose/text-mask-animation) |

### 3D (9)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Ripple Shader | Advanced | — |
| Bulge Effect | Advanced | — |
| 3D Wave on Scroll | Advanced | [3D-wave-on-scroll](https://github.com/olivierlarose/3D-wave-on-scroll) |
| 3D Glass Effect | Beginner | [3d-distorted-glass-effect](https://github.com/olivierlarose/3d-distorted-glass-effect) |
| Creative 404 | Beginner | [creative-404](https://github.com/olivierlarose/creative-404) |
| 3D Parallax Letters | Intermediate | — |
| 3D Float Effect | Intermediate | [3d-floating-shapes](https://github.com/olivierlarose/3d-floating-shapes/tree/main) |
| 3D Cube | Beginner | [3d-cube](https://github.com/olivierlarose/3d-cube) |
| 3D Earth | Intermediate | [3d-earth-scroll](https://github.com/olivierlarose/3d-earth-scroll/tree/main) |

### Mouse (19)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Mouse Image Distortion | Advanced | [mouse-image-distortion](https://github.com/olivierlarose/mouse-image-distortion) |
| Paint Reveal | Beginner | [paint-reveal](https://github.com/olivierlarose/paint-reveal) |
| Blend Mode Cursor | Intermediate | [blend-mode-cursor](https://github.com/olivierlarose/blend-mode-cursor) |
| Creative Buttons | Beginner | — |
| Gradient Mouse Move | Beginner | — |
| Text Gooey | Advanced | [gooey-morph](https://github.com/olivierlarose/gooey-morph) |
| Sticky Cursor | Intermediate | [sticky-cursor](https://github.com/olivierlarose/sticky-cursor) |
| Painting Animation | Intermediate | — |
| Split Vignette | Beginner | [split-vignette](https://github.com/olivierlarose/split-vignette) |
| Magnetic Button | Beginner | [magnetic-button](https://github.com/olivierlarose/magnetic-button/tree/main) |
| Mask Cursor Effect | Beginner | [cursor-hover-mask](https://github.com/olivierlarose/cursor-hover-mask) |
| Floating Image Gallery | Beginner | [floating-image-gallery](https://github.com/olivierlarose/floating-image-gallery) |
| Mouse Scale Image Gallery | Beginner | [mouse-scale-image-gallery](https://github.com/olivierlarose/mouse-scale-image-gallery) |
| Text Disperse Effect | Intermediate | [text-dispersion-effect](https://github.com/olivierlarose/text-dispersion-effect) |
| Mouse Image Gallery | Intermediate | [mouse-image-gallery](https://github.com/olivierlarose/mouse-image-gallery) |
| Pixel Cursor Trailing | Beginner | [cursor-pixel-trailing](https://github.com/olivierlarose/cursor-pixel-trailing) |
| 3D Perspective Text | Beginner | [3d-perspective-text](https://github.com/olivierlarose/3d-perspective-text) |
| Svg Bezier Curve | Intermediate | [svg-bezier-curve](https://github.com/olivierlarose/svg-bezier-curve) |
| Cartoon Cursor Trailing | Beginner | [cartoon-cursor-trailing](https://github.com/olivierlarose/cartoon-cursor-trailing) |

### Menu (4)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Awwwards Side Menu | Beginner | [awwwards-side-menu](https://github.com/olivierlarose/awwwards-side-menu/tree/main) |
| Sliding Stairs Menu | Intermediate | [sliding-stairs-menu](https://github.com/olivierlarose/sliding-stairs-menu) |
| Curved Menu | Intermediate | [curved-menu](https://github.com/olivierlarose/curved-menu) |
| Navigation Menu | Intermediate | [nav-menu](https://github.com/olivierlarose/nav-menu) |

### Transition (2)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Pixel Transition | Beginner | [pixel-transition-effect](https://github.com/olivierlarose/pixel-transition-effect/tree/main) |
| Svg Curve Loading | Intermediate | [svg-curve-loading](https://github.com/olivierlarose/svg-curve-loading) |

### Landing Page (5)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Awwwards Landing Page | Intermediate | [awwwards-landing-page](https://github.com/olivierlarose/awwwards-landing-page) |
| Project Gallery Mouse Hover | Intermediate | [mouse-hover-project-gallery](https://github.com/olivierlarose/mouse-hover-project-gallery) |
| Infinite Text Move On Scroll | Intermediate | [infinite-text-move-on-scroll](https://github.com/olivierlarose/infinite-text-move-on-scroll) |
| Image slide project gallery | Beginner | [image-slide-project-gallery](https://github.com/olivierlarose/image-slide-project-gallery) |
| Project Gallery Colored Card | Beginner | [project-gallery-colored-card](https://github.com/olivierlarose/project-gallery-colored-card) |

### Svg (1)

| Tutorial | Difficulty | Source code |
|---|---|---|
| SVG Morph | Intermediate | [svg-morph](https://github.com/olivierlarose/svg-morph/) |

### Misc (3)

| Tutorial | Difficulty | Source code |
|---|---|---|
| Mask Entry | Intermediate | — |
| Capsule Physics | Intermediate | — |
| Image Pixel Loading | Intermediate | — |
