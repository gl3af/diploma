"use client";

import { EditIcon } from "@/shared/ui";

import { Template } from "./template";
import { EditTaskForm } from "../../forms";

export function EditTaskModal() {
  return (
    <Template icon={<EditIcon />} title="Изменение задачи">
      <EditTaskForm />
    </Template>
  );
}
