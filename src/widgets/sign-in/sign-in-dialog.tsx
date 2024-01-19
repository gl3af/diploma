"use client";

import { SignInForm } from "@/features/sign-in-form";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui";
import { type Session } from "next-auth";
import Link from "next/link";

export const SignInDialog = ({ session }: { session: Session | null }) => {
  if (!!session)
    return (
      <Button variant="outline" size="lg" className="text-lg" asChild>
        <Link href="/dashboard">Войти</Link>
      </Button>
    );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="text-lg">
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] rounded-xl sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Вход</DialogTitle>
          <DialogDescription>
            Введите почту и получите ссылку для входа в аккаунт
          </DialogDescription>
        </DialogHeader>
        <SignInForm />
      </DialogContent>
    </Dialog>
  );
};
