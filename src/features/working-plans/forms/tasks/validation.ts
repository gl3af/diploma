import { z } from "zod";

const requiredError = "Обязательное поле";

export const $CreateSchema = z.object({
  name: z.string({ required_error: requiredError }).trim().min(1, "Введите название"),
  description: z.string({ required_error: requiredError }).min(1, "Введите описание"),
  deadline: z.date({
    required_error: "Выберите срок выполнения",
  }),
});

export type CreateSchema = z.infer<typeof $CreateSchema>;
