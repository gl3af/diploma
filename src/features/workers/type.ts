import { RouterOutputs } from "@/trpc/shared";

export type DepartmentWorker = {
  worker: NonNullable<RouterOutputs["departments"]["getSingle"]>["workers"][number];
};
