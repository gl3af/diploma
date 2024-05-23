"use client";

import { Button, Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/shared/ui";

import { EditThemeForm } from "../forms";

export function EditThemeModal({ id, name }: { id: number; name: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Изменить тему
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Изменение темы</DialogHeader>
        <EditThemeForm id={id} name={name} />
      </DialogContent>
    </Dialog>
  );
}
