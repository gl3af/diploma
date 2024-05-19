"use client";

import { useSession } from "next-auth/react";

import { CreateThemeModal } from "@/features/directory";
import { Box, Title } from "@/shared/ui";

export function DirectoryHeader() {
  const { data } = useSession();
  const isAdmin = data?.user.role === "admin";

  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Тематические статьи
      </Title>
      {isAdmin && <CreateThemeModal />}
    </Box>
  );
}
