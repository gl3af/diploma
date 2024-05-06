"use client";

import { AddIcon } from "@/shared/ui";

import { Template } from "./template";
import { CreatePlanForm } from "../../forms";

export function CreatePlanModal() {
  return (
    <Template icon={<AddIcon />} title="Добавление плана">
      <CreatePlanForm />
    </Template>
  );
}
