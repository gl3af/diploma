"use client";

import { Button } from "@/shared/ui";

import { Template } from "./template";
import { EditPasswordForm } from "../forms";

export function EditPasswordModal() {
  return (
    <Template
      icon={
        <Button className="text-md w-fit rounded-full px-5 py-5" variant="outline">
          Изменить пароль
        </Button>
      }
      title="Изменение пароля"
    >
      <EditPasswordForm />
    </Template>
  );
}
