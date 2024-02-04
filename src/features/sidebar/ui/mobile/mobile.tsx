import {
  Button,
  Logo,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui";
import { Menu } from "lucide-react";
import { Routes } from "../routes";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="w-fit border-0">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-[85%] flex-col gap-6">
        <SheetHeader className="pl-3">
          <Logo />
        </SheetHeader>
        <Routes displayLabels />
      </SheetContent>
    </Sheet>
  );
};
