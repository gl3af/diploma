"use client";

import { type UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/shared/utils";
import {
  Box,
  Button,
  DialogClose,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Loader,
  useFormField,
} from "@/shared/ui";
import { type MutableRefObject } from "react";

export const $Schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof $Schema>;

type TemplateProps = {
  form: UseFormReturn<Schema, unknown, undefined>;
  onSubmit: (values: Schema) => Promise<void>;
  buttonContent: React.ReactNode;
  isLoading: boolean;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
};

export const Template = ({
  form,
  onSubmit,
  buttonContent,
  isLoading,
  buttonRef,
}: TemplateProps) => {
  return (
    <Form {...form}>
      <Box
        as="form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            const { error } = useFormField();
            return (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Название"
                    className={cn(
                      "text-md font-medium placeholder:text-sm",
                      error && "ring-2 ring-red-500 focus-visible:ring-red-500",
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button disabled={isLoading}>
          {isLoading ? <Loader /> : buttonContent}
        </Button>
      </Box>
      <DialogClose ref={buttonRef} className="hidden" />
    </Form>
  );
};
