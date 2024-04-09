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

import { $CreateSchema } from "./validation";
import { DepartmentSelect, PositionSelect } from "./selects";

type CreateSchema = z.infer<typeof $CreateSchema>;

type TemplateProps = {
  form: UseFormReturn<CreateSchema, unknown, undefined>;
  onSubmit: (values: CreateSchema) => Promise<void>;
  buttonContent: React.ReactNode;
  isLoading: boolean;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
};

export function Template({
  form,
  onSubmit,
  buttonContent,
  isLoading,
  buttonRef,
}: TemplateProps) {
  return <Form {...form}>
    <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500"
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
        render={({ field, fieldState }) => <PositionSelect field={field} fieldState={fieldState} />}
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
                  error && "ring-2 ring-red-500 focus-visible:ring-red-500"
                )}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full text-white sm:w-fit">
        <Button disabled={isLoading}>{isLoading ? <Loader /> : buttonContent}</Button>
      </Button>
      <DialogClose ref={buttonRef} className="hidden" />
    </Box>
  </Form>
}
