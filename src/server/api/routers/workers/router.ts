import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { $CreateSchema, $DeleteSchema, $UpdateSchema } from "./schemas";

export const workersRouter = createTRPCRouter({
  create: protectedProcedure.input($CreateSchema).mutation(async ({ input, ctx }) =>
    ctx.db.worker.create({
      data: input,
    })
  ),
  update: protectedProcedure.input($UpdateSchema).mutation(async ({ input, ctx }) => {
    const { id, ...data } = input;

    return ctx.db.worker.update({
      where: {
        id,
      },
      data,
    });
  }),
  delete: protectedProcedure.input($DeleteSchema).mutation(async ({ input, ctx }) =>
    ctx.db.worker.delete({
      where: {
        id: input.id,
      },
    })
  ),
});
