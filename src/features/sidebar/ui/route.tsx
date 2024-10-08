"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Box, Text } from "@/shared/ui";
import { cn, TRoute } from "@/shared/utils";

type RouteProps = Omit<TRoute, "roles">;

export function Route({ href, label, icon }: RouteProps) {
  const pathname = usePathname();

  return (
    <Link href={href} className="group flex items-center gap-4" title={label}>
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
    </Link>
  );
}
