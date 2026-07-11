---
technique: Hover.css effect library (CSS-only hover/focus micro-interactions)
section: motion-interaction
source: IanLunn/Hover (hover.css v2.3.2, MIT)
tags: [css, hover, micro-interactions, transitions, buttons]
apply-when: a control/link/icon needs a tasteful hover or focus reaction and you don't want to hand-roll keyframes
---

# Hover.css — applied build decisions

Hover.css is a finite, drop-in library of single-element hover/focus effects. Each effect is one self-contained CSS block keyed off a `hvr-*` class — **pure CSS, zero JS, no dependencies**. Add the class to an element and the effect fires on `:hover`, `:focus`, and (mostly) `:active`. The full library is saved at `snippets/hover-css/hover.css`; pull the one block you need rather than shipping all 4150 lines.

Use this when you want a *known-good, conventional* hover reaction fast. Do NOT use it as the headline motion of a cinematic/WebGL page — it's button/link/icon polish, not art direction.

## Decision: which category for which job

Pick by *what the element is*, not by what looks cool in the demo. Each category = one class-name prefix family.

1. **2D transitions** — `hvr-grow`, `hvr-shrink`, `hvr-pulse*`, `hvr-push`, `hvr-pop`, `hvr-bounce-*`, `hvr-rotate`, `hvr-float`, `hvr-sink`, `hvr-bob`, `hvr-hang`, `hvr-skew*`, `hvr-wobble-*`, `hvr-buzz*`, `hvr-forward`, `hvr-backward`. **Default choice for buttons, cards, thumbnails.** Transform-only (scale/translate/rotate/skew), so cheap and GPU-friendly. Reach for `hvr-grow`/`hvr-float`/`hvr-push` first; treat `hvr-wobble-*`/`hvr-buzz` as playful/attention effects, not everyday polish.
2. **Background transitions** — `hvr-fade`, `hvr-back-pulse`, `hvr-sweep-to-*`, `hvr-bounce-to-*`, `hvr-radial-in/out`, `hvr-rectangle-in/out`, `hvr-shutter-in/out-*`. **For filled buttons / CTAs** where the *fill* should animate in on hover. Uses a `::before` pseudo-element scaled/translated under the text — so the host element needs a background and the effect sets `position: relative` for you. Choose direction (sweep-to-right, radial-out, shutter) to match layout reading direction.
3. **Border transitions** — `hvr-border-fade`, `hvr-hollow`, `hvr-trim`, `hvr-ripple-out/in`, `hvr-outline-out/in`, `hvr-round-corners`, plus the underline/overline family (`hvr-underline-from-left/center/right`, `hvr-overline-*`, `hvr-reveal`). **For ghost/outline buttons and text links.** Underline-from-* is the go-to for nav links (animated underline grow). Ripple/outline draw a second frame *outside* the element — leave margin so it isn't clipped.
4. **Shadow / glow transitions** — `hvr-glow`, `hvr-shadow`, `hvr-grow-shadow`, `hvr-box-shadow-outset/inset`, `hvr-float-shadow`, `hvr-shadow-radial`. **For lift/elevation feedback** on cards and buttons. `hvr-float-shadow` (element rises, soft shadow drops) is the most "premium" of the set; `hvr-glow` for accent/CTA emphasis. Cheaper than re-deriving a custom box-shadow transition.
5. **Icon effects** — `hvr-icon-*` (e.g. `hvr-icon-forward`, `hvr-icon-spin`, `hvr-icon-pop`, `hvr-icon-drop`, `hvr-icon-wobble-horizontal`). **For a button/link that contains an icon** added via `::before`/`::after` (the library expects an icon-font glyph in `content`). Animates only the icon, not the whole control — use for "Read more →" arrow nudges, download-icon drops, etc. Requires you to wire the glyph yourself (FontAwesome or equivalent).
6. **Speech bubbles** — `hvr-bubble-top/right/bottom/left` and `hvr-bubble-float-*`. **For tooltip/callout triggers** where a CSS triangle pointer should appear (or slide out) on hover. Niche; only when you actually want a bubble-pointer affordance, not for general buttons.
7. **Curls** — `hvr-curl-top-left/top-right/bottom-right/bottom-left`. **A page-corner "peel" gradient** on hover. Decorative and dated-looking — reserve for a deliberate skeuomorphic/retro corner accent. Usually skip on modern minimal/glass UIs.

## How it works (mechanics that affect your build)

- **The `translateZ(0)` / `perspective(1px) translateZ(0)` hack is intentional.** Almost every effect sets `transform: perspective(1px) translateZ(0)` at rest to force GPU compositing and kill sub-pixel jitter/anti-alias flicker during the transition. Keep it — stripping it reintroduces shimmer. If the element already has its own `transform`, you must merge, not clobber.
- **`display: inline-block` is set by default** so transforms have a box to act on. Override to `block`/`flex` as your layout needs, but keep *some* block-ish display.
- **Default duration is `0.3s`.** That's on the slow side for a button per our button-states rule (100–200ms). Override `transition-duration` when applying to interactive controls.
- **Pseudo-elements are load-bearing** for categories 2/3/5/6/7 — don't also use `::before`/`::after` on the same element for your own content, or you'll collide.
- **Effects fire on `:hover, :focus, :active`** — good for keyboard focus out of the box, but it is NOT a focus *ring*. Still add a real `:focus-visible` outline for accessibility; a grow/glow is not a sufficient focus indicator.

## Decision: take the block, not the library

This is a finite reference, not a runtime dependency. For one or two effects, **copy the single `hvr-*` block** (and its `@keyframes` if it has one) into your own CSS and rename to your convention — avoids a 115KB stylesheet and class-name leakage. Only link the whole file if you're prototyping many effects at once.

## Avoid

- Don't stack multiple `hvr-*` effects on one element (transform/pseudo conflicts).
- Don't put hover-only effects on touch-primary UIs as the *only* affordance — `:hover` is unreliable on touch.
- Don't ship `hvr-wobble-*`, `hvr-buzz`, `hvr-curl-*` as default UI polish; they read as gimmicky. Keep them for intentional moments.
- Respect `prefers-reduced-motion`: wrap or disable the keyframe-driven ones (pulse, wobble, buzz, bob, icon-spin) for users who opt out.

## Build checklist
- [ ] Picked the category by element type (2D for buttons/cards, border/underline for links, icon for icon-bearing controls, shadow for lift)?
- [ ] Copied just the needed `hvr-*` block (+ its `@keyframes`) instead of linking the whole 115KB file?
- [ ] Kept the `perspective(1px) translateZ(0)` rest transform (no shimmer) and didn't clobber an existing transform?
- [ ] Overrode the default `0.3s` toward 100–200ms for interactive controls?
- [ ] Added a real `:focus-visible` outline — not relying on grow/glow as the focus indicator?
- [ ] Left margin/space for effects that draw outside the box (ripple, outline, float-shadow)?
- [ ] Gated keyframe effects (wobble/buzz/pulse/spin) behind `prefers-reduced-motion`?
