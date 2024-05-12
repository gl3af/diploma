import { format, formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarFold, CalendarPlus, UserRound } from "lucide-react";
import Link from "next/link";

import { Badge, Box, Card, CardContent, CardFooter, CardHeader, Text } from "@/shared/ui";
import { RouterOutputs } from "@/trpc/shared";
import { getRoutes } from "@/shared/utils";

import { withFullName } from "../utils";
import { IconedText } from "./iconed-text";

type PlanCardProps = {
  plan: RouterOutputs["workingPlans"]["getAll"][number];
};

export function PlanCard({ plan }: PlanCardProps) {
  const {
    workingPlans: { href },
  } = getRoutes();

  const { user, name, id, deadline, createdAt, updatedAt, description, tasks } = plan;
  const userWithFullName = withFullName(user);

  const isDeadlineExpired = deadline < new Date();

  return (
    <Link href={`${href}/${id}`} className="transition-opacity hover:opacity-90">
      <Card className="rounded-lg">
        <CardHeader>
          <Box className="flex flex-wrap items-center gap-2">
            <Badge className="w-fit">{id}</Badge>
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
            <Text className="font-medium text-muted-foreground">Кол-во задач: {tasks.length}</Text>
          </Box>
        </CardContent>
        <CardFooter className="flex-wrap items-start justify-between gap-2 pt-4">
          <IconedText icon={<UserRound size={20} />} text={userWithFullName.fullName} />
          <Box className="grid gap-2">
            <IconedText
              icon={<CalendarPlus size={20} />}
              text={`Создан: ${format(createdAt, "dd.MM.yyyy")}`}
            />
            <IconedText
              icon={<CalendarFold size={20} />}
              text={`Изменен: ${format(updatedAt, "dd.MM.yyyy")}`}
            />
          </Box>
        </CardFooter>
      </Card>
    </Link>
  );
}
