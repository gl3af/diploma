import { PlanActions } from "@/features/working-plans";
import { Box, Title } from "@/shared/ui";

export function PlanHeader({ planId }: { planId: number }) {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-xl font-semibold md:text-2xl">
        Модерация плана работ
      </Title>
      <PlanActions planId={planId} />
    </Box>
  );
}
