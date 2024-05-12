"use client";

import { api } from "@/trpc/react";
import { Box, Loader, Text } from "@/shared/ui";
import { WorkersList } from "@/features/workers";

export function DepartmentContent({ id }: { id: number }) {
  const { data: department, isFetching } = api.departments.getSingle.useQuery({ id });

  if (isFetching) return <Loader size={56} />;
  if (!department) return null;

  return (
    <Box className="grid gap-4">
      <Text className="text-xl font-semibold">{department.name}</Text>
      <Text className="font-medium text-muted-foreground">{department.description}</Text>
      <WorkersList />
    </Box>
  );
}
