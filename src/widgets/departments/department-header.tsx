import { DepartmentActions } from "@/features/departments";
import { Box, Title } from "@/shared/ui";

export function DepartmentHeader({ id }: { id: number }) {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Просмотр отдела
      </Title>
      <DepartmentActions id={id} />
    </Box>
  );
}
