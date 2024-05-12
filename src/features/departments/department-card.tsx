import Link from "next/link";

import { Text, Card, CardContent, Box, CardHeader, Badge } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";
import { getRoutes } from "@/shared/utils";

type DepartmentCardProps = {
  department: RouterOutputs["departments"]["getAll"][number];
};

export function DepartmentCard({ department }: DepartmentCardProps) {
  const { id, name, description } = department;

  const {
    departments: { href },
  } = getRoutes();

  const link = `${href}/${id}`;

  return (
    <Link href={link} className="transition-opacity hover:opacity-90">
      <Card className="rounded-xl">
        <CardHeader>
          <Badge className="w-fit">{id}</Badge>
        </CardHeader>
        <CardContent>
          <Box className="space-y-2">
            <Text className="text-xl font-semibold">{name}</Text>
            <Text className="font-medium text-muted-foreground">{description}</Text>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
