import { Box } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";

import { ArticleCard } from "./article-card";
import { ThemeActions } from "./theme-actions";

type ArticlesListProps = {
  themeId: number;
  themeName: string;
  articles: RouterOutputs["directory"]["getThemes"][number]["articles"];
};

export function ArticlesList({ articles, themeId, themeName }: ArticlesListProps) {
  return (
    <Box className="space-y-4">
      <ThemeActions themeId={themeId} name={themeName} />
      <Box className="grid gap-4">
        {articles.map(({ id, name, shortContent }) => (
          <ArticleCard key={`${name}-${id}`} id={id} name={name} shortContent={shortContent} />
        ))}
      </Box>
    </Box>
  );
}
