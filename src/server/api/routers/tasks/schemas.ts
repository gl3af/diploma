import { z } from "zod";

const requiredError = "Обязательное поле";
export const $CreateSchema = z.object({
  name: z.string({ required_error: requiredError }).trim().min(1, "Введите название"),
  description: z.string({ required_error: requiredError }).min(1, "Введите описание"),
  planId: z.number({ required_error: requiredError }),
  deadline: z.date({
    required_error: "Выберите срок выполнения",
  }),
});

export const $UpdateSchema = z.object({
  name: z.string({ required_error: requiredError }).trim().min(1, "Введите название"),
  description: z.string({ required_error: requiredError }).min(1, "Введите описание"),
  taskId: z.number({ required_error: requiredError }),
  deadline: z.date({
    required_error: "Выберите срок выполнения",
  }),
});

export const $CreateSubtaskSchema = z.object({
  name: z.string({ required_error: requiredError }).trim().min(1, "Введите название"),
  description: z.string({ required_error: requiredError }).min(1, "Введите описание"),
  planId: z.number({ required_error: requiredError }),
  parentId: z.number({ required_error: requiredError }),
  deadline: z.date({
    required_error: "Выберите срок выполнения",
  }),
});

export const $GetSingleSchema = z.object({
  id: z.number(),
  planId: z.number(),
});

export const $DeleteSchema = z.object({
  id: z.number(),
});
