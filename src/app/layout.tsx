import "./globals.css";

import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
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
      <body className={`font-sans ${montserrat.className}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
