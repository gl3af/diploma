"use client";

import { useSearchParams } from "next/navigation";

import { PlanCard } from "@/features/working-plans";
import { Box, Loader, Text } from "@/shared/ui";
import { api } from "@/trpc/react";

export function PlansList() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
  const { data: plans = [], isFetching } = api.workingPlans.getAll.useQuery({ query });

  if (isFetching) return <Loader size={40} />;

  if (!plans.length) return <Text>Здесь ничего нет</Text>;

  return (
    <Box className="grid gap-4">
      {plans.map((plan) => (
        <PlanCard plan={plan} key={plan.id} />
      ))}
    </Box>
  );
}
