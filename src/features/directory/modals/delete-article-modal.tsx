"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

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

export function DeleteArticleModal({ id }: { id: number }) {
  const router = useRouter();
  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { mutate, isLoading } = api.articles.deleteArticle.useMutation({
    onSuccess: async () => {
      await utils.directory.getThemes.invalidate().then(() => {
        router.replace("./");
      });
      ref.current?.click();
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          Удалить статью
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">Удаление статьи</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы уверены, что хотите удалить статью?
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
