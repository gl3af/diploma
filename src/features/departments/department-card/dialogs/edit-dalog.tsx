import { Template } from "./template";
import { EditIcon } from "@/shared/ui";
import { EditForm } from "../forms";

export const EditDialog = ({ id, name }: { id: string; name: string }) => {
  return (
    <Template
      icon={<EditIcon />}
      text="Изменение отдела"
      form={<EditForm id={id} name={name} />}
    />
  );
};
