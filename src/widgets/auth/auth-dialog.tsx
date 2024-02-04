"use client";

import { SignInForm, SignUpForm } from "@/features/auth";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui";
import { type Session } from "next-auth";
import Link from "next/link";

export const AuthDialog = ({ session }: { session: Session | null }) => {
  if (!!session)
    return (
      <Button
        variant="outline"
        size="lg"
        className="rounded-xl text-lg"
        asChild
      >
        <Link href="/home">Войти</Link>
      </Button>
    );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="rounded-xl text-lg">
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <Tabs defaultValue="account" className="sm:max-w-[550px]">
          <TabsList>
            <TabsTrigger value="sign-in">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <DialogHeader className="flex flex-col gap-2">
              <DialogTitle className="text-xl">
                Войдите для продолжения работы
              </DialogTitle>
              <SignInForm />
            </DialogHeader>
          </TabsContent>
          <TabsContent value="register">
            <DialogHeader className="flex flex-col gap-2">
              <DialogTitle className="text-xl">
                Зарегистрируйтесь для начала работы
              </DialogTitle>
              <SignUpForm />
            </DialogHeader>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
