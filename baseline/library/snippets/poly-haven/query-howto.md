<!-- source: https://api.polyhaven.com · author/owner: Poly Haven · license: CC0 · saved: 2026-06-18 -->

# Poly Haven API — per-need pull path

No key, no rate limit observed. JSON only; downloads from `dl.polyhaven.org`.
Catalog responses are large — **never load whole JSON into reasoning; pipe
through `node`/`grep`** to extract just the slugs/URLs you need.

## 1. List slugs in a category (don't dump the whole catalog)

```bash
# slugs for studio HDRIs (one category filter)
curl -s "https://api.polyhaven.com/assets?type=hdris&categories=studio" \
  | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{console.log(Object.keys(JSON.parse(d)).join('\n'))})"
```

- `type` = `hdris` | `textures` | `models` (required)
- `categories=a,b` → AND filter (asset must have all). URL-encode spaces as `%20`.
- See available categories + counts: `/categories/<type>`.

## 2. Inspect one asset (metadata)

```bash
curl -s "https://api.polyhaven.com/info/kloofendal_48d_partly_cloudy_puresky"
# → name, authors, categories, tags, whitebalance, evs_cap, max_resolution, thumbnail_url
```

## 3. Get the actual download URLs (`/files/<slug>`)

```bash
curl -s "https://api.polyhaven.com/files/kloofendal_48d_partly_cloudy_puresky" \
  | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{console.log(JSON.parse(d).hdri['2k'].hdr.url)})"
```

Returns a nested tree keyed by **map type → resolution → format → {url, md5, size}**.

- **HDRI:** `hdri[<res>][hdr|exr].url` — res ∈ `1k,2k,4k,8k,16k`. Web IBL: **`2k` `.hdr`**.
  URL pattern: `https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/<slug>_2k.hdr`
- **Texture:** `Diffuse[<res>][jpg].url`, `nor_gl[...]`, `Rough[...]`, `Displacement[...]`, `AO[...]`, `arm[...]` (packed). Use **`nor_gl`** (OpenGL normals) for three.js/WebGL, not `nor_dx`.
- **Model:** `gltf[<res>].gltf.url` (4k/2k/1k baked variants) + `fbx`, `usd`, `blend`.

## 4. Direct download (only when you actually need the bytes)

```bash
curl -sL -o studio.hdr "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/brown_photostudio_01_2k.hdr"
```

## Rules of thumb

- Pull the **smallest resolution that holds up**: 1k–2k HDRI for IBL, 1k–2k texture/model for web. 4k+ only for hero close-ups.
- Prefer `*_puresky` HDRIs when the environment is a **visible** background.
- Resolve URLs via `/files` (don't hand-construct paths — the map-type folder casing varies, e.g. `diff` vs `Diffuse` key).
- It's CC0 — cache locally, no attribution obligation.
