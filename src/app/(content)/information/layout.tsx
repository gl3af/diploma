import { Content } from "@/layouts";
import { Info } from "lucide-react";

export default async function InformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Информация" icon={<Info size={32} />}>
      {children}
    </Content>
  );
}
