"use client";

import { Check, Circle } from "lucide-react";

import { Box, Button, Loader, Text } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { api } from "@/trpc/react";

import { type TaskType } from "../type";

type InfoHeaderProps = Pick<TaskType, "name" | "description" | "completed" | "id">;

function ButtonIcon({ completed }: { completed: boolean }) {
  if (completed) return <Check size={20} />;
  return <Circle size={20} />;
}

export function InfoHeader({ name, description, completed, id }: InfoHeaderProps) {
  const utils = api.useUtils();
  const { mutateAsync, isLoading } = api.tasks.toggleCompleted.useMutation();

  const toggleCompleted = () => {
    mutateAsync(
      { id, completed: !completed },
      {
        onSuccess: () => {
          utils.tasks.getSingle.invalidate();
          utils.workingPlans.getSingle.invalidate();
        },
      }
    );
  };

  return (
    <Box className="grid gap-3">
      <Text className="text-xl font-semibold">{name}</Text>
      <Text className="font-medium text-muted-foreground">{description}</Text>
      <Button
        className={cn(
          "w-fit gap-2 rounded-full",
          completed && "bg-green-600 hover:bg-green-600/90"
        )}
        variant="default"
        disabled={isLoading}
        onClick={toggleCompleted}
      >
        {isLoading ? <Loader /> : <ButtonIcon completed={completed} />}
        {completed ? "Выполнена" : "Выполнить"}
      </Button>
    </Box>
  );
}
