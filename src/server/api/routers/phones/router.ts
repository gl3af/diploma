import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { $CreateSchema, $UpdateSchema, $GetAllSchema, $SingleItemSchema } from "./schemas";

export const phonesRouter = createTRPCRouter({
  getAll: protectedProcedure.input($GetAllSchema).query(async ({ ctx, input }) => {
    const { db } = ctx;

    const department = await db.department.findFirst({
      where: {
        name: {
          contains: input?.department ?? "",
          mode: "insensitive",
        },
      },
    });

    const data = await db.phone.findMany({
      include: {
        department: true,
        position: true,
      },
      where: {
        fullName: {
          contains: input?.name ?? "",
          mode: "insensitive",
        },
        departmentId: input?.department ? department?.id : undefined,
      },
    });

    return data;
  }),
  delete: protectedProcedure.input($SingleItemSchema).mutation(async ({ input: { id }, ctx }) =>
    ctx.db.phone.delete({
      where: {
        id,
      },
    })
  ),
  create: protectedProcedure.input($CreateSchema).mutation(async ({ input, ctx }) => {
    const { db } = ctx;

    const department = await db.department.findFirst({
      where: {
        name: input.department,
      },
    });

    const position = await db.position.findFirst({
      where: {
        name: input.position,
        departmentId: department?.id,
      },
    });

    return ctx.db.phone.create({
      data: {
        ...input,
        department: {
          connect: {
            id: department?.id,
          },
        },
        position: {
          connect: {
            id: position?.id,
          },
        },
      },
    });
  }),
  update: protectedProcedure.input($UpdateSchema).mutation(async ({ input, ctx }) => {
    const { db } = ctx;
    const { id, ...data } = input;

    const department = await db.department.findFirst({
      where: {
        name: input.department,
      },
    });

    const position = await db.position.findFirst({
      where: {
        name: input.position,
        departmentId: department?.id,
      },
    });

    return ctx.db.phone.update({
      where: {
        id,
      },
      data: {
        ...data,
        department: {
          connect: {
            id: department?.id,
          },
        },
        position: {
          connect: {
            id: position?.id,
          },
        },
      },
    });
  }),
});
