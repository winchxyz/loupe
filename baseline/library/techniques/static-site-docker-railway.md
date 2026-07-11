---
technique: Ship a static WebGL site as a zero-dependency Node container on Railway
section: deploy-infra
source: deZign-pro own build — baseline/sites/02b-cube-B2-slipstream (TESQ); server.js + Dockerfile + railway.toml + DEPLOY.md
tags: [deploy, docker, railway, static-site, node, webgl, no-dependencies, cache-headers, dockerignore]
apply-when: shipping a built static site (one HTML page + JS modules + heavy assets — HDR/textures/audio/glb) to a public URL, no backend, no build step
---

# Static WebGL site → Docker → Railway — applied build decisions

The recipe that put **TESQ (02b B2 Slipstream)** on Railway: a hand-written **zero-npm-dependency** Node static server, a **`node:20-alpine`** Dockerfile, and a `railway.toml` that forces the Docker builder and a `/` health check. No framework, no `package.json` install, no build step — the container runs one file, `server.js`, and serves the folder.

The one-line selector: **static output + heavy WebGL assets + want a real URL, no backend → tiny core-module Node server in alpine, builder forced to DOCKERFILE, ship the whole folder minus verified-dead weight.**

## The server: zero dependencies, env-driven, 0.0.0.0

`server.js` uses **only Node core modules** (`http`, `fs`, `path`, `zlib`) — so the Docker image needs no `npm install` at all. Two load-bearing rules for any PaaS:
- **Read the port from the platform.** `const PORT = parseInt(process.env.PORT, 10) || 8080;` — Railway injects `PORT`; `8080` is the local/default fallback. Never hardcode a port.
- **Bind `0.0.0.0`, not `localhost`.** `const HOST = process.env.HOST || "0.0.0.0";` then `server.listen(PORT, HOST, …)`. Binding `127.0.0.1` makes the container unreachable from Railway's proxy — the classic "works locally, 502 in prod" trap.
- Configurable root: `ROOT = process.env.SITE_ROOT ? path.resolve(...) : path.resolve(__dirname, "site")` — matches the Dockerfile copying the site into `/app/site`.

