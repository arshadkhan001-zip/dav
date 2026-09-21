# DAV Police Public School, Panipat — Modern Website

A premium, performance-first redesign of the
[DAV Police Public School Panipat](https://davppspanipat.com/) website.
All school information (identity, academics, notices, staff, documents)
is reproduced from the school's public site and official PDFs —
no facts invented.

**Live site:** https://arshadkhan001-zip.github.io/dav/

## Stack

- React 19 + TypeScript + Vite 6
- React Router 7 (lazy route chunks, `basename` follows the Vite base)
- Tailwind CSS v4 (CSS-first design tokens in `src/styles/tokens.css`)
- Framer Motion — mobile drawer only, lazy-split into its own chunk

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server (note: served under `/dav/`)   |
| `npm run typecheck` | TypeScript check (`tsc -b`)             |
| `npm run build`   | Typecheck + production build into `dist/` |
| `npm run preview` | Preview the production build locally      |

## Deployment

Pushes to `main` auto-deploy to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(SPAs get an `index.html` → `404.html` fallback so deep links work).

- Project URL base is `/dav/` (see `BASE_PATH` in `vite.config.ts` and the
  router `basename` in `src/App.tsx`).
- For a root-domain deploy (custom domain, Vercel, Netlify): change
  `BASE_PATH` to `"/"` — the router adapts automatically.

## Project layout

```
public/
  images/        hero slider, gallery, campus, principal, logo
  robots.txt     sitemap.xml (absolute Pages URLs)
src/
  components/    ui/ · navigation/ · sections/ · gallery/ · admissions/
  pages/         one lazy chunk per route (/, /about, /academics, …)
  data/          typed content: school, hero, notices, academics,
                 activities, gallery, facilities, faculty, admissions,
                 disclosure, achievements, principal, navigation
  hooks/         useScrolled, useElementScrollProgress, useDocumentTitle
  utils/         cx, motion tokens, shared reveal observer
  styles/        tokens.css (design system) + hero.css
```

## Performance budget (target: i3-4130 / HD 4400 / 8 GB)

- Initial JS ~115 KB gzip; drawer motion split to on-demand chunk
- Images recompressed locally (hero ~90–190 KB, thumbs ~25–55 KB),
  lazy-loaded below the fold with reserved aspect boxes
- Animations: transform/opacity only, rAF-throttled, one shared
  `IntersectionObserver`, full `prefers-reduced-motion` support

## Content sources

School identity, statistics, staff table, disclosure figures and all
documents link to `davppspanipat.com` and its official PDFs.
Photography is the school's own, recompressed locally — replace or
extend via `src/data/*` (single swap points per section).
