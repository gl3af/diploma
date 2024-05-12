"use client";

import { cn } from "@/shared/utils";
import { Box } from "@/shared/ui";
import { useSidebar } from "@/shared/hooks";

import { Route } from "./route";

export function Routes({
  displayLabels = false,
  isAdmin = false,
}: {
  displayLabels?: boolean;
  isAdmin?: boolean;
}) {
  const data = useSidebar();

  return (
    <Box as="nav" className="px-4 py-3 md:py-6">
      <Box as="ul" className="ml-0 grid list-none gap-4">
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
