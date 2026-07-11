---
technique: Flyer sizes & print-ready dimensions
section: print-design
source: figma-resource-library/flyer-sizes.md
tags: [print, dimensions, dpi, bleed, layout, export]
apply-when: setting up any print-bound artboard (flyer, poster, postcard, menu, insert) and choosing its size + print-safe margins
---

# Flyer sizes & print dimensions — applied rules

Core idea: print design is dimension-first. Pick the size from the distribution method, build the canvas in pixels at 300 DPI, and bake in bleed/trim/safe-area BEFORE laying anything out — every downstream decision (copy length, image res, hierarchy) follows from the format.

## Size picker (pick by distribution + info density, then set the canvas)
1. **Pick the size from how it's delivered, not from taste.** Street/door-drop -> A5. Rack/display -> rack card. Envelope/mail -> DL or postcard. Wall/window from a distance -> large format. Lots of info (menu, schedule) -> A4 or US Letter.
2. **Set the canvas in pixels @ 300 DPI** (the print standard). Memorize the workhorses:
   - A4: 2480 x 3508 px (210 x 297 mm) — info-heavy, global default.
   - US Letter: 2550 x 3300 px (8.5 x 11 in) — North-American multipurpose, cheapest to print.
   - A5: 1748 x 2480 px (148 x 210 mm) — compact handout, balances space vs portability.
   - Half-sheet: 2550 x 1650 px (8.5 x 5.5 in) — event/party, high-volume.
   - Quarter-page: 1275 x 1650 px (4.25 x 5.5 in) — coupons, one message only.
   - Postcard: 1200 x 1800 px (4 x 6 in) — direct mail, durable.
   - DL: 1169 x 2480 px (99 x 210 mm) — fits DL envelope, narrow.
   - Rack card: 1050 x 2550 px (3.5 x 8.5 in) — header + concise info, display-rack.
   - Large format / tabloid: 3300 x 5100 px (11 x 17 in) — poster, attention from afar.
   - Presentation folder: 2700 x 3600 px (9 x 12 in) — kit/portfolio holder, allow for folds + pockets.
3. **Choose orientation/format from info density.** Lots to say -> larger format (A4/Letter). Quick announcement, coupon, or mailer -> small format (postcard/DL/A5) for portability and lower cost.
4. **Smaller canvas -> ruthless editing.** On quarter-page/DL/postcard, every element competes for space: one headline, one CTA, no clutter. Don't shrink an A4 layout — redesign for the smaller frame.

## Print-safe geometry (set up on EVERY print artboard, day one)
5. **Bleed: extend backgrounds/images ≥0.125 in (3 mm) past every edge.** Anything meant to touch the paper edge must overshoot, or you get accidental white slivers after the cut.
6. **Trim line = where it's actually cut.** Treat it as a hard boundary; keep meaningful content off it.
7. **Safe / live area: keep all critical text + logos 0.125–0.25 in inside the trim.** Cutting drifts; content in the safe area survives it. The smaller the format, the more this margin eats your usable space — plan for it.
8. **Export print-ready, not screen-ready:** high-res PDF with bleed marks + crop marks. Double-sided = two pages (front/back) in one PDF, correct orientation + bleed on both.
9. **Full-bleed only if the file has bleed AND the printer supports it** — otherwise design with a safe border instead of faking edge-to-edge.

## Content rules that ride along with size
10. **One clear headline -> visual hierarchy first.** It's read first; it must state the benefit/purpose instantly and lead the eye.
11. **Images at 300 DPI or don't use them.** Upscaled/blurry art ruins print; match image resolution to the px canvas above.
12. **Body copy concise; one prominent CTA** ("Call now", "Scan for discount"); contact block legible (readable font size — accessibility-first); brand logo/colors/type consistent.
13. **Protect negative space.** White space is a design element, not wasted area — it's what makes the headline and CTA read.

## Know the artifact
14. **Flyer vs leaflet vs booklet:** flyer = single page (often one-sided); pamphlet/brochure/leaflet = unbound folded panels; booklet = bound multi-page. Pick the artifact to match how much info you actually have before picking a size.

## Build checklist (tick while setting up a print piece)
- [ ] Size chosen from distribution method + info density, not by default
- [ ] Canvas in px @ 300 DPI matching the target physical size
- [ ] Bleed ≥0.125 in on all four sides (backgrounds/images overshoot the trim)
- [ ] All critical text/logos inside the safe area (0.125–0.25 in from trim)
- [ ] One headline + one prominent CTA; copy trimmed to the format
- [ ] All raster images are 300 DPI (no upscaling)
- [ ] Export = high-res PDF with crop + bleed marks (front/back as 2 pages if double-sided)
