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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  DialogClose,
} from "@/shared/ui";
import { api } from "@/trpc/react";
import { RouterOutputs } from "@/trpc/shared";

const profileSchema = z.object({
  name: z.string({ required_error: "Обязательное поле" }),
  surname: z.string({ required_error: "Обязательное поле" }),
  middlename: z.string().optional(),
  age: z.coerce
    .number({ required_error: "Обязательное поле" })
    .positive({ message: "Возраст положителен" })
    .min(18, { message: "Минимальный возраст - 18 лет" }),
  sex: z.literal("Мужской").or(z.literal("Женский")),
  education: z.string({ required_error: "Обязательное поле" }),
});

type ProfileSchema = z.infer<typeof profileSchema>;
type EditProfileFormProps = {
  user: NonNullable<RouterOutputs["auth"]["getProfile"]>;
};

export function EditProfileForm({ user }: EditProfileFormProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const utils = api.useUtils();

  const { age, education, surname, name, middlename, sex } = user;

  const formSex = sex ?? undefined;

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      surname: surname ?? undefined,
      name: name ?? undefined,
      middlename: middlename ?? undefined,
      education: education ?? undefined,
      age: age ?? undefined,
      sex: formSex as "Мужской" | "Женский" | undefined,
    },
  });
  const { mutateAsync, isLoading } = api.auth.editProfile.useMutation();

  const onSubmit = async (values: ProfileSchema) => {
    mutateAsync(values, {
      onSuccess: () => {
        utils.auth.getProfile.invalidate();
        buttonRef.current?.click();
      },
    });
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
          {isLoading ? <Loader /> : "Изменить"}
        </Button>
        <DialogClose ref={buttonRef} className="hidden" />
      </Box>
    </Form>
  );
}
