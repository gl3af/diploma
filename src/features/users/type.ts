import { RouterOutputs } from "@/trpc/shared";

export type UserType = {
  user: RouterOutputs["users"]["getAll"][number];
};
