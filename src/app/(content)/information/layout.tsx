import { Info } from "lucide-react";

import { Content } from "@/layouts";

export default async function InformationLayout({ children }: { children: React.ReactNode }) {
  return (
    <Content requiresAuth title="Информация" icon={<Info size={32} />}>
      {children}
    </Content>
  );
}
