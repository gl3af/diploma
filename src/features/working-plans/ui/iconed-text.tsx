import { ReactNode } from "react";

import { Box, Text } from "@/shared/ui";

type IconedTextProps = {
  icon: ReactNode;
  text: string;
};

export function IconedText({ icon, text }: IconedTextProps) {
  return (
    <Box className="flex items-center gap-2">
      {icon}
      <Text className="font-medium">{text}</Text>
    </Box>
  );
}
