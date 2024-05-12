"use client";

import { useSession } from "next-auth/react";

import { Box } from "@/shared/ui";

import { DepartmentWorker } from "../type";
import { EditWorkerModal, DeleteWorkerModal } from "../modals";

type WorkerActionsProps = DepartmentWorker;

export function WorkerActions({ worker }: WorkerActionsProps) {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === "admin";

  if (!isAdmin) return null;

  return (
    <Box className="flex gap-2">
      <EditWorkerModal worker={worker} />
      <DeleteWorkerModal id={worker.id} />
    </Box>
  );
}
