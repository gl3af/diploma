import "./globals.css";

import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/shared/utils";
import { Toaster } from "@/shared/ui";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export const metadata = {
  title: "My Fitness Journey",
  description: "Фитнес-платформа для персонализированного тренировочного опыта",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          montserrat.className,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}
