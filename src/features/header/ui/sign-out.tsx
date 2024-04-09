"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/shared/ui";

export function SignOut() {
  return <Button
    className="hover:bg-secondary"
    variant="outline"
    size="icon"
    title="Выход"
    onClick={() =>
      signOut({
        callbackUrl: "/",
      })
    }
  >
    <LogOut className="h-[1.2rem] w-[1.2rem]" />
  </Button>
}
