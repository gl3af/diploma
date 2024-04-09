import { CreateThemeModal } from "@/features/directory";
import { Box, Title } from "@/shared/ui";

export function DirectoryHeader() {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Модерация справочника
      </Title>
      <CreateThemeModal />
    </Box>
  );
}
