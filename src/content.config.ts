import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import type { Bullet } from "./types/bullet";

const bulletSchema: z.ZodType<Bullet> = z.lazy(() => z.union([
  z.string(),
  z.object({
    text: z.string(),
    url: z.string().url().optional(),
    children: z.array(bulletSchema).optional(),
  }),
]));

const profile = defineCollection({
  loader: file("src/data/profile.yaml"),
  schema: z.object({
    name: z.string(),
    page_title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    introduction: z.object({
      affiliation: z.string(),
      supervisor: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
      research: z.string(),
    }),
    navigation: z.object({
      dream: z.string(),
      philosophy: z.string(),
      beliefs: z.string(),
      publications: z.string(),
      projects: z.string(),
      what_i_like: z.string(),
      following: z.string(),
      thinking: z.string(),
    }),
    publications_heading: z.string(),
    projects_heading: z.string(),
    footer_message: z.string(),
    email: z.string(),
    copyright_year: z.number(),
  }),
});

const dream = defineCollection({
  loader: file("src/data/dream.yaml"),
  schema: z.object({
    heading: z.string(),
    paragraphs: z.array(z.string()).default([]),
  }),
});

const philosophy = defineCollection({
  loader: file("src/data/philosophy.yaml"),
  schema: z.object({
    heading: z.string(),
    principles: z.array(
      z.object({
        title: z.string(),
        body: z.union([z.string(), z.array(bulletSchema)]).transform(
          (body) => typeof body === "string" ? [body] : body,
        ),
      }),
    ),
  }),
});

const beliefs = defineCollection({
  loader: file("src/data/beliefs.yaml"),
  schema: z.object({
    heading: z.string(),
    paragraphs: z.array(
      z.object({
        text: z.string(),
        url: z.string().url().optional(),
      }),
    ).default([]),
  }),
});

const whoami = defineCollection({
  loader: file("src/data/whoami.yaml"),
  schema: z.object({
    heading: z.string(),
    bullets: z.array(bulletSchema).default([]),
  }),
});

const likes = defineCollection({
  loader: file("src/data/what-i-like.yaml"),
  schema: z.object({
    heading: z.string(),
    bullets: z.array(bulletSchema).default([]),
  }),
});

const following = defineCollection({
  loader: file("src/data/following.yaml"),
  schema: z.object({
    heading: z.string(),
    bullets: z.array(bulletSchema).default([]),
  }),
});

const thinking = defineCollection({
  loader: file("src/data/thinking.yaml"),
  schema: z.object({
    heading: z.string(),
    bullets: z.array(bulletSchema).default([]),
  }),
});

const publications = defineCollection({
  loader: file("src/data/publications.yaml"),
  schema: z.object({
    year: z.number(),
    title: z.string(),
    url: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        highlight: z.boolean().default(false),
      }),
    ),
    venue: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .default([]),
  }),
});

const projects = defineCollection({
  loader: file("src/data/projects.yaml"),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    meta: z.array(z.string()).default([]),
    year: z.number(),
  }),
});

const links = defineCollection({
  loader: file("src/data/links.yaml"),
  schema: z.object({
    order: z.number(),
    label: z.string(),
    url: z.string().optional(),
    show_arrow: z.boolean().default(false),
  }),
});

export const collections = {
  profile,
  dream,
  philosophy,
  beliefs,
  whoami,
  likes,
  following,
  thinking,
  publications,
  projects,
  links,
};
