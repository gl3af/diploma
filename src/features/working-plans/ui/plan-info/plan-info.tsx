import { Box } from "@/shared/ui";

import { PlanType } from "./type";
import { InfoHeader, InfoMeta, InfoTasks } from "./components";

type PlanInfoProps = {
  plan: PlanType;
};

export function PlanInfo({ plan }: PlanInfoProps) {
  if (!plan) return null;

  const { name, description, user, createdAt, deadline, updatedAt, tasks, id } = plan;

  return (
    <Box className="grid gap-4">
      <InfoHeader name={name} description={description} />
      <InfoMeta user={user} createdAt={createdAt} updatedAt={updatedAt} deadline={deadline} />
      <InfoTasks tasks={tasks} id={id} />
    </Box>
  );
}
