import bcrypt from "bcrypt";
import * as trpc from "@trpc/server";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env";

import {
  $EditEmailSchema,
  $EditPasswordSchema,
  $EditProfileSchema,
  $RegisterSchema,
  $RegistrationSchema,
} from "./schemas";

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
  getProfile: publicProcedure.query(async ({ ctx }) => {
    const { db, session } = ctx;
    const id = session?.user.id;

    if (!id) return null;

    return db.user.findUnique({
      where: {
        id,
      },
      select: {
        email: true,
        surname: true,
        name: true,
        middlename: true,
        registrationCompleted: true,
        verified: true,
        age: true,
        education: true,
        sex: true,
      },
    });
  }),
  registration: publicProcedure.input($RegistrationSchema).mutation(async ({ input, ctx }) => {
    const { db, session } = ctx;
    const id = session?.user.id;

    return db.user.update({
      where: {
        id,
      },
      data: {
        ...input,
        registrationCompleted: true,
      },
    });
  }),
  editProfile: protectedProcedure.input($EditProfileSchema).mutation(async ({ input, ctx }) => {
    const { db, session } = ctx;
    const id = session?.user.id;

    return db.user.update({
      where: {
        id,
      },
      data: input,
    });
  }),
  editEmail: protectedProcedure.input($EditEmailSchema).mutation(async ({ input, ctx }) => {
    const { db, session } = ctx;
    const id = session?.user.id;

    return db.user.update({
      where: {
        id,
      },
      data: input,
    });
  }),
  editPassword: protectedProcedure.input($EditPasswordSchema).mutation(async ({ input, ctx }) => {
    const { db, session } = ctx;
    const { newPassword } = input;

    const id = session?.user.id;

    const password = await bcrypt.hash(newPassword, Number(env.SALT));

    return db.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
  }),
});
