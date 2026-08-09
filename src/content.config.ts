import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const profile = defineCollection({
  loader: file("src/data/profile.yaml"),
  schema: z.object({
    name: z.string(),
    page_title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    headline: z.string(),
    introduction: z.object({
      affiliation: z.string(),
      supervisor: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
      research: z.string(),
    }),
    navigation: z.object({
      philosophy: z.string(),
      publications: z.string(),
      projects: z.string(),
    }),
    publications_heading: z.string(),
    projects_heading: z.string(),
    footer_message: z.string(),
    email: z.string(),
    copyright_year: z.number(),
  }),
});

const philosophy = defineCollection({
  loader: file("src/data/philosophy.yaml"),
  schema: z.object({
    heading: z.string(),
    lead: z.string(),
    principles: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      }),
    ),
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
  philosophy,
  publications,
  projects,
  links,
};
