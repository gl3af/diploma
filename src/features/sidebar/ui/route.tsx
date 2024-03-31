"use client";

import { Box, Text } from "@/shared/ui";
import { cn } from "@/shared/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Route = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const Route = (
  props: Route & {
    displayLabels: boolean;
  },
) => {
  const pathname = usePathname();

  const { href, label, icon, displayLabels } = props;
  return (
    <Link
      href={href}
      className="group flex items-center gap-4"
      title={label}
      passHref
    >
      <Box
        className={cn(
          "rounded-full p-3 group-hover:bg-secondary",
          pathname.includes(href) && "bg-secondary",
        )}
      >
        {icon}
      </Box>
      <Text className="text-md hidden font-semibold lg:block">{label}</Text>
      {displayLabels && <Text className="text-md font-semibold">{label}</Text>}
    </Link>
  );
};
