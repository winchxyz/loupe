---
technique: Scroll-driven time-of-day / environment journey (Three.js)
section: webgl
source: our build — baseline/sites/02b-cube-B2-slipstream/scene.js (deZign-pro 02b/TESQ)
tags: [three.js, webgl, scroll, time-of-day, hdri, cross-fade, journey, debug-hooks]
apply-when: a hero/landing scene should evolve continuously as the user scrolls — a day/night cycle, or a staged "fly from A to B" environment journey, with one render scene (no hard scene swaps)
---

# Time-of-day journey — build decisions

02b drives a single Three.js scene through a whole environment arc on scroll: hero on
**water**, climb into **black space**, land on the **Sun (lava)** by day or the **Moon
(regolith)** by night. The same machinery runs a continuous **day/night cross-fade**.
Two ideas carry it: (1) one keyframe array lerped between neighbours — never discrete
modes with cuts; (2) one `applyTOD(t)` function shared by the dev slider AND the
production clock, so what you tune is exactly what ships. Code:
`snippets/our-builds/tod-crossfade.js`.

## Model the cycle as ONE palindromic keyframe array, not N discrete modes
- `const TOD_ORDER = ["night","blue","golden","day","golden","blue","night"]`. `applyTOD(t01)`
  maps `t∈[0,1]` onto this array, finds the bracketing pair `(A,B)` and local fraction `f`,
  and **lerps every channel** between `TIMES[A]` and `TIMES[B]`. That single lerp is what
  turns four named looks into a smooth morph.
- Make the array **palindromic** (night at both ends) so `t=1` wraps to `t=0` with no pop —
  auto-play just does `todAuto.t += dt/46; if (t>=1) t-=1` (~46 s per full day).
- Keep two parallel keyframe tables, both keyed by mode name: `TIMES` (physical/scene fields)
  and `SKYGRADE` (sky colour-grade). Real 02b rows, do not invent: e.g.
  `day: { fogC:0xd6e7f8, water:0x2a5e8e, sunC:0xfff2d8, hemi:1.6, key:2.4, exposure:1.0, lift:0.92 }`,
  `night: { fogC:0x0a1c38, water:0x05203e, sunC:0x9fbcff, hemi:0.55, key:1.2, exposure:0.7 }`;
  grade `golden: { low:[1.55,1.02,0.55], sat:1.45, glow:[1.7,0.95,0.45], glowAmt:0.95, glowPow:55 }`.

## Drive scrubbed values through a separate MUTABLE `tod` object — never the keyframe rows
- The render loop reads from a per-frame `tod = { fogC, stars, dayness, ... }` that `applyTOD`
  rewrites every call. The keyframe rows (`TIMES[mode]`) are constants and **must stay pristine** —
  the loaded mode is also a cycle endpoint, so writing the lerp result back into `T` would corrupt
  the cycle. Lerp INTO `tod`, render from `tod`.
- Derive one scalar `dayness` (0 at midnight, 1 at noon) from a sine of `t01`, and feed it to
  cheap dependents (foam brightness, etc.) instead of re-deriving the hour everywhere.

## ONE applyTOD, two sources — dev slider and prod clock are the same code path
- `?dev` shows a slider + ▶ that call `applyTOD`; production has no UI and calls the same
  function from the device's **real sun altitude** (`sunToCycle()` → ephemeris altitude mapped
  onto the `TOD_ORDER` bands: `≤-12° night, -6° blue, 0° golden=sunrise, ≥+55° day=noon`,
  mirrored for the setting half). Fallback to a plain timezone clock until the observer is ready.
- Seed once, late: `if (!todSeeded) applyTOD(seed)` on the **first frame inside the loop**, so
  every uniform/light/body `applyTOD` touches already exists (init order matters — a too-early
  call throws on undefined uniforms). Prod re-applies only `frameN % 60 === 0` (once/sec), not
  every frame.

