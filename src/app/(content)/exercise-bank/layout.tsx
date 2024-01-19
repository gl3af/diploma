import { Content } from "@/layouts";
import { Dumbbell } from "lucide-react";

export const metadata = {
  title: "Банк упражнений | My Fitness Journey",
  description:
    "Большой банк упражнений, собранных самостоятельно фитнес-платформой My Fitness Journey",
};

export default async function ExerciseBankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content title="Банк упражнений" icon={<Dumbbell size={32} />}>
      {children}
    </Content>
  );
}
