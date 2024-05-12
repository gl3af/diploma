"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { useRef } from "react";
import { useParams } from "next/navigation";

import { api } from "@/trpc/react";

import { $Schema, Template } from "./template";

export function CreateWorkerForm() {
  const { id } = useParams<{ id: string }>();
  const departmentId = Number(id);

  const form = useForm<z.infer<typeof $Schema>>({
    resolver: zodResolver($Schema),
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync, isLoading } = api.workers.create.useMutation();

  const onSubmit = async (values: z.infer<typeof $Schema>) => {
    await mutateAsync(
      { departmentId, ...values },
      {
        onSuccess: () => {
          utils.departments.getSingle.invalidate();
          form.reset();
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
      buttonContent="Добавить"
      buttonRef={ref}
    />
  );
}
