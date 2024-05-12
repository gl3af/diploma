import { createTRPCRouter, protectedProcedure } from "../../trpc";
import {
  $CreateSchema,
  $DeleteSchema,
  $GetAllSchema,
  $GetSingleSchema,
  $UpdateSchema,
} from "./schemas";

export const departmentsRouter = createTRPCRouter({
  getAll: protectedProcedure.input($GetAllSchema).query(async ({ input, ctx }) =>
    ctx.db.department.findMany({
      where: {
        name: {
          contains: input?.query ?? "",
          mode: "insensitive",
        },
      },
    })
  ),
  getSingle: protectedProcedure.input($GetSingleSchema).query(async ({ input, ctx }) =>
    ctx.db.department.findFirst({
      where: {
        id: input.id,
      },
      include: {
        workers: true,
      },
    })
  ),
  create: protectedProcedure.input($CreateSchema).mutation(async ({ input, ctx }) =>
    ctx.db.department.create({
      data: {
        ...input,
        workers: {},
      },
    })
  ),
  update: protectedProcedure.input($UpdateSchema).mutation(async ({ input, ctx }) =>
    ctx.db.department.update({
      where: {
        id: input.id,
      },
      data: input,
    })
  ),
  delete: protectedProcedure.input($DeleteSchema).mutation(async ({ input, ctx }) =>
    ctx.db.department.delete({
      where: {
        id: input.id,
      },
    })
  ),
});
