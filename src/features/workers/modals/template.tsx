import React from "react";

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/shared/ui";

type TemplateProps = {
  icon: React.ReactNode;
  text: string;
  form: React.ReactNode;
};

export function Template({ icon, form, text }: TemplateProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{icon}</DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">{text}</DialogHeader>
        {form}
      </DialogContent>
    </Dialog>
  );
}
