"use client";

import { useSession } from "next-auth/react";

import { Box } from "@/shared/ui";

import { DeletePlanModal, EditPlanModal } from "../modals";

export function PlanActions({ planId }: { planId: number }) {
  const { data } = useSession();
  if (data?.user.role !== "admin") return null;

  return (
    <Box className="flex gap-2">
      <EditPlanModal planId={planId} />
      <DeletePlanModal planId={planId} />
    </Box>
  );
}
