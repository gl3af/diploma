import { Hydrate, dehydrate } from "@tanstack/react-query";

import { Content } from "@/layouts";
import { Box, NotFoundContent } from "@/shared/ui";
import { getRoutes, getQueryClient, getQueryKey } from "@/shared/utils";
import { api } from "@/trpc/server";
import { PlanContent, PlanHeader } from "@/widgets/working-plans";

type Params = {
  id: string;
};

export default async function WorkingPlanPage({ params }: { params: Params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) return <NotFoundContent />;

  const input = { id };

  const queryClient = getQueryClient();
  const queryKey = getQueryKey(["workingPlans", "getSingle"], input);

  const plan = await api.workingPlans.getSingle.query(input);
  if (!plan) return <NotFoundContent />;

  await queryClient.setQueryData(queryKey, plan);

  const { workingPlans } = getRoutes(32);
  const { label, icon } = workingPlans;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <PlanHeader planId={plan.id} />
        <Hydrate state={dehydrate(queryClient)}>
          <PlanContent id={id} />
        </Hydrate>
      </Box>
    </Content>
  );
}
