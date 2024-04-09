import { Box, HtmlContent } from "@/shared/ui";

export function ArticleContent({ content }: { content: string | undefined }) {
  if (!content) return null;

  return (
    <Box className="grid gap-3">
      <HtmlContent content={content} />
    </Box>
  );
}
