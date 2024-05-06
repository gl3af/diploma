"use client";

import React, { useRef } from "react";

import {
  Button,
  DeleteIcon,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Loader,
} from "@/shared/ui";
import { api } from "@/trpc/react";

export function DeleteDialog({ id }: { id: number }) {
  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { mutateAsync, isLoading } = api.departments.delete.useMutation({
    onSuccess: async () => {
      utils.departments.getAll.invalidate();
      ref.current?.click();
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DeleteIcon />
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Удаление отдела</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы уверены, что хотите удалить отдел?
        </DialogDescription>
        <DialogFooter className="flex gap-3">
          <Button size="sm" onClick={() => mutateAsync({ id })}>
            {isLoading ? <Loader /> : "Удалить"}
          </Button>
          <DialogClose asChild>
            <Button variant="secondary" size="sm">
              Отмена
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      <DialogClose ref={ref} className="hidden" />
    </Dialog>
  );
}
