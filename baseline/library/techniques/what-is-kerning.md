---
technique: Kerning, tracking & leading (letter-spacing decisions)
section: typography
source: figma-resource-library/what-is-kerning.md
tags: [typography, spacing, logos, headlines, legibility]
apply-when: setting any wordmark/logo, large headline, or small caption — anywhere uneven letter spacing would read as amateur
---

# Kerning, tracking & leading — applied rules

Core idea: kerning = the gap between a SINGLE letter pair; tracking = uniform spacing across a whole run; leading = vertical line-to-line gap. The eye reads spacing rhythm before it reads words, so uneven gaps register as "off" even when the reader can't name why. Spend kerning effort where text is biggest, smallest, or carries the brand — not on body copy.

## The rules (each = a build decision)
1. Don't conflate the three knobs. Use `letter-spacing` for tracking (whole-run density) and, in CSS, accept that true per-pair kerning comes from the font via `font-kerning: normal` + `text-rendering: optimizeLegibility`. Use `line-height` for leading — never fake line spacing with margins on inline text.
2. Kern the logo/wordmark by hand. Each character carries brand identity (FedEx's tight E/X gap hides the arrow; Apple/Google sit on precise custom spacing). For a TESQ-style wordmark, set per-letter spacing deliberately — do not ship the font's default metrics.
3. Tighten large headlines slightly. Big type exposes loose default gaps; pull `letter-spacing` negative a touch (e.g. -0.01em to -0.03em) on hero/H1 so the word reads as one shape, not scattered glyphs.
4. Loosen small text. Captions, footnotes, all-caps labels, and overlines need MORE space, not less — add positive tracking (e.g. +0.02em to +0.08em on uppercase) so glyphs don't collide at small sizes.
5. Prefer optical over metric for mixed/irregular type. When combining typefaces or using a quirky display font, let optical spacing (shape-based) win over the font's baked-in metric pairs. In code that means trusting a well-hinted font and `optimizeLegibility` rather than hand-nudging every pair.
6. Watch the problem pairs. Slanted glyphs A, K, V, W, Y and cap-then-lowercase combos create gaps: AV, WA, VA, LY, To. Eyeball these specifically in any short string (nav label, button, logo).
7. Kern for the smallest delivery size. A mark that lives on both a favicon and a hero must hold its spacing at every scale — tune at the tightest context, then verify it still reads large.
8. Don't let spacing break accessibility. Tight tracking that looks sharp on desktop can cramp text on mobile or for low-vision users; never trade legibility for style. Keep body text at default kerning.
9. Reset your eye to catch errors. Zoom out, flip/mirror, or shrink the word — spacing faults you've gone blind to pop out from a fresh angle.

## Build checklist (tick while setting type)
- [ ] Logo/wordmark spacing set deliberately, not left at font default?
- [ ] Headlines tightened, small/caps text loosened (opposite directions)?
- [ ] Problem pairs (AV, WA, VA, LY, To; A/K/V/W/Y) eyeballed in every short label?
- [ ] `font-kerning: normal` + `text-rendering: optimizeLegibility` on, leading via `line-height` not margins?
- [ ] Spacing still legible at the smallest size and on mobile?
- [ ] Re-checked by zooming out / mirroring the word for a fresh eye?
