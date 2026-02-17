import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const projects = defineCollection({
	loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/projects" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		image: image(),
		externalUrl: z.string().url(),
		order: z.number(),
	}),
});

export const collections = { projects };
