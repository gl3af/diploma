import { z } from "zod";

export const $GetAllSchema = z.object({
  query: z.string().nullish(),
});

export const $VerifySchema = z.object({
  id: z.number(),
});

export const $DeleteSchema = $VerifySchema;
