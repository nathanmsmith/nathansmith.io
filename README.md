# nathansmith.io

Source for [nathansmith.io](https://nathansmith.io), a static site built with
[Hugo](https://gohugo.io) and styled with [Tailwind CSS](https://tailwindcss.com)
via PostCSS.

## Prerequisites

- **Hugo (extended edition)** `0.170.0` or later; CI uses `0.170.0`. Install with
  `brew install hugo` or download from the
  [Hugo releases](https://github.com/gohugoio/hugo/releases).
- **Node.js** `20.12.0` (see `.node-version`) and npm, used for the PostCSS /
  Tailwind pipeline.

## Setup

```sh
npm ci
```

## Running locally

```sh
hugo server
```

The site is served at <http://localhost:1313> and reloads on changes. Add `-D`
to include draft posts:

```sh
hugo server -D
```

## Building

```sh
hugo --gc --minify
```

The output is written to `public/`. Production builds (`HUGO_ENVIRONMENT=production`,
the default for `hugo` without `server`) minify and fingerprint the CSS.

## Writing content

Create a new post as a page bundle:

```sh
hugo new content posts/my-new-post/index.md
```

New content is created from `archetypes/default.md` with `draft: true`; set it
to `false` (or remove the line) to publish.

## Project layout

| Path                 | Purpose                                      |
| -------------------- | -------------------------------------------- |
| `content/`           | Markdown for posts and portfolio entries     |
| `layouts/`           | Hugo templates and partials                  |
| `assets/css/`        | Stylesheets processed by PostCSS / Tailwind  |
| `static/`            | Files copied as-is to the site root          |
| `config.toml`        | Hugo site configuration                      |
| `tailwind.config.js` | Tailwind configuration                       |

## Deployment

Pushes to `main` trigger `.github/workflows/hugo.yml`, which builds the site and
deploys it to GitHub Pages.
