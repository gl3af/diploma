"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedFunc, useCreateQueryString } from "@/shared/hooks";
import { Input } from "@/shared/ui";

export function NameSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCreateQueryString();

  const onChange = useDebouncedFunc((e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(`${pathname}?${createQueryString(e.target.value, "name")}`);
  }, 500);

  const name = searchParams.get("name") ?? "";

  return (
    <Input
      placeholder="Поиск по ФИО"
      className="rounded-xl py-6 text-lg caret-primary placeholder:text-lg"
      defaultValue={name}
      onChange={onChange}
    />
  );
}
