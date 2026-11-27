// Wide screens: past 1600 px wide (a big monitor, or a browser zoomed out) the page grows with the screen instead of
// shrinking into the middle of it. Run on the deploy copy only (site/build.sh, on Cloudflare): every length over 1.5px
// becomes calc(N * var(--px)), and a rule appended to style.css (or the first file) sets --px to max(1px, .0625vw) and the root
// font size to max(100%, 1vw), so rem lengths follow too. Below 1600 px nothing changes. @media widths, url()s and
// hairlines stay in real pixels. Real CSS pixels, so scripts that measure the page need no changes (unlike CSS zoom).
//   node scale.mjs first.css more.css ...      or      node scale.mjs page.html   (only its <style> blocks)
import { readFileSync, writeFileSync } from 'node:fs';

const ROOT = '\n/* scale.mjs: the page grows past 1600 px wide */\n:root{--px:max(1px,.0625vw)}html{font-size:max(100%,1vw)}\n';

function scale(css) {
  let out = '', i = 0;
  const n = css.length;
  while (i < n) {
    const c = css[i];
    if (c === '/' && css[i + 1] === '*') { const j = css.indexOf('*/', i + 2); const e = j < 0 ? n : j + 2; out += css.slice(i, e); i = e; continue; }
    if (c === '"' || c === "'") { let j = i + 1; while (j < n && css[j] !== c) j += css[j] === '\\' ? 2 : 1; out += css.slice(i, j + 1); i = j + 1; continue; }
    if (css.startsWith('url(', i) && css[i + 4] !== '"' && css[i + 4] !== "'") { const j = css.indexOf(')', i); out += css.slice(i, j + 1); i = j + 1; continue; }
    if (css.startsWith('--px:', i)) { let j = i; while (j < n && css[j] !== ';' && css[j] !== '}') j++; out += css.slice(i, j); i = j; continue; }
    if (c === '@') { let j = i; while (j < n && css[j] !== '{' && css[j] !== ';') j++; out += css.slice(i, j); i = j; continue; }   // @media widths stay real
    const m = /^(-?)(\d*\.?\d+)px(?![\w-])/.exec(css.slice(i, i + 24));
    if (m && !/[\w.#-]/.test(css[i - 1] || ' ')) {
      out += parseFloat(m[2]) > 1.5 ? 'calc(' + m[1] + m[2] + '*var(--px))' : m[0];
      i += m[0].length; continue;
    }
    out += c; i++;
  }
  return out;
}

const files = process.argv.slice(2), rootFile = files.find(f => /(^|\/)style\.css$/.test(f)) || files[0];
files.forEach(f => {
  const k = f === rootFile ? 0 : 1;
  const before = readFileSync(f, 'utf8');
  const after = /\.html?$/.test(f)
    ? before.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (all, a, css, b) => a + scale(css) + (k === 0 ? ROOT : '') + b)
    : scale(before) + (k === 0 ? ROOT : '');
  writeFileSync(f, after);
  console.log(`scale: ${f} ${(after.match(/\*var\(--px\)/g) || []).length} lengths`);
});
