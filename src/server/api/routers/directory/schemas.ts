import { z } from "zod";

export const $CreateThemeSchema = z.object({
  name: z.string(),
});

export const $DeleteThemeSchema = z.object({
  id: z.number(),
});
