# Researcher portfolio

The site is built with Astro and its visible content is stored in YAML files.

## Edit content

- `src/data/profile.yaml` — name, introduction, navigation, and footer
- `src/data/philosophy.yaml` — research philosophy
- `src/data/publications.yaml` — publications
- `src/data/projects.yaml` — projects
- `src/data/links.yaml` — profile links and CV

Use two spaces for YAML indentation. Every list entry needs a unique `id`.

## Run locally

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```
