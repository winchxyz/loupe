---
technique: Sticky-pin scroll-dwell sections (responsive, JS-free pin)
section: layout
source: deZign-pro own build — baseline/sites/02b-cube-B2-slipstream/v-c.html (TESQ "Slipstream" B2)
tags: [layout, scroll, sticky, pin, dwell, responsive, hamburger, nav, breakpoints]
apply-when: you want a section to "dwell" centered in the viewport while a tall scroll-track passes behind it (e.g. a fixed WebGL scene shows through), and it must degrade cleanly to plain stacked sections on tablet/phone
---

# Sticky-pin scroll-dwell sections (responsive, JS-free pin)

A full-screen content block that stays vertically centered in the viewport while you scroll, then releases — so a fixed background (here a live Three.js cube/Sun scene) reads through it and each section gets a per-section "pocket". The pin itself is **pure CSS sticky**, no JS scroll handler. Below 1080px the inline nav becomes a hamburger; below 920px the pins are turned OFF entirely so tall stacked content can never overlap.

## How the dwell works (the load-bearing trick)
Two nested elements:
- `.seg` (the `<section>`) is **taller than the viewport** — its surplus height is the dwell distance.
- `.pin` inside it is `position:sticky; top:0; min-height:100vh` and **vertically centers its content** with `display:flex; flex-direction:column; justify-content:center`.

As you scroll the section's extra height, the sticky pin sits glued at `top:0` (one viewport tall, content centered), so the section appears to "hold" on screen. It releases when the section's bottom reaches the pin's bottom. **Dwell length per section = section height − 100vh.** A section at exactly `100vh` (the hero) has zero dwell — the pin equals the viewport.

```css
.seg { position: relative; }
.pin { position: sticky; top: 0; min-height: 100vh;
       display: flex; flex-direction: column; justify-content: center;
       padding: 6.5rem 0 3rem; }            /* top pad clears the fixed nav */
```

Per-section heights actually shipped (note they are NOT uniform — tune by content + how long you want the scene to read):
`#hero 100vh` (no dwell) · `#news 165vh` · `#guides 150vh` · `#repos 205vh` · `#letter 205vh`.

## Build decisions (do X / avoid Z)
- **No JS for the pin.** Sticky + a tall parent is the whole mechanism. The build runs Lenis smooth-scroll + GSAP ScrollTrigger, but those drive only the reveal fades — the dwell needs neither. Don't reach for a scroll library to pin.
- **Center the pin content, don't top-align it on desktop.** `justify-content:center` is why it "holds" centered. The `~708px usable band` (100vh − the `6.5rem`/`3rem` pad − nav) is what the content must fit into; **design each section to live in one screen, no inner scroll, no column collapse.** The source comment states this directly: *"content stays within one screen (~708px usable); NO column collapse."*
- **Tune the top padding to the fixed nav height.** `6.5rem` top / `3rem` bottom keeps centered content from sliding under the floating nav. Drop to `5.6rem 0 2.4rem` at ≤600px.
- **Two-stage responsive collapse at two different widths** — they are deliberately not the same:
  - **≤1080px → hamburger.** `.cmdbar{display:none}` hides the inline nav; `.nav-toggle` (hamburger) appears and a fixed slide-down `.mnav` panel becomes available. This breakpoint matches where the desktop command-bar / volume slider were already being hidden.
  - **≤920px → pins OFF.** Set every section `height:auto` and the pin `position:static; justify-content:flex-start`. Now sections are plain stacked blocks that flow naturally; **tall content can never clip or overlap**, which sticky + fixed 100vh would otherwise cause on a narrow screen.
- **Keep the hero centered even after pins die.** Inside the ≤920 block, re-add `#hero .pin{justify-content:center}` so only the hero stays vertically centered while the rest top-aligns.
- **Desktop-only layout pockets go behind `@media(min-width:921px)`**, not in the base rules, so the mobile fallback starts from the clean stacked layout instead of fighting overrides.
- **Hamburger is ~30 lines of vanilla JS** — toggle `.open` on the panel + `.on` on the button, mirror `aria-expanded`, and close on any link click. No framework. (Full JS in the snippet.)

## Gotchas
- **A rectangular scrim on a sticky pin shows a hard square edge as it scrolls** over a live scene. The build removed `#hero .scrim` (`background:none`) and got text legibility from layered `text-shadow` instead. If your pin floats over imagery, prefer text-shadow / radial vignette over a box scrim.
- `min-height:100vh` on the pin is kept even in the ≤920 static state so each block still fills a screen; only `position` and `justify-content` change.
- Accessibility: the hamburger button carries `aria-label="Menu"`, `aria-expanded`, `aria-controls="mnav"`; the panel is a labelled `<nav id="mnav" aria-label="Sections">`. Keep these — the toggle JS updates `aria-expanded` on every open/close.
- The `<header>` is `pointer-events:none` with `.topbar > *{pointer-events:auto}` so the bar doesn't block the scene/page behind it — the hamburger and panel must opt back in (`pointer-events:auto`).

## Build checklist
1. Wrap each section in `.seg` (relative) and give it a height **> 100vh** sized to the dwell you want; put a `.pin` (`position:sticky; top:0; min-height:100vh; flex column; justify-content:center; padding ~6.5rem 0 3rem`) inside.
2. Design every section to fit the **~708px usable band** — one screen, no inner scroll, no column collapse.
3. Replace any rectangular scrim over a live background with `text-shadow`/vignette to avoid a square scroll edge.
4. At **≤1080px**: hide the inline nav, show the hamburger `.nav-toggle`, and wire the slide-down `.mnav` with the toggle JS (open/close + close-on-link + `aria-expanded`).
5. At **≤920px**: set sections `height:auto` and the pin to `position:static; justify-content:flex-start` (keep `#hero` centered) — pins off, content flows.
6. At **≤600px**: tighten the pin padding (`5.6rem 0 2.4rem`).
7. Put desktop layout pockets behind `@media(min-width:921px)` so the mobile fallback is the clean default.

> Ties to our experience: this is the responsive spine of 02b's "Slipstream" variant, whose whole point is letting the fixed cube/Sun scene read THROUGH the content sections (see MEMORY: 02b background finalized, 02b cube-layout dev-sites). The JS-free pin is what keeps that scene-through-content effect cheap and frame-desync-proof on the desktop path, while the ≤920 pins-off rule is what stops the tall scene sections from overlapping once a phone can't afford the dwell.
