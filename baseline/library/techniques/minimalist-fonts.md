---
technique: Minimalist font selection (named recommendations)
section: typography
source: figma-resource-library/minimalist-fonts.md
tags: [typography, fonts, sans-serif, ui, branding, pairing]
apply-when: picking a typeface for a clean/minimalist site, UI, or wordmark and you want a safe, legible default
---

# Minimalist fonts — applied selection rules

Core idea: a minimalist typeface = clean lines, simple letterforms, no decorative embellishment — chosen for clarity, readability, and balanced proportions. Default to **sans serif** (monospace only for code-flavored UI). Let the typeface carry the design; don't reach for a "characterful" font when the layout already does the talking.

## Pick by role (named, with why)

### Screen UI / body text — tall x-height + large apertures = legible at small sizes
- **Inter** — purpose-built for screens; excels at body, nav, and small UI labels. The safe default for any interface. (Geist is the Swiss-flavored sibling — slightly more neutral/sophisticated for the same job.)
- **Roboto** — Google's workhorse; huge weight + language coverage. Reach for it when you need broad multilingual support out of the box.
- **Cantarell** — designed for screen clarity at small sizes; good body alternative when you want something less ubiquitous than Inter/Roboto.
- **Hanken Grotesk** — 19th-c. grotesque feel; versatile across UI, body, signage when you want a touch more warmth than Inter.
- **Open Sans / Lato / Work Sans / Karla** — neutral-friendly humanist sans; dependable body text that pairs with almost anything. Karla/Work Sans add a slightly condensed structure for denser layouts.

### Headlines / wordmarks — geometric structure reads as "designed"
- **Jost** (1920s geometric), **Geist** (Swiss), **Actor**, **Raleway** — clean geometric forms for confident headlines and logos.
- **Antonio**, **Fjalla One**, **Agdasima**, **Alumni Sans** — condensed/geometric; use when a headline must run wide or tall without losing impact (posters, billboards, big hero type).
- **Manrope / Poppins / Nunito** — friendlier rounded geometrics; choose for approachable consumer brands. Nunito's rounded terminals read soft; Poppins reads modern-friendly.

### Code / technical UI
- **Inconsolata** (monospace) — code listings, technical docs, terminal-flavored UI; humanist enough to also serve as body text.

### Long-form reading / editorial — the rare serif picks
- **Source Serif 4** — extended reading, long-form web content, editorial; moderate contrast, calligraphic hint.
- **Gowun Batang** — elegant serif for articles/academic/editorial when you want grace over neutrality.

### Multilingual / non-Latin first
- **Hind** (Devanagari+Latin), **Krub** (Thai+Latin), **Scheherazade New** (Arabic / Arabic-Latin bilingual), **Dongle** (Korean origin, rounded/playful). Pick the script-native face when content isn't Latin-only — don't force a Latin font to fake coverage.

## Pairing guidance
- **One family, many weights** beats two mismatched families. Most of these ship a full weight range — build hierarchy with weight + size, not a second typeface.
- If you must pair: a **geometric/condensed headline** (Jost, Antonio, Fjalla One) over a **neutral humanist body** (Inter, Lato, Open Sans) is the reliable combo.
- For an editorial feel, pair a **serif body** (Source Serif 4) with a **clean sans** headline, or vice versa — keep the contrast in role, not in noise.

## How to deploy minimalist type (build decisions)
1. Choose sizes/colors/contrast for legibility first — verify accessible contrast on every device, not just the design canvas.
2. Give type generous negative space; a clean layout amplifies the font — crowding kills the minimalist effect.
3. Build hierarchy with weight + size variation, not decoration — let the eye flow naturally.
4. Avoid drop shadows, outlines, gradients on text — they overcomplicate and cheapen minimalist type. Let the typeface carry it.
5. Preview at multiple resolutions and lighting — minimalist faces must stay crisp on retina, low-DPI, dark, and bright screens alike.

## Build checklist
- [ ] Body face is a screen-tuned sans (Inter/Roboto/Geist) with tall x-height — readable at the smallest size used?
- [ ] Hierarchy comes from weight + size in ONE family, not a second mismatched font?
- [ ] No text drop shadow / outline / gradient sneaking in to "decorate"?
- [ ] Contrast checked for accessibility on the actual target screens (dark + light)?
- [ ] If content is non-Latin, a script-native face is used rather than a Latin font faking coverage?
- [ ] Type previewed across resolutions/brightness, not just the design frame?
