import { z } from "zod";

export const $GetAllSchema = z
  .object({
    query: z.string(),
  })
  .optional();

export const $GetSingleSchema = z.object({
  id: z.number(),
});

export const $CreateSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const $UpdateSchema = $CreateSchema.extend({
  id: z.number(),
});

export const $DeleteSchema = $GetSingleSchema;
