"use client";

import { useParams } from "next/navigation";

import { AddIcon } from "@/shared/ui";
import { api } from "@/trpc/react";

import { Template } from "./template";
import { CreateSubtaskForm } from "../../forms";

export function CreateSubtaskModal() {
  const params = useParams<{ id: string; taskId: string }>();
  const { id, taskId: task } = params;

  const planId = Number(id);
  const taskId = Number(task);

  const { data } = api.tasks.getSingle.useQuery({ id: taskId, planId });
  if (!data) return null;

  return (
    <Template icon={<AddIcon />} title="Добавление подзадачи">
      <CreateSubtaskForm maxDate={data.deadline} parentId={taskId} planId={planId} />
    </Template>
  );
}
