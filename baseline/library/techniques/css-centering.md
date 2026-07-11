---
technique: Centering in CSS (decision tree)
section: css-layout
source: css-tricks/centering-css-complete-guide
tags: [css, layout, centering, flexbox, grid]
apply-when: you need to center something and want the right method on the first try instead of guessing
---

# Centering in CSS — applied decision tree

Core idea: "center it" has a *different* right answer depending on (a) axis — horizontal, vertical, or both — and (b) whether you know the element's size. Pick from the tree below instead of stacking hacks. In modern code, **flexbox or grid solves almost every case**; the older tricks are fallbacks/legacy.

## The modern default (use this unless you have a reason not to)
- **Both axes, any size, one or many children — flexbox:**
  ```css
  .parent { display: flex; justify-content: center; align-items: center; }
  ```
- **Both axes, single child — grid (shortest):**
  ```css
  .parent { display: grid; place-items: center; }
  ```
These two cover the vast majority of real cases (modals, hero content, icons-in-buttons, empty states). Reach past them only for the specific situations below.

## Horizontal only
- **Inline / text:** `text-align: center` on the parent (works for inline, inline-block, inline-flex children too).
- **A single block with a known width:** `margin: 0 auto` (+ a `width`/`max-width`). The classic, widest browser support.
- **Several blocks in a row:** parent `display: flex; justify-content: center` (modern) — or `text-align: center` on parent + `display: inline-block` on children (legacy/email).

## Vertical only
- **Single line of text:** equal `padding-top`/`padding-bottom`, OR `line-height` = the box `height` (only if text never wraps).
- **Multiple lines in a fixed-height box:** `display: flex; flex-direction: column; justify-content: center` (modern). Legacy fallback: parent `display: table` + child `display: table-cell; vertical-align: middle`.
- **A block of unknown height inside a positioned parent:**
  ```css
  .parent { position: relative; }
  .child  { position: absolute; top: 50%; transform: translateY(-50%); }
  ```
  (Use this only when flexbox/grid isn't available on the parent.)

## Both axes — the absolute-positioning fallbacks (for overlays where you can't flex the parent)
- **Unknown size:**
  ```css
  .child { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
  ```
- **Known size (no transform needed):** `position: absolute; top:50%; left:50%; margin: -<h/2> 0 0 -<w/2>` — only when width AND height are fixed.
- **Fixed overlay, minimal code:** `position: fixed; inset: 0; margin: auto;` (with the element given a width/height) centers in the viewport.

## Picking rule of thumb
| Situation | Use |
|---|---|
| Anything, any size, modern browser | `display: flex; justify-content: center; align-items: center` |
| One child, terse | `display: grid; place-items: center` |
| Single block, known width, max compat | `margin: 0 auto` + width |
| Just inline text | `text-align: center` |
| Overlay where parent can't be flexed | `position: absolute; top/left:50%; transform: translate(-50%,-50%)` |

## Build checklist
- [ ] Identified the axis (H / V / both) before choosing a method?
- [ ] Defaulted to flexbox (`justify-content`+`align-items`) or grid (`place-items: center`) unless there's a concrete reason?
- [ ] `margin: 0 auto` only used where a width/max-width is set?
- [ ] Absolute + `translate(-50%,-50%)` reserved for overlays where the parent can't be a flex/grid container?
- [ ] No stacked/legacy hacks left in where a single modern rule does the job?
