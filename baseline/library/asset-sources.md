---
id: asset-sources
title: Asset sources (3D / HDRI / textures) — registry + sourcing protocol
kind: standard
one-line: Where deZign-pro gets 3D / HDRI / texture / icon assets — the auto-fetch (HDRI) vs propose-only protocol.
when-to-use: any build needing a 3D model, HDRI sky / IBL, texture, or icon the isolated builder cannot download itself.
tags: [assets, 3d, hdri, webgl, ibl, sky, textures, icons, poly-haven, sketchfab, sourcing]
source: owner-set 2026-06-18; HDRI host auto-fetch added 2026-07-04
---

# Asset sources (3D / HDRI / textures) — registry + sourcing protocol

Where deZign-pro gets visual assets. These are **stores of files**, not techniques — we do NOT
bulk-download them. We pull **per need**, check the license, and (for CC-BY) credit the author.

## ✅ HDRI sky / IBL = HOST AUTO-FETCH (no approval, no waiting)

A photoreal WebGL scene needs a real **HDRI environment** for image-based lighting — that is what stops
WebGL looking flat/plastic. Poly Haven HDRIs are **CC0 and keyless**, so the HOST fetches them for you
automatically. Do NOT propose-and-wait for a sky. Convention (mirrors `<img data-gen>` for photos):

- Emit ONE anchor per scene: `<div data-hdri="clear blue alpine mountain sky at dawn" data-hdri-res="2k" id="scene-hero"></div>`
  — the `data-hdri` value is a concrete SKY / ENVIRONMENT subject (3–7 words, mood + time-of-day, never a
  brand name; it is a Poly Haven search query). Give **each scene a UNIQUE `id`** (in a multi-page build,
  two pages sharing an id collide on the same `assets/hdri/<id>.hdr`).
- In your Three.js, load `assets/hdri/<that-id>.hdr` with `RGBELoader` as `scene.environment`, behind an
  **onerror** that keeps a procedural sky you built FIRST (the HDRI is an UPGRADE, never a dependency).
- The host matches the subject → a CC0 Poly Haven HDRI and writes the file into that exact path AFTER your
  turn. You download nothing and you never wait for approval.

## 🔁 Sourcing protocol for everything ELSE (models / textures / icons — propose-only)

When the brief calls for a **3D model, texture, or icon** (NOT an HDRI sky) that one
of these libraries could supply:

1. **Search** the matching source(s) below for the needed asset.
2. **Propose** 2–3 candidates to the owner — name · author · **license** · preview/link — don't just grab one.
3. Owner **approves** a pick.
4. **Download** it into the site's `assets/`, and if the license is **CC-BY**, add the required
   attribution (author + source) to the site's credits/README.
5. Never ship a paid/licensed asset the owner isn't cleared for.

This is part of the build workflow — treat "we need a 3D asset" as a trigger to consult this file,
the same way `INDEX.md` is consulted for techniques.

### Background / HDRI — the host handles the pick
HDRI skies are auto-fetched (see the top section): the host's matcher applies a sky-cleanliness bias
(prefers `skies`, penalizes urban / ground clutter) per
[techniques/hdri-background-selection.md](techniques/hdri-background-selection.md), since an HDRI named
"sky" often has buildings/trees in the ground half. Your job in the scene is to **control the horizon with
camera FOV + fog** so any lower-hemisphere clutter never enters frame. General rule for ALL assets:
**verify the actual rendered result, not the name/thumbnail.**

## Sources

| Source | URL | Best for | License | Access for the AI |
|--------|-----|----------|---------|-------------------|
| **Poly Pizza** | https://poly.pizza/ | **Low-poly / stylized** models (Google Poly archive + community). Great for playful, game-y, lightweight scenes. | Mostly **CC0** and **CC-BY** (per-model — CC-BY requires crediting the author). Verify each. | Web UI is JS. Working **API** at `api.poly.pizza/v1.1/search/<query>` — needs a **free API key**. **Policy (owner, 2026-06-18): request the key from EACH user at the point of need** — ask only when assets are actually being taken from Poly Pizza; do not store one globally. Until a key is provided, propose via web search / owner picks. |
| **Poly Haven** | https://polyhaven.com/ | **HDRIs**, PBR textures, scanned models — photoreal lighting/materials. (We already use HDRIs in 02b.) | **CC0** (all assets — no attribution required). | Public **API** `api.polyhaven.com` (no key). **HDRIs are HOST AUTO-FETCHED** — the AI just emits `<div data-hdri="sky subject" id>` (see the top section); the host fills `assets/hdri/<id>.hdr`. Textures/models: propose-only for now. |
| **Kenney** | https://kenney.nl/assets | Cohesive **game-asset packs** (low-poly kits, UI, audio). | **CC0**. | Packs download directly from the site. AI can pull specific packs on demand. |
| **Sketchfab** | https://sketchfab.com/ ( `/3d-models/popular` = reference feed) | Huge range incl. high-detail / rigged models. | **Per-model** (mixed: some free/CC, many paid/restricted). | Marketplace + JS + licensing → **owner-driven**: AI proposes by name/search; if AI can't pull it, it tells the owner to grab the licensed file there and drop it in. AI registers the source/credit. |
| **SVGRepo** (icons) | https://www.svgrepo.com/ | 500k+ **SVG icons / vectors**, searchable by style & pack. | **Mixed per-icon** — many CC0/MIT, some need attribution or restrict commercial. Verify each. | Search + direct `.svg` download. AI can often fetch a specific icon's SVG by URL; if blocked, owner grabs it. |

> Status 2026-06-18: Poly Pizza registered now (owner request). Poly Haven / Kenney / Sketchfab rows
> are pre-filled from known facts; their actual harvest into the library is part of "List A" / owner-driven.
