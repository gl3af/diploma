import { EditIcon } from "@/shared/ui";

import { Template } from "./template";
import { EditForm } from "../forms";

export function EditDialog({ id, name }: { id: number; name: string }) {
  return (
    <Template icon={<EditIcon />} text="Изменение отдела" form={<EditForm id={id} name={name} />} />
  );
}
