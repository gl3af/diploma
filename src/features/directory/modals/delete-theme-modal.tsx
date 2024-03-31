"use client";

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
import { useRef } from "react";

export const DeleteThemeModal = ({ themeId }: { themeId: string }) => {
  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { mutate, isLoading } = api.directory.deleteTheme.useMutation({
    onSuccess: async () => {
      void utils.directory.getThemes.invalidate().then(() => {
        ref.current?.click();
      });
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          Удалить тему
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Удаление темы</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы уверены, что хотите удалить тему?
        </DialogDescription>
        <DialogFooter className="flex gap-3">
          <Button
            size="sm"
            disabled={isLoading}
            onClick={() => mutate({ id: themeId })}
          >
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
};
