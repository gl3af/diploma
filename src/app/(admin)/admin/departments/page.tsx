import { Building } from "lucide-react";

import { AdminContent } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { DepartmentsHeader, DepartmentsList, DepartmentsSearch } from "@/widgets/departments";

type SearchParams = {
  query: string | null;
};

export default async function Departments({ searchParams }: { searchParams?: SearchParams }) {
  const departments = await api.departments.getAll.query({
    query: searchParams?.query ?? "",
  });

  return (
    <AdminContent title="Отделы" icon={<Building size={32} />}>
      <Box className="grid gap-6">
        <DepartmentsHeader />
        <DepartmentsSearch />
        <DepartmentsList initialData={departments} />
      </Box>
    </AdminContent>
  );
}
