import { cn, withFullName } from "@/shared/utils";
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
import { api } from "@/trpc/react";

import { ComponentsProps } from "./type";

export function UserSelect({ field, fieldState }: ComponentsProps<"userId">) {
  const { data: basicUsers = [], isLoading } = api.users.getAllBasic.useQuery();

  return (
    <FormItem className="flex flex-col gap-2 space-y-0">
      <FormLabel className="text-md text-left font-medium">
        Исполнитель <span className="text-red-600">*</span>
      </FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={String(field.value ?? "")}
        disabled={isLoading}
      >
        <FormControl
          className={cn(fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Выберите исполнителя" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Исполнители</SelectLabel>
            {basicUsers.map((user) => {
              const { id, fullName } = withFullName(user);
              return (
                <SelectItem key={id} value={String(id)} className="font-medium">
                  {`${id}) ${fullName}`}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
