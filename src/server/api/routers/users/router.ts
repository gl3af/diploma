import { createTRPCRouter, protectedProcedure } from "../../trpc";

export const usersRouter = createTRPCRouter({
  getAllBasic: protectedProcedure.query(async ({ ctx }) =>
    ctx.db.user.findMany({
      where: {
        role: "user",
      },
    })
  ),
});
