"use client";

import { StringParam, useQueryParam } from "use-query-params";

import { useDebouncedFunc } from "@/shared/hooks";
import { Input } from "@/shared/ui";

export function DepartmentsSearch() {
  const [query, setQuery] = useQueryParam("query", StringParam);

  const onChange = useDebouncedFunc(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    500
  );

  return (
    <Input
      placeholder="Поиск"
      className="rounded-xl py-6 text-lg caret-primary placeholder:text-lg"
      defaultValue={query ?? ""}
      onChange={onChange}
    />
  );
}
