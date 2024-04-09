import { createTRPCRouter, protectedProcedure } from "../../trpc";
import {
  $CreateArticleSchema,
  $GetArticleSchema,
  $DeleteArticleSchema,
  $UpdateArticleSchema,
} from "./schemas";

export const articlesRouter = createTRPCRouter({
  createArticle: protectedProcedure.input($CreateArticleSchema).mutation(async ({ input, ctx }) =>
    ctx.db.article.create({
      data: {
        ...input,
      },
    })
  ),
  getArticle: protectedProcedure.input($GetArticleSchema).query(async ({ input, ctx }) =>
    ctx.db.article.findUnique({
      where: {
        id: input.id,
      },
      include: {
        Theme: true,
      },
    })
  ),
  deleteArticle: protectedProcedure.input($DeleteArticleSchema).mutation(async ({ input, ctx }) =>
    ctx.db.article.delete({
      where: {
        id: input.id,
      },
    })
  ),
  updateArticle: protectedProcedure
    .input($UpdateArticleSchema)
    .mutation(async ({ input: { id, ...rest }, ctx }) =>
      ctx.db.article.update({
        where: {
          id,
        },
        data: { ...rest },
      })
    ),
});
