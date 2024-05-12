import { EditIcon } from "@/shared/ui";

import { Template } from "./template";
import { EditWorkerForm } from "../forms";
import { DepartmentWorker } from "../type";

type EditWorkerModalProps = DepartmentWorker;

export function EditWorkerModal({ worker }: EditWorkerModalProps) {
  return (
    <Template
      icon={<EditIcon />}
      text="Изменение работника"
      form={<EditWorkerForm worker={worker} />}
    />
  );
}
