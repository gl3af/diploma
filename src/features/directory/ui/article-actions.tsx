"use client";

import { Box, Button } from "@/shared/ui";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { DeleteArticleModal } from "../modals";

export const ArticleActions = ({ id }: { id: number | undefined }) => {
  const { data } = useSession();
  if (data?.user.role !== "admin" || !id) return null;

  return (
    <Box className="flex flex-wrap gap-4">
      <Link href={`./${id}/edit`} passHref>
        <Button size="sm">Изменить статью</Button>
      </Link>
      <DeleteArticleModal id={id} />
    </Box>
  );
};
