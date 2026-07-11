<!-- source: https://api.polyhaven.com · author/owner: Poly Haven · license: CC0 · saved: 2026-06-18 -->

# Poly Haven catalog (CC0) — snapshot 2026-06-18

Poly Haven is a CC0 (public-domain) asset library. Everything below is free to
use commercially, no attribution required, no key, no rate limit observed.
API base: `https://api.polyhaven.com` · downloads served from `dl.polyhaven.org`.

## Counts per type (`/assets?type=<t>`)

| type | count | what it is |
|------|-------|-----------|
| `hdris`    | **973** | equirectangular HDRI environment maps (`.hdr` / `.exr`) — image-based lighting + reflections + sky backdrops |
| `textures` | **769** | seamless PBR material sets (diffuse, normal, rough, displacement, AO, ARM, gltf) |
| `models`   | **456** | PBR 3D models (gltf / fbx / usd / blend + baked maps) |

`/types` → `["hdris","textures","models"]`. Catalog JSON is large — always pipe
through `node`/`grep`, never load whole. See `query-howto.md`.

---

## HDRI taxonomy (`/categories/hdris` — 24 categories)

Lighting condition is the primary axis (more useful than "what's in frame"):

- **Light source:** `natural light` (800) · `artificial light` (224)
- **Indoor / outdoor:** `outdoor` (687) · `indoor` (295)
- **Contrast (shadow hardness):** `low contrast` (362) · `high contrast` (350) · `medium contrast` (270)
- **Time of day:** `morning-afternoon` (322) · `sunrise-sunset` (217) · `midday` (201) · `night` (59)
- **Sky cover:** `partly cloudy` (319) · `clear` (232) · `overcast` (130)
- **Backdrop-only skies:** `skies` (293) · `pure skies` (59) — `puresky` variants are sky-edited (clean horizon, no ground clutter), ideal as a visible background behind a 3D hero
- **Setting:** `nature` (519) · `urban` (488) · `studio` (96)

### Notable slugs to reach for

- **Studio / product (neutral, soft):** `brown_photostudio_01`…`07`, `blue_photo_studio`, `blocky_photo_studio`, `studio_small_03` family. Filter: `?type=hdris&categories=studio` (96 assets).
- **Clean sky backdrop (web hero behind a model):** `kloofendal_48d_partly_cloudy_puresky` (the canonical bright midday puresky), plus any `*_puresky` slug. Filter: `?type=hdris&categories=pure%20skies`.
- **Golden hour / warm:** `?type=hdris&categories=sunrise-sunset` (217) — e.g. `arboretum`, `aft_lounge`, `altanka`.
- **Night / moody:** `?type=hdris&categories=night` (59) — e.g. `blaubeuren_night`, `blue_lagoon_night`.

HDRI resolutions: `1k, 2k, 4k, 8k, 16k`. For web IBL use **1k or 2k `.hdr`** —
4k+ is huge and the lighting integral barely changes. Each asset carries
`whitebalance` (K) and `evs_cap` (dynamic range) in `/info/<slug>`.

---

## Textures taxonomy (`/categories/textures` — 55 categories)

Surface type, then context:

- **Where:** `outdoor` (480) · `indoor` (73) · `man made` (409) · `natural` (160)
- **Architectural surface:** `floor` (255) · `wall` (233) · `road` (34) · `roofing` (23)
- **Material families:** `plaster-concrete` (125) · `rock` (118) · `brick` (104) · `concrete` (78) · `wood` (76) · `sand` (57) · `fabric` (43) · `cobblestone` (36) · `metal` (25) · `bark` (23)
- **Cleanliness:** `dirty` (113) · `clean` (49)
- **Fabric sub-types:** `cotton`, `denim`, `wool`, `leather`, `knitted`, `velvet`, `satin`, `corduroy`, `suede`… (1–7 each)

Each texture ships a full PBR map set: `Diffuse`, `nor_dx` / `nor_gl`
(DirectX/OpenGL normal — pick `nor_gl` for three.js/WebGL), `Rough`, `AO`,
`Displacement`, `arm` (packed AO+Rough+Metal), plus `gltf` and `blend` bundles.
Formats: `jpg` (web), `png`, `exr`. Resolutions `1k`–`8k`.

---

## Models taxonomy (`/categories/models` — 45 categories)

- **Top buckets:** `props` (149) · `nature` (109) · `furniture` (79) · `industrial` (70) · `decorative` (70) · `containers` (59) · `plants` (57) · `tools` (42) · `rocks` (37) · `seating` (33) · `lighting` (26) · `structures` (26)
- **Smaller:** `trees`, `electronics`, `food`, `appliances`, `shelves`, `vases`, `flowers`, `office`, `ships`, `books`…
- **`rigged` (15):** models with armatures (animatable).

Model formats per asset: `gltf` (4k/2k/1k baked-map variants), `fbx`, `usd`,
`blend`, plus the raw maps (`Diffuse`, `nor_gl`, `Rough`, `Metal`, `arm`). For
three.js load the **gltf** variant at 1k/2k.

---

## "collection:" pseudo-categories

Across all types you'll see `collection: <name>` (the_shed, namaqualand,
verdant_trail, smugglers_cove, project_lighthouse, hidden_alley, pine_forest,
moon). These are curated, art-directed scene packs — assets photographed/modeled
together so they composite consistently. Use a whole collection when you want a
coherent set rather than one-off pieces.

## License note

Every asset is **CC0 1.0** (public domain dedication) — no attribution, no
share-alike, commercial OK. Crediting Poly Haven is appreciated but not required.
This is why it's the safe default 3D-asset source for the pipeline.
