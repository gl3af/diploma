"use client";

import { Box } from "@/shared/ui";
import { useSidebar } from "@/shared/hooks";

import { Route } from "./route";

export function Routes() {
  const data = useSidebar();

  return (
    <Box as="nav" className="px-4 py-3 md:py-6">
      <Box as="ul" className="ml-0 grid list-none gap-4">
        {data.map(({ label, href, icon }) => (
          <Box as="li" className="ml-0 pl-0" key={href}>
            <Route label={label} href={href} icon={icon} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
