import { RegistrationForm } from "@/features/auth";
import { Box, Title, Text } from "@/shared/ui";

export function Registration() {
  return (
    <Box as="main" className="flex h-full min-h-screen  items-center justify-center p-4">
      <Box className="grid h-full gap-10">
        <Title order={1} className="text-center text-3xl font-extrabold">
          Регистрация
        </Title>
        <Box className="rounded-lg border-2 p-4">
          <Text className="font-lg font-medium">
            Для завершения регистрации необходимо заполнить все данные
          </Text>
        </Box>
        <Box className="rounded-lg border-2 p-4">
          <RegistrationForm />
        </Box>
      </Box>
    </Box>
  );
}
