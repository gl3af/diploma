import { Badge, Box, Text, Title } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";
import React from "react";

type ArticleHeaderProps = {
  article: RouterOutputs["articles"]["getArticle"];
};

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <Box className="grid gap-2">
      <Text className="text-muted-foreground">{`Тема: ${article?.Theme?.name}`}</Text>
      <Title order={2} className="text-3xl font-extrabold">
        {article?.name}
      </Title>
      <Badge className="w-fit">Статья</Badge>
    </Box>
  );
};
