"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { type z } from "zod";

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
  Loader,
  Box,
} from "@/shared/ui";
import { api } from "@/trpc/react";

import { $CreateThemeSchema } from "./validation";

type CreateTheme = z.infer<typeof $CreateThemeSchema>;

export function EditThemeForm({ id, name }: { id: number; name: string }) {
  const form = useForm<CreateTheme>({
    resolver: zodResolver($CreateThemeSchema),
    defaultValues: {
      name,
    },
  });

  const ref = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();
  const { mutateAsync: edit, isLoading } = api.directory.editTheme.useMutation();

  const onSubmit = async (values: CreateTheme) => {
    await edit(
      { id, ...values },
      {
        onSuccess: () => {
          utils.directory.getThemes.invalidate();
          ref?.current?.click();
        },
        onError: () => form.setError("name", { message: "Данная тема уже существует" }),
      }
    );
  };

  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Название <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isLoading}
                  placeholder="Название темы"
                  className={cn(
                    "text-md font-medium placeholder:text-sm",
                    fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full space-x-2 text-white sm:w-fit" disabled={isLoading}>
          {isLoading && <Loader size={16} />}
          <Box as="span">Изменить</Box>
        </Button>
        <DialogClose ref={ref} />
      </Box>
    </Form>
  );
}
