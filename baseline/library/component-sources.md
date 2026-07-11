# Component sources (React / Tailwind UI) — registry + intake protocol

Where deZign-pro gets ready-made UI components & effects. Like the other registries, we do **not**
bulk-download — community registries are thousands of mixed-author, mixed-license components. We take
**specific** ones, clean them, file them with attribution, and (for reusable patterns) add a usage note.

## 🔁 Intake protocol

**Path A — owner-pasted (e.g. 21st.dev, logged in):**

1. Owner finds a component he likes and uses **"Copy code + demo"** (best — source + usage) or **"Copy
   prompt"** (AI-ready full context). Pastes it to the chat (with the component's **URL**).
2. The AI saves the raw code to `snippets/<source>/<name>.(tsx|jsx|css)` with a header comment:
   `// source: <url> · author: <name> · license: <license> · saved: <date>`.
3. If the component teaches a **reusable pattern** (not just a one-off), the AI also adds a short
   `techniques/<name>.md` note: what it does, key props/deps, when to use — linking the snippet.
4. Attribution preserved; nothing shipped that the license doesn't allow.

**Path B — AI-initiated (you decide a specific component/effect is needed):** during a build, if you (or
the user) need a specific UI component, animation, or effect one of these sources could supply →
**search** the right source → **propose** 2–3 candidates (name · author · license · preview/link) → owner
**approves** → integrate with attribution. Same shape as the asset protocol in
[asset-sources.md](asset-sources.md). **Verify it actually does what's intended in our real context —
don't trust the title/thumbnail** (cf. the HDRI sky-with-houses lesson).

## Sources

| Source | URL | What | License | Access for the AI |
|--------|-----|------|---------|-------------------|
| **21st.dev** | https://21st.dev/community/components | Huge **community** registry of React/Tailwind components & effects (shadcn-compatible). | **Per-component, mixed** (many authors) — check each. | Heavy JS SPA + login. **Owner-driven**: owner copies (code+demo / prompt) → AI files. A programmatic shadcn-registry pull (`/r/...`) MAY exist — to verify on the first component. |
| **shadcn/ui** | https://ui.shadcn.com/ | The base primitives most others extend. | **MIT** | Public registry (`ui.shadcn.com/r/<name>.json`) + GitHub → **AI pulls directly**. |
| **Magic UI** | https://magicui.design/ | Animated marketing/UI components on shadcn. | **MIT** | GitHub / registry → **AI pulls directly**. |
| **Aceternity UI** | https://ui.aceternity.com/ | Flashy animated hero/section components. | Check (mostly free/open). | Component pages + GitHub mirrors → AI pulls what's open. |
| **React Bits** | https://www.reactbits.dev/ | Animated React component snippets. | **MIT + Commons Clause** (use in your own sites/apps incl. commercial OK; can't resell/redistribute the components themselves) | GitHub `DavidHDev/react-bits` → **AI pulls directly**. Harvested: 12 in `snippets/react-bits/`, all 134 catalogued. |
| **CodePen** | https://codepen.io/ | One-off effects/snippets (CSS/JS/WebGL) from the whole community. | **Per-pen, mixed** — check each. | Huge + JS. **On-demand only**: when a specific effect is needed, search → propose specific pens → owner approves → AI grabs that pen's code. Never bulk. |
| **GreenSock (CodePen)** | https://codepen.io/GreenSock | Official **GSAP** demos (scroll, SplitText, Flip, physics, morph). | GreenSock demos. | Finite account → pull a **curated** set per-URL on demand. Prefer the official `gsap-*` skills for theory; pull pens for runnable examples. |

> Status 2026-06-18: 21st.dev registered now (owner request, owner-paste intake). shadcn/Magic UI/
> Aceternity/React Bits rows pre-filled; their pull is part of "List A".
