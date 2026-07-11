---
technique: CMYK color model — print vs. screen decisions
section: color-theory
source: figma-resource-library/what-is-cmyk.md
tags: [color, print, rgb, cmyk, brand-consistency, export]
apply-when: a design must leave the screen (business cards, posters, packaging, swag) or a brand color has to match across web and print
---

# CMYK — applied build decisions

Core idea: CMYK is a *subtractive* four-channel model (Cyan, Magenta, Yellow, Key/black) for ink on physical material; RGB is *additive* (red/green/blue light) for screens. The gamuts differ, so a color that's correct on screen is not automatically correct in print. Decide the destination first, then the model.

## Rules (each = a build decision)
1. Pick the model from the OUTPUT, not the tool. Anything that lands on a screen → RGB/hex. Anything printed on paper, fabric, or an object → CMYK. Never hand a printer raw RGB hex and hope.
2. Treat the conversion as lossy. Going RGB → CMYK can shift hues (especially vivid blues, greens, neons) because the print gamut is smaller. Convert early, eyeball it, then fine-tune the shifted hues by hand — don't trust an automatic convert to preserve vibrancy.
3. Choose your black on purpose. "True black" = pure key only (C0 M0 Y0 K100) for small text and thin lines (stays crisp, no misregistration). "Rich black" ≈ C60 M60 Y60 K100 for large solid black fills (deeper, no washed-out grey). Using K-only on a big fill looks flat; using rich black under small text smears.
4. Build CMYK values channel-by-channel like a recipe. Layered C/M/Y make the hue, K adds depth/contrast. Example: C0 M50 Y100 K0 = bright orange. Reason about a print color as four ink loads, not as a screen hex.
5. Ship print files in a format that actually carries CMYK + vectors: PDF (broadest program support), AI, or EPS. Don't deliver print art as PNG/JPEG/screenshots — they default to RGB and rasterize.
6. Keep ONE source of truth for brand color across both worlds. Define the brand color, record both its RGB/hex and its CMYK build, and verify the printed swatch matches the screen before mass print — color consistency is what protects the brand, not the original hex alone.
7. Know when CMYK is mandatory: business cards, posters, billboards, stationery, swag (shirts/mugs/pens), flyers, brochures, product packaging, menus, banners. If the artifact is touchable, it's CMYK.

## Build checklist (use when a design heads to print)
- [ ] Output destination identified (screen → RGB, physical → CMYK) before choosing colors?
- [ ] RGB → CMYK conversion done early, with shifted hues hand-corrected (not left as-is)?
- [ ] Small black text/lines on true black (K100 only); large black fills on rich black?
- [ ] Deliverable is PDF / AI / EPS, not a flattened RGB raster?
- [ ] Brand color stored with BOTH hex and CMYK build, and a printed proof checked against screen?
