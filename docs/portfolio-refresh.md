# Portfolio refresh — September 2026

## Changes

- Kept Hexo and GitHub Pages; replaced the animated homepage styling with a responsive, restrained dark-green layout using system fonts and no homepage JavaScript.
- Repositioned the hero around game-client engineering, real-time systems, Unreal C++, Unity, graphics, and applied AI. Updated expected graduation to December 2026 and GPA to 3.88/4.00; removed the outdated internship search.
- Added clearly labeled professional, academic-research, and academic-project experience: Tencent Games, LinguaQuest, and AutoBook.
- Featured LinguaQuest and AutoBook with local public-demo thumbnails, results, and working demo links. Corrected Tower Defense to Unity/C# and moved earlier work into an expandable section.
- Added the CHI 2026 publication, grouped skills, current About copy, and contact links.
- Removed the resume CTA and excluded the stale PDF from clean builds. The original PDF remains in source control for recovery, but is not included in the deployed artifact.
- Preserved the /portfolio/ URL as a redirect to /#projects. Existing blog routes remain generated.
- Added canonical and social metadata, favicon, robots.txt, and a homepage sitemap.
- Made CI install from the lockfile with npm ci. Every production build starts clean and verifies the custom homepage, local links and anchors, image attributes, metadata assets, and resume exclusion.

## Sources and link checks

- User-provided website improvement brief supplies career dates, roles, public-safe Tencent details, academic results, skills, and awards.
- Publication title, author order, year, and pages verified against publisher-deposited metadata: https://api.crossref.org/works/10.1145/3772363.3798854 . Canonical link: https://doi.org/10.1145/3772363.3798854 . Article 435 and poster presentation details are retained from the user's brief.
- 2D Tower Defense repository language API reports C#, ShaderLab, and HLSL. The 3D repository README identifies Unity, but the repository has no implementation files.
- All linked GitHub profiles, repositories, and the Pong branch returned HTTP 200.
- YouTube oEmbed returned HTTP 200 for LinguaQuestDemo3 0, AutobookDemo, and AIpongGameDemo, all by Robert LI. The same public thumbnails are used as local project visuals. Playback was not watched end-to-end.
- DOI resolved to ACM, which blocks automated page fetching; Crossref metadata returned HTTP 200.
- LinkedIn returns HTTP 999 to automated checks. Existing profile URL retained; its availability needs a manual check in a normal signed-in browser.

## Validation

- Production build: npm run build (Hexo clean, generate, post-build assertions).
- Browser checked at 1440 × 1000, 390 × 844, and 320 × 740. No horizontal overflow; section navigation clears the sticky header.
- Keyboard: visible skip link on Tab, Enter moves focus to main, native project disclosure expands with Enter.
- /portfolio/ redirects to /#projects. Demo thumbnails load. No browser console errors or warnings on the homepage.
- Core text contrast: main text/background 16.09:1; muted text/card 8.52:1; accent/card 12.56:1; primary button text/background 13.82:1.
- Reduced-motion preference disables smooth scrolling. There are no decorative animations or autoplaying media.
- Homepage assets are approximately 47 KB uncompressed: HTML, CSS, favicon, and two JPEG thumbnails. Images are lazy-loaded with explicit dimensions. No homepage JavaScript, remote font requests, or added runtime dependencies. This is an asset-size check, not a Lighthouse performance score or full accessibility audit.
- Desktop, mobile, and featured-work screenshots captured before deployment and delivered in the task.

## Remaining inputs

1. An approved, public recruiting resume before restoring the resume CTA.
2. A public AutoBook repository URL, if one is intended for sharing; no URL has been guessed.
3. Whether the existing LinguaQuest demo is the desired latest public demo; it resolves successfully.
4. Implementation or demo content for the currently README-only 3D Tower Defense repository, if desired.
5. Manual confirmation of the existing LinkedIn profile URL due to its automated-request restriction.

## Deployment

GitHub Actions workflow: .github/workflows/pages.yml. A push to main builds and deploys the checked public/ artifact to https://robertlyhh.github.io/ . The refresh was prepared on codex/portfolio-refresh and previewed before updating main. Exact deployment outcome and run link are recorded in the task's final response.
