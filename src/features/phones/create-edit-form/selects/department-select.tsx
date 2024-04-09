"use client";

import { type ControllerFieldState, type ControllerRenderProps } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { cn } from "@/shared/utils";
import { api } from "@/trpc/react";
import { useCreateQueryString } from "@/shared/hooks";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

import { type CreateSchema } from "../validation";

export function DepartmentSelect({
  field,
  fieldState,
}: {
  field: ControllerRenderProps<CreateSchema, "department">;
  fieldState: ControllerFieldState;
}) {
  const { data: departments = [], isLoading } = api.departments.getAll.useQuery();

  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryString();

  const onValueChange = (value: string) => {
    router.replace(`${pathname}?${createQueryString(value, "dept")}`);
    field.onChange(value);
  };

  useEffect(() => {
    router.replace(`${pathname}?${createQueryString(field.value, "dept")}`);
  }, [field.value, createQueryString, router, pathname]);

  return (
    <FormItem className="flex flex-col gap-2 space-y-0">
      <FormLabel className="text-md text-left font-medium">
        Отдел <span className="text-red-600">*</span>
      </FormLabel>
      <Select onValueChange={onValueChange} defaultValue={field.value} disabled={isLoading}>
        <FormControl
          className={cn(fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Выберите отдел" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Отделы</SelectLabel>
            {departments.map(({ id, name }) => (
              <SelectItem key={id} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <FormMessage />
    </FormItem>
  );
}