## Stage the journey as smoothsteps DIRECTLY on the scroll position (`pCur`)
- Smooth the raw scroll once: `pCur += (p - pCur) * 0.07` (cinematic glide, less twitch), then
  build a continuous camera path with **Catmull-Rom through uniformly-spaced keyframes** (`KEYS`
  with `p, camY, fx, dist`) — one C1 curve so the camera never dead-stops at each section (a
  per-segment smoothstep gave a stop-and-go jerk).
- Pace each beat as a smoothstep **directly on `pCur`** (not a smoothstep of a smoothstep, which
  compresses beats into a lurch). 02b's actual bands: `climbUp = smoothstep(0.02,0.44) * (1 -
  smoothstep(0.50,0.70))`; landing `turnP 0.74→0.82` (180° yaw), `backP 0.80→0.88` (back-in),
  `upP 0.82→0.88` (tilt to Earth), `arcP 0.87→1.0` (slow pitch down to the surface).
- **Lock the destination at the hero only:** `destSun` may flip solely while `pCur < 0.40`, so a
  clock tick can never swap Sun↔Moon mid-flight. Reveal/skin the landed surface off a `destSun`
  toggle (`groundMesh.material = SURF_LAVA ? lavaMat : regoMat`) and gate it on a per-destination
  ready flag (`landing = landReady && (destSun ? sunReady : moonReady)`).

## Sky bodies + audio ride the same `t` for free
- `todCelestial(t01)` puts the sun/moon discs on a real E→W arc (sun centred on noon, moon on
  midnight for a continuous azimuth across the `t=1→0` wrap) and fades each by altitude; the
  meshes ride the camera each frame at radius `TOD_SKY_R = 700`. `applyTOD` copies `todSky.sunDir`
  into both the sky-grade and the water light dir, so glints follow the sun automatically.
- The space/sun audio beds cross-fade on the SAME progress: `sunNear = smoothstep(0.80,0.96,pCur)`
  splits gain between the space bed and the sun bed — silent on the water (`sky=0`), space on the
  climb, sun only AT the Sun.

## Expose everything through one `window.__dz` debug object
- Build a single hook: `window.__dz = { applyTOD, todSky, get pCur(){...}, get destSun(){...},
  todHold:false, fogLock:null, rainForce:null, extraSink:0, ... }`. Getters expose live state;
  plain fields are **probe overrides** the loop honours (`if (__dz.fogLock) fog.color.set(...)`).
- `__dz.todHold = true` makes the prod clock **yield to the dev slider** (the loop skips
  `applyTOD(sunToCycle())` while held) — that's how manual scrubbing takes over a clock-driven
  scene without a separate build.

## Build checklist
- [ ] Cycle is ONE palindromic keyframe array, `applyTOD(t)` lerps neighbours `(A,B,f)` — not N discrete modes with cuts?
- [ ] Scrubbed values written into a mutable `tod`/uniforms, with the keyframe rows (`TIMES[mode]`) left pristine?
- [ ] Same `applyTOD` called by both the dev slider and the prod clock/ephemeris (no second production path)?
- [ ] `applyTOD` seeded once on the FIRST loop frame (after all uniforms exist), prod re-applies ~1×/sec not every frame?
- [ ] Camera path = Catmull-Rom through uniform keyframes; each journey beat a smoothstep DIRECTLY on `pCur`?
- [ ] Destination (`destSun`) only allowed to flip at the hero (`pCur < 0.40`); landing gated on a per-destination ready flag?
- [ ] Single `window.__dz` hook exposing live getters + probe overrides (`todHold`, `fogLock`, ...) for closed-loop debugging?

> Ties to our experience: 02b is the owner's Awwwards case (Sun+Lava journey). The `__dz`
> hooks (`todHold`, `applyTOD`, `fogLock`, `rainForce`) are exactly the closed-loop verification
> surface deZign-pro's thesis is built on — the same scene the user tuned by slider is what ships,
> and every tunable is reachable from the console for a probe/diff.
