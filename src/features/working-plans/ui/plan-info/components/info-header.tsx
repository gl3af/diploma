import { Box, Text } from "@/shared/ui";

import { type PlanType } from "../type";

type InfoHeaderProps = Pick<PlanType, "name" | "description">;

export function InfoHeader({ name, description }: InfoHeaderProps) {
  return (
    <Box className="grid gap-3">
      <Text className="text-xl font-semibold">{name}</Text>
      <Text className="font-medium text-muted-foreground">{description}</Text>
    </Box>
  );
}
