---
technique: Self-dismissing glass loader + no-WebGL / context-loss poster fallback
section: loader
source: deZign-pro own build — 02b-cube-B2-slipstream (v-c.html #loader/#poster + scene.js showPoster/__loaderClose)
tags: [loader, glass, backdrop-filter, fallback, webgl, context-loss, poster, progressive-enhancement, our-build]
apply-when: a full-screen WebGL/canvas scene needs a branded intro veil AND a graceful degrade path when the GPU is absent or its context is lost
---

# Glass loader + poster / context-loss fallback — applied build decisions

A full-screen matte-**glass** loader that veils the live WebGL scene while it warms up, then
slides itself away — paired with a static **poster** fallback that takes over the same frame
when WebGL is missing or the GPU context dies. The loader and the fallback share one dismiss
path (`window.__loaderClose`), so the page is never left frozen behind a veil or staring at a
black canvas.

Snippet: `snippets/our-builds/poster-fallback.js` (both halves — loader script + renderer net).

## A. The matte-glass loader (auto-dismiss)
1. **The veil is real backdrop-blur over the live scene, not an opaque panel.** `.loader.ldX` is
   `background:transparent`; the blur lives in `.ldX-frost{backdrop-filter:blur(66px) saturate(1.2)}`.
2. **Chrome caps a single backdrop blur, so STACK the blur element** — `.ldX-frost` is nested
   inside another `.ldX-frost` (each blurs the already-blurred result) → the scene dissolves to
   soft silhouettes instead of staying sharp. `.ldX-skin` (radial tint + linear darken + an inset
   highlight `box-shadow` + a 6%-opacity `feTurbulence` SVG grain via `::after mix-blend:overlay`)
   sits on top for the frosted-glass material.
3. **Avoid `clip-path` anywhere in the ancestry** — an ancestor `clip-path` breaks nested
   `backdrop-filter`. Reveal is a `transform`, not a clip.
4. **Reveal = slide up, not fade.** `.loader.ldX{transition:transform .95s cubic-bezier(.65,0,.2,1)}`
   and `.lift{transform:translateY(-100%)}`. After the slide, hard-remove the node (`setTimeout … 1100ms`).
5. **Progress is faked but GATED, never a pure timer.** It crawls (`p += 0.85`/frame) but caps at
   **93%** until both conditions hold: `scene-ready` fired AND a `MIN = 2200ms` brand-dwell elapsed —
   only then does it run to 100% and `close()`. `scene-ready` is dispatched from the THREE
   `LoadingManager.onLoad`; a `5500ms` `setTimeout` force-sets `ready` so it can never hang if an
   asset never loads.
6. **Hide under-content via `visibility:hidden` while loading; restore in `close()`.** The glass is
   transparent, so the topbar/content beneath would flash through — `close()` un-hides them. This is
   the same restore the poster path reuses (see C).
7. The word mark (`TESQ`) runs a decode-scramble: each of 4 letters locks once its local progress
   passes a threshold — cosmetic, but it's what makes the percent feel "live".

## B. The poster fallback (no-WebGL / context-loss)
1. **`.poster{position:fixed;inset:0;z-index:0;background-image:url("assets/poster.jpg")}`** — a static
   scene frame, `opacity:0` by default, raised by `html.poster-on .poster{opacity:1}` (0.5s fade).
   The companion rule `html.poster-on .sea{visibility:hidden}` kills the dead/black `<canvas>`.
2. **Page content stays ABOVE the poster and keeps working** — the poster is a backdrop at `z-index:0`,
   not a blocker; `pointer-events:none`.
3. **Three entry points all funnel to one `showPoster()`** which adds `html.poster-on` and then
   dismisses the loader:
   - `?poster` query param → preview the fallback on any machine (dev/QA), `return` before scene init;
   - `WebGLRenderer` construction throws (no WebGL at all) → `catch { showPoster(); return; }`;
   - `webglcontextlost` event → `e.preventDefault(); renderer.setAnimationLoop(null); showPoster();`.

## C. The shared dismiss seam — `window.__loaderClose`
- The loader publishes its `close()` as `window.__loaderClose`. `showPoster()` calls it
  (`if (window.__loaderClose) window.__loaderClose(); else …hard-remove`).
- **Why route through it instead of `loader.remove()`:** `close()` also restores the content that
  was `visibility:hidden`-ed during load. A naive remove would drop the veil but leave the page
  invisible. The hard-remove branch is only the belt-and-suspenders for "loader script never ran".

## D. powerPreference safety net
- `new THREE.WebGLRenderer({ canvas, antialias:false, powerPreference:"high-performance" })` — asks the
  browser for the discrete GPU on hybrid machines. `antialias:false` keeps the cost down (this build
  does its own grade/AA in post). The construction is wrapped in `try/catch`; the catch is the actual
  net — `powerPreference` is a hint, the abort-to-poster is the guarantee.

## Gotchas
- A stacked-blur veil is GPU-cheap to look at but the nesting is load-bearing — flatten it to one
  `.ldX-frost` and the scene stays nearly sharp on Chrome.
- Don't gate the loader on a bare timer; gate on `scene-ready` with a timer only as the *cap/dwell*.
  Otherwise you reveal before assets finish (flash) or hang forever if one asset 404s.
- `webglcontextlost` MUST `preventDefault()` or the browser won't even attempt restore; pair it with
  `setAnimationLoop(null)` so you're not rendering into a dead context.
- The poster asset must actually exist (`assets/poster.jpg`) — the fallback is only as good as the
  baked frame; ship it, don't leave a broken `<img>` as your degrade path.

## Build checklist
- [ ] Veil is transparent + nested `backdrop-filter` (stacked blur), no `clip-path` in ancestry
- [ ] Reveal via `transform: translateY(-100%)`, then hard-remove the node after the transition
- [ ] Progress capped (~93%) until `scene-ready` AND a min-dwell; hard `setTimeout` so it can't hang
- [ ] Under-content hidden with `visibility` during load and restored inside the dismiss `close()`
- [ ] `showPoster()` covers all three: `?poster`, `WebGLRenderer` throw, `webglcontextlost`
- [ ] Loader and poster share `window.__loaderClose`; `webglcontextlost` does `preventDefault` + `setAnimationLoop(null)`
- [ ] `powerPreference:"high-performance"` set, wrapped in `try/catch` that aborts to the poster

> Ties to our experience: this is the SHIPPED 02b/TESQ loader+fallback — the glass loader is the
> locked production default (auto-dismiss; per memory "loader glassmorphism … SHIPPED as default"),
> and the poster is the floor of the hardware-adaptive perf tiers (`?perf`/`?poster`/`?review`
> controls). Reuse the exact `__loaderClose` seam whenever a scene can fail to init.