What the server bakes in (all earned, not boilerplate):
- **Entry rewrite:** `/` and any trailing-slash URL → append `v-c.html` (this site's real entry is not `index.html`).
- **Full MIME table for WebGL payloads** — `.mjs`/`.js` as `text/javascript` (ES modules break without it), `.hdr` → `image/vnd.radiance`, `.glb` → `model/gltf-binary`, `.wasm` → `application/wasm`, `.woff2` → `font/woff2`, etc. A generic static server that mislabels `.mjs` or `.hdr` will silently break the scene.
- **Split caching so a redeploy is never half-stale** — markup + code (`.html .js .mjs .css .json .svg .txt .wasm`) → `"no-cache"` (always revalidated, so new HTML never runs against a stale cached `scene.js`); heavy immutable media/fonts (`.hdr .exr` textures, audio, `.glb`, fonts) → `"public, max-age=31536000, immutable"`.
- **gzip on text** only, and only when `data.length > 1024` and the client sent `Accept-Encoding: gzip`; sets `Content-Encoding` + `Vary: Accept-Encoding`.
- **Path-traversal guard:** `if (file !== ROOT && !file.startsWith(ROOT + path.sep)) → 403`.
- `GET`/`HEAD` only (else `405`), `X-Content-Type-Options: nosniff`, `favicon.ico` → `204`.

→ snippet: `snippets/our-builds/static-server.js`

## The Dockerfile: alpine, copy-not-install, drop config from web root

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY server.js /app/server.js          # the server, copied separately
COPY . /app/site                       # the site (.dockerignore trims dead weight)
RUN rm -f /app/site/server.js /app/site/Dockerfile /app/site/.dockerignore \
          /app/site/railway.toml /app/site/DEPLOY.md   # don't serve config from web root
ENV PORT=8080
EXPOSE 8080
USER node                              # unprivileged user from the base image
CMD ["node", "/app/server.js"]
```

Decisions: **`node:20-alpine`** (small base; core modules only so no native build deps); `COPY . /app/site` ships the whole folder, then **`RUN rm -f`** deletes the deploy/config files that `COPY .` dragged into the served root (so `server.js`/`Dockerfile`/`railway.toml` aren't web-reachable); **`USER node`** drops root. **No Dockerfile `HEALTHCHECK` on purpose** — Railway runs its own probe via `railway.toml`; a duplicate container check only adds noise and risks spurious restarts.

→ snippet: `snippets/our-builds/Dockerfile`

## railway.toml: force the builder, UPPERCASE the enums

```toml
[build]
builder = "DOCKERFILE"          # UPPERCASE enum — not "dockerfile"
dockerfilePath = "Dockerfile"

[deploy]
healthcheckPath = "/"
healthcheckTimeout = 100
restartPolicyType = "ON_FAILURE"   # UPPERCASE enum — not "on_failure"
restartPolicyMaxRetries = 5
```

`builder = "DOCKERFILE"` stops Railway from auto-guessing Nixpacks. The health check waits on `/` so a deploy isn't marked live until the server actually answers. **Both enum values must be UPPERCASE** (`DOCKERFILE`, `ON_FAILURE`) — the casing gotcha is the single most likely silent failure here (see below).

→ snippet: `snippets/our-builds/railway.toml`

## .dockerignore / .gitignore — mirrored, and they carry intent

The two files are **byte-identical** in this build (same exclusion list serves both Docker build context and Git). They strip ~70 MB of dead weight so the image ships only what the page loads:
- **dev/build artifacts:** `.shots/`, `**/*.md`, `.git/`, `node_modules/`, `npm-debug.log`.
- **verified-dead assets** (proven never referenced by `v-c.html`/`scene.js`): 4 unused HDR sky candidates (`vendor/sky/night4k.hdr`, `golden-qwantani.hdr`, `night.hdr`, `day.hdr`), 14 removed-planet textures under `assets/planets/`, 2 unused audio tracks (`assets/audio/starfield.mp3`, `surf.mp3`).
- **kept on purpose:** every asset still referenced — including dev/experiment URLs (`?review`, `?lab`, `?t=blue`, `?dayVar=kloofendal`) so those keep working.

Note that `**/*.md` in `.dockerignore` is why the Dockerfile's `rm -f` of `DEPLOY.md` is belt-and-suspenders; the `.md` ignore already keeps it out of the build context.

## Gotchas (from DEPLOY.md, learned the hard way)

- **UPPERCASE Railway enums** — `builder = "DOCKERFILE"`, `restartPolicyType = "ON_FAILURE"`. Lowercase is silently wrong.
- **`railway up` build context = current dir** — run it **from inside the site folder**; the Dockerfile's `COPY .` depends on cwd. CLI path (Option A) needs no Git.
- **GitHub deploy + subfolder** — if the site isn't at the repo root, set that folder as the service's **Root Directory** in Railway settings or it won't find the `Dockerfile`. (Option B assumes folder contents are at repo root.)
- **Web fonts need the visitor's internet, not the container's** — Google Fonts are fetched by the browser; the container ships everything else locally.
- **One benign `404 /assets/core.glb` per load is expected** — the scene probes an optional hi-res cube model with a `HEAD` request and silently falls back to the procedural cube. Not a deploy failure.
- **cred-helper / PATH:** the CLI flow is `npm i -g @railway/cli` → `railway login` → `railway init` (or `railway link`) → `railway up`; then **Settings → Networking → Generate Domain** for a public URL.

## Build checklist
- [ ] Server reads `process.env.PORT` (fallback const) and binds `0.0.0.0`, not `localhost`
- [ ] Server uses only Node core modules → no `npm install` in the image
- [ ] MIME table covers `.mjs`/`.hdr`/`.glb`/`.wasm`/`.woff2`; split cache headers (code `no-cache`, media `immutable`); path-traversal guard
- [ ] `node:20-alpine`, `USER node`, `EXPOSE`/`ENV PORT`, and `rm -f` the config files out of the served root; no Dockerfile HEALTHCHECK
- [ ] `railway.toml`: `builder = "DOCKERFILE"`, `restartPolicyType = "ON_FAILURE"` (UPPERCASE), `healthcheckPath = "/"`
- [ ] `.dockerignore`/`.gitignore` mirrored; only verified-dead assets excluded, dev/experiment URLs kept
- [ ] Deploy: `railway up` from inside the folder (or GitHub + Root Directory on a subfolder), then Generate Domain

> Ties to our experience: this is the exact pipeline that deployed 02b/TESQ to Railway (per MEMORY: "final B2 site ships to Railway via Docker; .dockerignore trims dead assets; core.glb 404 is intentional/benign"). Reuse it verbatim for any static site #N before reaching for a heavier host or a framework.
