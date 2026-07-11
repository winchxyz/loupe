# library/ — deZign-pro knowledge base (manual distiller, condition C4)

The distilled technique library the workflow draws on when building sites. Everything
here is **transferred into the repo** — raw code, assets, screenshots, AND the extracted
techniques — so it survives across sessions and is usable offline (never a bare link).

## Structure

| Folder | What goes in |
|--------|--------------|
| `sources/<name>/` | the RAW harvested site: saved HTML, CSS, JS (incl. Three.js/shaders), fonts, images, plus `screens/` (desktop + mobile + scroll states) and `harvest.json` (url, date, http facts). The actual material, not a link. |
| `recipes/<name>.md` | a DESIGN.md-style recipe distilled from a source: palette, type, composition, motion, layout — measured/observed decisions + "when to use". |
| `techniques/<topic>.md` | reusable HOW-TOs extracted across sources & our own builds (e.g. WebGL time-of-day cross-fade, matte stacked-blur glass, perf tiers + dynamic resolution, sticky-pin responsive, scroll-journey structure, GSAP choreography). Each: the idea, the minimal code, gotchas, source(s). |
| `snippets/` | ready-to-drop code lifted/cleaned from sources or our sites. |
| `standards/` | `design-standards` (precedence arbiter) + the verification/build playbook distilled from PAIN.md themes. |
| `INDEX.md` | the searchable index — one row per source/recipe/technique with tags. **Consult before building.** |

## Harvest pipeline (per URL)

1. **Fetch** the page (Playwright/puppeteer + curl): save HTML, then pull every `<link rel=stylesheet>`, `<script src>`, font, image, Three.js/GLSL into `sources/<name>/`.
2. **Capture** screenshots (desktop, mobile, key scroll states) → `sources/<name>/screens/`.
3. **Distill** — read the saved CSS/JS, identify the reusable *приёмы* (the how/why), write `recipes/<name>.md` + add entries to the relevant `techniques/*.md`; lift clean code into `snippets/`.
4. **Index** — add rows to `INDEX.md` (tags, stack, source, when-to-use).
5. Load-bearing principles also go to long-term memory.

Caveat: bundled/minified SPA JS is saved as-is but may be only partly legible — in that case the technique is reconstructed from the rendered DOM + computed styles + screenshots (visual reads), and that's noted in the recipe.

## Also to harvest (not just incoming links)

- **Our own builds** (01/01b/02/02b TESQ): extract the methodology + techniques already invented (WebGL scene system, matte glass, nav-D, responsive pins, perf system, Docker→Railway) into `techniques/` + `recipes/`.
- **The installed ready stack** (open-design, taste-skill, impeccable, ui-ux-pro-max): organically curate the ~15–25 actually-useful pieces into `standards/` + `recipes/`.
