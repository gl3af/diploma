import {
  Button,
  Logo,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui";
import { Menu } from "lucide-react";
import { Routes } from "./routes";
import { getServerAuthSession } from "@/server/auth";

export const MobileSidebar = async () => {
  const session = await getServerAuthSession();
  const isAdmin = session?.user.role === "admin";

  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <Button variant="outline" size="icon" className="w-fit border-0">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full flex-col gap-6 py-12">
        <SheetHeader className="pl-3">
          <Logo />
        </SheetHeader>
        <Routes displayLabels isAdmin={isAdmin} />
      </SheetContent>
    </Sheet>
  );
};
