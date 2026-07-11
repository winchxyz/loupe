---
technique: Modern font selection (named recommendations + pairing)
section: typography
source: figma-resource-library/modern-fonts.md
tags: [typography, fonts, google-fonts, pairing, ui, branding]
apply-when: choosing typefaces for a site/UI — body, headlines, UI labels, code, or a display/luxury accent
---

# Modern fonts — named picks + pairing decisions

Core idea: "modern" = clean lines, even strokes, open letterforms, thin/high-contrast serifs. Pick by ROLE (UI / body / display / mono), not by vibe. Every font below is a free Google/OFL family, so default to these before reaching for anything exotic. Don't mix more than 2–3 families; let weight + size do the hierarchy work.

## Pick by role (do X, choose Y)

1. UI / app interface — choose **Inter**, **Plus Jakarta Sans**, **Manrope**, or **DM Sans**. All are screen-tuned with open letterforms; Inter is the safe default for dense UI, DM Sans for low-contrast calm, Manrope/Plus Jakarta for a friendlier geometric feel. Avoid display or high-contrast serifs in tight UI chrome.
2. Body / long-form reading — choose a humanist sans (**Open Sans**, **Lato**, **Work Sans**, **Nunito Sans**) or a screen-tuned serif (**Roboto Serif**, **Domine**, **Source-style serif**). Per the article: sans usually wins for body legibility; reach for a serif only when the content is editorial/long-form. Avoid high-contrast display serifs at body size — thin strokes drop out.
3. Headlines / editorial impact — choose a high-contrast serif: **Playfair Display**, **Bodoni Moda**, or **Instrument Serif**. Use only at large sizes; never set body copy in these. **Forum** when you want Roman-inscription gravitas (classic/formal).
4. Luxury / high-end branding — choose **Bodoni Moda** or **Playfair Display** for the high-contrast "magazine" look; pair with generous white space (see below).
5. Geometric brand sans — choose **Montserrat**, **Poppins**, or **Plus Jakarta Sans** for logos/marketing headers. Clean geometric forms read as "modern brand." Watch Poppins/Montserrat at small sizes — their geometry hurts legibility in body.
6. Code / technical / sci-fi mono — choose **IBM Plex Mono** or **Anonymous Pro** for readable code; **Space Mono** for retro-futuristic / tech-sci-fi display blocks (not for long reading); **Xanh Mono** for a monospace-with-serif character accent.
7. Accessibility-first — choose **Inclusive Sans** (open letterforms, optimized spacing) or **Atkinson-style** humanist sans when readability for all users is the explicit goal.
8. Display / personality accent — **Chonburi** or **Corben** for retro/playful display; **Quintessential** (script) only for invitations/logos, never body. One display accent per layout, max.

## Pairing decisions
- Default pairing recipe: high-contrast serif headline + neutral sans body, e.g. **Playfair Display + Inter**, or **Bodoni Moda + DM Sans**. The contrast in stroke modulation is what makes the pair read as intentional.
- All-sans pairing: one geometric sans for headers (**Montserrat** / **Poppins**) + one humanist sans for body (**Open Sans** / **Lato**). Differentiate by weight and size, not by adding a third family.
- Mono accent: keep code/labels in **IBM Plex Mono** while the rest of the UI stays in **Inter** — a deliberate mono signals "technical" without breaking harmony.
- Test the pair before committing; harmony between primary + secondary is a judgment call, not a formula.

## Type-setting rules (apply to whatever you picked)
- Establish hierarchy with varied **weight + size**, not extra fonts — guide the eye top-down.
- Tune **leading and kerning** for the chosen face; defaults rarely fit display serifs or dense UI.
- Give type **white space** — let headlines and key text breathe; negative space is part of the hierarchy.
- Match the face to **context and audience** — editorial vs app vs marketing changes the right pick.

## Build checklist
- [ ] Each text role (UI / body / headline / mono) mapped to a specific named family, not a vibe?
- [ ] Total families ≤ 2–3, with hierarchy carried by weight + size?
- [ ] No high-contrast display serif used at body size (thin strokes survive only large)?
- [ ] Leading/kerning tuned for the chosen face, not left at default?
- [ ] Body face verified for legibility at its real rendered size (sans preferred for body)?
- [ ] Headline + body pairing actually previewed together before locking?
