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
} from "@/shared/ui";

export const $Schema = z.object({
  name: z
    .string({ required_error: "Обязательное поле" })
    .trim()
    .min(1, { message: "Обязательное поле" }),
  surname: z
    .string({ required_error: "Обязательное поле" })
    .trim()
    .min(1, { message: "Обязательное поле" }),
  middlename: z.string().optional(),
  position: z
    .string({ required_error: "Обязательное поле" })
    .trim()
    .min(1, { message: "Обязательное поле" }),
  contactNumber: z
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
          name="surname"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">
                Фамилия <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Иванов"
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
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">
                Имя <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Иван"
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
          name="middlename"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">Отчество</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Иванович"
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
          name="position"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">
                Должность <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Работник"
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
          name="contactNumber"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel className="text-md text-left font-medium">
                Контактный номер <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
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
