import { Box, HtmlContent } from "@/shared/ui";
import React from "react";

export const ArticleContent = ({
  content,
}: {
  content: string | undefined;
}) => {
  if (!content) return null;

  return (
    <Box className="grid gap-3">
      <HtmlContent content={content} />
    </Box>
  );
};
