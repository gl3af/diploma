import { CreateModal } from "@/features/phones";
import { Box, Title } from "@/shared/ui";

export function PhonesHeader() {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Модерация телефонов
      </Title>
      <CreateModal />
    </Box>
  );
}
