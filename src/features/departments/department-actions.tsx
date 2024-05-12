import { Box } from "@/shared/ui";

import { DeleteDepartmentModal, EditDepartmentModal } from "./modals";

export function DepartmentActions({ id }: { id: number }) {
  return (
    <Box className="flex items-center gap-2">
      <EditDepartmentModal id={id} />
      <DeleteDepartmentModal id={id} />
    </Box>
  );
}
