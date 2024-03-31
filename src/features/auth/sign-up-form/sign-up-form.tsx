"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";

import { useToast } from "@/shared/hooks";
import { authSchema } from "../schema";
import { cn } from "@/shared/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
  Input,
  Button,
} from "@/shared/ui";
import { api } from "@/trpc/react";

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const { mutateAsync } = api.auth.register.useMutation();

  const onSubmit = async (values: z.infer<typeof authSchema>) => {
    const { email, password } = values;
    await mutateAsync(
      { email, password },
      {
        onError: (e) => form.setError("email", { message: e.message }),
        onSuccess: (data) => {
          toast({
            title: "Успешно",
            description: data.message,
          });
          form.reset();
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            const { error } = useFormField();
            return (
              <FormItem className="flex flex-col gap-2 space-y-0">
                <FormLabel className="text-md text-left font-medium">
                  Почта <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="example@gmail.com"
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            const { error } = useFormField();
            return (
              <FormItem className="flex flex-col gap-2 space-y-0">
                <FormLabel className="text-md text-left font-medium">
                  Пароль <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Пароль"
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
        <Button type="submit" className="w-full text-white sm:w-fit">
          Войти
        </Button>
      </form>
    </Form>
  );
};
