# Loupe — Feature Inventory

The full scope, surveyed from the real code. Every item is backed by real evidence in the codebase
(a file, a slash command, an IPC handler, or a mode) — nothing here is aspirational.

**One-line scope:** an Electron desktop app — an AI chat plus a live-preview design canvas — that
builds and edits real websites through a multi-agent swarm, lets you edit them by hand at Figma grade
on the live site, verifies every visual change, harvests references and assets from any site, fills
imagery, and runs on your choice of AI engine (Claude, BYOK keys, or your own CLI subscriptions), all
grounded in a bundled design-knowledge library.

> **Experimental features.** The default v0.1 surface is **Solo/Studio build + closed-loop editing**.
> The swarm (`/flow`, `/multiflow`), autonomous `/loop`, the reference browser, and asset harvesting
> live behind the **experimental-features toggle** in Settings. Items below marked *(experimental)*
> are gated that way.

---

## 1. Build & orchestration
- **Solo** — one fast build pass, grounded in the design library.
- **Studio** — thorough: one clarifying question → build → self-quality-check → fix flagged issues.
- **`/flow` — the Swarm** *(experimental)* — a planner maps the site; one builder agent per page builds them in parallel live on the canvas; a Reviewer judges; builders fix.
- **`/multiflow` — multi-AI Swarm** *(experimental)* — same, but different AI engines build different pages (assigned in Settings).
- **`/review`** *(experimental)* — standalone Reviewer pass over every page against a "striking" bar; builders fix flagged pages in parallel.
- **`/loop`** *(experimental)* — autonomous build → self-critique vs an ideal → revise until the bar; `i=`/`b=`/`$=`/`m=` limits (iterations/tokens/USD/minutes). **`/loopx`** = unbounded.
- **`/explore <thing>`** — several distinct variants on a scratch page without touching the live site; **`/apply`** promotes the picked one.
- **`/bake`** — write manual/picker edits into real CSS as clean source; **`/assemble`** — reverse: hand-arranged layout → clean semantic responsive code; **`/resetedits`** — discard manual edits.
- **`/responsive`** — mobile-first pass (desktop unchanged); **`/a11y`** — accessibility pass (semantic / contrast / alt / focus / ARIA), no visual change.
- **`/create <tech> <prompt>`** — a self-contained asset/section in webgl · three · gsap · shader · canvas · svg · p5 · lottie · css.
- **`/new` · `/open` · `/clear`**, a live **Build log** (narration + every tool call + line-by-line writes), **Swarm engine config** (Foundation engine + builder pool, round-robin or manual, per-page time cap), **per-page engine assignment**, a **loop judge model picker** (cross-vendor vision critic), a **mid-turn Ask**, a **message queue**, and the **experimental-features gate**.

## 2. Element picker & selection
DevTools-style **Select** (hover-highlight, shallow-first click) · shallow vs deep (Cmd/Ctrl, Enter drills) · two-way canvas↔Layers hover link · multi-select (Shift/Ctrl) · marquee box-select · breadcrumb/ancestor nav (Tab/Enter) · pick-through-overlays toggle · picked chips labelled by source file.

## 3. Direct-manipulation editing (Figma-grade, on the live site)
Move/drag (axis-lock, free) · resize (8 handles, aspect-lock, correct on rotated) · rotate (15° snap, angle label) · flip H/V · wheel scale / Alt+wheel rotate · numeric X/Y/W/H + rotation presets · snap & alignment guides + pixel measurements · arrow-key nudge (coalesced undo) · inline quick-edit popup ("Describe a change…") · double-click inline text edit. All persisted as clean CSS.

## 4. Auto layout & alignment
Auto Layout flexbox (direction / spacing / gap / wrap / clip) · 3×3 alignment grid · hug/fill/fixed sizing · align & distribute toolbar. Persisted as clean responsive CSS.

## 5. Inspector & inline properties (Edit tool)
Property inspector (typography / color / spacing / borders / radius, live preview) · font picker (search + Recently used / On this site / Google Fonts / installed PC fonts, live hover) · effects (gradient, box-shadow, blur, backdrop "Glass", mix-blend) · replace image/SVG · bind a color to a design token or save a new one.

## 6. Canvas, pages & layers
Pan (Hand / RMB / Space, host overlay) · zoom-to-cursor + fit · Canvas vs Page mode · per-page live/snapshot frames (drag to reposition) · Pages panel with snapshot thumbnails · preview tabs · reload · **`/popout`** window · **`/canvas`** background. **Layers**: recursive DOM tree (select / edit / hover / expand) · lock / hide / reorder · search.

## 7. Device & responsive preview
Real device widths (Desktop 1280 / Tablet 834 / Phone 390 — media queries fire) · all-devices side-by-side · landscape/portrait rotate · make-responsive / per-device adapt · theme preview + Auto dark/light (build the opposite-theme counterpart, verify contrast).

## 8. Design tokens, palette & moodboard
Design-tokens panel (edit a `:root` color → recolor everywhere per theme) · token/theme create · always-in-sync palette / design-system board (host-generated from real CSS, regenerated every writing turn + on undo/redo) · one-click moodboard (`moodboard.html`) · art-direction frames sorted first.

