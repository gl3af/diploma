import bcrypt from "bcrypt";
import * as trpc from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env";

import { $RegisterSchema } from "./schemas";

export const authRouter = createTRPCRouter({
  register: publicProcedure.input($RegisterSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;
    const { db } = ctx;

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new trpc.TRPCError({
        code: "BAD_REQUEST",
        message: "Пользователь уже существует",
      });
    }

    const hashedPassword = await bcrypt.hash(password, Number(env.SALT));

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "user",
      },
    });

    return {
      status: 201,
      message: "Аккаунт создан",
      result: newUser.email,
    };
  }),
});
