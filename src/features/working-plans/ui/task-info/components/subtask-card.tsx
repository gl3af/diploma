import Link from "next/link";
import { format, formatDistance } from "date-fns";
import { ru } from "date-fns/locale";

import { Badge, Box, Card, CardContent, CardHeader, Text } from "@/shared/ui";
import { getRoutes } from "@/shared/utils";

import { type TaskType } from "../type";

type TaskCardProps = { subtask: TaskType["subtasks"][number] };

export function SubtaskCard({ subtask }: TaskCardProps) {
  const {
    workingPlans: { href },
  } = getRoutes();

  const { id, deadline, description, name, planId } = subtask;

  const isDeadlineExpired = deadline < new Date();
  const link = `${href}/${planId}/${id}`;

  return (
    <Link href={link} className="transition-opacity hover:opacity-90">
      <Card className="rounded-xl">
        <CardHeader>
          <Box className="flex flex-wrap items-center gap-2">
            <Badge className="w-fit underline">{id}</Badge>
            <Badge className="w-fit" variant="secondary">
              {format(deadline, "dd.MM.yyyy")}
            </Badge>
            <Badge className="w-fit" variant={isDeadlineExpired ? "destructive" : "secondary"}>
              {formatDistance(deadline, new Date(), { locale: ru })}
            </Badge>
          </Box>
        </CardHeader>
        <CardContent className="border-b-2">
          <Box className="grid gap-2">
            <Text className="text-lg font-semibold">{name}</Text>
            <Text className="font-medium text-muted-foreground">{description}</Text>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
