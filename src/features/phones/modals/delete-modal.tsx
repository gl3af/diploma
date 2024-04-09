"use client";

import { useRef } from "react";

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
} from "@/shared/ui";
import { api } from "@/trpc/react";

export function DeleteModal({ id }: { id: string }) {
  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { mutate } = api.phones.delete.useMutation({
    onSuccess: async () => {
      utils.phones.getAll.invalidate().then(() => {
        ref.current?.click();
      });
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DeleteIcon />
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Удаление записи</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы действительно хотите удалить эту запись?
        </DialogDescription>
        <DialogFooter className="flex gap-3">
          <Button size="sm" onClick={() => mutate({ id })}>
            Удалить
          </Button>
          <DialogClose asChild>
            <Button variant="secondary" size="sm">
              Отмена
            </Button>
          </DialogClose>
        </DialogFooter>
        <DialogClose ref={ref} className="hidden" />
      </DialogContent>
    </Dialog>
  );
}
