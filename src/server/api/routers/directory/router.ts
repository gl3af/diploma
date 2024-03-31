import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { $CreateThemeSchema, $DeleteThemeSchema } from "./schemas";

export const directoryRouter = createTRPCRouter({
  getThemes: protectedProcedure.query(
    async ({ ctx }) =>
      await ctx.db.theme.findMany({
        include: {
          articles: true,
        },
      }),
  ),
  createTheme: protectedProcedure.input($CreateThemeSchema).mutation(
    async ({ input, ctx }) =>
      await ctx.db.theme.create({
        data: {
          name: input.name,
          articles: {},
        },
      }),
  ),
  deleteTheme: protectedProcedure.input($DeleteThemeSchema).mutation(
    async ({ input, ctx }) =>
      await ctx.db.theme.delete({
        where: {
          id: input.id,
        },
      }),
  ),
});
