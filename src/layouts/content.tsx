import { redirect } from "next/navigation";

import { getServerAuthSession } from "@/server/auth";
import { Box, Title } from "@/shared/ui";

type ContentProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  requiresAuth?: boolean;
};

export async function Content({ title, icon, children, requiresAuth = false }: ContentProps) {
  const session = await getServerAuthSession();
  if (!session && requiresAuth) redirect("/");

  return (
    <Box as="main" className="flex w-full flex-col gap-4 p-3 md:gap-8 md:p-6">
      <Box className="flex items-center gap-4">
        {icon}
        <Title order={1} className="text-2xl font-bold leading-normal lg:text-3xl">
          {title}
        </Title>
      </Box>
      <Box className="h-full rounded-xl bg-secondary p-4 md:p-6">{children}</Box>
    </Box>
  );
}
