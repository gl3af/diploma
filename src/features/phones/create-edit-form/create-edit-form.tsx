"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/shared/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  DialogClose,
} from "@/shared/ui";
import { api } from "@/trpc/react";
import { useRef } from "react";
import { $CreateSchema } from "./validation";
import { type z } from "zod";
import { type RouterOutputs } from "@/trpc/shared";
import { DepartmentSelect } from "./department-select";
import { PositionSelect } from "./position-select";

export type CreateEditFormProps =
  | {
      mode: "create";
    }
  | {
      mode: "edit";
      item: RouterOutputs["phones"]["getAll"][number];
    };

export const CreateEditForm = (props: CreateEditFormProps) => {
  const mode = props.mode;
  const isCreateMode = mode === "create";

  const form = useForm<z.infer<typeof $CreateSchema>>({
    resolver: zodResolver($CreateSchema),
    defaultValues: {
      phoneNumber: isCreateMode ? "" : props.item.phoneNumber,
      position: isCreateMode ? "" : props.item.position.name,
      fullName: isCreateMode ? "" : props.item.fullName,
      department: isCreateMode ? "" : props.item.department.name,
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: create } = api.phones.create.useMutation();
  const { mutateAsync: update } = api.phones.update.useMutation();

  const onSubmit = async (values: z.infer<typeof $CreateSchema>) => {
    if (isCreateMode) {
      await create(values, {
        onSuccess: () => {
          void utils.phones.getAll.refetch();
          ref.current?.click();
          form.reset();
        },
      });
      return;
    }

    await update(
      { id: props.item.id, ...values },
      {
        onSuccess: () => {
          void utils.phones.getAll.refetch();
          ref.current?.click();
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                ФИО <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Иванов Иван Иванович"
                  className={cn(
                    "text-md font-medium placeholder:text-sm",
                    fieldState.error &&
                      "ring-2 ring-red-500 focus-visible:ring-red-500",
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field, fieldState }) => (
            <DepartmentSelect field={field} fieldState={fieldState} />
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field, fieldState }) => (
            <PositionSelect field={field} fieldState={fieldState} />
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Номер телефона <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  placeholder="+79999999999"
                  className={cn(
                    "text-md font-medium placeholder:text-sm",
                    error && "ring-2 ring-red-500 focus-visible:ring-red-500",
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-white sm:w-fit">
          {`${isCreateMode ? "Добавить" : "Изменить"}`}
        </Button>
        <DialogClose ref={ref} />
      </form>
    </Form>
  );
};
