# Loupe — brand brief (Engineer Grid)  ·  copy into a Loupe OWN-property project as its DESIGN.md

> This is the LOCKED brand brief for Loupe's OWN sites (landing, marketing, docs). Copy it into the project's
> cwd as `DESIGN.md` so the (isolated) build agent builds on-brand. Full reference: `app/docs/DESIGN-LANGUAGE.md`.
> ONLY for Loupe properties — never impose this brand on a user's unrelated site.

## Direction (one line)
Loupe is a **precision instrument** for designing real sites. The brand = **"Engineer Grid"**: flat surfaces,
**hairlines instead of shadows**, monochrome INK, and ONE chromatic moment — a **prism** (blue/red/teal), worn as
a soft refraction by the lens-ring logo and as a thin gradient border on active/focus. Calm, exact, technical. The
opposite of glass / blur / aurora / gradient-blob / purple.

## Palette (use these hex exactly — one accent = INK; the prism is the ONLY color)
- Light: bg `#fafafa` · panel `#ffffff` · hairline `#ebebeb` · ink `#171717` · ink-2 `#404040` · muted `#737373` · chip `#f4f4f4`.
- Dark: bg `#0d0e10` · panel `#161719` · hairline `rgba(255,255,255,.09)` · ink `#ececee` · ink-2 `#b8b8bc` · muted `#85858c`.
- Prism (ONE moment only): `conic-gradient(from 0deg,#52aeff,#e5484d,#45dec5,#52aeff)`. Use as a **gradient border**
  (`linear-gradient(var(--panel),var(--panel)) padding-box, <prism> border-box; border:1px solid transparent`), the
  lens mark, focus rings, or ONE hero accent. NEVER a section fill, blob, or gradient across body text.
- The red `#FF0000` reticle at the lens centre is the one pure red. Echo it at most once elsewhere.

## Type
- **Inter** (Variable) — UI + display. Push to large, tight-tracked editorial sizes for headlines.
- **JetBrains Mono** — eyebrows, labels, values, file paths, the "HUD" metadata voice.
- Wordmark "Loupe" = Inter 600 (League Spartan is retired); body/display = Inter.

## Material + structure (this is what makes it on-brand, not slop)
- **Ground = flat `--bg`.** NO mesh, aurora, radial glow, or backdrop blur. Ever.
- **Depth = hairlines only** (`.5px`/`1px` solid the hairline color). NO drop-shadows, NO specular, NO glassmorphism.
- **Structure = a visible ruled grid.** Divide sections with hairline rules, not cards-with-shadows. Strict, visible alignment.
- **Radii small:** 6px (10px large). Not bubbly.
- **Mark motif:** the Loupe lens ring (pastel full-colour tier at hero sizes), used large as a hero/section device.
- **Motion:** calm and exact (an instrument). No floaty parallax-blob energy. Motion plays for everyone (no reduced-motion gate).

## Hard DON'Ts (these are the exact slop tells to avoid)
Purple `#b880ff` (retired OLD identity) · glass / backdrop-blur / aurora / mesh / radial glow · drop-shadows for depth ·
gradient-blob hero · big rounded bubbly cards · rainbow/multi-accent · em/en dashes in reader-facing copy.

## Assets available in the project (if copied in)
The lens mark lives in `app/brand/` (`loupe-mark.svg` pastel · `loupe-mark-dark.svg` · `loupe-mark-mono.svg` ink ·
`loupe-favicon.svg` tiny tier · `loupe-app-icon.svg` night tile); the lockup construction is in
`brand-loupe/Loupe-logo-construction.html` (mark = cap height, baseline, gap 0.25X ≈ 0.10em). Reuse, don't redraw.
