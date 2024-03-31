import { Box, Card } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";
import { CardHeader, PositionsList } from "./ui";
import { NewPositionForm } from "./forms";

type DepartmentCardProps = {
  item: RouterOutputs["departments"]["getAll"][number];
};

export const DepartmentCard = ({ item }: DepartmentCardProps) => {
  const { id, name, positions } = item;

  return (
    <Card className="space-y-3 rounded-xl p-3 ">
      <CardHeader id={id} name={name} />
      <Box className="space-y-3 rounded-md border p-3">
        <PositionsList positions={positions} />
        <NewPositionForm id={id} />
      </Box>
    </Card>
  );
};
