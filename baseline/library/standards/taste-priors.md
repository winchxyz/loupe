# Taste Priors — what great sites actually do (quantitative)

> Distilled from **1288 curated style references** (`baseline/library/references/`, DTCG tokens +
> extracted palettes) by `app/scripts/distill-taste-priors.cjs`. Numbers are **medians unless noted**
> (p25/p75 shown as low/high where useful). These are PRIORS that raise the floor and name defaults —
> **not rules.** Your own composition/taste leads (CLAUDE.md); deviate freely with intent. When a brief
> or a per-site DESIGN.md says otherwise, that wins.

## Corpus-wide defaults (the floor)

**Palette** — 7–14 total colors (median 10);
a **5-step neutral ramp**; **1–5 chromatic accents**
(median 3) with **one vivid signature accent** (lead accent runs saturated, not washed-out).
Most-used accent hues: blue, red, orange, green. Include a near-max-contrast
pair (true dark ↔ true light) — never settle for muddy grey-on-grey.

**Type** — **2 font families** (p25–p75 2–3); a
**~1.248× modular scale** (major-third-ish) across **7–12 distinct sizes**,
from ~12px body up to a **72px hero (p75 101px — go big)**;
**wide weight range** (~300 spread, e.g. 400→700+). Line-height: **body ~1.38**,
**display ~1.05 (tight)**. Display font: **sans 63%** dominates, but **serif display is a
legit ~1/3** — a serif hero is a distinctive move, not a risk. Classic pairing split: sans+sans 47% · serif+serif 15% · serif+sans 12% · sans+serif 3%.

**Spacing** — snap to a **4px grid** (4px 47%, loose 31%, 8px 22%);
~11 steps; **generous section rhythm** (max spacing median 120px, p75 170px).

**Radius** — no single default: large 33% · pill 33% · sharp 16% · medium 10%.
**Pick ONE family and commit** — sharp is as valid as pill; mixing families is the tell of a weak system.

**Elevation** — **60% ship FLAT** (zero shadows). Flat + color/weight hierarchy beats drop-shadows;
reserve shadow for genuine floating UI. (SaaS/dark-tech use it more — see below.)

## Per-archetype divergence *(directional — heuristic tags from the summary, see caveat)*

Great sites are NOT one look. The measured splits — lean on the row matching the brief:

| archetype | n | colors | accents | hero | pairing | radius | flat% |
|---|---|---|---|---|---|---|---|
| **editorial** | 103 | 10 | 3 | 80px | serif+sans | large | 66% |
| **saas** | 320 | 12 | 4 | 72px | sans+sans | pill | 46% |
| **portfolio** | 239 | 8 | 2 | 76px | sans+sans | large | 73% |
| **commerce** | 140 | 8 | 1 | 70px | sans+sans | sharp | 77% |
| **darktech** | 87 | 13 | 4 | 64px | sans+sans | pill | 37% |
| **marketing** | 12 | 13 | 3 | 60px | sans+sans | pill | 83% |

Read-outs: **editorial** commits to a **serif-display + sans-body** pairing and the **biggest hero type** (~80px).
**commerce** is the most restrained — **~1 accent, sharp corners, 77% flat** — letting product imagery lead.
**darktech** is the most chromatic (13 colors, 4 accents) and most elevated (only 37% flat — glow/depth).
**saas** carries the widest palette + rounded, elevated UI. **portfolio** stays palette-lean + flat, image-led.

## Theme deltas *(clean tag)*

- **Light (n=871)** — the corpus default; **serif display peaks here** (36% serif vs dark).
- **Dark (n=281)** — leans **more sans** (sans 69%), **more pill radius** (38%), slightly fewer but punchier accents; mono display doubles.
- **Mixed (n=136)** — goes **biggest** (hero 80px) and **most generous** (max spacing 140px).

## How to use
- **Builder**: treat as defaults to beat or match — if you drift far (a 3-accent commerce site, a 200px hero, a shadow-heavy editorial), do it *on purpose*, not by accident.
- **Reviewer**: flag values that fall OUTSIDE the p25–p75 band with no rationale (e.g. 7 competing accents, a 22px "hero", a loose off-grid spacing set) as floor misses.

---
*Method: aggregated 1288 refs (0 token misses) from the curated corpus; medians/quartiles per slice.
**Caveat**: theme is a clean corpus tag; **archetype is a heuristic** keyword-match over each ref's summary —
387 refs fell to "other" (unclassified), so per-archetype rows are directional, not authoritative.
Re-run: `node app/scripts/distill-taste-priors.cjs`. Priors raise the floor; the model's ceiling (CLAUDE.md risk #4) stays — the honest metric is the owner's cold eye.*
