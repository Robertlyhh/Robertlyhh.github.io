# Yihe Li — personal portfolio

Live site: https://robertlyhh.github.io/

The homepage is static HTML and CSS, built alongside the existing Hexo blog and deployed with GitHub Pages.

## Local development

```sh
npm ci
npm run build
npm run server
```

Edit `source/index.html` and `source/CSS/portfolio.css`. Rebuild and reload to preview changes. `build.ps1` runs the same build on Windows.

`npm run build` cleans old output, generates the site, and checks local assets, anchors, accessibility-related image attributes, and exclusion of the outdated resume. Keep build utilities in `tools/`; Hexo automatically executes JavaScript under `scripts/` as plugins.

## Publishing

The Pages workflow installs locked dependencies, runs the validated build, and publishes `public/` on a push to `main`. Preview changes before pushing. `/portfolio/` redirects to the featured-work section; the existing blog routes remain available.

The old `source/resume.pdf` is excluded from deployment in `_config.yml`. Replace it with an approved public recruiting resume, remove the exclusion, and restore the CTA when ready.

See [refresh notes](docs/portfolio-refresh.md) for the content sources, validation, and remaining inputs.
