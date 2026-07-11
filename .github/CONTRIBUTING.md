# Contributing to Loupe

Thanks for being here. Loupe is a solo project I build in the open, and ideas, bug reports, and pull
requests are genuinely welcome. This page is the short version of how to help.

By taking part you agree to the [Code of Conduct](CODE_OF_CONDUCT.md) — be kind, in short.

## Ways to help

- **Found a bug, or something behaves wrong?** → [open an issue](https://github.com/winchxyz/loupe/issues).
  There's a short form; a screenshot or the exact steps to reproduce helps a lot.
- **Have an idea, a question, or aren't sure it's a bug?** →
  [start a Discussion](https://github.com/winchxyz/loupe/discussions).
- **Want to write code?** If you're new to the project, the best starting points are issues tagged
  [`good first issue`](https://github.com/winchxyz/loupe/labels/good%20first%20issue) — small,
  well-described tasks. Larger things I'd love help with are tagged
  [`help wanted`](https://github.com/winchxyz/loupe/labels/help%20wanted).

## Build from source

You'll need **Node.js 20 or newer**. Loupe is developed and tested on **Windows** — from-source may work
on macOS/Linux, but I don't test those.

```bash
git clone https://github.com/winchxyz/loupe.git
cd loupe/app
npm install
npm start          # launches the Electron app (Vite + Electron)
```

Run the smoke test — it boots the real app and asserts the preview renders with no console errors:

```bash
npm run smoke
```

## Proposing a change

1. Open an issue or Discussion first for anything non-trivial, so we don't both spend effort on something
   that doesn't fit — for a small, obvious fix, a direct PR is fine.
2. Fork the repo and branch off `main` (`git checkout -b fix/short-description`).
3. Keep the change focused — one concern per PR is much easier to review.
4. **Match the surrounding code.** Read the nearby code and mirror its style, naming, and comment density —
   this codebase leans on plain JS/CJS, no build step for the Electron side, and dense inline comments that
   explain the *why*.
5. **Run `npm run smoke`** and make sure it stays green. If your change is behavioral, add or extend a smoke
   assertion that locks it.
6. Open a PR that says **what** changed and **why**. Link the issue it closes.

## What to expect

This is maintained by one person, so reviews happen when I can get to them — a little patience goes a long
way, and I appreciate it. Not every change will land (scope, direction, maintenance cost), but every
thoughtful one gets a real read.

## A note on scope

Loupe drives — and does not redistribute — the proprietary Claude Code CLI, and the CLI bridges
(Codex/Grok/Copilot/MiMo) are Windows-tuned. Please don't add anything that bundles third-party proprietary
binaries or ships credentials. Keys are BYOK and stay on the user's machine.
