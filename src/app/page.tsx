import { redirect } from "next/navigation";

import { AuthDialog } from "@/widgets/auth";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Box, Title } from "@/shared/ui";

export default async function MainPage() {
  const session = await getServerAuthSession();

  const userData = await api.auth.getProfile.query();

  if (!userData?.registrationCompleted) redirect("/registration");
  if (!userData?.verified) redirect("/verification");

  return (
    <Box as="main" className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Title order={1} className="text-5xl font-bold">
        {session ? "Привет Диплом (auth)" : "Привет Диплом"}
      </Title>
      <AuthDialog session={session} />
    </Box>
  );
}
