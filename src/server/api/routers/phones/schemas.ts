import { z } from "zod";

export const $SingleItemSchema = z.object({
  id: z.number(),
});

export const $CreateSchema = z.object({
  fullName: z.string(),
  department: z.string(),
  position: z.string(),
  phoneNumber: z.string(),
});

export const $UpdateSchema = z.object({
  id: z.number(),
  department: z.string(),
  fullName: z.string(),
  position: z.string(),
  phoneNumber: z.string(),
});

export const $GetAllSchema = z
  .object({
    name: z.string().nullish(),
    department: z.string().nullish(),
  })
  .optional();
