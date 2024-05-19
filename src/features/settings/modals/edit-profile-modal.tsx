"use client";

import { EditIcon } from "@/shared/ui";
import { RouterOutputs } from "@/trpc/shared";

import { Template } from "./template";
import { EditProfileForm } from "../forms";

type EditProfileModalProps = {
  user: NonNullable<RouterOutputs["auth"]["getProfile"]>;
};

export function EditProfileModal({ user }: EditProfileModalProps) {
  return (
    <Template icon={<EditIcon />} title="Изменение личных данных">
      <EditProfileForm user={user} />
    </Template>
  );
}
