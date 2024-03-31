import { Badge, Box, Card, Text } from "@/shared/ui";
import { type RouterOutputs } from "@/trpc/shared";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

type ActicleCardProps = Pick<
  RouterOutputs["directory"]["getThemes"][number]["articles"][number],
  "id" | "name" | "shortContent"
>;

export const ArticleCard = ({ id, name, shortContent }: ActicleCardProps) => (
  <Link href={`./directory/${id}`}>
    <Card className="relative grid gap-2 rounded-md border-2 p-3">
      <ExternalLink className="absolute right-2 top-2" size={20} />
      <Badge className="w-fit">Статья</Badge>
      <Box className="space-y-1">
        <Text className="text-lg font-medium">{name}</Text>
        <Text className="text-md text-muted-foreground">{shortContent}</Text>
      </Box>
    </Card>
  </Link>
);
