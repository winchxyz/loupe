// source: baseline/sites/02b-cube-B2-slipstream (v-c.html + scene.js) · project: deZign-pro 02b/TESQ · saved: 2026-06-18
//
// Self-dismissing glass loader + no-WebGL / context-loss poster fallback.
// Two cooperating pieces: (1) loader script that exposes window.__loaderClose,
// (2) renderer init that calls showPoster() (which routes through __loaderClose)
// whenever WebGL is missing or the GPU context is lost. The loader ALWAYS closes —
// on the happy path via scene-ready, on the failure path via showPoster — so the
// page is never stuck behind a frozen overlay.

/* ============================================================================
   PART 1 — Loader (inline <script> at end of <body>, runs immediately)
   Markup it drives:
     <div class="loader ldX" id="loader"> ... #ldxw (word) / #ldxn (percent) </div>
   CSS contract:
     .loader.ldX{background:transparent;transition:transform .95s cubic-bezier(.65,0,.2,1)}
     .loader.ldX.lift{transform:translateY(-100%)}   // reveal = slide up, NOT fade
   ========================================================================== */
(function () {
  var el = document.getElementById("loader"); if (!el) return;

  // Hide the content that would flash UNDER the transparent glass during load,
  // via visibility (keeps layout). close() restores it — this is what makes the
  // poster path safe: showPoster -> __loaderClose -> content becomes visible again.
  var hide = [document.getElementById("top"), document.querySelector(".topbar")];
  hide.forEach(function (n) { if (n) n.style.visibility = "hidden"; });

  var ww = document.getElementById("ldxw"), numEl = document.getElementById("ldxn");
  var CH = "ABCDEFGHJKLMNPQRSTUVWXYZ0249#@%&", glyph = ["", "", "", ""];
  var p = 0, fr = 0, ready = false, t0 = Date.now(), MIN = 2200, fin = false, done2 = false;

  // decode-scramble: each of 4 letters locks to "TESQ" once its local progress passes 1
  function draw(prog) {
    var s = "", Tg = "TESQ";
    for (var i = 0; i < 4; i++) {
      var lp = (prog - i * 18) / 24;
      if (lp >= 1) { s += Tg[i]; }
      else { if (fr % 4 === 0 || !glyph[i]) glyph[i] = CH[(Math.random() * CH.length) | 0]; s += glyph[i]; }
    }
    if (ww) ww.textContent = s;
    if (numEl) numEl.textContent = Math.round(prog) + "%";
  }

  // The one true dismiss. Idempotent (done2). Restores hidden content, slides the
  // glass up, then hard-removes it after the transform finishes.
  function close() {
    if (done2) return; done2 = true;
    hide.forEach(function (n) { if (n) n.style.visibility = ""; });
    el.classList.add("lift");
    setTimeout(function () { if (el && el.parentNode) el.remove(); }, 1100);
  }
  window.__loaderClose = close;   // <-- scene.js dismisses the loader on the WebGL-fallback path

  // Progress is faked but gated: it stalls at 93% until the scene is actually ready
  // AND a minimum dwell (2200ms) has elapsed, so the brand beat is never skipped.
  function step() {
    if (done2) return;
    fr++;
    var cap = (ready && Date.now() - t0 >= MIN) ? 100 : 93;
    p = Math.min(cap, p + 0.85);
    draw(p);
    if (p >= 100) { if (!fin) { fin = true; setTimeout(close, 450); } return; }
    requestAnimationFrame(step);
  }
  window.addEventListener("scene-ready", function () { ready = true; });  // dispatched by THREE LoadingManager.onLoad
  setTimeout(function () { ready = true; }, 5500);                        // safety: never hang if assets never fire
  step();
})();

/* ============================================================================
   PART 2 — Renderer init (inside scene.js) — the poster safety net
   ========================================================================== */

// html.poster-on shows a static frame (assets/poster.jpg) and hides the live canvas.
// CSS contract:
//   .poster{position:fixed;inset:0;z-index:0;background-image:url("assets/poster.jpg");opacity:0;transition:opacity .5s}
//   html.poster-on .poster{opacity:1}  html.poster-on .sea{visibility:hidden}
function showPoster() {
  document.documentElement.classList.add("poster-on");
  // Dismiss the loader the PROPER way — close() un-hides the content that load hid.
  // Hard-remove only if the loader script never ran.
  if (window.__loaderClose) window.__loaderClose();
  else { var ld = document.getElementById("loader"); if (ld) ld.remove(); }
}

// ?poster — preview the fallback on any machine (dev/QA), bypassing the scene entirely.
if (new URLSearchParams(location.search).has("poster")) { showPoster(); return; }

var renderer;
try {
  // powerPreference:"high-performance" asks for the discrete GPU; the try/catch is
  // the real safety net — if WebGL can't be created at all we abort to the poster.
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, powerPreference: "high-performance" });
} catch (e) {
  showPoster(); return;   // no WebGL -> poster, abort scene init
}

// GPU context loss (mobile memory pressure, driver reset): preventDefault to allow a
// restore, stop the render loop, drop to the poster instead of a black canvas.
canvas.addEventListener("webglcontextlost", function (e) {
  e.preventDefault();
  renderer.setAnimationLoop(null);
  showPoster();
}, false);
