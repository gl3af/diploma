"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { SignInForm, SignUpForm } from "@/features/auth";
import {
  Box,
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
  Text,
} from "@/shared/ui";

export function AuthDialog() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Box className="space-y-2">
        <Button variant="outline" size="lg" className="rounded-xl text-lg" asChild>
          <Link href="/home">Войти</Link>
        </Button>
        <Text className="font-medium">Вход выполнен</Text>
      </Box>
    );
  }

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
              <DialogTitle className="text-xl">Войдите для продолжения работы</DialogTitle>
              <SignInForm />
            </DialogHeader>
          </TabsContent>
          <TabsContent value="register">
            <DialogHeader className="flex flex-col gap-2">
              <DialogTitle className="text-xl">Зарегистрируйтесь для начала работы</DialogTitle>
              <SignUpForm />
            </DialogHeader>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
