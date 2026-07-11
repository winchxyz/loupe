---
technique: Generated-page review — whitespace discipline + robustness
section: our-builds
source: Pilot C round 2 (VANTA A/B) — generated page had blocks taller than the screen with dead space; root-caused 2026-06-19
tags: [generation, whitespace, vertical-rhythm, density, ai-slop, robustness, verification, scrolltrigger]
apply-when: generating ANY full page in one shot — review it against this BEFORE showing the owner
---

# Generated-page review — whitespace discipline + robustness

Two recurring single-shot failure modes, caught the hard way (2-3 wasted round-trips, owner screenshots).

## 1. Block rhythm: each section ≈ one viewport (the BIG one)
**Failure (BOTH directions — learned the hard way over many rounds with the owner's screenshots):**
- **Too TALL:** "generous luxury whitespace" makes a section much taller than the viewport with dead empty bands
  top/bottom (first mistake — `--v-rhythm` up to 180px/side, contact 200px/side, tall card min-heights).
- **Too SHORT:** over-correcting to content-height makes a section SHORTER than the viewport, so the NEXT block's
  (often contrasting dark/light) background bleeds into the same screen — *"you look at one block and see another."*

**The target:** each major block (hero / work / studio / ethos / contact) is **about one viewport tall**, with the
content **composed to FILL that height** — so you scroll cleanly from one full-screen block to the next and the
dark↔light alternation happens at the screen EDGES.

**Rules:**
1. **Give each major section `min-height:100svh`** and **center / distribute the content to fill it**
   (`display:flex;flex-direction:column;justify-content:center`, or header-top / content-middle / footer-bottom).
   Size blocks by min-height, NOT by giant fixed padding.
2. **Compose to fill — don't clump.** A full-screen block whose content sits in a tiny cluster (top-left, or a
   narrow centre column with a dead right half) is as bad as dead vertical space. Use the WIDTH: span content,
   balance with a second column/element, or centre deliberately. (Ethos example: manifesto LEFT + stats grid RIGHT,
   not a narrow paragraph with an empty right half.)
3. **Modest internal padding** (~64–128px) is breathing room WITHIN the 100svh block — not the thing that sizes it.
4. **Card/element min-heights** modest; **last block:** footer at the bottom of its own screen, no dead band after it.

## 2. Async-font / ScrollTrigger reflow (smaller, still real)
Big display fonts load late and reflow layout AFTER `ScrollTrigger` computed start/end → reveals/scrubs fire at
stale positions. Guard: `document.fonts.ready.then(()=>ScrollTrigger.refresh())` + on `window.load`; plus a reveal
safety net (force-reveal any `.reveal` already in view); and never trap content behind motion (reduced-motion +
no-JS paths show everything).

## Build checklist (run BEFORE showing the owner)
- [ ] Render the FULL page **at the owner's real width** (e.g. 1900) and look at **proportion / block height**, not just overflow.
- [ ] Is each major block **≈ one viewport** (`min-height:100svh`) with content composed to FILL it? — NOT shorter (the next block bleeds into the same screen) and NOT over-tall with dead bands.
- [ ] Does the content use the **WIDTH** (no narrow column with a dead half)? Hero/contact centred cleanly; footer at the bottom of its own screen?
- [ ] `ScrollTrigger.refresh()` on `fonts.ready` + `load`; reveal safety net; reduced-motion/no-JS show all content?

> Ties to our experience: this is BOTH our dominant PAIN themes at once — I "checked the wrong property"
> (overflow instead of whitespace/density) and false-passed twice, and only the OWNER'S real render revealed it.
> The app's verification loop must render at the user's width and judge density/proportion, and surface the real
> view when the model is unsure — not trust an overflow probe.
