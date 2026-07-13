<h1 align="center">Loupe</h1>

<p align="center"><b>A desktop AI studio for designing and building real websites.</b></p>

<p align="center">
  A Windows app that pairs an AI chat with a live design canvas. AI agents build real static sites —
  solo, or as a multi-agent swarm — grounded in a bundled design library and filled with real imagery.
  You refine the result at Figma grade directly on the live site (select, move, resize, edit by hand),
  or by pointing at an element and having the change verified against what actually rendered. It runs
  on Claude, your own API keys, or the AI subscriptions you already pay for.
</p>

<p align="center">
  <img src="media/loupe-app.png" width="820" alt="Loupe: AI builds on the left, you direct from the chat on the right, and refine on the canvas by hand or by pointing at any element">
  <br>
  <sub>Loupe v0.1 — AI builds and edits on the left; you direct from the chat on the right, and refine on the
  canvas by hand or by pointing at any element.</sub>
</p>

<p align="center">
  <a href="#install">Download</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="#build-from-source">Build from source</a> ·
  <a href="#contributing">Contribute</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License: MIT">
  <img src="https://img.shields.io/badge/platform-Windows%20x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Platform: Windows x64">
  <img src="https://img.shields.io/badge/status-alpha-orange?style=flat-square" alt="Status: alpha">
  <img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white" alt="Built with Electron">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs welcome">
</p>

<!-- Uncomment after the repo is public and the first Release is published — these hit the GitHub API and will 404/"invalid" until then:
<p align="center">
  <a href="https://github.com/winchxyz/loupe/commits/main"><img src="https://img.shields.io/github/last-commit/winchxyz/loupe?style=flat-square" alt="Last commit"></a>
  <a href="https://github.com/winchxyz/loupe/releases/latest"><img src="https://img.shields.io/github/v/release/winchxyz/loupe?include_prereleases&sort=semver&display_name=tag&style=flat-square" alt="Latest release"></a>
  <a href="https://github.com/winchxyz/loupe/releases"><img src="https://img.shields.io/github/downloads/winchxyz/loupe/total?style=flat-square" alt="Total downloads"></a>
  <a href="https://github.com/winchxyz/loupe/issues"><img src="https://img.shields.io/github/issues/winchxyz/loupe?style=flat-square" alt="Open issues"></a>
</p>
-->

Loupe is early (v0.1) and I build it independently, in the open. It's **Windows-tested, unsigned, and
rough in places** — but it's made to be used, not admired from a distance. It brings your own keys
(they stay on your machine), sends nothing to a server of mine, and everything it does you can watch it
do. If it saves you a round-trip on your next site, it's doing its job.

## Why I built this

I kept hitting the same wall with AI web tools: the agent says “done,” and nothing on screen changed.
Or I ask it to recolor a logo and it edits one of the two layers — because it's editing code blind,
without ever looking at what rendered.

Loupe closes that loop. You point at the exact thing you mean, the agent edits the source, and Loupe
checks the change against the real render *before* it tells you it's done.

That closed loop is why I started — but it grew into the studio I actually wanted: agents that build a
whole site, a real design library to ground them, my own model subscriptions doing the work, and a
canvas where I can take over by hand.

— winchxyz

## How it works

Loupe is a full build-and-refine pipeline, not a one-trick chat box:

1. **Brief & build.** Describe the site and choose how it's built: **Solo** (one fast pass) or
   **Studio** (Director → Builder → Reviewer, with a clarify gate when the brief is vague). Flip on
   experimental features for multi-page agent swarms, builds where different AIs take different pages,
   and an autonomous **Loop** that iterates a page against a quality bar until it passes or you stop it.
2. **Grounded, not generic.** Every build pulls from a bundled library of techniques, layout playbooks,
   and ~1,300 original analyses of real sites (with extracted design tokens), and fills image slots
   with real licensed or generated photos — each verified to have actually loaded. It runs on Claude,
   your own API keys, or the Codex / Grok / Copilot / MiMo CLI subscriptions you already pay for.
3. **Refine on the canvas.** Pan and zoom a Figma-style canvas, preview at device widths, drag and
   resize into clean persisted CSS, with one undo/redo history across both AI and hand edits.
4. **Edit by pointing — and it's checked.** Point at any element like DevTools (or sketch over it with
   the Draw tool). The agent gets the exact selectors and source files, edits them, and Loupe verifies
   the change against what actually rendered before it says done. No blind “done.”

That last step — verifying against the real render — is the difference between “the code looks right”
and “the page looks right.” It's what most AI web tools skip.

## What's inside

