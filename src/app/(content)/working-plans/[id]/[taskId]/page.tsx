import { Hydrate, dehydrate } from "@tanstack/react-query";

import { Content } from "@/layouts";
import { Box, NotFoundContent } from "@/shared/ui";
import { getRoutes, getQueryClient, getQueryKey } from "@/shared/utils";
import { api } from "@/trpc/server";
import { TaskHeader, TaskContent } from "@/widgets/working-plans";
import { getServerAuthSession } from "@/server/auth";

type Params = {
  id: string;
  taskId: string;
};

export default async function TaskPage({ params }: { params: Params }) {
  const session = await getServerAuthSession();
  const isAdmin = session?.user.role === "admin";

  const planId = Number(params.id);
  const id = Number(params.taskId);
  if (Number.isNaN(id) || Number.isNaN(planId)) return <NotFoundContent />;

  const input = { id, planId };

  const queryClient = getQueryClient();
  const queryKey = getQueryKey(["tasks", "getSingle"], input);

  const task = await api.tasks.getSingle.query(input);
  const notCurrentUserTask = !isAdmin && task?.plan.userId !== session?.user.id;
  if (!task || notCurrentUserTask) return <NotFoundContent />;

  await queryClient.setQueryData(queryKey, task);

  const { workingPlans } = getRoutes(32);
  const { label, icon } = workingPlans;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <Hydrate state={dehydrate(queryClient)}>
          <TaskHeader />
          <TaskContent id={id} planId={planId} />
        </Hydrate>
      </Box>
    </Content>
  );
}
