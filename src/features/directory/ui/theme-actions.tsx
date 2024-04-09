"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

import { Box, Button } from "@/shared/ui";

import { DeleteThemeModal } from "../modals";

export function ThemeActions({ themeId }: { themeId: string }) {
  const { data } = useSession();
  if (data?.user.role !== "admin") return null;

  return (
    <Box className="flex flex-wrap gap-4">
      <Link href={`./directory/create?themeId=${themeId}`} passHref>
        <Button size="sm">Добавить статью</Button>
      </Link>
      <DeleteThemeModal themeId={themeId} />
    </Box>
  );
}
