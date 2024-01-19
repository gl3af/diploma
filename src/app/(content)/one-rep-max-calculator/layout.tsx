import { Content } from "@/layouts";
import { Calculator } from "lucide-react";

export const metadata = {
  title: "1RM Калькулятор | My Fitness Journey",
  description:
    "Отслеживайте свои силовые показатели на фитнес-платформе My Fitness Journey",
};

export default async function OneRepMaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content title="1RM Калькулятор" icon={<Calculator size={32} />}>
      {children}
    </Content>
  );
}
