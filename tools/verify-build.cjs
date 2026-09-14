// Kept outside Hexo's scripts/ directory so validation runs after generation.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');
const homepage = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
assert.equal(homepage, fs.readFileSync(path.join(root, 'source/index.html'), 'utf8'),
  'Hexo must preserve the custom homepage verbatim.');
assert.equal((homepage.match(/<h1\b/g) || []).length, 1, 'The homepage needs one primary heading.');
assert(!/3\.97|Summer 2026 internships|Class of .27|UofT CS .27|ExploRIEL/i.test(homepage),
  'Stale recruiting copy must not appear on the homepage.');
assert(!fs.existsSync(path.join(output, 'resume.pdf')), 'Do not publish the outdated resume.');

for (const name of ['index.html', 'portfolio/index.html']) {
  const html = fs.readFileSync(path.join(output, name), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${name}: duplicate HTML IDs.`);
  for (const [, href] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    if (href.startsWith('#')) {
      assert(ids.includes(href.slice(1)), `${name}: missing anchor ${href}`);
      continue;
    }
    const [pathname, fragment] = href.split('#');
    let target = path.join(output, pathname);
    if (pathname.endsWith('/')) target = path.join(target, 'index.html');
    assert(fs.existsSync(target), `${name}: missing local asset ${href}`);
    if (fragment) {
      const destination = fs.readFileSync(target, 'utf8');
      assert(destination.includes(`id="${fragment}"`), `${name}: missing destination anchor ${href}`);
    }
  }
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    assert(/\balt="[^"]+"/.test(tag[0]), `${name}: image needs descriptive alt text.`);
    assert(/\bwidth="\d+"/.test(tag[0]) && /\bheight="\d+"/.test(tag[0]),
      `${name}: image dimensions must reserve layout space.`);
  }
}
for (const name of ['favicon.svg', 'robots.txt', 'sitemap.xml', 'CSS/portfolio.css']) {
  assert(fs.existsSync(path.join(output, name)), `Missing published asset: ${name}`);
}
console.log('Verified custom homepage, local links, anchors, image attributes, SEO assets, and resume exclusion.');
