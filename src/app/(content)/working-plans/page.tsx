import { Hydrate, dehydrate } from "@tanstack/react-query";

import { Content } from "@/layouts";
import { Box } from "@/shared/ui";
import { getRoutes, getQueryClient, getQueryKey } from "@/shared/utils";
import { api } from "@/trpc/server";
import { PlansFilter, PlansHeader, PlansList } from "@/widgets/working-plans";

type SearchParams = {
  query?: string;
};

export default async function WorkingPlansPage({ searchParams }: { searchParams: SearchParams }) {
  const queryClient = getQueryClient();
  const { query } = searchParams;

  const queryKey = getQueryKey(["workingPlans", "getAll"], { query: query ?? null });
  await queryClient.prefetchQuery(queryKey, () => api.workingPlans.getAll.query({ query }));

  const { workingPlans } = getRoutes(32);
  const { label, icon } = workingPlans;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <PlansHeader />
        <PlansFilter />
        <Hydrate state={dehydrate(queryClient)}>
          <PlansList />
        </Hydrate>
      </Box>
    </Content>
  );
}
