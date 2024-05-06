import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, укажите верную почту" }),
  password: z.string().min(8, "Минимальная длина пароля 8 символов"),
});

export const registrationSchema = z.object({
  name: z.string({ required_error: "Обязательное поле" }),
  surname: z.string({ required_error: "Обязательное поле" }),
  middlename: z.string().optional(),
  age: z.coerce
    .number({ required_error: "Обязательное поле" })
    .positive({ message: "Возраст положителен" })
    .min(18, { message: "Минимальный возраст - 18 лет" }),
  sex: z.literal("Мужской").or(z.literal("Женский")),
  education: z.string({ required_error: "Обязательное поле" }),
});
