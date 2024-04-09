import { AddIcon } from "@/shared/ui";

import { Template } from "./template";
import { CreateForm } from "../forms";

export function CreateDialog() {
  return <Template icon={<AddIcon />} text="Добавление отдела" form={<CreateForm />} />
}
