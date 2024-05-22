"use client";

import { useSession } from "next-auth/react";

import { Box } from "@/shared/ui";

import { DeleteDepartmentModal, EditDepartmentModal } from "./modals";

export function DepartmentActions({ id }: { id: number }) {
  const { data } = useSession();
  if (data?.user.role !== "admin") return null;

  return (
    <Box className="flex items-center gap-2">
      <EditDepartmentModal id={id} />
      <DeleteDepartmentModal id={id} />
    </Box>
  );
}
