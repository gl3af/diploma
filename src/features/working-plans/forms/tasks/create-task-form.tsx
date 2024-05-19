"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { add } from "date-fns";

import { api } from "@/trpc/react";

import { Template } from "./template";
import { $CreateSchema, CreateSchema } from "./validation";

type CreateTaskFormProps = { maxDate: Date; planId: number };

export function CreateTaskForm({ maxDate, planId }: CreateTaskFormProps) {
  const form = useForm<CreateSchema>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      name: "",
      description: "",
      deadline: undefined,
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: create, isLoading } = api.tasks.create.useMutation();

  const onSubmit = async ({ deadline, ...values }: CreateSchema) => {
    await create(
      {
        ...values,
        planId,
        deadline: add(deadline, {
          hours: 23,
          minutes: 59,
        }),
      },
      {
        onSuccess: async () => {
          await utils.workingPlans.getSingle.invalidate();
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
      buttonContent="Добавить задачу"
      buttonRef={ref}
      maxDate={maxDate}
    />
  );
}
