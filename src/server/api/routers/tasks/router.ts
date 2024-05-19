import { createTRPCRouter, protectedProcedure } from "../../trpc";
import {
  $CreateSchema,
  $GetSingleSchema,
  $CreateSubtaskSchema,
  $UpdateSchema,
  $DeleteSchema,
  $ToggleSchema,
} from "./schemas";

export const tasksRouter = createTRPCRouter({
  create: protectedProcedure.input($CreateSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { planId, ...data } = input;

    return db.task.create({
      data: {
        ...data,
        planId,
      },
    });
  }),
  update: protectedProcedure.input($UpdateSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { taskId, ...data } = input;

    return db.task.update({
      where: {
        id: taskId,
      },
      data: {
        ...data,
      },
    });
  }),
  delete: protectedProcedure.input($DeleteSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { id } = input;

    return db.task.delete({
      where: {
        id,
      },
    });
  }),
  createSubtask: protectedProcedure.input($CreateSubtaskSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { parentId, ...data } = input;

    return db.task.create({
      data: {
        ...data,
        parentTaskId: parentId,
      },
    });
  }),
  getSingle: protectedProcedure.input($GetSingleSchema).query(async ({ ctx, input }) => {
    const { db } = ctx;
    const { planId, id } = input;

    return db.task.findFirst({
      where: {
        id,
        planId,
      },
      include: {
        subtasks: true,
        parent: true,
        plan: true,
      },
    });
  }),
  toggleCompleted: protectedProcedure.input($ToggleSchema).mutation(async ({ ctx, input }) => {
    const { db } = ctx;
    const { completed, id } = input;

    return db.task.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });
  }),
});
