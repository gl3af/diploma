"use client";

import { AddIcon } from "@/shared/ui";

import { Template } from "./template";
import { CreateForm } from "../create-edit-form";

export function CreateModal() {
  return <Template icon={<AddIcon />} title="Добавление записи">
    <CreateForm />
  </Template>
}
