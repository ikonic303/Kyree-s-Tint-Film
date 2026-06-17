// Tiny helper: parse a CSS declaration string into a React style object.
// Keeps the markup pixel-faithful to the original design without hand-converting
// every inline style to camelCase. Safe to refactor into styled-components,
// CSS modules, Tailwind, etc. later.
export function css(str) {
  const out = {};
  if (!str) return out;
  // split on semicolons that are not inside parentheses (clamp(), rgba(), gradients)
  let depth = 0, start = 0;
  const decls = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (c === ';' && depth === 0) {
      decls.push(str.slice(start, i));
      start = i + 1;
    }
  }
  decls.push(str.slice(start));

  for (const decl of decls) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    let key = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!key || !val) continue;
    // custom props (--foo) stay as-is; others camelCase
    if (!key.startsWith('--')) {
      key = key.replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
    }
    out[key] = val;
  }
  return out;
}
