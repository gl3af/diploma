import { z } from "zod";

export const $GetAllSchema = z
  .object({
    query: z.string().nullish(),
  })
  .optional();

export const $GetSingleSchema = z.object({
  id: z.number(),
});

const requiredError = "Обязательное поле";
export const $CreateSchema = z.object({
  name: z.string({ required_error: requiredError }).trim().min(1, "Введите название"),
  description: z.string({ required_error: requiredError }).min(1, "Введите описание"),
  userId: z.number({ required_error: requiredError }).min(1, "Выберите исполнителя"),
  deadline: z.date({
    required_error: "Выберите срок выполнения",
  }),
});

export const $DeleteSchema = $GetSingleSchema;

export const $EditSchema = $GetSingleSchema.extend({
  name: z.string({ required_error: requiredError }).trim().min(1, "Введите название"),
  description: z.string({ required_error: requiredError }).min(1, "Введите описание"),
  userId: z.number({ required_error: requiredError }).min(1, "Выберите исполнителя"),
  deadline: z.date({
    required_error: "Выберите срок выполнения",
  }),
});