## 9. Draw tool
Pen / arrow / box marks in 4 colors + a note → send the composited marked-up screenshot to the assistant · undo/clear · wheel brush size · scoped Ctrl+Z/Y.

## 10. Verification & history (the closed loop)
Before/after snapshot + region pixel-diff after a visual-edit turn · verify banner (checking / visible / retrying / not-visible) · auto re-feed the rendered preview when a requested change produced no diff (zero-diff-by-design turns exempt) · unified undo/redo across manual edits **and** the assistant's file rewrites.

## 11. External references & harvesting *(experimental)*
Reference browser (open any real site: address bar / back / reload) · reference element picker (rect + computed styles + markup skeleton, multi-select, Parent) · in-guest action bar · **Adapt** a technique/structure into your site re-skinned to your tokens (never a pixel clone) · **Harvest assets** → `assets/` (img / video / poster / bg / SVG / WebGL still / gradient, host-side, no CORS) · SSRF guard + size/count caps.

## 12. Imagery (stock · AI-generated · 3D)
Smart stock fill (`data-gen`, Unsplash / Pexels + keyless CC0 Openverse) · relevance engine (tonal set, simplify ladder, domain anchoring) · vision-verify each photo · AI image generation (`data-gen-ai` via OpenAI gpt-image-1 / xAI Grok Imagine / OpenRouter 30+ models / subscription CLI) · honest-failure guard + stock fallback · aspect control · illustration / no-photos opt-out · imagery-medium ask gate · **3D HDRI harvester** (`data-hdri` → CC0 Poly Haven `.hdr`) · image keys + gen-model picker in Settings.

## 13. Assets
Drag an asset from the file tree onto the page to place it · import/replace image or SVG (deduped into `assets/`) · attach / drag-drop / paste into `assets/` (typed image / video / audio / font).

## 14. Engines & BYOK
- **Claude** (default, Agent SDK) — tier picker (Fable 5 / Sonnet 5 / Opus 4.8 / Sonnet 4.6 / Haiku 4.5) + custom model id + Anthropic API key + Claude Code sign-in.
- **BYOK** — OpenRouter / OpenAI / Gemini / xAI (build **or** judge; OpenAI/xAI also generate images), each with a real Test button and a full OpenAI-compatible tool-calling build loop.
- **CLI subscription bridges** — Codex · Grok · Copilot · MiMo as build engines (no API cost), with per-CLI model selection, dynamic per-user model lists, a status probe, and Connect.

## 15. Knowledge & grounding
A ~1,300-reference **style corpus** (aesthetic narrative + exact color/type tokens), field-weighted Unicode-aware retrieval, host-guaranteed injection + a `search_design_library` tool · a curated technique / recipe / pattern / standards library injected per build · **`/guide`** prompt-vocabulary cheatsheet · the builder is instructed to emit `data-gen` / `data-hdri` (the host fulfills them post-turn) · point Loupe at your **own** library folder.

## 16. Chat & app shell
Composer (state-adaptive placeholder) · **Stop** (`/stop`) · attach / drag / paste files · slash autocomplete (gate-aware) · **`/help`** · conversation switcher + New chat · Solo/Studio toggle · build-model label · jump-to-latest · session usage/cost bar + **`/tokens`** · collapse panels · theme toggle · Settings (Ctrl+,) · custom window controls.

## 17. Output & export
The active page as a pixel-exact **PNG / JPEG / vector-text PDF**, or just the selected element's region as a cropped PNG — instant, no agent.

---

## The 10 headliners

1. **Closed-loop visual editing** — pick any element, describe a change, and an automatic before/after diff verifies it actually changed (and re-feeds the rendered preview when it didn't).
2. **Figma-grade direct manipulation on live sites** — select, move, resize, rotate, snap, align, auto-layout, edit text/style by hand — persisted as clean responsive CSS.
3. **The Swarm (`/flow` & `/multiflow`)** *(experimental)* — a planner maps the site, a team of builders build every page in parallel live, a design Reviewer judges, builders fix the flagged ones — optionally a different AI per page.
4. **Bring your own engine** — Claude tiers, BYOK OpenRouter / OpenAI / Gemini / xAI, or your own Codex / Grok / Copilot / MiMo subscription CLIs as build engines.
5. **Reference browser** *(experimental)* — open any real site in-app, pick a section, then harvest its assets or adapt its technique into your project (re-skinned to your tokens, never a clone), SSRF-guarded.
6. **Smart imagery** — auto-fills placeholders with real licensed, relevance-ranked, vision-verified stock photos, bespoke AI-generated images, or CC0 3D HDRIs, with honest-failure fallbacks.
7. **Autonomous `/loop`** *(experimental)* — build → self-critique against an ideal (cross-vendor judge) → revise until the bar, bounded by iteration / token / dollar / minute budgets.
8. **Two-way round-trip** — hand-arrange on the canvas then `/assemble` into clean semantic responsive code, or `/bake` manual tweaks straight into real CSS.
9. **Live, always-in-sync design system** — an editable design-token panel + a palette board generated deterministically from the site's real CSS, plus one-click moodboards.
10. **Grounded** in a ~1,300-reference style corpus + technique library, host-guaranteed into every build.
