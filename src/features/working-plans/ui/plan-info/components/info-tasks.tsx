import { Box, Text } from "@/shared/ui";
import { CreateTaskModal } from "@/features/working-plans/modals";

import { type PlanType } from "../type";
import { TaskCard } from "./task-card";

type InfoTasksProps = Pick<PlanType, "tasks" | "id">;

export function InfoTasks({ tasks, id }: InfoTasksProps) {
  return (
    <Box className="grid gap-3">
      <Box className="flex items-center justify-between">
        <Text className="text-xl font-semibold">Задачи</Text>
        <CreateTaskModal planId={id} />
      </Box>
      <Box className="grid gap-2.5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  );
}
