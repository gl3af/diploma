"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/shared/utils";
import { api } from "@/trpc/react";
import {
  Box,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Loader,
} from "@/shared/ui";

const $Schema = z.object({
  name: z
    .string({ required_error: "Введите название должности" })
    .trim()
    .min(1, { message: "Введите название должности" }),
});

export function NewPositionForm({ id }: { id: string }) {
  const form = useForm<z.infer<typeof $Schema>>({
    resolver: zodResolver($Schema),
    defaultValues: {
      name: "",
    },
  });

  const utils = api.useUtils();
  const { mutateAsync, isLoading } = api.departments.addPosition.useMutation();

  const onSubmit = async (values: z.infer<typeof $Schema>) => {
    await mutateAsync(
      {
        id,
        ...values,
      },
      {
        onSuccess: () => {
          utils.departments.getAll.invalidate();
          form.reset();
        },
      }
    );
  };

  return (
    <Form {...form}>
      <Box
        as="form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-[1fr_auto] gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Новая должность"
                  className={cn(
                    "text-md font-medium placeholder:text-sm",
                    error && "ring-2 ring-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="icon" disabled={isLoading}>
          {isLoading ? <Loader /> : <Plus />}
        </Button>
      </Box>
    </Form>
  );
}
