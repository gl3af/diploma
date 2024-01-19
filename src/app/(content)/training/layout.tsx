import { Content } from "@/layouts";
import { Bike } from "lucide-react";

export const metadata = {
  title: "Дневник тренировок | My Fitness Journey",
  description:
    "Отслеживайте и записывайте свои тренировки на фитнес-платформе My Fitness Journey",
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
