import { Content } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { DepartmentsHeader, DepartmentsList, DepartmentsSearch } from "@/widgets/departments";
import { getRoutes } from "@/shared/utils";

type SearchParams = {
  query: string | null;
};

export default async function DepartmentsPage({ searchParams }: { searchParams?: SearchParams }) {
  const departmentsData = await api.departments.getAll.query({
    query: searchParams?.query ?? "",
  });

  const { departments } = getRoutes(32);
  const { label, icon } = departments;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <DepartmentsHeader />
        <DepartmentsSearch />
        <DepartmentsList initialData={departmentsData} />
      </Box>
    </Content>
  );
}
