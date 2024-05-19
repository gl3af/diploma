"use client";

import { api } from "@/trpc/react";
import { Box } from "@/shared/ui";
import { DepartmentCard } from "@/features/departments";

export function DepartmentsList({ query }: { query?: string | null }) {
  const { data: departments } = api.departments.getAll.useQuery({ query: query ?? "" });

  return (
    <Box as="section" className="grid gap-4">
      {departments?.map((department) => (
        <DepartmentCard key={department.id} department={department} />
      ))}
    </Box>
  );
}
