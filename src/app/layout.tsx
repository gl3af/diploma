import "./globals.css";

import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/shared/utils";
import { Box, Toaster } from "@/shared/ui";
import { QueryParamsProvider, SessionProvider, ThemeProvider } from "@/providers";
import { getServerAuthSession } from "@/server/auth";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export const metadata = {
  title: "КАЗ им. Горбунова",
  description: "Портал молодых специалистов",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession();

  return (
    <Box as="html" lang="en">
      <Box as="body" className={cn("min-h-screen bg-background antialiased", montserrat.className)}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryParamsProvider>
              <SessionProvider session={session}>{children}</SessionProvider>
            </QueryParamsProvider>
          </ThemeProvider>
        </TRPCReactProvider>
        <Toaster />
      </Box>
    </Box>
  );
}
