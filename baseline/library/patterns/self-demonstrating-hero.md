# Self-demonstrating hero

tags: hero, demo, product, vignette, scripted, interactive, saas, app

**Use when:** the product DOES something visible (an app, a tool, a service with a flow).
The strongest product hero doesn't describe — it PERFORMS the product in a looping vignette.
(Reference caliber: the deZign+ hand-built hero — a scripted pick→edit→verify loop.)

## Skeleton

Asymmetric split (1.04fr / .96fr), copy left, a chrome-framed stage right:

```css
.hero { display: grid; grid-template-columns: 1.04fr .96fr; gap: clamp(28px, 4vw, 64px); align-items: center; }
.stage { position: relative; border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
.stage__bar { display: flex; justify-content: space-between; padding: 10px 16px;
  border-bottom: 1px solid var(--line); font: 500 10.5px var(--mono); }
.stage__body { position: relative; min-height: 300px; padding: 32px; }
.fake-cursor { position: absolute; transition: transform 1s cubic-bezier(.3,.7,.3,1); }
```

Script the loop in ~15 lines of JS: an async function with `await wait(ms)` beats between
states — move cursor → show selection/handles → type a command chip (30-40ms/char) → apply
the visible change → status toast ✓ → rest → loop. Keep a mono status in the bar
(`AGENT: PICKING → EDITING → VERIFIED ✓`) and, if it fits, a 2-3 line log strip below.

## Rules that keep it honest and premium

- The vignette shows a MINIATURE of the real thing (a tiny page, a tiny doc, a tiny map) —
  drawn in CSS, not a screenshot.
- Every beat changes something VISIBLE (text swaps, a handle appears, a toast lands).
- Transform/class transitions only; the loop must read even as a static frame (mid-state is
  composed, nothing hidden).
- 6-10s per cycle, then loop; no user input required.

## Variation axes

- The chrome: browser bar / app window / terminal / phone frame.
- The actor: fake cursor / typed command / incoming message / progress rail.
- Put the ONE allowed accent moment here (gradient border, colored status) — the hero earns it.

## Don'ts

- Don't autoplay video instead; drawn vignettes stay crisp, themable, and weightless.
- Don't script more than ~4 beats; it's a haiku, not a tutorial.
