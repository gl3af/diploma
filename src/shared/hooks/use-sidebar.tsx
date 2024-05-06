import { useSession } from "next-auth/react";

import { getRoutes, RoutesData } from "../utils";

export const useSidebar = () => {
  const session = useSession();
  const role = session?.data?.user.role ?? "user";

  const routes = getRoutes();

  const keys = Object.keys(routes) as RoutesData[];

  return keys.map((item) => routes[item]).filter((item) => item.roles.includes(role));
};
