/* Loupe · nethost.cjs — host-level SSRF filter for the /harvest download path (pure, unit-testable).
   S2 (audit 2026-07-09) + AUDIT-2 F39. harvestBadHost(h): true for a hostname that resolves to loopback / private /
   link-local, including the encodings a hostile previewed page could use to smuggle a LAN pull past a naive check —
   IPv4-mapped IPv6 (::ffff:127.0.0.1 dotted AND ::ffff:7f00:1 hex) and all-numeric IPv4 (decimal 2130706433, 0x7f000001,
   octal 017700000001). DNS-rebinding stays out of scope for a local single-user tool. Extracted from main.cjs so the
   smoke can execute it directly (main.cjs requires electron and is not node-loadable). */
'use strict';

function harvestBadHost(h) {
  let x = String(h || '').toLowerCase().replace(/^\[|\]$/g, '');
  // AUDIT-2 F39: normalize an IPv4-mapped IPv6 down to the embedded IPv4 so ::ffff:127.0.0.1 (dotted) and ::ffff:7f00:1
  // (hex) can't smuggle loopback/LAN past the dotted-quad string checks below.
  let m = x.match(/^::ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/);
  if (m) x = m[1];
  else if ((m = x.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/))) { const hi = parseInt(m[1], 16), lo = parseInt(m[2], 16); x = [(hi >> 8) & 255, hi & 255, (lo >> 8) & 255, lo & 255].join('.'); }
  if (!x || x === 'localhost' || x.endsWith('.local') || x.endsWith('.internal') || x.endsWith('.home.arpa')) return true;
  // AUDIT-2 F39: an ALL-numeric host decodes to an IPv4 (decimal 2130706433, 0x7f000001, octal 017700000001) — decode
  // and re-check the dotted-quad ranges. Only when the WHOLE host is numeric, so real hostnames are never touched.
  if (/^(0x[0-9a-f]+|\d+)$/.test(x)) {
    const n = x.startsWith('0x') ? parseInt(x, 16) : (/^0[0-7]+$/.test(x) ? parseInt(x, 8) : parseInt(x, 10));
    if (Number.isFinite(n) && n >= 0 && n <= 0xffffffff) x = [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
  }
  if (/^127\.|^10\.|^192\.168\.|^169\.254\.|^0\./.test(x)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(x)) return true;
  if (x === '::1' || /^f[cd][0-9a-f]{0,2}:/.test(x) || /^fe80:/.test(x)) return true;
  return false;
}

function harvestUrlOk(u) { try { const p = new URL(u); return (p.protocol === 'http:' || p.protocol === 'https:') && !harvestBadHost(p.hostname); } catch { return false; } }

module.exports = { harvestBadHost, harvestUrlOk };
