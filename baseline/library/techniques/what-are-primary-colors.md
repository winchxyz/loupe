---
technique: Primary colors in digital design (RGB vs CMYK, gamut, accessibility)
section: color-theory
source: figma-resource-library/what-are-primary-colors.md
tags: [color, palette, rgb, accessibility, gamut, branding]
apply-when: choosing a brand/accent color, defining a palette, or setting color tokens for a digital screen
---

# Primary colors — applied build decisions

Core idea: on screens you mix LIGHT (additive RGB), not paint (subtractive RYB/CMYK). Design in RGB-native spaces, pick a primary that carries the brand's emotion, and never let color be the only carrier of meaning. The childhood RYB wheel is a mental model, not the production model.

## Rules (each = a build decision)
1. Design additive, not subtractive — screens build color by ADDING red/green/blue light from black up to white (all three maxed = white). Author your palette as RGB/hex for any digital target; reserve CMYK thinking strictly for print exports. Don't reason about on-screen mixing as if blending pigment.
2. Pick the primary for the EMOTION you want, then commit hard. Red = urgency/excitement/appetite (DoorDash); yellow = energy/youth/optimism (Snapchat); blue = trust/reliability/communication (Facebook). Choose the hue whose symbolism matches the product's job, then dominate logo + UI + accents with it.
3. Saturate to differentiate. A vivid, saturated take on a common hue separates you from category defaults (Facebook's vivid blue vs "boring legacy tech blues"). When you land on a primary, push chroma deliberately rather than defaulting to a safe mid-tone everyone else uses.
4. Choose ONE dominant primary, build the rest of the wheel off it. Secondary (orange/green/purple) and tertiary hues derive from primaries — let supporting colors and accents descend from the chosen primary instead of stacking multiple competing "brand colors."
5. Set an explicit color profile, don't ship sRGB-by-accident. Pick sRGB for broad/safe compatibility or Display P3 when you want wide-gamut vibrancy on capable screens — and know which one the file/CSS is actually in. P3 colors can shift or clip on sRGB-only displays.
6. Design for gamut variance. The same hex renders differently across devices because each has its own gamut. Verify your primary and key accents on more than one display; assume a phone, a wide-gamut laptop, and a cheap monitor will not agree.
7. Never encode meaning in color alone. ~Millions of users have color-vision deficiency — pair every color-coded signal (state, error, category, link) with a second channel: icon, label, shape, underline, or position. Treat color as reinforcement, not the sole carrier.
8. Tokenize primaries as variables, not scattered literals. Define the primary (and its profile) once as a variable/token and reference it everywhere (fill, stroke, background), so a single edit re-themes the whole system and values can't drift between components.

## Build checklist (use when setting a palette)
- [ ] Primary hue chosen for its emotional/brand fit, not taste-by-default?
- [ ] Palette authored in RGB/hex (CMYK only if there's a print deliverable)?
- [ ] Color profile (sRGB vs Display P3) explicitly decided and consistent?
- [ ] Primary + key accents eyeballed on at least two different displays (gamut check)?
- [ ] Every color-coded meaning backed by a non-color channel (icon/label/shape)?
- [ ] Primary defined as a single variable/token, referenced (not hardcoded) across fills/strokes/bg?