- **AI agents that build** — **Solo** (one fast pass) and **Studio** (Director → Builder → Reviewer,
  with a clarify gate). With experimental features on: a **Swarm** (`/flow`, `/multiflow`) where a
  planner maps the site and a team of builders build every page in parallel — a reviewer judges and
  fixes, optionally with a different AI per page — and an autonomous **Loop** that iterates against a
  quality bar with budget and stop controls.
- **Figma-grade editing on the live site** — select, move, resize, rotate, snap, align, auto-layout,
  and edit text and style by hand — all persisted as clean, responsive CSS.
- **Closed-loop visual editing** — point at an element and describe a change; an automatic before/after
  diff verifies it actually changed, and re-feeds the render to the agent when it didn't. The part most
  AI tools skip.
- **Bring your own engine** — Claude (Fable 5 / Sonnet 5 / Opus 4.8 / Haiku 4.5), BYOK OpenRouter /
  OpenAI / Gemini / xAI keys, or your own Codex / Grok / Copilot / MiMo subscription CLIs as build
  engines. Keys stay local.
- **Reference browser** *(experimental)* — open any real site in-app, pick a section, then harvest its
  assets or adapt its technique into your project, re-skinned to your own tokens — never a clone.
- **Smart imagery** — placeholders auto-filled with relevance-ranked, vision-verified stock photos,
  bespoke AI-generated images, or CC0 3D HDRIs — each verified to have loaded, with honest fallbacks.
- **Two-way round-trip + live design system** — hand-arrange on the canvas then `/assemble` into clean
  semantic code (or `/bake` tweaks into CSS); an editable design-token panel and a palette board stay
  in sync with the site's real CSS.
- **Grounded** — a ~1,300-entry corpus of **original** site analyses (with extracted design tokens)
  plus a technique library, pulled into every build. Point Loupe at your **own** library folder too.

See **[FEATURES.md](FEATURES.md)** for the full inventory — the element picker, device preview, the
Draw tool, accessibility and responsive passes, PNG/PDF export, and more.

## Install

**Windows 10 / 11 (64-bit)** is the tested, supported platform.

