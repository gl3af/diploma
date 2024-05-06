"use client";

import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

import { Box } from "@/shared/ui";
import { api } from "@/trpc/react";

import { DeleteTaskModal, EditTaskModal } from "../modals";

export function TaskActions() {
  const { data: session } = useSession();
  const params = useParams<{ id: string; taskId: string }>();

  const { id: planParam, taskId: taskParam } = params;
  const planId = Number(planParam);
  const taskId = Number(taskParam);

  const { data: task } = api.tasks.getSingle.useQuery({ id: taskId, planId });
  if (!session?.user || !task) return null;

  const { role, id } = session.user;
  const canEdit = !!task.parent && task.plan?.userId === id;
  const isAdmin = role === "admin";

  if (!isAdmin && !canEdit) return null;

  return (
    <Box className="flex gap-2">
      <EditTaskModal />
      <DeleteTaskModal />
    </Box>
  );
}
