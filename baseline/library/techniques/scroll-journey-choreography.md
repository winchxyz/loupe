---
technique: Scroll-journey choreography — Lenis + ScrollTrigger driving ONE progress value through a WebGL camera journey AND pinned DOM UI
section: motion
source: our build — baseline/sites/02b-cube-B2-slipstream (v-c.html + scene.js), deZign-pro 02b/TESQ
tags: [scroll, lenis, gsap, scrolltrigger, webgl, three, camera, sync, choreography]
apply-when: a long scroll page where a fixed full-viewport WebGL scene must travel/animate in lockstep with DOM sections scrolling over it (scroll-told story, product journey, cinematic landing)
---

# Scroll-journey choreography — applied build decisions

A fixed full-screen Three.js scene that **travels** as you scroll while DOM sections slide over it. The trap
people fall into: two clocks — Lenis smooths the wheel, GSAP scrubs a timeline, the 3D reads `scrollY` — and
they disagree by a few px every frame, so reveals fire early/late against the camera. 02b avoids that with
**one number, read once per frame**: a single normalized scroll-progress `pCur` (0→1) is the sole driver of
the camera spline AND every section beat, and GSAP is told to update *off Lenis* so it never runs on a rival
clock. The "pinned UI" is free — the canvas is `position:fixed`, so nothing is pinned with ScrollTrigger.

## Decisions when building this

- **One source of truth = native `window.scrollY`, normalized in the render loop.** Don't keep a separate
  scrubbed timeline for the 3D. Each WebGL frame computes:
  ```js
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p   = max > 0 ? window.scrollY / max : 0;   // 0..1
  pCur += (p - pCur) * 0.07;                          // second, light smoothing
  ```
  `pCur` is the ONLY thing the journey reads. Everything (camera Y/Z, look target, section beats, fades)
  is a pure function of `pCur`.
- **Let Lenis own native scroll — then read native scroll, don't read Lenis.** `new Lenis({ lerp: 0.09,
  smoothWheel: true })` animates `window.scrollY` for you. The 3D reads `window.scrollY` directly, so it
  inherits Lenis's smoothing for free and there's no Lenis→3D coupling to drift.
- **The clock-sync line is mandatory:** `lenis.on("scroll", ScrollTrigger.update)`. This makes GSAP sample
  the *Lenis-smoothed* scroll position. Omit it and ScrollTrigger reads the browser's raw scroll → reveals
  desync from the camera. (In 02b GSAP only does one-shot reveals + this update — that's enough to keep it
  honest.)
- **Don't pin with ScrollTrigger — use a `position:fixed` canvas behind the DOM.** The 3D scene stays put
  while sections scroll over it because the canvas is fixed full-viewport, not because of `pin:true`. No pin
  spacer, no layout reflow, no scrub timeline for the pin. (Contrast `pinned-section-scrolltrigger.md`,
  which pins a DOM block — different job.)
- **Camera journey = a Catmull-Rom spline keyed once per section, sampled by `pCur`.** Seven keyframes
  (`KEYS`), one per DOM section, each `{ p, camY, fx, relY, dist }`; `pathAt(pCur)` returns the interpolated
  placement. Catmull-Rom (not per-segment ease) so the camera **never decelerates to a dead stop at each
  section** — it glides continuously. Real keyframe band: `camY` runs `7.5 → 276`; `dist` `36 → 44 → 36`.
- **Lerp the camera toward the spline at the SAME rate-family as Lenis (0.09).** `camera.position.y +=
  (k.camY - … - camera.position.y) * 0.09;` and Z at `0.09`. Matching the lerp constant to Lenis's `lerp:0.09`
  is why scroll-vs-camera hand-offs "never snap."
- **Section beats are smoothstep WINDOWS on the same `pCur`, not a nested timeline.** e.g. the landing turn is
  `smoothstep01(0.74, 0.82, pCur)`; the arc-down is `smoothstep01(0.87, 1.0, pCur)`. Each beat is a smoothstep
  *directly* on `pCur` — a smoothstep-of-a-smoothstep compresses motion into a lurch, so keep them flat on the
  one ruler. This is what makes a DOM section and its 3D beat share one timeline.
- **Active-nav state = IntersectionObserver, not ScrollTrigger.** A centre band `rootMargin: "-45% 0px -45%
  0px"` decides which section "owns" the screen and lights its nav item. Cheaper and more robust than a
  ScrollTrigger per section.
