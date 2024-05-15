import { Calendar, CalendarFold, CalendarPlus, UserRound } from "lucide-react";
import { format } from "date-fns";

import { Box } from "@/shared/ui";
import { withFullName } from "@/shared/utils";

import { type PlanType } from "../type";
import { IconedText } from "../../iconed-text";

type InfoMetaProps = Pick<PlanType, "deadline" | "user" | "createdAt" | "updatedAt">;

export function InfoMeta({ deadline, user, createdAt, updatedAt }: InfoMetaProps) {
  const userWithFullName = withFullName(user);

  return (
    <Box className="grid gap-3">
      <IconedText icon={<UserRound size={20} />} text={userWithFullName.fullName} />
      <IconedText
        icon={<Calendar size={20} />}
        text={`Срок выполнения: ${format(deadline, "dd.MM.yyyy")}`}
      />
      <IconedText
        icon={<CalendarPlus size={20} />}
        text={`Создан: ${format(createdAt, "dd.MM.yyyy")}`}
      />
      <IconedText
        icon={<CalendarFold size={20} />}
        text={`Изменен: ${format(updatedAt, "dd.MM.yyyy")}`}
      />
    </Box>
  );
}
