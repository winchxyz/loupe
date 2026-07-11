# Canvas smoke test

A fast end-to-end check that the **real Electron app** boots and the **live preview actually renders** —
catching the regression class a `vite build` can't (e.g. a blank `<webview>`, console errors, missing frames).

## Run

```
cd app
npm run smoke
```

Exit code `0` = pass, non-zero = a check failed. Screenshots are written to `test/artifacts/`
(`smoke-window.png` = full app, `smoke-livehost.png` = the live preview region).

## What it does

1. Builds the renderer (`vite build`) and serves it (`vite preview`) — deterministic, no HMR.
2. Launches the real app via Playwright (`_electron.launch`).
3. Opens the deterministic fixture `test/fixture-site/` (3 plain pages) through the renderer test hook
   `window.__dzReopen(dir)` (defined in `App.jsx`'s startup effect — it drives the REAL reopen+adopt path;
   seeding `localStorage` does NOT work because the persist effect clobbers it on mount).
4. Asserts:
   - page frames render (≥3 captions for the 3 fixture pages),
   - the live `<webview>` is visible with a real size,
   - the live preview is **not blank** — a screenshot of the live region is decoded (pngjs) and must have
     real pixel variety (dominant colour < 92% **or** > 24 distinct colours). A blank/white page scores
     ~98% dominant / ~15 colours → FAIL; real content ~78% / ~86 colours → PASS.
   - no unexpected console / page errors (`ERR_ABORTED` from a superseded webview navigation is benign).

## When to run

After ANY change to the canvas / webview / pan / select / device code, **before** declaring it done.
This is the automated arm of the UI-robustness gate (`app/docs/UI-ROBUSTNESS-GATE.md`).

## Extending

Add interaction checks (marquee-drag selects frames, pan moves the canvas, device switch reflows) by driving
Playwright `page.mouse` over `.canvas` and asserting `.cframe.fsel` counts / positions. Keep them deterministic.
