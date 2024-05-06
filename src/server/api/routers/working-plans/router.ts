import { createTRPCRouter, protectedProcedure } from "../../trpc";
import {
  $CreateSchema,
  $GetAllSchema,
  $GetSingleSchema,
  $DeleteSchema,
  $EditSchema,
} from "./schemas";

export const workingPlansRouter = createTRPCRouter({
  getAll: protectedProcedure.input($GetAllSchema).query(async ({ ctx, input }) => {
    const { db, session } = ctx;
    const query = input?.query ?? "";

    const isAdmin = session.user.role === "admin";

    const data = await db.workingPlan.findMany({
      include: {
        tasks: true,
        user: {
          select: {
            name: true,
            middlename: true,
            id: true,
            surname: true,
          },
        },
      },
      where: {
        user: {
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
        },
      },
    });

    if (!data) return [];

    return data
      .map((item) => ({
        ...item,
        tasks: item.tasks.filter((task) => !task.parentTaskId) ?? [],
      }))
      .filter((item) => {
        if (isAdmin) return true;

        return item.userId === session.user.id;
      });
  }),
  getSingle: protectedProcedure.input($GetSingleSchema).query(async ({ ctx, input }) => {
    const { db } = ctx;
    const id = input?.id;

    const data = await db.workingPlan.findFirst({
      include: {
        tasks: true,
        user: {
          select: {
            name: true,
            middlename: true,
            id: true,
            surname: true,
          },
        },
      },
      where: {
        id,
      },
    });

    if (!data) return null;

    return { ...data, tasks: data?.tasks.filter((task) => !task.parentTaskId) ?? [] };
  }),
  create: protectedProcedure.input($CreateSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { userId, ...data } = input;

    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    return db.workingPlan.create({
      data: {
        ...data,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
  }),
  update: protectedProcedure.input($EditSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { id, ...data } = input;

    return db.workingPlan.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }),
  delete: protectedProcedure.input($DeleteSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { id } = input;

    return db.workingPlan.delete({
      where: {
        id,
      },
    });
  }),
});
