"use client";

import { EditIcon } from "@/shared/ui";
import { api } from "@/trpc/react";

import { Template } from "./template";
import { EditDepartmentForm } from "../forms";

export function EditDepartmentModal({ id }: { id: number }) {
  const { data: department } = api.departments.getSingle.useQuery({ id });
  if (!department) return null;

  const { name, description } = department;

  return (
    <Template
      icon={<EditIcon />}
      text="Изменение отдела"
      form={<EditDepartmentForm id={id} name={name} description={description} />}
    />
  );
}
