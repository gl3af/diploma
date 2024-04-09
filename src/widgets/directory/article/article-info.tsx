"use client";

import { Box } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";
import { api } from "@/trpc/react";

import { ArticleFooter } from "./acticle-footer";
import { ArticleHeader } from "./acticle-header";
import { ArticleContent } from "./article-content";

type ArticleInfoProps = {
  initialData: RouterOutputs["articles"]["getArticle"];
  id: number;
};

export function ArticleInfo({ initialData, id }: ArticleInfoProps) {
  const { data: article } = api.articles.getArticle.useQuery(
    { id },
    {
      initialData,
    }
  );
  return (
    <Box className="grid gap-6">
      <ArticleHeader article={article} />
      <ArticleContent content={article?.content} />
      <ArticleFooter id={article?.id} />
    </Box>
  );
}
