import { Badge, Box, Card, Text } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";

import { PhoneActions } from "./phone-actions";

export type PhoneCardProps = {
  item: RouterOutputs["phones"]["getAll"][number];
};

export function PhoneCard({ item }: PhoneCardProps) {
  const { position, phoneNumber, fullName, department } = item;

  return (
    <Card className="flex flex-col gap-3 rounded-xl p-3 sm:p-5">
      <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-2">
          <Badge className="w-fit">{department.name}</Badge>
          <Badge className="w-fit">{position.name}</Badge>
        </Box>
        <PhoneActions item={item} />
      </Box>
      <Box className="flex flex-col items-start justify-between gap-2 sm:flex-row">
        <Text className="sm:text-lg">{fullName}</Text>
        <Text>{phoneNumber}</Text>
      </Box>
    </Card>
  );
}
