"use client";

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
    <Link href={href} className="group flex items-center gap-4" title={label}>
      <div
        className={cn(
          "rounded-full p-3 group-hover:bg-secondary",
          pathname === href && "bg-secondary",
        )}
      >
        {icon}
      </div>
      <p className="text-md hidden font-semibold lg:block">{label}</p>
      {displayLabels && <p className="text-md font-semibold">{label}</p>}
    </Link>
  );
};
