"use client";

import { AccordionContent, AccordionItem, AccordionTrigger, Card, Text } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";

import { ArticlesList } from "./articles-list";

type ThemeCardProps = {
  theme: RouterOutputs["directory"]["getThemes"][number];
};

export function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <Card className="px-4">
      <AccordionItem value={`${theme.name}-${theme.id}`} className="border-0">
        <AccordionTrigger>
          <Text className="text-xl font-semibold">{theme.name}</Text>
        </AccordionTrigger>
        <AccordionContent>
          <ArticlesList articles={theme.articles} themeId={theme.id} themeName={theme.name} />
        </AccordionContent>
      </AccordionItem>
    </Card>
  );
}
