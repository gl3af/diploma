import { redirect } from "next/navigation";

import { getServerAuthSession } from "@/server/auth";
import { Box, Title } from "@/shared/ui";
import { api } from "@/trpc/server";

type ContentProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  requiresAuth?: boolean;
};

export async function Content({ title, icon, children, requiresAuth = false }: ContentProps) {
  const session = await getServerAuthSession();
  if (!session && requiresAuth) redirect("/home");

  const userData = await api.auth.getProfile.query();

  if (!!userData && !userData.registrationCompleted) redirect("/registration");
  if (!!userData && !userData.verified) redirect("/verification");

  return (
    <Box as="main" className="flex w-full flex-col gap-4 p-3 md:gap-8 md:p-6">
      <Box className="flex items-center gap-4">
        {icon}
        <Title order={1} className="text-2xl font-extrabold leading-normal lg:text-3xl">
          {title}
        </Title>
      </Box>
      <Box className="h-full rounded-xl bg-secondary p-4 md:p-6">{children}</Box>
    </Box>
  );
}
