import { Book } from "lucide-react";

import { Content } from "@/layouts";

export default async function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Content requiresAuth title="Курсы" icon={<Book size={32} />}>
      {children}
    </Content>
  );
}
