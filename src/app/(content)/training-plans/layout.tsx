import { Content } from "@/layouts";
import { Book } from "lucide-react";

export const metadata = {
  title: "Тренировочные планы | My Fitness Journey",
  description:
    "Настройте свои тренировочные планы на фитнес-платформе My Fitness Journey",
};

export default async function TrainingPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Тренировочные планы" icon={<Book size={32} />}>
      {children}
    </Content>
  );
}
