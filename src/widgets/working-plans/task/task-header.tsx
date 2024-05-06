import { TaskActions } from "@/features/working-plans";
import { Box, Title } from "@/shared/ui";

export function TaskHeader() {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-xl font-semibold md:text-2xl">
        Модерация задачи
      </Title>
      <TaskActions />
    </Box>
  );
}
