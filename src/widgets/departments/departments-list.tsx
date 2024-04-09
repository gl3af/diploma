"use client";

import { useSearchParams } from "next/navigation";

import { api } from "@/trpc/react";
import { type RouterOutputs } from "@/trpc/shared";
import { Box, Loader } from "@/shared/ui";
import { DepartmentCard } from "@/features/departments";

type InitialData = {
  initialData: RouterOutputs["departments"]["getAll"];
};

export function DepartmentsList({ initialData }: InitialData) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const { data: departments, isFetching } = api.departments.getAll.useQuery(
    { query },
    {
      initialData,
      keepPreviousData: true,
    }
  );

  if (isFetching) return <Loader size={56} />;

  return (
    <Box as="section" className="grid gap-4 lg:grid-cols-2">
      {departments.map((department) => (
        <DepartmentCard key={department.id} item={department} />
      ))}
    </Box>
  );
}
