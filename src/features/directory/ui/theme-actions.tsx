"use client";

import { Box, Button } from "@/shared/ui";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { DeleteThemeModal } from "../modals";

export const ThemeActions = ({ themeId }: { themeId: string }) => {
  const { data } = useSession();
  if (data?.user.role !== "admin") return null;

  return (
    <Box className="flex flex-wrap gap-4">
      <Link href={`./directory/create?themeId=${themeId}`}>
        <Button size="sm">Добавить статью</Button>
      </Link>
      <DeleteThemeModal themeId={themeId} />
    </Box>
  );
};
