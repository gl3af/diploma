import { z } from "zod";

export const $CreateSchema = z.object({
  departmentId: z.number(),
  name: z.string(),
  surname: z.string(),
  middlename: z.string().optional(),
  position: z.string(),
  contactNumber: z.string(),
});

export const $UpdateSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  middlename: z.string().optional(),
  position: z.string(),
  contactNumber: z.string(),
});

export const $DeleteSchema = z.object({
  id: z.number(),
});
