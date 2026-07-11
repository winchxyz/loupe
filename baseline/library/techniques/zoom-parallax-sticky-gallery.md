---
technique: Zoom-parallax sticky gallery (center image fills screen on scroll)
section: scroll
source: Olivier Larose — zoom-parallax (github.com/olivierlarose/zoom-parallax)
tags: [scroll, parallax, sticky, framer-motion, hero, gallery]
apply-when: you want a hero/section where a grid of images scales up on scroll — center one fills the viewport while the rest fly off the edges
---

# Zoom-parallax sticky gallery — applied build decisions

The signature Awwwards "images zoom into the screen" effect. A tall scroll container pins one
full-viewport sticky stage; each image scales from 1 to a different end-scale as you scroll, so the
center image fills the frame while off-center images blow past the edges, revealing what's behind.

Snippet: `snippets/olivierlarose/zoom-parallax.jsx`.

## Decisions
1. **Structure = tall container + sticky stage.** Container `height: 300vh`; inside it a `position: sticky; top: 0; height: 100vh; overflow: hidden` stage. The 300vh is the scroll budget — taller = slower, more cinematic zoom.
2. **Drive with one `useScroll`**, `offset: ['start start', 'end end']` so progress is 0 at container top and 1 at container bottom.
3. **Different end-scale per image is the whole trick.** Center image gets the SMALLEST end-scale (~4); the further off-center an image sits, the LARGER its end-scale (5/6/8/9) because it must travel further off-screen. Same scale on all = flat, boring zoom.
4. **Position decides direction, scale decides speed.** Off-center images get `top/left` offsets in CSS on their inner `.imageContainer`; that offset is what sends them up-left, down-right, etc. Don't try to encode direction in the transform.
5. **7 images is the canonical count** (1 center + 6 around). Fewer reads sparse; more crowds the reveal.
6. **`placeholder="blur"`** on the Next `<Image>` so the zoom doesn't pop in from blank.
7. **Mobile:** the off-center offsets are in `vw/vh` — re-check at narrow widths; images that fly off correctly on desktop can clip awkwardly on phones. Reduce count or flatten end-scales under a breakpoint.

> Ties to our experience: this is a strong opening beat for a scroll-journey hero and pairs with our pinned-section work. The sticky-stage + per-element transform pattern is exactly how our perf-tier'd cinematic sections are structured — same `offset` math.

## Build checklist
- [ ] Container `height: 300vh`; sticky stage `top:0; height:100vh; overflow:hidden`
- [ ] One `useScroll` with `offset: ['start start','end end']`
- [ ] Distinct end-scales: center smallest, outer largest (4 / 5 / 6 / 8 / 9)
- [ ] Off-center direction set via CSS `top/left` offsets, not the transform
- [ ] `placeholder="blur"`; checked at a phone width
