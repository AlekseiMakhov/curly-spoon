# Portfolio — Arina Makhova

Personal portfolio site built with Astro (static output).

## Язык общения

Отвечать пользователю и выводить план (plan mode) на русском языке.

**Figma:** https://www.figma.com/design/kHZWmh0APIvFGjVQfjWII9/Portfolio?node-id=595-238

## Commands

```bash
npm run dev      # dev server at localhost:4321
npm run build    # build to dist/
npm run preview  # preview built output
```

## Stack

- **Astro 6** — static site generator, no JS framework
- **CSS variables** — no Tailwind, no CSS modules
- **Fonts** — Sharphy (display) + Silka Mono (UI), loaded from `/public/fonts/`

## Project structure

```
src/
├── pages/
│   ├── index.astro           # Projects list (homepage)
│   └── projects/[slug].astro    # Project detail page
├── components/
│   ├── Nav.astro             # Fixed header + mobile hamburger menu
│   └── ProjectGallery.astro  # Gallery grid (1 / 2 / 3 columns)
├── layouts/
│   └── Layout.astro          # Base HTML shell, imports Nav
├── styles/
│   └── global.css            # @font-face, CSS vars, reset
└── content/
    └── projects/                # Per-project JSON (slug, title, gallery items)
        ├── gisou.json
        ├── omut.json
        └── balmain.json
```

## Adding / editing a project

Edit the JSON in `src/content/projects/<slug>.json`. Each file has:

- `slug` — URL segment (`/projects/<slug>`)
- `index` — display number ("01", "02" …)
- `title` — all-caps project name
- `next` — slug of the next project (cycles)
- `description` — body text on detail page
- `cover` — path to cover image shown on homepage hover + mobile thumbnail
- `marquee` — ordered blocks for the homepage hover marquee (the project name is prepended automatically). Each block:
  - `{ "type": "image", "src": … }` / `{ "type": "video", "src": … }` — media; sized by its natural proportions unless pinned with `ratio` (e.g. `"4/5"`, `"9/16"`) or `width` (e.g. `"320px"`)
  - `{ "type": "text" }` — caption (460px wide, 70px side gaps); uses the project `description`, or pass `"value"` to override
- `gallery` — ordered array of rows, each with:
  - `cols: 1` — full-width image or video
  - `cols: 2` — two-column row; requires `pair` (second image/video path)
  - `cols: 3` — three-column row; requires `pair` + `pair2`; right two cells render as `<video autoplay loop muted>`

## Media

Place files under `public/media/<slug>/`. The gallery JSON paths reference these directly (e.g. `/media/gisou/01.jpg`).

Short looping videos (3–5 s) go in the `cols: 3` rows — they are rendered as `<video autoplay loop muted playsinline>` with a 9:16 aspect ratio.

## Design tokens (CSS variables)

| Variable           | Value      | Usage                        |
|--------------------|------------|------------------------------|
| `--color-bg`       | `#141414`  | Page background              |
| `--color-text`     | `#ffffff`  | All text and lines           |
| `--color-placeholder` | `#333333` | Empty video/image slots   |
| `--font-display`   | Sharphy    | Headlines, nav, project names |
| `--font-mono`      | Silka Mono | Index numbers, body text     |
| `--nav-height`     | `65px`     | Fixed nav offset             |
| `--page-padding`   | `40px`     | Horizontal page padding      |
| `--gap-gallery`    | `40px`     | Gap between gallery rows/cells |
