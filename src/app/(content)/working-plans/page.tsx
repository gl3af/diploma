import { Suspense } from "react";

import { Content } from "@/layouts";
import { Box, Skeleton } from "@/shared/ui";
import { getRoutes } from "@/shared/utils";
import { PlansFilter, PlansHeader, PlansList } from "@/widgets/working-plans";

type SearchParams = {
  query?: string;
};

function PlansListFallback() {
  return (
    <Box className="grid gap-4">
      {[...new Array(3).fill(0)].map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={item + index} className="h-64" />
      ))}
    </Box>
  );
}

export default async function WorkingPlansPage({ searchParams }: { searchParams: SearchParams }) {
  const { workingPlans } = getRoutes(32);
  const { label, icon } = workingPlans;

  const { query } = searchParams;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <PlansHeader />
        <PlansFilter />
        <Suspense fallback={<PlansListFallback />}>
          <PlansList query={query} />
        </Suspense>
      </Box>
    </Content>
  );
}
