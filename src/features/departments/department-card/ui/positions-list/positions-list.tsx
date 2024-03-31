import { Box, Text } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";

type PositionsListProps = {
  positions: RouterOutputs["departments"]["getAll"][number]["positions"];
};

export const PositionsList = ({ positions }: PositionsListProps) => {
  if (!positions.length) return <Text>Должности не добавлены</Text>;

  return (
    <>
      <Text className="text-lg font-semibold">Должности</Text>
      <Box className="grid gap-2 sm:grid-cols-2">
        {positions.map((position) => (
          <Box key={position.id}>{position.name}</Box>
        ))}
      </Box>
    </>
  );
};
