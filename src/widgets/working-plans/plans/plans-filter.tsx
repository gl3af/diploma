"use client";

import { StringParam, useQueryParam, withDefault } from "use-query-params";
import { useSession } from "next-auth/react";

import { Input } from "@/shared/ui";
import { useDebouncedFunc } from "@/shared/hooks";

export function PlansFilter() {
  const [query, setQuery] = useQueryParam("query", withDefault(StringParam, ""));
  const { data } = useSession();
  const isAdmin = data?.user.role === "admin";

  const onChange = useDebouncedFunc(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    500
  );

  if (!isAdmin) return null;

  return (
    <Input
      placeholder="Поиск"
      className="rounded-xl py-6 text-lg caret-primary placeholder:text-lg"
      defaultValue={query}
      onChange={onChange}
    />
  );
}
