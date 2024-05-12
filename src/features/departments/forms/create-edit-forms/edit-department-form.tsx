"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { useRef } from "react";

import { api } from "@/trpc/react";

import { $Schema, Template } from "./template";

export type EditDepartmentFormProps = {
  id: number;
  name: string;
  description: string;
};

export function EditDepartmentForm({ id, name, description }: EditDepartmentFormProps) {
  const form = useForm<z.infer<typeof $Schema>>({
    resolver: zodResolver($Schema),
    defaultValues: {
      name,
      description,
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync, isLoading } = api.departments.update.useMutation();

  const onSubmit = async (values: z.infer<typeof $Schema>) => {
    await mutateAsync(
      {
        id,
        ...values,
      },
      {
        onSuccess: () => {
          utils.departments.getSingle.invalidate();
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
