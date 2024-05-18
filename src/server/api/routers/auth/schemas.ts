import { z } from "zod";

export const $RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const $RegistrationSchema = z.object({
  name: z.string({ required_error: "Обязательное поле" }),
  surname: z.string({ required_error: "Обязательное поле" }),
  middlename: z.string().optional(),
  age: z
    .number({ required_error: "Обязательное поле" })
    .positive({ message: "Возраст положителен" })
    .min(18, { message: "Минимальный возраст - 18 лет" }),
  sex: z.literal("Мужской").or(z.literal("Женский")),
  education: z.string({ required_error: "Обязательное поле" }),
});

export const $EditProfileSchema = $RegistrationSchema;

export const $EditEmailSchema = z.object({
  email: z.string().email(),
});

export const $EditPasswordSchema = z.object({
  newPassword: z.string().min(8),
});
