"use client";

import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  Box,
  Button,
  Logo,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  Text,
} from "@/shared/ui";
import { useSidebar } from "@/shared/hooks";
import { cn } from "@/shared/utils";

export function MobileSidebar() {
  const data = useSidebar();
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (href: string) => router.push(href);

  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <Button variant="outline" size="icon" className="w-fit border-0">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full flex-col gap-6 py-12">
        <SheetHeader className="pl-6">
          <Logo />
        </SheetHeader>
        <Box className="grid gap-4 px-4 py-3 md:py-6">
          {data.map(({ label, href, icon }) => (
            <SheetClose key={href} onClick={() => navigateTo(href)}>
              <Box className="group flex items-center gap-4" title={label}>
                <Box
                  className={cn(
                    "rounded-full p-3 transition-all ease-linear group-hover:bg-secondary",
                    pathname.includes(href) && "bg-secondary"
                  )}
                >
                  {icon}
                </Box>
                <Text className="text-md font-semibold">{label}</Text>
              </Box>
            </SheetClose>
          ))}
        </Box>
      </SheetContent>
    </Sheet>
  );
}
