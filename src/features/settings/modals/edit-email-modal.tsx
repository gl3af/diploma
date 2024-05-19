"use client";

import { EditIcon } from "@/shared/ui";

import { Template } from "./template";
import { EditEmailForm } from "../forms";

export function EditEmailModal({ email }: { email: string }) {
  return (
    <Template icon={<EditIcon />} title="Изменение почты">
      <EditEmailForm email={email} />
    </Template>
  );
}
