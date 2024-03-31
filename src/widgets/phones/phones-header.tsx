import { CreateEditModal } from "@/features/phones";
import { Box, Title } from "@/shared/ui";
import React from "react";

export const PhonesHeader = () => {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Модерация телефонов
      </Title>
      <CreateEditModal mode="create" />
    </Box>
  );
};
