import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { $GetAllSchema, $VerifySchema, $DeleteSchema } from "./schemas";

export const usersRouter = createTRPCRouter({
  getAllBasic: protectedProcedure.query(async ({ ctx }) =>
    ctx.db.user.findMany({
      where: {
        role: "user",
      },
    })
  ),
  getAll: protectedProcedure.input($GetAllSchema).query(async ({ input, ctx }) => {
    const query = input?.query ?? "";

    return ctx.db.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            surname: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            middlename: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
        role: "user",
        registrationCompleted: true,
      },
      select: {
        id: true,
        name: true,
        surname: true,
        middlename: true,
        age: true,
        education: true,
        verified: true,
        email: true,
        sex: true,
      },
    });
  }),
  verify: protectedProcedure.input($VerifySchema).mutation(async ({ input, ctx }) => {
    const { id } = input;

    return ctx.db.user.update({
      where: {
        id,
      },
      data: {
        verified: true,
      },
    });
  }),
  delete: protectedProcedure.input($DeleteSchema).mutation(async ({ input, ctx }) => {
    const { id } = input;

    return ctx.db.user.delete({
      where: {
        id,
      },
    });
  }),
});
