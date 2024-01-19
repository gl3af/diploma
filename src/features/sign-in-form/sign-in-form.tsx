"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { useToast } from "@/shared/hooks";

const signInSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, укажите верную почту" }),
});

export const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const { email } = values;

    const result = await signIn("email", {
      email,
      callbackUrl: `${window.location.origin}/dashboard`,
      redirect: false,
    });

    if (result?.ok) {
      toast({
        title: "Успешно!",
        description: `Ссылка отправлена на ${email}`,
      });
      return;
    }

    toast({
      variant: "destructive",
      title: "Произошла ошибка :(",
      description: "Ссылка не была отправлена, попробуйте снова",
    });
    return;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-medium">
                Почта <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="example@gmail.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-fit">
          Отправить ссылку
        </Button>
      </form>
    </Form>
  );
};
