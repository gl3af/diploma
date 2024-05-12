import { AddIcon } from "@/shared/ui";

import { Template } from "./template";
import { CreateDepartmentForm } from "../forms";

export function CreateDepartmentModal() {
  return <Template icon={<AddIcon />} text="Добавление отдела" form={<CreateDepartmentForm />} />;
}
