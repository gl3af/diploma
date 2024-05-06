import { redirect } from "next/navigation";

import { Box, Title, Text, Loader } from "@/shared/ui";
import { api } from "@/trpc/server";

export default async function VerificationPage() {
  const userData = await api.auth.getProfile.query();

  if (!userData?.registrationCompleted) redirect("/registration");
  if (userData?.verified) redirect("/home");

  return (
    <Box as="main" className="flex h-full min-h-screen items-center justify-center p-4">
      <Box className="grid h-full max-w-[300px] gap-10">
        <Title order={1} className="text-center text-3xl font-extrabold">
          Верификация
        </Title>
        <Text className="font-xl text-center font-medium">
          Ваши данные находятся на проверке у администратора. Ожидайте результата
        </Text>
        <Loader size={56} />
      </Box>
    </Box>
  );
}
