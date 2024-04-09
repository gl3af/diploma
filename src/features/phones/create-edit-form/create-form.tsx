"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { useRef } from "react";

import { api } from "@/trpc/react";

import { Template } from "./template";
import { $CreateSchema } from "./validation";

export function CreateForm() {
  const form = useForm<z.infer<typeof $CreateSchema>>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      phoneNumber: "",
      position: "",
      fullName: "",
      department: "",
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: create, isLoading } = api.phones.create.useMutation();

  const onSubmit = async (values: z.infer<typeof $CreateSchema>) => {
    await create(values, {
      onSuccess: () => {
        utils.phones.getAll.refetch();
        ref.current?.click();
        form.reset();
      },
    });
  };

  return (
    <Template
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      buttonContent="Добавить"
      buttonRef={ref}
    />
  );
}
