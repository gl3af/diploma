import { Undo2 } from "lucide-react";
import Link from "next/link";

import { ArticleActions } from "@/features/directory";
import { Box, Button, Text } from "@/shared/ui";

export function ArticleFooter({ id }: { id: number | undefined }) {
  return (
    <Box className="grid gap-4">
      <Button className="w-fit gap-2 bg-gray-400 hover:bg-gray-500" size="sm" asChild>
        <Link href="./" passHref>
          <Undo2 size={20} />
          <Text>К статьям</Text>
        </Link>
      </Button>
      <ArticleActions id={id} />
    </Box>
  );
}
