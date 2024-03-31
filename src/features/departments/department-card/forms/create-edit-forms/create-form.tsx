"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { api } from "@/trpc/react";
import { $Schema, Template } from "./template";
import { useRef } from "react";

export const CreateForm = () => {
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
        void utils.departments.getAll.invalidate();
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
};
