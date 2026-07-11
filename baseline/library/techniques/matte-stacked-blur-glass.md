---
technique: Matte stacked-blur "glass" UI — frosted panels & full-screen loader over a cycling WebGL background
section: components
source: deZign-pro own build — baseline/sites/02b-cube-B2-slipstream/v-c.html (TESQ "Neo Luxury Glass" / design C)
tags: [glassmorphism, backdrop-filter, loader, dark-ui, webgl-overlay, legibility, our-build]
apply-when: building dark glass nav/panels/loaders that must stay legible on top of a moving/cycling WebGL or video background
---

# Matte stacked-blur "glass" — applied build decisions

Our 02b "TESQ" glass, distilled from the shipped `v-c.html` (design C, the owner's final pick). The brief
in the file header is the thesis: *"premium frosted glass (Raycast/Resend/Framer) … Glass is strict, never
milky — text contrast stays high."* The whole system is **dark-tinted fills + a hairline border + one inner
top highlight**, driven by CSS variables. The blur only softens what's behind; the **opaque tint does the
legibility work**. Core CSS lifted to `snippets/our-builds/matte-glass.css`.

## Decisions when building this glass

- **Run it all off tokens — don't hand-pick rgba per element.** The exact set that shipped:
  `--glass:rgba(15,19,31,0.90)` (panels), `--glass-2:rgba(26,31,48,0.66)` (chips/pills),
  `--chrome:rgba(12,14,22,0.66)` (floating nav/controls), `--line:rgba(255,255,255,0.16)` (border),
  `--hl:inset 0 1px 0 rgba(255,255,255,0.10)` (top highlight), on base `--bg:#06070d`, text `--ink:#f4f6fc`.
- **MATTE, not glossy — this is the defining choice.** Glossy glass uses a near-transparent fill (opacity .1–.3)
  and big specular highlights, and goes milky/illegible over a busy scene. Ours instead uses a **high-opacity dark
  fill (panel .90, chrome/chips .66)** so text contrast is owned by the fill, plus a tiny `saturate(150%)` to
  keep the bg colours alive through the frost. Avoid bright/translucent fills and avoid glossy gradient sheen.
- **Panel = `blur(12px) saturate(150%)` over `--glass`**, `border:1px solid --line`, `border-radius:18px`,
  and `box-shadow:0 28px 70px -38px rgba(0,0,0,0.85), var(--hl)` — a big soft drop shadow to lift the panel off
  the moving scene, plus the inner top highlight. On `max-width:760px` bump blur to **14px** (panel covers more scene).
- **Floating chrome blurs harder than panels.** Nav/control bars use `blur(16px) saturate(150%)` over `--chrome`,
  pill radius `999px`, `box-shadow:0 12px 40px -20px rgba(0,0,0,0.8), var(--hl)`. Toggles/buttons drop to
  `blur(14px) saturate(140%)`; chips/tabs to `blur(10px)` over the lighter `--glass-2`.
- **The single most "glass"-making line is the top highlight** `inset 0 1px 0 rgba(255,255,255,0.10)` (`--hl`).
  It reads as light catching the top edge. Every glass surface (panel, chrome, chip, button, input, footer) carries it.
- **Full-screen frosted loader = STACK two blur passes, because Chrome caps a single `backdrop-filter` blur.**
  Nest `.ldX-frost` (each `backdrop-filter:blur(66px) saturate(1.2)`) twice — the inner pass blurs the
  already-blurred result, so the live WebGL scene dissolves to soft silhouettes instead of staying readable:
  ```html
  <div class="loader ldX" id="loader">
    <div class="ldX-frost"><div class="ldX-frost"><div class="ldX-skin"></div></div></div>
    <div class="ldX-center">…TESQ…0%…</div>
  </div>
  ```
- **Tint + grain the loader on a `.ldX-skin` layer ON TOP of the frost**, not on the frost itself: a cool top-glow
  `radial-gradient(... rgba(159,208,255,0.07) ...)` + vertical darkening `linear-gradient`, inset highlight/ring/
  bottom-darkening shadows, and an `feTurbulence` fractal-noise `::after` at `opacity:0.06; mix-blend-mode:overlay`.
  The grain kills gradient banding and gives the matte "tooth".
- **⚠ No `clip-path` on ANY ancestor of a nested backdrop-filter — it silently breaks the blur.** That's why the
  loader reveals by `transform:translateY(-100%)` (a `.lift` class, `transition 0.95s`), never by clipping.
- **Legibility over the scene is layered, not luck.** Beyond the opaque fills, hero text adds heavy `text-shadow`
  stacks (e.g. `0 2px 5px rgba(2,6,12,0.6), 0 0 30px rgba(2,6,12,0.5)`) and the hero uses a radial `.scrim`
  behind copy. Glass alone carries panels; raw-on-scene text gets its own shadow scrim.

## Build checklist

1. Define the tokens first: `--bg`, `--ink`, `--glass`(.90)/`--glass-2`(.66)/`--chrome`(.66), `--line`(.16), `--hl`.
2. Panels: `background:var(--glass); backdrop-filter:blur(12px) saturate(150%)` (+`-webkit-`), `--line` border, `18px` radius, big soft drop shadow + `--hl`.
3. Keep fills opaque (matte) so text contrast comes from the fill — never go translucent-milky over a busy bg.
4. Floating chrome: lighter fill, stronger blur (14–16px), pill radius, every surface carries `--hl`.
5. Loader: nest `.ldX-frost` twice for a stacked blur (beats the single-blur cap); put tint+grain on a separate `.ldX-skin` layer on top.
6. Never put `clip-path` on an ancestor of any nested backdrop-filter; reveal/animate with `transform` instead.
7. Always pair `backdrop-filter` with `-webkit-backdrop-filter`; bump panel blur ~2px on mobile.

> Ties to our experience: design C (glass) is the owner's locked final for 02b, and this loader is the shipped
> default (`02b-loader-glassmorphism`, `02b-chosen-design-c` in memory). The "two nested `.ldX-frost`" trick and the
> "clip-path breaks nested backdrop-filter" gotcha are battle-found here — reuse them, don't re-derive.
