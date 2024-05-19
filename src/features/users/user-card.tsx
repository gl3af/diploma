import Link from "next/link";

import { Badge, Box, Card, CardContent, CardHeader, Text } from "@/shared/ui";
import { withFullName } from "@/shared/utils";

import { UserType } from "./type";
import { UserActions } from "./user-actions";

type UserCardProps = UserType;

export function UserCard({ user }: UserCardProps) {
  const { id, fullName, age, education, verified, email, sex } = withFullName(user);

  const tagText = verified ? "Верифицирован" : "Не верифицирован";
  const tagVariant = verified ? "default" : "destructive";

  return (
    <Card className="rounded-lg">
      <CardHeader>
        <Box className="flex items-center justify-between">
          <Box className="flex flex-wrap items-center gap-2">
            <Badge className="w-fit">{id}</Badge>
            <Badge className="w-fit" variant={tagVariant}>
              {tagText}
            </Badge>
          </Box>
          <UserActions id={id} verified={verified} />
        </Box>
      </CardHeader>
      <CardContent>
        <Box className="grid gap-2">
          <Text className="text-lg font-semibold">{fullName}</Text>
          <Text className="font-medium">Пол: {sex}</Text>
          <Text className="font-medium">Возраст: {age}</Text>
          <Text className="font-medium">Образование: {education}</Text>
          <Text className="font-medium">
            Почта:{" "}
            <Link
              href={`mailto:${email}`}
              target="_blank"
              className="transition-all hover:text-primary hover:underline"
            >
              {email}
            </Link>
          </Text>
        </Box>
      </CardContent>
    </Card>
  );
}
