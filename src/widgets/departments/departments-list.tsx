"use client";

import { useSearchParams } from "next/navigation";

import { api } from "@/trpc/react";
import { Box, Loader } from "@/shared/ui";
import { DepartmentCard } from "@/features/departments";

export function DepartmentsList() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const { data: departments, isFetching } = api.departments.getAll.useQuery({ query });

  if (isFetching) return <Loader size={56} />;

  return (
    <Box as="section" className="grid gap-4">
      {departments?.map((department) => (
        <DepartmentCard key={department.id} department={department} />
      ))}
    </Box>
  );
}
