"use client";

import { useSession } from "next-auth/react";

import { CreatePlanModal } from "@/features/working-plans";
import { Box, Title } from "@/shared/ui";

export function PlansHeader() {
  const { data } = useSession();
  const isAdmin = data?.user.role === "admin";

  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Просмотр планов работ
      </Title>
      {isAdmin && <CreatePlanModal />}
    </Box>
  );
}
