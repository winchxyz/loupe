# Attribution

Loupe's own code is MIT-licensed (see [LICENSE](LICENSE)). This file credits the third-party
work the project builds on — both content that ships in this repository and upstream projects
used as local data during development.

## Content that ships in this repository

### `baseline/library/references/` — the style-reference corpus (~1,289 entries)
Each entry is an **original written analysis** of a publicly viewable website's visual system
(palette roles, type scale, component anatomy, do/don'ts) plus **extracted design tokens**
(CSS custom properties / W3C design-tokens JSON). No page markup, stylesheets, copy, or assets
are reproduced; site and brand names appear only to identify the subject of the analysis, and
third-party contact details found in footers have been redacted. These analyses are provided
for study and as grounding data for generation.

**Takedown:** if you own one of the analyzed sites and want its entry removed, open a GitHub
issue on this repository and it will be taken down.

### `baseline/library/snippets/`
Runnable technique snippets with per-file provenance headers. The families that **ship** in this
repository and in release builds, with their licenses:
- **three.js examples** (`threejs-examples/`) — © three.js contributors, [MIT](https://github.com/mrdoob/three.js/blob/master/LICENSE).
  Individual example authors are credited in each file header.
- **Poly Haven API examples** (`poly-haven/`) — [CC0](https://polyhaven.com/license). (At runtime the
  app can fetch Poly Haven HDRIs, which are CC0.)
- **shadcn/ui** (`shadcn/`) — [MIT](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).
- **Magic UI** (`magic-ui/`) — [MIT](https://github.com/magicuidesign/magicui/blob/main/LICENSE).
- **Hover.css** (`hover-css/`) — [MIT](https://github.com/IanLunn/Hover/blob/master/LICENSE).
- **Animista** (`animista/`) — FreeBSD-style license (free for personal + commercial use with attribution).
- **Aceternity UI** (`aceternity/`) — free for personal and commercial use; the catalog itself may
  not be resold. Loupe ships a small set of components as generation grounding, not the catalog.
- **`our-builds/`** — original snippets authored for this project.

Snippet families whose source material had **no or unclear redistribution license** (Codrops,
CSS-Tricks, olivierlarose, React Bits [MIT + Commons Clause], CodePen-derived picks, and the
`system-design-space` reference set) are **excluded** from both the public repository and release
builds (enforced identically in `.gitignore` and `app/package.json` → `build.extraResources`).

### `baseline/library/techniques/`, `patterns/`, `recipes/`, `standards/`
Original distilled write-ups (methodology, layout playbooks, quality rubrics) authored for this
project. Where a technique was learned from a public article, the write-up is a paraphrased
distillation with a source link; full-text copies of source articles are **not** distributed.

## Upstream projects imported as local data (not redistributed here)

The taste layer of the development pipeline imports these projects' content as data on the
developer's machine. They are credited because the methodology owes them a debt, even where
their files do not ship in this repository:

- **open-design** — Apache-2.0. Skill corpus and DESIGN.md examples.
- **taste-skill** (Leonxlnx/taste-skill) — MIT. Design-taste skills (import manifest with
  content hashes: `baseline/skills-lock.json`).
- **impeccable** — Apache-2.0. Post-generation design lint.
- **ui-ux-pro-max** — MIT. UI/UX reference data.
- **designmd-supply** — MIT. The DESIGN.md-spec harvest prompt is adapted from this project.

## Application dependencies

The desktop app is built on [Electron](https://www.electronjs.org/), [React](https://react.dev/),
[Vite](https://vite.dev/), and the [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview)
(@anthropic-ai/claude-agent-sdk). Bundled fonts are [Inter](https://rsms.me/inter/),
[JetBrains Mono](https://www.jetbrains.com/lp/mono/), and [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
(all SIL OFL 1.1) via Fontsource; icons are [Phosphor Icons](https://phosphoricons.com/) (MIT). The
full OFL 1.1 text and per-font/icon copyright notices are in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
Full dependency licenses are resolvable from `app/package.json`.
