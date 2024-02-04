import { Content } from "@/layouts";
import { CalendarDays } from "lucide-react";

export default async function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Расписание" icon={<CalendarDays size={32} />}>
      {children}
    </Content>
  );
}
