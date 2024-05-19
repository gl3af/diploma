"use client";

import { type UseFormReturn } from "react-hook-form";
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

import { CreateSchema } from "./validation";
import { DatePicker } from "./date-picker";

type TemplateProps = {
  form: UseFormReturn<CreateSchema, unknown, undefined>;
  onSubmit: (values: CreateSchema) => Promise<void>;
  buttonContent: React.ReactNode;
  isLoading: boolean;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  maxDate: Date;
};

export function Template({
  form,
  onSubmit,
  buttonContent,
  isLoading,
  buttonRef,
  maxDate,
}: TemplateProps) {
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
                  placeholder="Задача 1"
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
          name="description"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Описание <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Сделать ..."
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
          name="deadline"
          render={({ field, fieldState }) => (
            <DatePicker field={field} fieldState={fieldState} maxDate={maxDate} />
          )}
        />
        <Button type="submit" className="w-full text-white sm:w-fit" disabled={isLoading}>
          {isLoading ? <Loader /> : buttonContent}
        </Button>
        <DialogClose ref={buttonRef} className="hidden" />
      </Box>
    </Form>
  );
}
