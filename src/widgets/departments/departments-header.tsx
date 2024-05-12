import { CreateDepartmentModal } from "@/features/departments";
import { getServerAuthSession } from "@/server/auth";
import { Box, Title } from "@/shared/ui";

export async function DepartmentsHeader() {
  const session = await getServerAuthSession();
  const isAdmin = session?.user.role === "admin";

  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Просмотр отделов
      </Title>
      {isAdmin && <CreateDepartmentModal />}
    </Box>
  );
}
