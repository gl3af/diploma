import { createTRPCRouter } from "./trpc";
import {
  articlesRouter,
  authRouter,
  departmentsRouter,
  directoryRouter,
  workingPlansRouter,
  usersRouter,
  tasksRouter,
  workersRouter,
} from "./routers";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  departments: departmentsRouter,
  directory: directoryRouter,
  articles: articlesRouter,
  workingPlans: workingPlansRouter,
  users: usersRouter,
  tasks: tasksRouter,
  workers: workersRouter,
});

export type AppRouter = typeof appRouter;
