import { Suspense } from "react";

import { Content } from "@/layouts";
import { Box, Skeleton } from "@/shared/ui";
import { DepartmentsHeader, DepartmentsList, DepartmentsSearch } from "@/widgets/departments";
import { getRoutes } from "@/shared/utils";

type SearchParams = {
  query?: string;
};

function DepartmentsListFallback() {
  return (
    <Box className="grid gap-4">
      {[...new Array(3).fill(0)].map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={item + index} className="h-32" />
      ))}
    </Box>
  );
}

export default async function DepartmentsPage({ searchParams }: { searchParams: SearchParams }) {
  const { query } = searchParams;

  const { departments } = getRoutes(32);
  const { label, icon } = departments;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <DepartmentsHeader />
        <DepartmentsSearch />
        <Suspense fallback={<DepartmentsListFallback />}>
          <DepartmentsList query={query} />
        </Suspense>
      </Box>
    </Content>
  );
}
