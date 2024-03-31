"use client";

import {
  AddIcon,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/shared/ui";
import { CreateThemeForm } from "../forms";

export const CreateThemeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddIcon />
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">
          Добавление темы
        </DialogHeader>
        <DialogDescription className="text-md font-medium">
          Заполните все поля
        </DialogDescription>
        <CreateThemeForm />
      </DialogContent>
    </Dialog>
  );
};
