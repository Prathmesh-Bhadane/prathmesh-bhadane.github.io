# Prathmesh Bhadane — Portfolio

A multi-page React (Vite + React Router) portfolio built from your CV. The
design is grounded in your own field: the recurring "peak spectrum" trace on
the home and contact pages echoes the XRD / FTIR / UV-Vis spectra you work
with daily. Palette is light and nature-toned: moss green for the
sustainability side of the work, water teal for the purification side.

## Pages

- `/` — Home (intro, stats, quick links to every section)
- `/about` — About me, education/experience, teaching & mentoring
- `/research` — Research interest (four focus areas), instrumentation, patent
- `/career-highlight` — Collaborations (PhD groups, Birmingham visit, postdoc
  group) and award/recognition highlights
- `/publications` — All 16 peer-reviewed papers (sorted latest first) and
  conference presentations
- `/contact` — Contact details, LinkedIn, Google Scholar, CV download,
  references

Navigation is real page routing (via `HashRouter`, so it works on any static
host with zero server config — URLs look like `yoursite.com/#/research`).

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Netlify, Vercel, GitHub Pages,
or any static host. Because routing uses `HashRouter`, no rewrite rules are
needed on the host.

## Structure

- `src/data.js` — all content. Edit this file to update anything on the
  site — no need to touch components for text changes.
- `src/pages/` — one file per route (Home, About, Research, CareerHighlight,
  Publications, Contact).
- `src/components/` — shared pieces: `Layout` (nav + footer wrapper),
  `NavBar`, `Footer`, `PageHead` (eyebrow/title/lead for inner pages),
  `PhotoPlaceholder` (dashed placeholder box — swap for real `<img>` tags),
  and `Spectrum`, the reusable peak-trace SVG motif.
- `src/index.css` — all styling, custom properties (colors, fonts) at the
  top.

## Notes

- **Photos**: every `<PhotoPlaceholder />` is a dashed placeholder box, per
  your request to skip images for now. To add a real photo, replace it with
  an `<img src="/your-photo.jpg" alt="..." />` — drop the image file into
  `public/` first.
- **CV download**: the nav bar, home page, and contact page all link to
  `public/prathmesh-bhadane-cv.pdf` (your uploaded CV, included in this
  project). Replace that file to update what visitors download.
- **LinkedIn**: your CV didn't include a LinkedIn URL, so `linkedinUrl` in
  `src/data.js` currently points to a LinkedIn search for your name — swap
  in your real profile URL once you have it.
- **Google Scholar**: same situation — currently a search-query link in
  `src/data.js` (`scholarUrl`), swap for your real profile link when ready.
- **Career highlight groups**: the "AM Group" / "BNMG Group" / "UoB Visit" /
  "DK Group" cards in `src/data.js` (`collaborations`) are built from your
  notes — double check the group names and advisor attributions before
  publishing, since a couple of the lab names (e.g. "BNMG") weren't fully
  legible from the sketch.
