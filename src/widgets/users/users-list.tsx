"use client";

import { useSearchParams } from "next/navigation";

import { Box, Loader, Text } from "@/shared/ui";
import { api } from "@/trpc/react";
import { UserCard } from "@/features/users";

export function UsersList() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
  const { data: users = [], isFetching } = api.users.getAll.useQuery({ query });

  if (isFetching) return <Loader size={40} />;

  if (!users.length) return <Text>Здесь ничего нет</Text>;

  return (
    <Box className="grid gap-4">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </Box>
  );
}
