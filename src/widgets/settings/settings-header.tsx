import { Box, Title } from "@/shared/ui";

export function SettingsHeader() {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-bold">
        Личный кабинет
      </Title>
    </Box>
  );
}
