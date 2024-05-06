import { add } from "date-fns";

export const transformDeadline = (deadline: Date) =>
  add(deadline, {
    hours: 23,
    minutes: 59,
  });
