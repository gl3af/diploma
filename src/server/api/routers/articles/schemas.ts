import { z } from "zod";

export const $CreateArticleSchema = z.object({
  name: z.string(),
  shortContent: z.string(),
  content: z.string(),
  themeId: z.string(),
});

export const $GetArticleSchema = z.object({
  id: z.number(),
});

export const $DeleteArticleSchema = $GetArticleSchema;

export const $UpdateArticleSchema = z.object({
  id: z.number(),
  name: z.string(),
  shortContent: z.string(),
  content: z.string(),
});
