# Researcher portfolio

The site is built with Astro and its visible content is stored in YAML files.

## Edit content

- `src/data/profile.yaml` — name, introduction, navigation, and footer
- `src/data/dream.yaml` — dream section heading and paragraphs
- `src/data/philosophy.yaml` — research philosophy
- `src/data/beliefs.yaml` — beliefs section heading and bullet points
- `src/data/whoami.yaml` — Who am I section heading and bullet points
- `src/data/what-i-like.yaml` — What I like page heading and nested bullet points
- `src/data/following.yaml` — Following page heading and links; supports nested bullets
- `src/data/publications.yaml` — publications
- `src/data/projects.yaml` — projects
- `src/data/links.yaml` — profile links and CV

Use two spaces for YAML indentation. Every top-level collection entry needs a unique `id`.

Philosophy `body` accepts either a paragraph or a list of bullets. Use `text` and
`children` for nested bullets; `children` can repeat at any depth. For example:

```yaml
    - title: The Pareto Principle
      body:
        - A simple bullet.
        - text: A bullet with more detail.
          children:
            - A supporting point.
            - text: A point with another level.
              children:
                - A more specific explanation.
```

## Pages

- `/` — profile, dream, philosophy, beliefs, and Who am I
- `/publications/` — selected publications
- `/projects/` — projects
- `/what-i-like/` — personal interests
- `/following/` — people and sites I follow

To add interests, replace `bullets: []` in `src/data/what-i-like.yaml` with a list.
Nested items support the same `text` and `children` format as Philosophy and
are collapsed until clicked:

```yaml
- id: main
  heading: What I like
  bullets:
    - An interest
    - text: A category
      children:
        - A specific favorite
```

## Run locally

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```
