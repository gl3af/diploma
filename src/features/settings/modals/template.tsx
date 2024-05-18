import { PropsWithChildren, ReactNode } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/shared/ui";

type TemplateProps = {
  icon: ReactNode;
  title: string;
};

export function Template({ children, icon, title }: PropsWithChildren<TemplateProps>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{icon}</DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">{title}</DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
