"use client";

import { PlanCard } from "@/features/working-plans";
import { Box, Text } from "@/shared/ui";
import { api } from "@/trpc/react";

export function PlansList({ query }: { query?: string | null }) {
  const { data: plans = [] } = api.workingPlans.getAll.useQuery({ query });

  if (!plans.length) return <Text>Здесь ничего нет</Text>;

  return (
    <Box className="grid gap-4">
      {plans.map((plan) => (
        <PlanCard plan={plan} key={plan.id} />
      ))}
    </Box>
  );
}
