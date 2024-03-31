"use client";

import {
  AddIcon,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  EditIcon,
} from "@/shared/ui";
import React from "react";
import { CreateEditForm, type CreateEditFormProps } from "../create-edit-form";
import { usePathname, useRouter } from "next/navigation";
import { useCreateQueryString } from "@/shared/hooks";

type CreateEditModalProps = CreateEditFormProps;

export const CreateEditModal = (props: CreateEditModalProps) => {
  const mode = props.mode;
  const isCreateMode = mode === "create";

  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryString();

  const onOpenChange = (open: boolean) => {
    if (open) return;

    router.replace(pathname + "?" + createQueryString(null, "dept"));
  };

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {isCreateMode ? <AddIcon /> : <EditIcon />}
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">
          {`${isCreateMode ? "Добавление" : "Изменение"} записи`}
        </DialogHeader>
        <DialogDescription className="text-md font-medium">
          Заполните все поля
        </DialogDescription>
        <CreateEditForm {...props} />
      </DialogContent>
    </Dialog>
  );
};
