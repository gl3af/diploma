"use client";

import { TaskInfo } from "@/features/working-plans";
import { Loader, NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/react";

export function TaskContent({ id, planId }: { id: number; planId: number }) {
  if (Number.isNaN(id)) return <NotFoundContent />;

  const { data: task, isFetching } = api.tasks.getSingle.useQuery({ id, planId });

  if (isFetching) return <Loader size={40} />;

  if (!task) return null;

  return <TaskInfo task={task} />;
}
