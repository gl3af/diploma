"use client";

import { PlanInfo } from "@/features/working-plans";
import { Loader, NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/react";

export function PlanContent({ id }: { id: number }) {
  if (Number.isNaN(id)) return <NotFoundContent />;

  const { data: plan, isFetching } = api.workingPlans.getSingle.useQuery({ id });

  if (isFetching) return <Loader size={40} />;

  if (!plan) return null;

  return <PlanInfo plan={plan} />;
}