- **Programmatic nav goes through Lenis** (`lenis.scrollTo(target, { duration: 1.4 })`), never a native jump,
  so smooth scroll owns every move. Guard it with a `navLock` flag (~1500 ms) so the IntersectionObserver
  doesn't fight the click while the animated scroll is in flight. Anchors to the very bottom must
  `scrollTo(document.body.scrollHeight)` so `pCur` can actually reach `1.0`.
- **`data-lenis-prevent`** on any inner scroller (e.g. a scrollable list) so Lenis lets it scroll natively
  instead of hijacking the wheel.

## Minimal load-bearing values (from 02b)

- Lenis: `lerp: 0.09`, `smoothWheel: true`; rAF loop `lenis.raf(t)` every frame.
- Progress smoothing: `pCur += (p - pCur) * 0.07`.
- Camera follow lerp: `* 0.09` on Y and Z (matches Lenis lerp).
- Journey keyframes: 7 keys, `camY 7.5→276`, `dist 36/44/36`, sampled via Catmull-Rom `pathAt(pCur)`.
- Reveal triggers: `gsap.from(el, { opacity:0, y:22, duration:0.8, ease:"power2.out", scrollTrigger:{ start:"top 90%", once:true }})`.
- Nav band: `IntersectionObserver` `rootMargin:"-45% 0px -45% 0px"`; `lenis.scrollTo(_, { duration: 1.4 })`; `navLock` 1500 ms.

## Gotchas

- **Two clocks = drift.** The single failure mode. If GSAP scrubs its own timeline while the 3D reads
  `scrollY`, they will diverge under fast flicks. One value, read once per frame, kills it.
- **Forgetting `lenis.on("scroll", ScrollTrigger.update)`** → reveals fire against raw scroll, visibly out of
  sync with the smoothed camera.
- **Pinning the canvas with ScrollTrigger** is wrong here — adds a pin spacer and reflow for no reason; a
  fixed canvas already gives the pinned look with zero layout cost.
- **Bottom anchors that stop short of `scrollHeight`** leave `pCur < 1.0`, so the final journey beat never
  completes — scroll the body to its full height for end anchors.
- **Double smoothing is intentional, not a bug.** Lenis tames the wheel; the `*0.07` tames `pCur`'s response.
  Drop the second one and the camera gets twitchy; the gain trades responsiveness for cinematic glide.
- **`document.hidden` early-return** in the loop: reset `prevMs` and bail so a backgrounded tab doesn't bank a
  huge `dt` and lurch the camera on return.

## Build checklist

1. Canvas `position:fixed` full-viewport behind the DOM — that IS your pin; do not `pin:true` it.
2. `new Lenis({ lerp: 0.09, smoothWheel: true })` + a per-frame `lenis.raf(t)` loop owning native scroll.
3. `lenis.on("scroll", ScrollTrigger.update)` — the one line that keeps GSAP on Lenis's clock.
4. In the WebGL loop compute ONE `pCur` from `window.scrollY / (scrollHeight - innerHeight)`, smoothed `*0.07`.
5. Drive the camera from `pCur` via a Catmull-Rom spline keyed once per section; lerp the camera at `0.09`.
6. Express every section beat as a `smoothstep(a, b, pCur)` window on that same `pCur` (no nested timelines).
7. Active-nav via IntersectionObserver (centre band); programmatic nav via `lenis.scrollTo`, guarded by `navLock`.

> Ties to our experience: the wired snippet is saved at `snippets/our-builds/scroll-wiring.js` (DOM side +
> WebGL side, with the real 02b `KEYS`). Cross-link the Codrops/Olivier-Larose scroll digests:
> `smooth-scroll-lenis.md` (the Lenis baseline), `pinned-section-scrolltrigger.md` (when you DO want a real
> DOM pin instead), `olivierlarose-tutorials-catalog.md`, `r3f-3d-rotate-on-scroll.md` and
> `webgl-scroll-velocity-distortion.md` (scroll→3D mappings), `layered-parallax-scroll.md` and
> `infinite-webgl-scroll-gallery.md`. 02b's contribution over those is the **single-`pCur` discipline**: one
> normalized value, read once per frame, drives both the camera spline and the DOM beats so they cannot drift.
