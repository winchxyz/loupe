---
recipe: Bruno Simon 2019 — drivable low-poly physics portfolio
source: https://2019.bruno-simon.com/ (reference; VISUAL estimate from owner screenshots, 2026-06-19 — not code-extracted)
palette: warm orange-gradient ground · cream low-poly · lime-yellow · red car
mood: playful, toy-like, joyful; the whole site is a drivable 3D sandbox
stack: Three.js + physics (cannon-style) drivable car, flat-shaded low-poly, keyboard control
tags: [webgl, threejs, low-poly, physics, drivable, gamified, playful, portfolio, flat-shaded]
---

# Bruno Simon 2019 — recipe (visual)

The legendary drivable portfolio: you steer a **little red low-poly car** with arrow keys across a warm
flat-shaded world, and the content is physical **places you drive to**. Pure delight-over-convention.

## Palette (approx)
- **Ground = warm orange gradient** `~#e8743b → ~#f4b16a` (top→bottom).
- **Cream / off-white** flat-shaded low-poly props (rocks, brick walls, platforms).
- **Lime-yellow** `~#cfe04a` low-poly trees; **red** `~#d94f3a` off-road jeep (the avatar).
- Flat single-directional-light shading — no textures, no PBR; color does all the work.

## Type
- **3D extruded geometry text** for the name (`BRUNO SIMON / CREATIVE`), uppercase, sitting in the world.
- Tiny UI **key-hint** labels (`SHIFT SPACE M R WHEEL H`) and **signpost** labels (`INFORMATION`, `PROJECTS`, `PLAYGROUND`).

## Grid & composition
- An **open 3D plane** viewed in a high ¾ / near-isometric camera; **diegetic navigation** — drive to a signpost / platform to reach a section.
- Content = low-poly vignettes on white platforms (arcade, cinema seats, bowling, dog, mannequins); key-hint legend pinned to a corner.

## Motion (inferred)
- **Real-time drivable car with PHYSICS** (cannon.js-style): steer, accelerate, bump and knock props around; camera follows; horn/lights/reset (R) controls. Interactive sandbox, NOT scroll.

## Mood
Toy-box joy — a portfolio that's literally a game. Warmth (orange) + simplicity (flat low-poly) + interactivity.

## When to use
Ultra-playful personal / creative portfolios; "explorable toy world"; gamified WebGL where **delight and memorability** outrank conventional UX. Pair flat low-poly + one warm gradient + a single hero color (the car).

## Gaps
Exact hexes, the physics tuning, camera rig, and asset pipeline are estimated from two screenshots — not code-verified. (Note: the live successor bruno-simon.com is even heavier WebGL; this 2019 build is the canonical drivable one.)
