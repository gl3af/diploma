import { cache } from "react";

import { queryClientInstance } from "../constants";

export const getQueryClient = cache(() => queryClientInstance);

export const getQueryKey = (main: string[], input?: Record<string, unknown>) => {
  if (input) return [main, { input, type: "query" }] as const;

  return [main, { type: "query" }] as const;
};
