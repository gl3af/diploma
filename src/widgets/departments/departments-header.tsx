import { CreateDialog } from "@/features/departments";
import { Box, Title } from "@/shared/ui";
import React from "react";

export const DepartmentsHeader = () => {
  return (
    <Box className="flex items-center justify-between">
      <Title order={2} className="text-2xl font-semibold">
        Модерация отделов
      </Title>
      <CreateDialog />
    </Box>
  );
};
