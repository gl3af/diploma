"use client";

import { useRef } from "react";
import { VerifiedIcon } from "lucide-react";

import {
  Button,
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

export function VerifyUserModal({ id, verified }: { id: number; verified: boolean }) {
  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { mutate, isLoading } = api.users.verify.useMutation({
    onSuccess: async () => {
      utils.users.getAll.invalidate();
      ref.current?.click();
    },
  });

  if (verified) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <VerifiedIcon className="cursor-pointer transition-opacity hover:opacity-70" />
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Верификация пользователя</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы уверены, что хотите верифицировать пользователя?
        </DialogDescription>
        <DialogFooter className="flex gap-3">
          <Button size="sm" disabled={isLoading} onClick={() => mutate({ id })}>
            {isLoading ? <Loader /> : "Верифицировать"}
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
