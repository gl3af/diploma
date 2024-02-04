import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, укажите верную почту" }),
  password: z.string().min(8, "Минимальная длина пароля 8 символов"),
});
