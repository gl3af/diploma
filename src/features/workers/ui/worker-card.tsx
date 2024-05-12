import { withFullName } from "@/features/working-plans/utils";
import { Badge, Box, Card, CardContent, CardHeader, Text } from "@/shared/ui";

import { DepartmentWorker } from "../type";
import { WorkerActions } from "./worker-actions";

type WorkerCardProps = DepartmentWorker;

export function WorkerCard({ worker }: WorkerCardProps) {
  const workerWithFullName = withFullName(worker);

  const { fullName, id, position, contactNumber } = workerWithFullName;

  return (
    <Card>
      <CardHeader>
        <Box className="flex items-center justify-between">
          <Badge className="w-fit">{id}</Badge>
          <WorkerActions worker={worker} />
        </Box>
      </CardHeader>
      <CardContent>
        <Box className="space-y-2">
          <Text className="text-lg font-semibold">{fullName}</Text>
          <Box className="flex flex-wrap items-center justify-between font-medium text-muted-foreground">
            <Text className="text-md">{position}</Text>
            <Text className="text-md">{contactNumber}</Text>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
