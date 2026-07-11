// source: baseline/sites/02b-cube-B2-slipstream/scene.js · project: deZign-pro 02b/TESQ · saved: 2026-06-18
//
// Hardware-adaptive WebGL performance system, distilled from the TESQ cube-B2
// build. Three parts that compose:
//   1. detectTier()   — pick low|med|high ONCE from the actual hardware.
//   2. Q(lo,md,hi)    — one knob: every quality number reads off the tier.
//   3. dynScale loop  — FPS-EMA auto-rescales internal resolution every frame.
// Dev overrides: ?perf=low|med|high  ?res=NN  ?poster  ?review.
//
// Real values are kept exactly as shipped. Wire the marked TODO points into your
// own THREE.WebGLRenderer + render-target chain.

/* ---------------------------------------------------------------- *
 * 1. HARDWARE CAPABILITY  ->  QUALITY TIER  (chosen ONCE, at init)  *
 * ---------------------------------------------------------------- */

// Unmasked GPU renderer string, lowercased ("" if WebGL/ext unavailable).
function _dzGpuString() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (!gl) return "";
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const s = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    return (s || "").toString().toLowerCase();
  } catch (e) { return ""; }
}

// Returns 'low' | 'med' | 'high'. CONSERVATIVE by design: a normal desktop stays
// 'high' so the full look is untouched; the dynScale loop (part 3) rescues any
// machine mis-guessed as high but actually slow. ?perf=... overrides for QA.
function detectTier() {
  const q = new URLSearchParams(location.search).get("perf");
  if (q === "low" || q === "med" || q === "high") return q;        // QA override

  const gpu    = _dzGpuString();
  const cores  = navigator.hardwareConcurrency || 8;               // default = capable
  const mem    = navigator.deviceMemory || 8;                      // undefined on Safari/FF -> assume capable
  const coarse = (window.matchMedia && matchMedia("(pointer: coarse)").matches) || false;

  // Software / CPU rasterizer -> always low, regardless of cores/mem.
  if (/swiftshader|llvmpipe|software|basic render|microsoft basic/.test(gpu)) return "low";

  if (coarse) {                                                    // phone / tablet
    if (/mali-4|mali-t|adreno [1-5]\d\d|powervr|apple a[789]\b/.test(gpu) || cores <= 4 || mem <= 3) return "low";
    return "med";
  }
  if (cores <= 2 || mem <= 2) return "med";                        // very weak desktop
  return "high";                                                   // desktop default -> unchanged
}

/* ---------------------------------------------------------------- *
 * 2. THE Q() KNOB  —  every quality number reads off the tier       *
 * ---------------------------------------------------------------- */

const tier = detectTier();
const Q = (lo, md, hi) => (tier === "high" ? hi : tier === "med" ? md : lo);
window.__dzTier = tier;          // exposed for the ?review HUD

// Real shipped values from TESQ (each is a single source of truth, no scatter):
const tierDPR = Q(1, 1.25, 1.5);          // device-pixel-ratio cap per tier
const RT_REF  = Q(512, 768, 1024);        // reflection/refraction render-target size
// const TERR_SEG = Q(200, 256, 320);     // terrain mesh segments
// const N        = Q(128, 160, 192);     // foam grid resolution
// const OSEG     = Q(144, 216, 288);     // ocean segments
// const uSteps   = Q(26.0, 34.0, 44.0);  // raymarch step count (shader uniform)
// const uReflOn  = Q(0.0, 1.0, 1.0);     // disable a whole effect on the low tier

/* ---------------------------------------------------------------- *
 * 3. DYNAMIC RESOLUTION  —  FPS-EMA holds the framerate near target *
 * ---------------------------------------------------------------- */

// ?res=NN locks the render scale (QA: force an aggressive-downscale look on any
// machine, bypassing the auto-scaler). Else dynScale floats 0.55..1.0.
const _resQ     = new URLSearchParams(location.search).get("res");
const _resFixed = _resQ ? Math.max(0.2, Math.min(1, (parseFloat(_resQ) || 100) / 100)) : null;
let   dynScale  = _resFixed != null ? _resFixed : 1.0;

// const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, tierDPR) * dynScale);   // <- the ONE formula
// renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

// Re-apply resolution + resize every screen-sized render target to match.
function applyResolution() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, tierDPR) * dynScale);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  resizeRTs();                                   // TODO: your RT chain
}
function resizeRTs() {
  const s = renderer.getDrawingBufferSize(new THREE.Vector2());
  // Full-res targets track the drawing buffer; cheap passes stay halved/quartered:
  sceneRT.setSize(s.x, s.y); compRT.setSize(s.x, s.y); postRT.setSize(s.x, s.y);
  liquidRT.setSize(Math.max(s.x >> 1, 1), Math.max(s.y >> 1, 1));   // half-res
  brightA.setSize(Math.max(s.x >> 2, 1), Math.max(s.y >> 2, 1));    // quarter-res (bloom)
  brightB.setSize(Math.max(s.x >> 2, 1), Math.max(s.y >> 2, 1));
}

// Per-frame monitor (inside renderer.setAnimationLoop((ms) => { ... })):
let frameN = 0, _fpsEMA = 0, _fpsPrevMs = 0, _dynCD = 0;

function dynResStep(ms) {
  frameN++;
  // Exponential moving average of instantaneous FPS (alpha 0.1 -> smooth, lag-tolerant).
  if (_fpsPrevMs) { const f = 1000 / Math.max(1, ms - _fpsPrevMs); _fpsEMA = _fpsEMA ? _fpsEMA * 0.9 + f * 0.1 : f; }
  _fpsPrevMs = ms;

  if (_resFixed == null) {                        // skip the auto-scaler when ?res locks it
    if (_dynCD > 0) { _dynCD--; }                 // cooldown: let the change settle before re-judging
    else if (frameN > 60) {                       // warm-up: ignore the first ~60 frames (load spike)
      if (_fpsEMA < 46 && dynScale > 0.55) {       // too slow -> drop res hard, long cooldown
        dynScale = Math.max(0.55, dynScale - 0.12); applyResolution(); _dynCD = 45;
      } else if (_fpsEMA > 57 && dynScale < 1.0) { // headroom -> creep res back up, gently
        dynScale = Math.min(1.0, dynScale + 0.06); applyResolution(); _dynCD = 60;
      }
    }
  }
  window.__dzFps = _fpsEMA; window.__dzScale = dynScale;   // exposed for the ?review HUD
}

/* ---------------------------------------------------------------- *
 * 4. DEV / QA SURFACE                                              *
 *   ?perf=low|med|high  force a tier                               *
 *   ?res=NN             lock render scale to NN% (0.2..1.0)         *
 *   ?poster             show the WebGL-fallback poster             *
 *   ?review             show the live "tier / fps / res" HUD       *
 * The HUD reads window.__dzTier / __dzFps / __dzScale every 500ms. *
 * ---------------------------------------------------------------- */
