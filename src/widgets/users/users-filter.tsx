"use client";

import { StringParam, useQueryParam, withDefault } from "use-query-params";

import { Input } from "@/shared/ui";
import { useDebouncedFunc } from "@/shared/hooks";

export function UsersFilter() {
  const [query, setQuery] = useQueryParam("query", withDefault(StringParam, ""));

  const onChange = useDebouncedFunc(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    500
  );

  return (
    <Input
      placeholder="Поиск"
      className="rounded-xl py-6 text-lg caret-primary placeholder:text-lg"
      defaultValue={query}
      onChange={onChange}
    />
  );
}
