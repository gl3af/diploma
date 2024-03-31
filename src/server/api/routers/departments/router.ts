import { createTRPCRouter, protectedProcedure } from "../../trpc";
import {
  $CreateSchema,
  $DeleteSchema,
  $GetAllSchema,
  $GetByNameSchema,
  $UpdateSchema,
} from "./schemas";

export const departmentsRouter = createTRPCRouter({
  getAll: protectedProcedure.input($GetAllSchema).query(
    async ({ input, ctx }) =>
      await ctx.db.department.findMany({
        include: {
          positions: true,
        },
        where: {
          name: {
            contains: input?.query ?? "",
            mode: "insensitive",
          },
        },
      }),
  ),
  getByName: protectedProcedure.input($GetByNameSchema).query(
    async ({ input, ctx }) =>
      await ctx.db.department.findFirst({
        include: {
          positions: true,
        },
        where: {
          name: input.name ?? "",
        },
      }),
  ),
  create: protectedProcedure.input($CreateSchema).mutation(
    async ({ input, ctx }) =>
      await ctx.db.department.create({
        data: {
          ...input,
          positions: {},
        },
      }),
  ),
  update: protectedProcedure.input($UpdateSchema).mutation(
    async ({ input, ctx }) =>
      await ctx.db.department.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      }),
  ),
  delete: protectedProcedure
    .input($DeleteSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.position.deleteMany({
        where: {
          departmentId: input.id,
        },
      });

      return await ctx.db.department.delete({
        where: {
          id: input.id,
        },
      });
    }),
  addPosition: protectedProcedure
    .input($UpdateSchema)
    .mutation(async ({ input, ctx }) => {
      const position = await ctx.db.position.create({
        data: {
          name: input.name,
          departmentId: input.id,
        },
      });

      return await ctx.db.department.update({
        where: {
          id: input.id,
        },
        data: {
          positions: {
            connect: {
              id: position.id,
            },
          },
        },
      });
    }),
});
