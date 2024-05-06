"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui";
import { api } from "@/trpc/react";

import { registrationSchema } from "../schema";

import type * as z from "zod";

type RegistrationSchema = z.infer<typeof registrationSchema>;

export function RegistrationForm() {
  const router = useRouter();

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      sex: "Мужской",
    },
  });
  const { mutateAsync, isLoading } = api.auth.registration.useMutation();

  const onSubmit = async (values: RegistrationSchema) => {
    mutateAsync(values, { onSuccess: () => router.replace("/verification") });
  };

  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="surname"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
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
            <FormItem className="flex flex-col gap-2 space-y-0">
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
            <FormItem className="flex flex-col gap-2 space-y-0">
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
          name="age"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Возраст <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="22"
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
          name="sex"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Пол <span className="text-red-600">*</span>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isLoading}
              >
                <FormControl
                  className={cn(error && "ring-2 ring-red-500 focus-visible:ring-red-500")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите пол" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-md" value="Мужской">
                    Мужской
                  </SelectItem>
                  <SelectItem className="text-md" value="Женский">
                    Женский
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="education"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Образование <span className="text-red-600">*</span>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isLoading}
              >
                <FormControl
                  className={cn(error && "ring-2 ring-red-500 focus-visible:ring-red-500")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите образование" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-md" value="Основное общее">
                    Основное общее
                  </SelectItem>
                  <SelectItem className="text-md" value="Среднее общее">
                    Среднее общее
                  </SelectItem>
                  <SelectItem className="text-md" value="Среднее профессиональное">
                    Среднее профессиональное
                  </SelectItem>
                  <SelectItem className="text-md" value="Высшее - бакалавриат">
                    Высшее - бакалавриат
                  </SelectItem>
                  <SelectItem className="text-md" value="Высшее - специалитет">
                    Высшее - специалитет
                  </SelectItem>
                  <SelectItem className="text-md" value="Высшее - магистратура">
                    Высшее - магистратура
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-white sm:w-fit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Регистрация"}
        </Button>
      </Box>
    </Form>
  );
}
