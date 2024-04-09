import { cn } from "@/shared/utils";
import { Box } from "@/shared/ui";

import routes from "./data";
import adminRoutes from "./admin-data";
import { Route } from "../route";

export function Routes({
  displayLabels = false,
  isAdmin = false,
}: {
  displayLabels?: boolean;
  isAdmin?: boolean;
}) {
  const data = isAdmin ? adminRoutes : routes;
  return (
    <Box as="nav">
      <Box as="ul" className="ml-0 grid list-none gap-6">
        {data.map(({ label, href, icon }) => (
          <Box
            as="li"
            className={cn("ml-0 pl-0", !isAdmin && "last:border-t-2 last:pt-4")}
            key={href}
          >
            <Route label={label} href={href} icon={icon} displayLabels={displayLabels} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
