import { AddIcon } from "@/shared/ui";

import { Template } from "./template";
import { CreateWorkerForm } from "../forms";

export function CreateWorkerModal() {
  return <Template icon={<AddIcon />} text="Добавление работника" form={<CreateWorkerForm />} />;
}
