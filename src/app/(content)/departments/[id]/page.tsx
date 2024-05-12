import { Hydrate, dehydrate } from "@tanstack/react-query";

import { Content } from "@/layouts";
import { Box, NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/server";
import { DepartmentContent, DepartmentHeader } from "@/widgets/departments";
import { getQueryClient, getQueryKey, getRoutes } from "@/shared/utils";

type Params = {
  id: string;
};

export default async function DepartmentsPage({ params }: { params: Params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) return <NotFoundContent />;

  const input = { id };
  const queryClient = getQueryClient();

  const queryKey = getQueryKey(["departments", "getSingle"], input);
  await queryClient.prefetchQuery(queryKey, () => api.departments.getSingle.query(input));

  const { departments } = getRoutes(32);
  const { label, icon } = departments;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <Hydrate state={dehydrate(queryClient)}>
          <DepartmentHeader id={id} />
          <DepartmentContent id={id} />
        </Hydrate>
      </Box>
    </Content>
  );
}
