import { Calendar, CalendarFold, CalendarPlus } from "lucide-react";
import { format } from "date-fns";

import { Box, Text } from "@/shared/ui";

import { type TaskType } from "../type";
import { IconedText } from "../../iconed-text";

type InfoMetaProps = Pick<TaskType, "deadline" | "createdAt" | "updatedAt" | "parent" | "plan">;

export function InfoMeta({ deadline, createdAt, updatedAt, parent, plan }: InfoMetaProps) {
  return (
    <Box className="grid gap-3">
      {parent && (
        <Text className="font-medium">
          <span className="font-semibold">Родительская задача:</span> {parent.name}
        </Text>
      )}
      {plan && (
        <Text className="font-medium">
          <span className="font-semibold">План работ:</span> {plan.name}
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
