"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { api } from "@/trpc/react";
import { RouterOutputs } from "@/trpc/shared";

import { Template } from "./template";
import { $CreateSchema, CreateSchema } from "./validation";

type EditPlanFormProps = {
  plan: NonNullable<RouterOutputs["workingPlans"]["getSingle"]>;
};

export function EditPlanForm({ plan }: EditPlanFormProps) {
  const form = useForm<CreateSchema>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      name: plan.name,
      description: plan.description ?? "",
      deadline: plan.deadline,
      userId: String(plan.userId ?? ""),
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: create, isLoading } = api.workingPlans.update.useMutation();

  const onSubmit = async (values: CreateSchema) => {
    await create(
      { ...values, userId: Number(values.userId), id: plan.id },
      {
        onSuccess: async () => {
          ref.current?.click();
          await utils.workingPlans.getSingle.invalidate();
          await utils.workingPlans.getAll.invalidate();
        },
      }
    );
  };

  return (
    <Template
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      buttonContent="Изменить план"
      buttonRef={ref}
    />
  );
}
