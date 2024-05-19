"use client";

import React from "react";
import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { Session } from "next-auth";

type SessionProviderProps = React.PropsWithChildren<{ session: Session | null }>;

export function SessionProvider({ children, session }: SessionProviderProps) {
  return <NextAuthProvider session={session}>{children}</NextAuthProvider>;
}