| Option | Best for | Get it |
|---|---|---|
| **Installer** (`.exe`) | Most people — installs, adds a Start-menu shortcut, auto-updates. | [`Loupe-Setup-<version>.exe`][latest] |
| **Portable** (`.zip`) | No install / no admin rights — unzip anywhere (or a USB stick) and run `Loupe.exe`. | [`Loupe-<version>-win-x64.zip`][latest] |
| **From source** | You want to read and build the code yourself. | [Build instructions](#build-from-source) |

[GitHub Releases][latest] is the only official download channel.

> Downloads are **unsigned**, so the first launch shows a one-time Windows prompt — see
> [“Windows protected your PC”](#windows-protected-your-pc) below. Manually-downloaded builds don't
> auto-update; grab a new release to upgrade.

An **`npx` launcher** is planned right after v0.1 (the npm registry is a signature-free channel) —
watch the Releases page.

<details>
<summary><b>“Windows protected your PC”</b> — this is expected, here's why and what to click</summary>

Loupe is open-source and built by one person, and I don't pay for a Windows code-signing certificate
(they're expensive for an indie project). Because the binary is **unsigned**, Microsoft Defender
SmartScreen shows a blue **“Windows protected your PC”** screen the first time you run a new version.
This is **not** a virus alert — it only means Windows doesn't recognise the publisher yet.

To run it:

1. Click **More info**
2. Click **Run anyway**

If **Run anyway** isn't shown: right-click the file → **Properties** → tick **Unblock** at the bottom
→ **OK**, then open it again.

You'll see this once per version. The `.exe` on the Releases page is the exact file the build produces
— you can [verify its checksum](#is-this-safe) or [build it yourself](#build-from-source) instead of
taking my word for it.

</details>

### macOS / Linux

Loupe is built and tested on **Windows only** — that's all I can honestly vouch for. It's a
cross-platform Electron app, so it may well build and run elsewhere (the from-source path is your best
bet), but I don't test those and don't ship macOS/Linux binaries yet. If you get it running, a note or
a PR is very welcome.

## First run — keys, and what each one gives you

Loupe is **BYOK** (bring your own keys). Everything is stored locally in your user profile and sent
only to the matching provider — never to me, never to the repo.

| You have | What you get |
|---|---|
| **Claude Code installed & signed in** | Everything core, no setup — Loupe picks up your existing sign-in. |
| **An Anthropic API key** (Settings → gear) | Same as above, billed per token instead of via your subscription. |
| **+ Unsplash / Pexels key** (free) | Real photography auto-filled into builds. Recommended. |
| **+ OpenRouter / OpenAI / Gemini / xAI key** | Alternative build engines, a cross-vendor QA judge, image-generation models. |
| **+ Codex / Grok / Copilot / MiMo CLI signed in** | Your existing subscriptions as build engines — no extra API cost. |
| **Nothing at all** | The app opens and everything is inspectable, but a build turn will ask you to add Claude auth first. |

> **On Claude auth.** The endorsed way to authenticate the Agent SDK is your own **Anthropic API key**
> (Settings → gear → Providers & keys). Loupe can also run on your locally-installed, signed-in Claude
> Code — it drives *your* CLI at your discretion, exactly as if you'd run it yourself. It is not a
> hosted service and it never proxies your credentials.

## Is this safe?

Honest answer, spelled out:

- **Loupe's own code is open source ([MIT](LICENSE)).** The ultimate check is building it yourself
  (see [Build from source](#build-from-source)).
- **The binaries are unsigned** — that's the indie-economics reason above, not a comment on what the
  app does. SmartScreen's warning is about the missing signature, nothing more.
- **Loupe drives, and does not redistribute, the proprietary Claude Code CLI** (Anthropic's,
  all-rights-reserved). You install and sign into it yourself; Loupe launches your own copy. See
  [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
- **Your keys stay local.** Loupe talks to the network only for the providers you configure (plus
  Poly Haven / Unsplash / Pexels asset fetches). Keys live in your user profile — never in the repo,
  never proxied anywhere, no telemetry.

<details>
<summary><b>Verify your download</b> (optional, for the security-minded)</summary>

Every release includes a **`SHA256SUMS.txt`**. Compare the hash of your file against it:

```powershell
# Windows — PowerShell
Get-FileHash .\Loupe-Setup-<version>.exe -Algorithm SHA256
```
```
:: Windows — Command Prompt
certutil -hashfile Loupe-Setup-<version>.exe SHA256
```

The value must match the line for your file in `SHA256SUMS.txt`.

A checksum confirms the file downloaded intact and unaltered — it doesn't prove *who* built it
(that needs code signing, which Loupe doesn't have yet). For that, build from source.

</details>

## The reference corpus

`baseline/library/references/` holds ~1,300 **original written analyses** of publicly viewable
websites' visual systems — palette roles, type scales, component anatomy, do's and don'ts — plus
design tokens extracted from them. No page markup, stylesheets, copy, or assets are reproduced; it's
study material and grounding data, in the spirit of a designer's notebook. Site names identify the
subject of each analysis. If you own one of these sites and want its entry removed, **open an issue**
and it comes down.

## Build from source

You'll need **Node.js 20 or newer**.

```bash
git clone https://github.com/winchxyz/loupe.git
cd loupe/app
npm install
npm start          # launches the Electron app
```

To run the smoke test (it boots the real app and checks the preview renders with no console errors):

```bash
npm run smoke
```

More detail, and how to propose a change, is in [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## Contributing

Loupe is a solo project, but ideas and PRs are genuinely welcome.

- **Found a bug, or something behaves wrong?** → [open an issue](https://github.com/winchxyz/loupe/issues) (there's a short form).
- **Have an idea, or not sure it's a bug?** → [start a Discussion](https://github.com/winchxyz/loupe/discussions).
- **Want to write code?** New here, the best place to start is issues tagged
  [`good first issue`](https://github.com/winchxyz/loupe/labels/good%20first%20issue) — small,
  well-described tasks. Bigger things I'd love help with are tagged
  [`help wanted`](https://github.com/winchxyz/loupe/labels/help%20wanted).

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) to build from source, and
[CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md) for the ground rules. I review when I can — it's one
person, so a little patience goes a long way.

## Status at a glance

- **Platform:** Windows 10/11 is the only tested target; macOS/Linux untested.
- **Signing:** not code-signed yet → the one-time SmartScreen prompt above.
- **Updates:** the installer auto-updates; portable/manual builds don't — re-download to upgrade.
- **Data:** everything runs locally; your keys and work don't leave your machine.
- **Bugs:** maintained by one person — expect rough edges, and please report the ones you hit.

## Star History

If Loupe saves you time on your next site, consider giving it a star — it helps other people building
with AI find it. ⭐

<!-- Add the chart once the repo has some traction (~25+ stars with a visible slope) — a flat line near
     zero on a brand-new repo draws the eye to the lack of traction. Paste-ready when you're ready:
<a href="https://star-history.com/#winchxyz/loupe&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=winchxyz/loupe&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=winchxyz/loupe&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=winchxyz/loupe&type=Date" />
  </picture>
</a>
-->

## License & attribution

Loupe's code is [MIT](LICENSE). Third-party content that ships in the repo and the upstream projects
the pipeline learns from are credited in [ATTRIBUTION.md](ATTRIBUTION.md); bundled fonts, icons, and
the Claude Code CLI notice are in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

Built in the open by [winchxyz](https://github.com/winchxyz). If you build something with it, I'd
love to see it.

[latest]: https://github.com/winchxyz/loupe/releases/latest
