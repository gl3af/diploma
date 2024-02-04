import { z } from "zod";
import bcrypt from "bcrypt";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import * as trpc from "@trpc/server";
import { env } from "@/env";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
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

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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
