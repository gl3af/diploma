import { redirect } from "next/navigation";

import { AuthDialog } from "@/widgets/auth";
import { api } from "@/trpc/server";
import { Box, Title, Text } from "@/shared/ui";

export default async function MainPage() {
  const userData = await api.auth.getProfile.query();

  if (!!userData && !userData.registrationCompleted) redirect("/registration");
  if (!!userData && !userData.verified) redirect("/verification");

  return (
    <Box
      as="main"
      className="md:max-w-1/2 flex min-h-screen flex-col items-center justify-center gap-6 px-6"
    >
      <Title
        order={1}
        className="to-danger bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:text-5xl"
      >
        Портал молодых специалистов
      </Title>
      <Text className="text-2xl font-semibold sm:text-3xl">КАЗ им. С.П. Горбунова</Text>
      <AuthDialog />
    </Box>
  );
}
