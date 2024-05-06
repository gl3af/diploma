"use client";

import { useRef } from "react";
import { useParams, useRouter } from "next/navigation";

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
import { getRoutes } from "@/shared/utils";

export function DeleteTaskModal() {
  const router = useRouter();
  const { taskId: taskParam, id: planParam } = useParams<{ id: string; taskId: string }>();

  const id = Number(taskParam);
  const planId = Number(planParam);

  const utils = api.useUtils();
  const ref = useRef<HTMLButtonElement | null>(null);

  const {
    workingPlans: { href },
  } = getRoutes();

  const { mutate, isLoading } = api.tasks.delete.useMutation({
    onSuccess: async () => {
      utils.workingPlans.getSingle.invalidate().then(() => {
        router.replace(`${href}/${planId}`);
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
        <DialogHeader className="text-lg font-bold">Удаление задачи</DialogHeader>
        <DialogDescription className="text-md font-medium">
          Вы уверены, что хотите удалить задачу?
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
