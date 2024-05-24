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

const schema = z.object({
  email: z
    .string({ required_error: "Обязательное поле" })
    .trim()
    .min(1, { message: "Обязательное поле" })
    .email({ message: "Неверный формат почты" }),
});

type Schema = z.infer<typeof schema>;

export function EditEmailForm({ email }: { email: string }) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email,
    },
  });
  const { mutateAsync, isLoading } = api.auth.editEmail.useMutation();

  const onSubmit = async (values: Schema) => {
    mutateAsync(values, {
      onSuccess: () => {
        utils.auth.getProfile.invalidate();
        buttonRef.current?.click();
      },
      onError: () => form.setError("email", { message: "Данная почта занята" }),
    });
  };

  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Почта <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="example@web.com"
                  type="email"
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
