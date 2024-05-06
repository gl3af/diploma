import { z } from "zod";

export const $DeleteSchema = z.object({
  id: z.number(),
});

export const $GetAllSchema = z
  .object({
    query: z.string(),
  })
  .optional();

export const $CreateSchema = z.object({
  name: z.string(),
});

export const $UpdateSchema = $CreateSchema.extend({
  id: z.number(),
});

export const $GetByNameSchema = z.object({
  name: z.string().nullable(),
});
