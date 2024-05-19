import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { $CreateThemeSchema, $DeleteThemeSchema } from "./schemas";

export const directoryRouter = createTRPCRouter({
  getThemes: protectedProcedure.query(async ({ ctx }) => {
    const { db, session } = ctx;

    const isAdmin = session.user.role === "admin";

    const data = await db.theme.findMany({
      include: {
        articles: true,
      },
    });

    return data.filter((item) => {
      if (isAdmin) return true;

      return item.articles.length > 0;
    });
  }),
  createTheme: protectedProcedure.input($CreateThemeSchema).mutation(async ({ input, ctx }) =>
    ctx.db.theme.create({
      data: {
        name: input.name,
        articles: {},
      },
    })
  ),
  deleteTheme: protectedProcedure.input($DeleteThemeSchema).mutation(async ({ input, ctx }) =>
    ctx.db.theme.delete({
      where: {
        id: input.id,
      },
    })
  ),
});
