"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Box, Text } from "@/shared/ui";
import { cn, TRoute } from "@/shared/utils";

type RouteProps = Omit<TRoute, "roles"> & {
  displayLabels: boolean;
};

export function Route({ href, label, icon, displayLabels }: RouteProps) {
  const pathname = usePathname();

  return (
    <Link href={href} className="group flex items-center gap-4 px-4" title={label} passHref>
      <Box
        className={cn(
          "rounded-full p-3 transition-all ease-linear group-hover:bg-secondary",
          pathname.includes(href) && "bg-secondary"
        )}
      >
        {icon}
      </Box>
      <Text className="text-md hidden font-semibold text-muted-foreground transition-all ease-linear group-hover:text-foreground lg:block">
        {label}
      </Text>
      {displayLabels && <Text className="text-md font-semibold">{label}</Text>}
    </Link>
  );
}
