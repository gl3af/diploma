import { createTRPCRouter } from "./trpc";
import {
  articlesRouter,
  authRouter,
  departmentsRouter,
  directoryRouter,
  phonesRouter,
  workingPlansRouter,
  usersRouter,
  tasksRouter,
} from "./routers";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  phones: phonesRouter,
  departments: departmentsRouter,
  directory: directoryRouter,
  articles: articlesRouter,
  workingPlans: workingPlansRouter,
  users: usersRouter,
  tasks: tasksRouter,
});

export type AppRouter = typeof appRouter;
