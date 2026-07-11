// source: baseline/sites/01b-prediction-aggregator-ref/app.js · project: deZign-pro 02b/TESQ · saved: 2026-06-18
//
// HyperOdds signature texture: ordered-dither (Bayer 4x4) pixel dust, drawn in theme ink.
// Three uses below — dot-matrix wordmark, hero dust mountains, interactive water-ripple
// cloud. All paused off-screen via a ScrollTrigger visibility flag. themeColors() returns
// the live CSS-var inks so the texture re-renders correctly on theme switch.

// Read current theme inks from CSS vars (so canvas matches the duotone after a toggle).
function themeColors() {
  var s = getComputedStyle(document.documentElement);
  return {
    paper: s.getPropertyValue("--c-paper").trim(),
    ink: s.getPropertyValue("--c-ink").trim(),
    accent: s.getPropertyValue("--c-accent").trim()
  };
}

var BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];

// --- 1. Dot-matrix wordmark: sample text glyphs into a cell grid, shimmer at ~8fps ---
var wordCells = null;
function buildWordmark() {
  var canvas = document.getElementById("wordmark");
  if (!canvas || !canvas.getContext) return;
  var W = 1500, H = 260, CELL = 7;
  canvas.width = W; canvas.height = H;
  var off = document.createElement("canvas");
  off.width = W; off.height = H;
  var octx = off.getContext("2d");
  octx.font = "800 218px Archivo, sans-serif";
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  octx.fillStyle = "#fff";
  octx.fillText("HYPERODDS", W / 2, H / 2 + 10);
  var img = octx.getImageData(0, 0, W, H).data;
  wordCells = [];
  for (var y = 0; y < H; y += CELL) {
    for (var x = 0; x < W; x += CELL) {
      var a = img[((y + 3) * W + (x + 3)) * 4 + 3]; // alpha at cell center
      if (a > 110) wordCells.push({ x: x, y: y });
    }
  }
}
function drawWordmark(t) {
  var canvas = document.getElementById("wordmark");
  if (!canvas || !wordCells) return;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = themeColors().ink;
  for (var i = 0; i < wordCells.length; i++) {
    // A few cells rest each frame, like a refreshing display.
    if ((Math.sin(i * 13.37 + t * 1.8) + 1) * 0.5 < 0.03) continue;
    ctx.fillRect(wordCells[i].x, wordCells[i].y, 5, 5);
  }
}

// --- 2. Dither dust mountains: liquidity rendered as a dithered ridge (summed sines) ---
function drawDust(t) {
  var canvas = document.getElementById("dust");
  if (!canvas || !canvas.getContext) return;
  if (canvas.width !== canvas.clientWidth) {
    canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
  }
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height, CELL = 5;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = themeColors().ink;
  for (var gx = 0; gx < W / CELL; gx++) {
    var x = gx * CELL;
    var n = Math.sin(gx * 0.10 + t * 0.18) * 0.5 +
            Math.sin(gx * 0.031 - t * 0.11) * 1.0 +
            Math.sin(gx * 0.013 + t * 0.07) * 1.6;
    var ridge = H * 0.72 + n * H * 0.055;
    for (var gy = Math.floor(ridge / CELL); gy < H / CELL; gy++) {
      var y = gy * CELL;
      var depth = (y - ridge) / (H * 0.5);
      var threshold = BAYER[gy % 4][gx % 4] / 16;
      if (depth > threshold * 0.9) ctx.fillRect(x, y, 3, 3); // ordered-dither cutoff
    }
  }
}

// --- 3. Interactive water-ripple dither cloud: pointermove drops decaying radial rings ---
var ripples = []; // {x, y, t} in canvas px / seconds, max 28 sources
function drawCloud(time) {
  var canvas = document.getElementById("cloud");
  if (!canvas || !canvas.getContext) return;
  if (canvas.width !== canvas.clientWidth) {
    canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
  }
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height, CELL = 6, t = time || 0;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = themeColors().paper;
  ripples = ripples.filter(function (r) { return t - r.t < 1.8; }); // drop faded rings
  for (var gy = 0; gy < H / CELL; gy++) {
    for (var gx = 0; gx < W / CELL; gx++) {
      var x = gx * CELL, y = gy * CELL;
      var v = Math.sin(gx * 0.09 + t * 0.05) * Math.sin(gy * 0.13 + gx * 0.04) +
              Math.sin(gx * 0.023 + 5 - t * 0.03) * Math.sin(gy * 0.041); // ambient drift
      var d = 0;
      for (var k = 0; k < ripples.length; k++) {
        var r = ripples[k], age = t - r.t;
        var dx = x - r.x, dy = y - r.y, dist = Math.sqrt(dx * dx + dy * dy);
        d += Math.sin(dist * 0.045 - age * 7) *           // spreading wave
             Math.exp(-dist * 0.004) * Math.exp(-age * 2.4) * 1.6; // distance + age falloff
      }
      var threshold = BAYER[gy % 4][gx % 4] / 16;
      if ((v + d + 1.4) / 2.8 > threshold + 0.62) ctx.fillRect(x, y, 2, 2);
    }
  }
}
// Feed it: section.addEventListener("pointermove", e => {
//   ripples.push({ x: e.clientX-rect.left, y: e.clientY-rect.top, t: now });
//   if (ripples.length > 28) ripples.shift();   // one ring every ~50ms along the path
// });

// Drive all three off one gsap.ticker, throttled, ONLY while on-screen:
//   ~8fps (t - lastDraw < 0.12) for wordmark/dust = "a display refreshing, not a video";
//   ~25fps (< 0.04) for the interactive cloud.
// Gate each with a ScrollTrigger onToggle flag so off-screen canvases cost nothing.
