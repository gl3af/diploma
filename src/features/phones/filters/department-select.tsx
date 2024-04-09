"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

import {
  Box,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Text,
} from "@/shared/ui";
import { api } from "@/trpc/react";
import { useCreateQueryString } from "@/shared/hooks";

export function DepartmentSelect() {
  const { data: departments = [], isLoading } = api.departments.getAll.useQuery();

  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryString();

  const onValueChange = (value: string) => {
    router.replace(`${pathname}?${createQueryString(value, "department")}`);
  };

  const searchParams = useSearchParams();
  const department = searchParams.get("department") ?? "";

  return (
    <Select onValueChange={onValueChange} value={department} disabled={isLoading}>
      <SelectTrigger className="h-full rounded-xl">
        <SelectValue placeholder="Выберите отдел" />
      </SelectTrigger>
      <SelectContent className="rounded-xl">
        <SelectGroup>
          <SelectLabel>
            <Box className="flex items-center justify-between">
              <Text>Отделы</Text>
              <X onClick={() => onValueChange("")} className="h-4 w-4 cursor-pointer" />
            </Box>
          </SelectLabel>
          {departments.map(({ id, name }) => (
            <SelectItem key={id} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
