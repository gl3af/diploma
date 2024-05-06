import { Box, Text } from "@/shared/ui";
import { CreateSubtaskModal } from "@/features/working-plans/modals";

import { type TaskType } from "../type";
import { SubtaskCard } from "./subtask-card";

type InfoTasksProps = Pick<TaskType, "subtasks">;

export function InfoSubtasks({ subtasks }: InfoTasksProps) {
  return (
    <Box className="grid gap-3">
      <Box className="flex items-center justify-between">
        <Text className="text-xl font-semibold">Подзадачи</Text>
        <CreateSubtaskModal />
      </Box>
      <Box className="grid gap-2.5">
        {subtasks.map((subtask) => (
          <SubtaskCard key={subtask.id} subtask={subtask} />
        ))}
      </Box>
    </Box>
  );
}
