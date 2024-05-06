"use client";

import { AddIcon } from "@/shared/ui";
import { api } from "@/trpc/react";

import { Template } from "./template";
import { CreateTaskForm } from "../../forms";

export function CreateTaskModal({ planId }: { planId: number }) {
  const { data } = api.workingPlans.getSingle.useQuery({ id: planId });
  if (!data) return null;

  return (
    <Template icon={<AddIcon />} title="Добавление задачи">
      <CreateTaskForm maxDate={data.deadline} planId={planId} />
    </Template>
  );
}
