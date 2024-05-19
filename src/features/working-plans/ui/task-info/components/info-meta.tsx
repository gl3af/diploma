import { Calendar, CalendarFold, CalendarPlus } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

import { Box, Text } from "@/shared/ui";
import { getRoutes } from "@/shared/utils";

import { type TaskType } from "../type";
import { IconedText } from "../../iconed-text";

type InfoMetaProps = Pick<TaskType, "deadline" | "createdAt" | "updatedAt" | "parent" | "plan">;

export function InfoMeta({ deadline, createdAt, updatedAt, parent, plan }: InfoMetaProps) {
  const {
    workingPlans: { href },
  } = getRoutes();
  return (
    <Box className="grid gap-3">
      {parent && (
        <Text className="font-medium">
          <span className="font-semibold">Родительская задача:</span>{" "}
          <Link href={`${href}/${plan.id}/${parent.id}`} className="hover:underline">
            {parent.name}
          </Link>
        </Text>
      )}
      {plan && (
        <Text className="font-medium">
          <span className="font-semibold">План работ:</span>{" "}
          <Link href={`${href}/${plan.id}`} className="hover:underline">
            {plan.name}
          </Link>
        </Text>
      )}
      <IconedText
        icon={<Calendar size={20} />}
        text={`Срок выполнения: ${format(deadline, "dd.MM.yyyy")}`}
      />
      <IconedText
        icon={<CalendarPlus size={20} />}
        text={`Создана: ${format(createdAt, "dd.MM.yyyy")}`}
      />
      <IconedText
        icon={<CalendarFold size={20} />}
        text={`Изменена: ${format(updatedAt, "dd.MM.yyyy")}`}
      />
    </Box>
  );
}
