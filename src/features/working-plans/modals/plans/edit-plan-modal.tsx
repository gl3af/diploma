"use client";

import { EditIcon } from "@/shared/ui";
import { api } from "@/trpc/react";

import { Template } from "./template";
import { EditPlanForm } from "../../forms";

export function EditPlanModal({ planId }: { planId: number }) {
  const { data: plan } = api.workingPlans.getSingle.useQuery({ id: planId });
  if (!plan) return null;

  return (
    <Template icon={<EditIcon />} title="Изменение плана">
      <EditPlanForm plan={plan} />
    </Template>
  );
}
