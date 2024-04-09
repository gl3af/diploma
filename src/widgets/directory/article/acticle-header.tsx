import { Badge, Box, Text, Title } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";

type ArticleHeaderProps = {
  article: RouterOutputs["articles"]["getArticle"];
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <Box className="grid gap-2">
      <Text className="text-muted-foreground">{`Тема: ${article?.Theme?.name}`}</Text>
      <Title order={2} className="text-3xl font-extrabold">
        {article?.name}
      </Title>
      <Badge className="w-fit">Статья</Badge>
    </Box>
  );
}
