import { Content } from "@/layouts";
import { LayoutDashboard } from "lucide-react";

export const metadata = {
  title: "Доска | My Fitness Journey",
  description: "Ваша персональная доска на фитнес-платформе My Fitness Journey",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Доска" icon={<LayoutDashboard size={32} />}>
      {children}
    </Content>
  );
}
