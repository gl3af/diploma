import { Box } from "@/shared/ui";

import { TaskType } from "./type";
import { InfoHeader, InfoMeta, InfoSubtasks } from "./components";

type TaskInfoProps = {
  task: TaskType;
};

export function TaskInfo({ task }: TaskInfoProps) {
  if (!task) return null;

  const {
    name,
    description,
    createdAt,
    deadline,
    updatedAt,
    subtasks,
    parent,
    plan,
    completed,
    id,
  } = task;

  return (
    <Box className="grid gap-4">
      <InfoHeader name={name} description={description} completed={completed} id={id} />
      <InfoMeta
        createdAt={createdAt}
        updatedAt={updatedAt}
        deadline={deadline}
        parent={parent}
        plan={plan}
      />
      <InfoSubtasks subtasks={subtasks} />
    </Box>
  );
}
