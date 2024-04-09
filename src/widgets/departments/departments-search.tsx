"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedFunc, useCreateQueryString } from "@/shared/hooks";
import { Input } from "@/shared/ui";

export function DepartmentsSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCreateQueryString();

  const onChange = useDebouncedFunc((e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(`${pathname}?${createQueryString(e.target.value)}`);
  }, 500);

  const query = searchParams.get("query") ?? "";

  return (
    <Input
      placeholder="Поиск"
      className="rounded-xl py-6 text-lg caret-primary placeholder:text-lg"
      defaultValue={query}
      onChange={onChange}
    />
  );
}
