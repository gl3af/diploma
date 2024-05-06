import { QueryClient } from "@tanstack/react-query";

export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 300000,
      staleTime: 30000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});
