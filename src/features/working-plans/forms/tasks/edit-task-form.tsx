"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useParams } from "next/navigation";

import { api } from "@/trpc/react";
import { transformDeadline } from "@/shared/utils";

import { Template } from "./template";
import { $CreateSchema, CreateSchema } from "./validation";

export function EditTaskForm() {
  const { id: planParam, taskId: taskParam } = useParams<{ id: string; taskId: string }>();
  const planId = Number(planParam);
  const taskId = Number(taskParam);

  const { data: task } = api.tasks.getSingle.useQuery({ id: taskId, planId });

  const form = useForm<CreateSchema>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      name: task?.name,
      description: task?.description,
      deadline: task?.deadline,
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: create, isLoading } = api.tasks.update.useMutation();

  const onSubmit = async ({ deadline, ...values }: CreateSchema) => {
    await create(
      {
        ...values,
        taskId,
        deadline: transformDeadline(deadline),
      },
      {
        onSuccess: async () => {
          await utils.tasks.getSingle.invalidate();
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
      buttonContent="Изменить задачу"
      buttonRef={ref}
      maxDate={task?.parent?.deadline ?? task?.plan?.deadline ?? new Date()}
    />
  );
}
