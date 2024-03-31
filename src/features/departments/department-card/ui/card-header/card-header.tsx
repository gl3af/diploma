import { Box, Text } from "@/shared/ui";
import React from "react";
import { DeleteDialog, EditDialog } from "../../dialogs";

export const CardHeader = ({ id, name }: { id: string; name: string }) => {
  return (
    <Box className="flex items-center justify-between">
      <Text className="text-xl font-semibold text-primary">{name}</Text>
      <Box className="flex items-center gap-2">
        <EditDialog id={id} name={name} />
        <DeleteDialog id={id} />
      </Box>
    </Box>
  );
};
