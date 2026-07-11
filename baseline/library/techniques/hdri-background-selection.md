---
technique: HDRI / background selection (avoid unwanted content)
section: assets
source: owner-directive 2026-06-18 + PAIN (sky-with-houses)
tags: [hdri, background, sky, three.js, webgl, asset-selection, verification]
apply-when: a build needs an environment background/sky — whether the USER asked for one OR you decided one is needed
---

# HDRI / background selection — applied rules

**Trigger:** a site needs an environment / background / sky. Fires both when the user asks AND when *you*
decide a background is warranted.

**Core failure to avoid (real PAIN):** asked for a plain **sky**, an urban/city HDRI was used and
**buildings were visible** on screen. An HDRI is a 360° photo — its filename and thumbnail can lie about
what is actually in the rendered frame.

## Rules (each = a build decision)
1. **Parse intent precisely.** "Sky" = a clear/cloudy sky dome with **no ground clutter** (buildings,
   trees, roads, horizon objects) unless explicitly wanted. Also capture mood/time-of-day: clear midday /
   golden / blue hour / overcast / night-starfield.
2. **Filter by category/tags, not by name.** On Poly Haven use the `skies` category and **exclude**
   `urban`/`city`/`interior` unless wanted: `api.polyhaven.com/assets?type=hdris&categories=skies` (CC0).
3. **Check the LOWER hemisphere.** Even a "sky" HDRI usually has a ground half full of buildings/trees.
   For a pure sky pick ONE of: (a) a pure-sky HDRI (ground-free lower half), (b) show only the **upper
   hemisphere** (constrain camera pitch / raise the horizon), (c) **mask/fog the horizon** so the ground
   never renders.
4. **Control the FINAL framing.** What matters is what the user SEES — drive it with camera FOV, horizon
   line, fog, and dome mapping. Content that's in the file but never on screen is fine; content that
   creeps into frame is the bug.
5. **VERIFY before accepting (the PAIN lesson).** Render the HDRI in the *actual* scene at the *actual*
   framing and scan every visible region for unwanted objects. Do NOT trust the filename or one thumbnail.
6. **Adaptive default.** When YOU decide a background is needed, pick the cleanest option matching the
   brief's mood, then propose it to the owner **with a preview of the real framing** + which HDRI + why +
   license — let the owner approve.

## Build checklist
- [ ] Intent parsed: what kind of sky/background, and what must NOT appear (buildings/trees/etc.)?
- [ ] Picked by category/tags (`skies`, not `urban`); license checked (Poly Haven = CC0)?
- [ ] Lower hemisphere handled (pure-sky file / upper-hemisphere only / horizon masked/fogged)?
- [ ] Rendered in the REAL scene framing and visually checked for unwanted content?
- [ ] Proposed to the owner with a preview, not just a name?

> Ties to our experience: this IS a PAIN incident — "wanted sky, got houses." Same root as our other
> verification gaps (trusting a name/thumbnail instead of checking what's actually on screen). Pairs with
> [asset-sources.md](../asset-sources.md) (search → propose → approve).
