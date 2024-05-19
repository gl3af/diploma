"use client";

import { AddIcon, Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/shared/ui";

import { CreateThemeForm } from "../forms";

export function CreateThemeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddIcon />
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Добавление темы</DialogHeader>
        <CreateThemeForm />
      </DialogContent>
    </Dialog>
  );
}
