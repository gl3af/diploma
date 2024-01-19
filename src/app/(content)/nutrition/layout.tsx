import { Content } from "@/layouts";
import { Apple } from "lucide-react";

export const metadata = {
  title: "Дневник питания | My Fitness Journey",
  description:
    "Удобно отслеживайте свое питания благодаря фитнес-платформе My Fitness Journey",
};

export default async function NutritionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Дневник питания" icon={<Apple size={32} />}>
      {children}
    </Content>
  );
}
