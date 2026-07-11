---
technique: WebGL hardware-adaptive perf — capability tiers + dynamic resolution
section: motion
source: our build — baseline/sites/02b-cube-B2-slipstream (scene.js + v-c.html), deZign-pro 02b/TESQ
tags: [webgl, threejs, performance, render-scale, fps, device-detection, mobile, our-builds]
apply-when: shipping a heavy WebGL/Three.js scene that must hold framerate across unknown hardware (RTX desktop down to phone/integrated GPU) without a separate mobile build
---

# WebGL hardware-adaptive perf — applied build decisions

The problem this solves: one heavy Three.js scene has to run on the owner's RTX desktop AND on whatever phone or
integrated-GPU laptop a visitor brings — without forking the build. The TESQ cube-B2 scene does it with **three
composing parts**: detect a quality **tier** from the actual hardware (once), route every quality number through a
single **`Q(lo,md,hi)`** knob, then let an **FPS-driven dynamic-resolution** loop rescue any machine the tier guess
got wrong. All values below are the real shipped ones from `scene.js`.

## 1. Detect a tier from HARDWARE, not viewport width

`detectTier()` returns `'low' | 'med' | 'high'` from four signals — **never window width** (a small window on a
strong GPU is still strong):

- **Unmasked GPU string** via `WEBGL_debug_renderer_info` → `UNMASKED_RENDERER_WEBGL`, lowercased. Software
  rasterizers (`swiftshader|llvmpipe|software|basic render|microsoft basic`) → **always `low`**, ignoring cores/mem.
