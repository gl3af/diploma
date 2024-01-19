import { Content } from "@/layouts";
import { Bike } from "lucide-react";

export const metadata = {
  title: "Статистика | My Fitness Journey",
  description:
    "Ваша статистика, собранная фитнес-платформой My Fitness Journey",
};

export default async function TrainingPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Дневник тренировок" icon={<Bike size={32} />}>
      {children}
    </Content>
  );
}
