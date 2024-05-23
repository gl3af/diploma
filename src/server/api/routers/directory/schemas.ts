import { z } from "zod";

export const $CreateThemeSchema = z.object({
  name: z.string(),
});

export const $EditThemeSchema = z.object({
  name: z.string(),
  id: z.number(),
});

export const $DeleteThemeSchema = z.object({
  id: z.number(),
});
