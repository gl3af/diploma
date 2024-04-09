import { Settings } from "lucide-react";

import { Content } from "@/layouts";

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Content title="Настройки" icon={<Settings size={32} />}>
      {children}
    </Content>
  );
}
