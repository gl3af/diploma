import { DepartmentSelect, NameSearch } from "@/features/phones";
import { Box } from "@/shared/ui";

export function PhonesFilter() {
  return (
    <Box className="grid gap-4 lg:grid-cols-[4fr_1fr]">
      <NameSearch />
      <DepartmentSelect />
    </Box>
  );
}
