import { Box, Title } from "@/shared/ui";

export function UsersHeader() {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Модерация пользователей
      </Title>
    </Box>
  );
}
