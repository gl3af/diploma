import { RouterOutputs } from "@/trpc/shared";

export type PlanType = NonNullable<RouterOutputs["workingPlans"]["getSingle"]>;
