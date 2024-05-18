"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef } from "react";

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
  Box,
  Loader,
  DialogClose,
} from "@/shared/ui";
import { api } from "@/trpc/react";

const schema = z
  .object({
    newPassword: z.string().min(8),
    newPasswordConfirmation: z.string().min(8, { message: "Минимальная длна пароля - 8 символов" }),
  })
  .refine(({ newPassword, newPasswordConfirmation }) => newPassword === newPasswordConfirmation, {
    message: "Пароли не совпадают",
    path: ["newPasswordConfirmation"],
  });

type Schema = z.infer<typeof schema>;

export function EditPasswordForm() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const { mutateAsync, isLoading } = api.auth.editPassword.useMutation();

  const onSubmit = async (values: Schema) => {
    mutateAsync(values, {
      onSuccess: () => {
        buttonRef.current?.click();
      },
    });
  };

  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Пароль <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
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
          name="newPasswordConfirmation"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Пароль еще раз <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
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
        <Button type="submit" className="w-full text-white sm:w-fit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Изменить"}
        </Button>
        <DialogClose ref={buttonRef} className="hidden" />
      </Box>
    </Form>
  );
}
