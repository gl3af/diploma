"use client";

import { Button } from "@/shared/ui";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <Button
      className="hover:bg-secondary"
      variant="outline"
      size="icon"
      title="Выход"
      onClick={() =>
        signOut({
          callbackUrl: window.location.origin,
        })
      }
    >
      <LogOut className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};
