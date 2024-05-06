"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { useRef } from "react";

import { api } from "@/trpc/react";
import { RouterOutputs } from "@/trpc/shared";

import { Template } from "./template";
import { $CreateSchema } from "./validation";

export type EditFormProps = {
  item: RouterOutputs["phones"]["getAll"][number];
};

export function EditForm({ item }: EditFormProps) {
  const { phoneNumber, fullName, position, department, id } = item;

  const form = useForm<z.infer<typeof $CreateSchema>>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      phoneNumber,
      position: position?.name ?? "",
      fullName,
      department: department?.name ?? "",
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: update, isLoading } = api.phones.update.useMutation();

  const onSubmit = async (values: z.infer<typeof $CreateSchema>) => {
    await update(
      { id, ...values },
      {
        onSuccess: () => {
          utils.phones.getAll.refetch();
          ref.current?.click();
        },
      }
    );
  };

  return (
    <Template
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      buttonContent="Изменить"
      buttonRef={ref}
    />
  );
}
