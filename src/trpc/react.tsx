"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { type AppRouter } from "@/server/api/root";
import { queryClientInstance } from "@/shared/constants";

import { getUrl, transformer } from "./shared";

export const api = createTRPCReact<AppRouter>();

type ProviderProps = { children: React.ReactNode; cookies: string };

export function TRPCReactProvider({ children, cookies }: ProviderProps) {
  const [queryClient] = useState(() => queryClientInstance);

  const [trpcClient] = useState(() =>
    api.createClient({
      transformer,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          url: getUrl(),
          headers() {
            return {
              cookie: cookies,
              "x-trpc-source": "react",
            };
          },
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
}
