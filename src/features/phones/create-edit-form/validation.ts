import { z } from "zod";

const phoneRegex = /^\+?7|8(\d{10})$/;

export const $CreateSchema = z.object({
  fullName: z.string().trim().min(1, "Введите ФИО"),
  department: z.string().min(1, "Выберите должность"),
  position: z.string().min(1, "Выберите должность"),
  phoneNumber: z
    .string()
    .min(11, "Неверный формат номера")
    .regex(phoneRegex, "Неверный формат номера")
    .refine((val) => {
      if (val.at(0) === "+" && val.at(1) === "8") return false;
      return true;
    }, "Неверный формат номера"),
});

export type CreateSchema = z.infer<typeof $CreateSchema>;
