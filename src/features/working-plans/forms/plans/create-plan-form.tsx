"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { api } from "@/trpc/react";

import { Template } from "./template";
import { $CreateSchema, CreateSchema } from "./validation";

export function CreatePlanForm() {
  const form = useForm<CreateSchema>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      name: "",
      description: "",
      deadline: undefined,
      userId: undefined,
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: create, isLoading } = api.workingPlans.create.useMutation();

  const onSubmit = async (values: CreateSchema) => {
    await create(
      { ...values, userId: Number(values.userId) },
      {
        onSuccess: () => {
          utils.workingPlans.getAll.invalidate();
          ref.current?.click();
          form.reset();
        },
      }
    );
  };

  return (
    <Template
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      buttonContent="Добавить план"
      buttonRef={ref}
    />
  );
}
