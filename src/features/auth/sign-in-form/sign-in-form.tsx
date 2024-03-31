"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useFormField,
} from "@/shared/ui";
import { authSchema } from "../schema";
import { cn } from "@/shared/utils";

export const SignInForm = () => {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof authSchema>) => {
    const { email, password } = values;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/home");
      return;
    }

    const error = result?.error?.split(":");
    const field = error?.at(0);
    const message = error?.at(1);

    form.setError(field as "password" | "email", {
      message,
    });
  };

  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
      </Box>
    </Form>
  );
};
