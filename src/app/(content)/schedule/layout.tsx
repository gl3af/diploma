import { CalendarDays } from "lucide-react";

import { Content } from "@/layouts";

export default async function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <Content requiresAuth title="Расписание" icon={<CalendarDays size={32} />}>
      {children}
    </Content>
  );
}
