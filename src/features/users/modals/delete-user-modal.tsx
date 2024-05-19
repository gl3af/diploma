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
  Loader,
} from "@/shared/ui";
import { api } from "@/trpc/react";

export function DeleteUserModal({ id }: { id: number }) {
  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { mutate, isLoading } = api.users.delete.useMutation({
    onSuccess: async () => {
      utils.users.getAll.invalidate();
      ref.current?.click();
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DeleteIcon />
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Удаление пользователя</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы уверены, что хотите удалить пользователя?
        </DialogDescription>
        <DialogFooter className="flex gap-3">
          <Button size="sm" disabled={isLoading} onClick={() => mutate({ id })}>
            {isLoading ? <Loader /> : "Удалить"}
          </Button>
          <DialogClose asChild>
            <Button variant="secondary" size="sm" disabled={isLoading}>
              Отмена
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      <DialogClose className="hidden" ref={ref} />
    </Dialog>
  );
}
