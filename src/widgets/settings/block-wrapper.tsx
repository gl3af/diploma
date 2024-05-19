import { PropsWithChildren, ReactNode } from "react";

import { Box, Text } from "@/shared/ui";

type BlockWrapperProps = {
  title: string;
  action: ReactNode;
};

export function BlockWrapper({ children, title, action }: PropsWithChildren<BlockWrapperProps>) {
  return (
    <Box className="rounded-xl border-2 border-primary bg-background p-4 md:p-6">
      <Box className="space-y-4">
        <Box className="flex items-center justify-between">
          <Text className="text-xl font-semibold">{title}</Text>
          {action}
        </Box>
        {children}
      </Box>
    </Box>
  );
}
