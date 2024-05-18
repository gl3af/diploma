import { Hydrate, dehydrate } from "@tanstack/react-query";

import { AdminContent } from "@/layouts";
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
    <AdminContent title={label} icon={icon}>
      <Box className="grid gap-6">
        <UsersHeader />
        <UsersFilter />
        <Hydrate state={dehydrate(queryClient)}>
          <UsersList />
        </Hydrate>
      </Box>
    </AdminContent>
  );
}
