import { Content } from "@/layouts";
import { Book } from "lucide-react";

export default async function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Content requiresAuth title="Курсы" icon={<Book size={32} />}>
      {children}
    </Content>
  );
}
