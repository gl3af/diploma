"use client";

import { type UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { type MutableRefObject } from "react";

import { cn } from "@/shared/utils";
import {
  Box,
  Button,
  DialogClose,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Loader,
  Textarea,
} from "@/shared/ui";

export const $Schema = z.object({
  name: z
    .string({ required_error: "Обязательное поле" })
    .trim()
    .min(1, { message: "Обязательное поле" }),
  description: z
    .string({ required_error: "Обязательное поле" })
    .trim()
    .min(1, { message: "Обязательное поле" }),
});

type Schema = z.infer<typeof $Schema>;

type TemplateProps = {
  form: UseFormReturn<Schema, unknown, undefined>;
  onSubmit: (values: Schema) => Promise<void>;
  buttonContent: React.ReactNode;
  isLoading: boolean;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
};

export function Template({ form, onSubmit, buttonContent, isLoading, buttonRef }: TemplateProps) {
  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">
                Название <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Отдел"
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
        <FormField
          control={form.control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">
                Описание <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Занимается ..."
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
        <Button disabled={isLoading}>{isLoading ? <Loader /> : buttonContent}</Button>
      </Box>
      <DialogClose ref={buttonRef} className="hidden" />
    </Form>
  );
}
