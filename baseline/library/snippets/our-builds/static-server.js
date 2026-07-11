// source: baseline/sites/02b-cube-B2-slipstream/server.js · project: deZign-pro 02b/TESQ · saved: 2026-06-18
/* TESQ — production static server (zero npm dependencies).
   Serves the site on $PORT (Railway injects it; defaults to 8080) bound to
   0.0.0.0. Entry "/" -> v-c.html. Correct MIME for ES modules / HDR / textures
   / audio, gzip for text, long cache for assets, no-cache for HTML, and a
   path-traversal guard. The container runs THIS exact file. */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT = process.env.SITE_ROOT ? path.resolve(process.env.SITE_ROOT) : path.resolve(__dirname, "site");
const PORT = parseInt(process.env.PORT, 10) || 8080;
const HOST = process.env.HOST || "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".hdr": "image/vnd.radiance",
  ".exr": "image/x-exr",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".webp": "image/webp", ".gif": "image/gif",
  ".mp3": "audio/mpeg", ".ogg": "audio/ogg", ".wav": "audio/wav",
  ".glb": "model/gltf-binary", ".gltf": "model/gltf+json",
  ".wasm": "application/wasm",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf",
  ".ico": "image/x-icon"
};
const COMPRESSIBLE = new Set([".html", ".js", ".mjs", ".css", ".json", ".svg", ".txt", ".wasm"]);
// Heavy, immutable media/fonts -> cache hard. Code/markup (html, js, json, css,
// svg) stays revalidated so a redeploy never serves new HTML against stale JS.
const LONG_CACHE = new Set([".hdr", ".exr", ".jpg", ".jpeg", ".png", ".webp", ".gif",
  ".mp3", ".ogg", ".wav", ".glb", ".gltf", ".woff2", ".woff", ".ttf", ".ico"]);

const server = http.createServer((req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405, { "Allow": "GET, HEAD" }); return res.end("Method Not Allowed");
    }
    let url = decodeURIComponent(req.url.split("?")[0]);
    if (url === "/favicon.ico") { res.writeHead(204); return res.end(); }
    if (url === "/" || url.endsWith("/")) url += "v-c.html"; // entry point

    const file = path.normalize(path.join(ROOT, url));
    if (file !== ROOT && !file.startsWith(ROOT + path.sep)) { // path-traversal guard
      res.writeHead(403, { "Content-Type": "text/plain" }); return res.end("Forbidden");
    }

    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("404 — not found: " + url);
      }
      const ext = path.extname(file).toLowerCase();
      const headers = {
        "Content-Type": MIME[ext] || "application/octet-stream",
        "Cache-Control": LONG_CACHE.has(ext) ? "public, max-age=31536000, immutable" : "no-cache",
        "X-Content-Type-Options": "nosniff"
      };
      const accept = req.headers["accept-encoding"] || "";
      if (COMPRESSIBLE.has(ext) && /\bgzip\b/.test(accept) && data.length > 1024) {
        const gz = zlib.gzipSync(data);
        headers["Content-Encoding"] = "gzip";
        headers["Vary"] = "Accept-Encoding";
        res.writeHead(200, headers);
        return res.end(req.method === "HEAD" ? undefined : gz);
      }
      res.writeHead(200, headers);
      res.end(req.method === "HEAD" ? undefined : data);
    });
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/plain" }); res.end("Server error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`TESQ static server -> http://${HOST}:${PORT}  (root: ${ROOT})`);
});
