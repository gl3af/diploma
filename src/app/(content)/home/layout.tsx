import { Content } from "@/layouts";
import { Home } from "lucide-react";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Главная" icon={<Home size={32} />}>
      {children}
    </Content>
  );
}
