"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { useRef } from "react";

import { api } from "@/trpc/react";

import { $Schema, Template } from "./template";

export function CreateForm() {
  const form = useForm<z.infer<typeof $Schema>>({
    resolver: zodResolver($Schema),
    defaultValues: {
      name: "",
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync, isLoading } = api.departments.create.useMutation();

  const onSubmit = async (values: z.infer<typeof $Schema>) => {
    await mutateAsync(values, {
      onSuccess: () => {
        utils.departments.getAll.invalidate();
        form.reset();
        ref.current?.click();
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
