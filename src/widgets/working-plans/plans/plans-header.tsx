import { CreatePlanModal } from "@/features/working-plans";
import { Box, Title } from "@/shared/ui";

export function PlansHeader() {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Модерация планов работ
      </Title>
      <CreatePlanModal />
    </Box>
  );
}
