import { Template } from "./template";
import { AddIcon } from "@/shared/ui";
import { CreateForm } from "../forms";

export const CreateDialog = () => {
  return (
    <Template
      icon={<AddIcon />}
      text="Добавление отдела"
      form={<CreateForm />}
    />
  );
};
