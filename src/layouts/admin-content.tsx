import { redirect } from "next/navigation";

import { getServerAuthSession } from "@/server/auth";

import { Content } from "./content";

type ContentProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export async function AdminContent({ title, icon, children }: ContentProps) {
  const session = await getServerAuthSession();
  if (session?.user.role !== "admin") redirect("/home");

  return (
    <Content title={title} icon={icon} requiresAuth>
      {children}
    </Content>
  );
}
