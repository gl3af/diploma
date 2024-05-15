import { Hydrate, dehydrate } from "@tanstack/react-query";

import { Content } from "@/layouts";
import { Box } from "@/shared/ui";
import { getRoutes, getQueryClient, getQueryKey } from "@/shared/utils";
import { api } from "@/trpc/server";
import { UsersFilter, UsersHeader, UsersList } from "@/widgets/users";

type SearchParams = {
  query?: string;
};

export default async function UsersPage({ searchParams }: { searchParams: SearchParams }) {
  const queryClient = getQueryClient();
  const { query } = searchParams;

  const input = { query: query ?? null };
  const queryKey = getQueryKey(["users", "getAll"], input);
  await queryClient.prefetchQuery(queryKey, () => api.users.getAll.query(input));

  const { users } = getRoutes(32);
  const { label, icon } = users;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <UsersHeader />
        <UsersFilter />
        <Hydrate state={dehydrate(queryClient)}>
          <UsersList />
        </Hydrate>
      </Box>
    </Content>
  );
}
