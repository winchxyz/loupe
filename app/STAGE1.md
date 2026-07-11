# deZign-pro — Stage 1 (the app)

Local Electron app: **chat (left) + live preview (right) + closed-loop visual editing.**
Gate cleared 5/5 on 2026-06-19 (see `baseline/pilot-b/RESULT.md`). The hardened picker from the
capture spike (`baseline/pilot-b/picker.js`, copied to `app/shared/picker.js`) is the app's picker.

## Stack
- **Electron** shell (embedded Chromium) — so the preview `<webview>` hosts BOTH our same-origin
  generated site (edit loop) and external real sites (reference/asset pick, Stage 1.5).
- **Vite + React** renderer (the chat + preview UI). JS now; TS later.
- **Node + Claude Agent SDK** daemon (streaming, tool events, image input) — increment 2.

## Run (on the owner's machine — Electron opens a GUI window)
```
cd app
npm install        # downloads Electron (~big) on first run
npm start          # vite dev server + electron window
```

## Increments (each ends runnable)
1. **Shell** — two-pane window: chat (local echo) + preview `<webview>` with a URL bar. ← current
2. **Daemon + Agent SDK** — chat talks to a Node daemon running the Agent SDK; streamed replies +
   tool events; the daemon edits files in a project folder. Auth via the owner's Claude subscription.
3. **Preview + HMR** — serve the generated-site folder via Vite, load in the webview, edits reflect live.
4. **Picker** — inject `shared/picker.js` into the preview webview; pick → {selector, defining file,
   screenshot, identity token} → fed into chat as the edit target. (3 honesty guards already built.)
5. **Verify loop** — port `baseline/pilot-b/verify.js` logic: before/after diff + animation pause +
   residual-noise degrade; auto-feed "no visual change detected" back to the model.
6. **Exit criterion** — ship site #3 through the app.

## Stage 1.5 (after site #3)
External-site mode: reference-pick (→ harvest pipeline) + asset-pick (`resolveAsset`, proven 7/7;
JS/network assets like .glb need a CDP network-capture pass — its own mini-spike).