- **`navigator.hardwareConcurrency`** (cores) and **`navigator.deviceMemory`** (GB). Both **default to `8` when
  `undefined`** (Safari/Firefox don't expose `deviceMemory`) — assume capable rather than punishing a browser for
  hiding the number.
- **`matchMedia("(pointer: coarse)")`** → the phone/tablet branch, which checks weak mobile GPUs
  (`mali-4|mali-t|adreno [1-5]\d\d|powervr|apple a[789]\b`) or `cores <= 4 || mem <= 3` → `low`, else `med`.
- Desktop: `cores <= 2 || mem <= 2` → `med`, otherwise → **`high`**.

**Be conservative — keep `high` == "today's full look, 1:1".** The whole point is that a normal desktop is untouched;
part 3 catches the rare strong-looking-but-slow machine. Don't downgrade desktops defensively.

```js
function detectTier() {
  const q = new URLSearchParams(location.search).get("perf");
  if (q === "low" || q === "med" || q === "high") return q;            // ?perf override (QA)
  const gpu = _dzGpuString();
  const cores = navigator.hardwareConcurrency || 8;
  const mem = navigator.deviceMemory || 8;                              // undefined -> assume capable
  const coarse = (window.matchMedia && matchMedia("(pointer: coarse)").matches) || false;
  if (/swiftshader|llvmpipe|software|basic render|microsoft basic/.test(gpu)) return "low";
  if (coarse) {
    if (/mali-4|mali-t|adreno [1-5]\d\d|powervr|apple a[789]\b/.test(gpu) || cores <= 4 || mem <= 3) return "low";
    return "med";
  }
  if (cores <= 2 || mem <= 2) return "med";
  return "high";
}
```

## 2. One knob: `Q(lo, md, hi)` — never scatter per-tier `if`s

Define once: `const Q = (lo, md, hi) => tier === "high" ? hi : tier === "med" ? md : lo;` Then **every** quality
number in the scene reads off it, so a tier is a single column of values, not a maze of conditionals. The real
TESQ uses:

- `tierDPR = Q(1, 1.25, 1.5)` — the device-pixel-ratio **cap** (paired with `dynScale`, part 3).
- `RT_REF = Q(512, 768, 1024)` — reflection/refraction render-target resolution.
- `TERR_SEG = Q(200, 256, 320)`, `OSEG = Q(144, 216, 288)`, `N = Q(128, 160, 192)` — mesh/grid segment counts.
- `uSteps = Q(26.0, 34.0, 44.0)` — raymarch step count, passed straight into a shader uniform.
- `uReflOn = Q(0.0, 1.0, 1.0)` — **drop a whole effect** on the low tier by feeding `0.0` to its uniform.

So `Q` scales three things at once: **pixels** (DPR + RT sizes), **geometry** (segments), and **shader work**
(step counts, effect on/off). Expose the result for the HUD: `window.__dzTier = tier;`

## 3. Dynamic resolution: an FPS-EMA loop that rescales internal res

The tier is a guess; this is the safety net that holds framerate regardless. `dynScale` (1.0 → 0.55) multiplies the
DPR cap, so the renderer draws fewer internal pixels when slow and upscales to the canvas:

```js
renderer.setPixelRatio(Math.min(window.devicePixelRatio, tierDPR) * dynScale);   // the ONE formula
```

Each frame keeps an **exponential moving average** of FPS (alpha 0.1 — smooth, ignores single-frame spikes) and
nudges `dynScale` with **asymmetric thresholds + a cooldown**:

```js
if (_fpsPrevMs) { const f = 1000 / Math.max(1, ms - _fpsPrevMs); _fpsEMA = _fpsEMA ? _fpsEMA*0.9 + f*0.1 : f; }
_fpsPrevMs = ms;
if (_resFixed == null) {                       // ?res lock bypasses the auto-scaler
  if (_dynCD > 0) { _dynCD--; }                // cooldown: let a change settle before re-judging
  else if (frameN > 60) {                      // warm-up: skip the load-spike frames
    if (_fpsEMA < 46 && dynScale > 0.55) { dynScale = Math.max(0.55, dynScale - 0.12); applyResolution(); _dynCD = 45; }
    else if (_fpsEMA > 57 && dynScale < 1.0) { dynScale = Math.min(1.0, dynScale + 0.06); applyResolution(); _dynCD = 60; }
  }
}
window.__dzFps = _fpsEMA; window.__dzScale = dynScale;
```

Read the tuning carefully — it is deliberately asymmetric to avoid oscillation:

- **Down fast, up slow.** Drop is `-0.12` when EMA `< 46`; recovery is `+0.06` when EMA `> 57`. Falling behind hurts
  more than missed headroom, so shed load in big steps and creep back gently.
- **Dead band 46–57 fps** — between the thresholds nothing changes, so the scale doesn't hunt around 50.
- **`dynScale` floor `0.55`** — never upscale more than ~45%, past which it just looks broken; below that, the scene
  is simply too heavy for the device and the poster (part 4) is the honest answer.
- **Cooldowns (45 frames down / 60 up)** + a `frameN > 60` warm-up gate stop the loader's frame-time spike from
  yanking the scale on the first second.

`applyResolution()` re-applies the formula **and** calls `resizeRTs()` so every screen-sized render target tracks the
new drawing-buffer size; cheap passes stay halved (`>> 1`, liquid) or quartered (`>> 2`, bloom bright-pass). The same
`applyResolution()` is the body of the window `resize` handler — one function covers both "device got slow" and
"window changed size".

## 4. Dev/QA surface — four URL flags

All four are read straight off `location.search`, so QA needs no build:

- **`?perf=low|med|high`** — force a tier on any machine (see the low look on the RTX).
- **`?res=NN`** — lock render scale to `NN%` (clamped `0.2..1.0` via `_resFixed`); bypasses the auto-scaler entirely
  so you can inspect a fixed aggressive-downscale frame.
- **`?poster`** — show the static WebGL-fallback poster (also auto-triggered on `webglcontextlost` or no-WebGL — see
  the `poster-fallback.js` snippet).
- **`?review`** — add `html.dev`, which un-hides `.perfhud`: a fixed bottom-left glass chip that polls
  `window.__dzTier / __dzFps / __dzScale` every 500ms and prints `tier high · 58 fps · res 100%`.

## Build checklist

1. Detect the tier from **GPU string + cores + deviceMemory + coarse-pointer**, never viewport width; default unknown
   numbers to "capable" and keep desktop `high` == the untouched full look.
2. Route **every** quality value (DPR cap, RT sizes, mesh segments, raymarch steps, effect on/off) through one
   `Q(lo,md,hi)` so a tier is a single column of numbers.
3. Multiply the pixel-ratio cap by a `dynScale` that floats `0.55..1.0`; that one formula is the whole dynamic-res
   mechanism.
4. Drive `dynScale` from an **FPS EMA** with an asymmetric dead band (down `-0.12` below 46, up `+0.06` above 57),
   per-direction cooldowns, and a warm-up gate so the loader spike doesn't trigger it.
5. On every scale change AND on `resize`, call one `applyResolution()` that re-applies the formula and resizes all
   screen-sized render targets (full-res tracks the buffer; bloom/liquid stay `>> 2` / `>> 1`).
6. Expose `window.__dzTier / __dzFps / __dzScale` and gate `?perf` / `?res` / `?poster` / `?review` off `location.search`
   so the whole system is inspectable in a plain browser without a debug build.
7. Keep a **poster fallback** as the floor: below `0.55` scale or on context loss, stop the loop and show a static
   frame — degrading to a broken low-res scene is worse than an honest still.

> Ties to our experience: pairs with the [02b perf tiers] memory (3 tiers, `?perf`/`?poster`/`?review`, RTX4070 =
> default look). `high` is literally "today's render untouched", so adopting this on a finished scene is additive —
> you tune `med`/`low` and let `dynScale` cover the gap, rather than reworking the high-end look.
