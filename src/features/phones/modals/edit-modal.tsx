"use client";

import { EditIcon } from "@/shared/ui";

import { Template } from "./template";
import { EditForm, EditFormProps } from "../create-edit-form";

type EditModalProps = EditFormProps;

export function EditModal({ item }: EditModalProps) {
  return <Template icon={<EditIcon />} title="Изменение записи">
    <EditForm item={item} />
  </Template>
}
