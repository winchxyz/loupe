---
technique: CC0 3D assets via Poly Haven (HDRI / PBR texture / model pull)
section: assets-3d
source: Poly Haven API (api.polyhaven.com)
tags: [3d, webgl, threejs, hdri, pbr-textures, cc0]
apply-when: a WebGL/Three.js scene needs environment lighting, a seamless PBR material, or a ready 3D model and you want license-clean, no-attribution assets
---

# CC0 3D assets via Poly Haven — applied rules

Poly Haven is the default 3D-asset source for this pipeline: 973 HDRIs, 769 PBR
texture sets, 456 models, all **CC0** (public domain, commercial-OK, zero
attribution). No API key, no observed rate limit. When a scene needs lighting,
a material, or a prop, pull from here before reaching for anything with a
license string. Full taxonomy + slugs live in `snippets/poly-haven/catalog.md`;
the exact query commands in `snippets/poly-haven/query-howto.md`.

## Choose the asset, then choose the smallest size that holds up

- **Lighting a scene → pull an HDRI, not a sky image.** One equirectangular `.hdr`
  drives image-based lighting, reflections AND the visible backdrop in one map.
  Use **1k or 2k `.hdr` for web IBL** — 4k/8k/16k exist but the lighting integral
  barely changes and the file balloons. Reserve 4k+ for a hero close-up only.
- **Visible background behind a 3D hero → use a `*_puresky` slug** (e.g.
  `kloofendal_48d_partly_cloudy_puresky`). The "puresky" edits remove ground
  clutter and clean the horizon, so the env map reads as a real sky backdrop
  rather than a captured location.
- **Neutral product / studio look → `?type=hdris&categories=studio`** (96 assets;
  `brown_photostudio_01`…`07` are soft and neutral). Don't fake studio lighting
  with point lights when a studio HDRI gives correct soft shadows for free.
- **Surface material → pull a texture set and wire the full PBR stack:**
  `Diffuse` + `nor_gl` (use the OpenGL normal, NOT `nor_dx`, for three.js/WebGL)
  + `Rough` + `AO` + `Displacement`, or the packed `arm` (AO/Rough/Metal in RGB)
  to cut three texture fetches to one. JPG for web.
- **Ready prop → pull the `gltf` model variant (1k/2k baked maps)**, not fbx/blend,
  for direct `GLTFLoader` use.

## Pick by lighting condition, not by what's "in" the frame

The HDRI taxonomy is organized around light, which is what actually changes a
render: contrast (`low/high contrast` = soft vs hard shadows), time of day
(`midday`, `sunrise-sunset`, `night`), sky cover (`clear`, `partly cloudy`,
`overcast`). Choose the *mood* first (golden-hour warmth? overcast soft-box?
moody night?), filter to that category, then pick a slug. Each `/info/<slug>`
carries `whitebalance` (K) and `evs_cap` (dynamic range) if you need to match
an existing scene's color temperature.

## Resolve URLs through the API — don't hand-build paths

Always get download URLs from `/files/<slug>` (map-type → resolution → format →
`{url, md5, size}`). The folder casing varies (`Diffuse` key vs `diff` in the
filename), so constructing paths by hand breaks. Catalog JSON is large: pipe
every query through `node`/`grep` to pull only the slugs/URLs you need — never
load the whole catalog into reasoning.

## Avoid

- Don't ship 4k/8k HDRIs or textures to the web "to be safe" — load weight kills it.
- Don't grab a flat sky JPG for lighting — you lose IBL, reflections, and dynamic range.
- Don't use `nor_dx` normals in WebGL (green channel is flipped vs OpenGL).
- Don't assume attribution is needed and clutter the UI with credits — CC0 requires none.

> Ties to our experience: 02b is a cinematic Three.js/WebGL scene whose water optics
> use SSS + Beer-Lambert + GGX — exactly the kind of physically-based shading that
> wants a real HDRI for environment reflections and correct light color, and our perf
> tiers map straight onto the 1k/2k/4k resolution choice (low tier → 1k IBL, high tier → 2k/4k).

## Build checklist
- [ ] Lighting need? Pull a 1k–2k `.hdr` HDRI for IBL before adding manual lights.
- [ ] Visible sky? Use a `*_puresky` slug; studio look → `categories=studio`.
- [ ] Filter HDRIs by lighting condition (contrast / time of day / sky cover), not subject.
- [ ] Texture set wired with full PBR maps (`nor_gl`, not `nor_dx`); consider packed `arm`.
- [ ] Models pulled as `gltf` (1k/2k) for direct GLTFLoader use.
- [ ] URLs resolved via `/files/<slug>`, not hand-constructed.
- [ ] Resolution matches the perf tier — smallest that holds up; 4k+ only for hero close-ups.
