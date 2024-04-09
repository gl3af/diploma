import { createTRPCRouter } from "@/server/api/trpc";

import {
  articlesRouter,
  authRouter,
  departmentsRouter,
  directoryRouter,
  phonesRouter,
} from "./routers";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  phones: phonesRouter,
  departments: departmentsRouter,
  directory: directoryRouter,
  articles: articlesRouter,
});

export type AppRouter = typeof appRouter;
