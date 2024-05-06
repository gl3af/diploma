import { RouterOutputs } from "@/trpc/shared";

export type TaskType = NonNullable<RouterOutputs["tasks"]["getSingle"]>;
