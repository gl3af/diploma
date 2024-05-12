import { Hydrate, dehydrate } from "@tanstack/react-query";

import { Content } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { DepartmentsHeader, DepartmentsList, DepartmentsSearch } from "@/widgets/departments";
import { getQueryClient, getQueryKey, getRoutes } from "@/shared/utils";

type SearchParams = {
  query: string | null;
};

export default async function DepartmentsPage({ searchParams }: { searchParams?: SearchParams }) {
  const queryClient = getQueryClient();
  const query = searchParams?.query;

  const input = { query: query ?? "" };

  const queryKey = getQueryKey(["departments", "getAll"], input);
  await queryClient.prefetchQuery(queryKey, () => api.departments.getAll.query(input));

  const { departments } = getRoutes(32);
  const { label, icon } = departments;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <DepartmentsHeader />
        <DepartmentsSearch />
        <Hydrate state={dehydrate(queryClient)}>
          <DepartmentsList />
        </Hydrate>
      </Box>
    </Content>
  );
}
