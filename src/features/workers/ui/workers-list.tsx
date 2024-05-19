"use client";

import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

import { api } from "@/trpc/react";
import { Box, Text } from "@/shared/ui";

import { WorkerCard } from "./worker-card";
import { CreateWorkerModal } from "../modals";

export function WorkersList() {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === "admin";

  const { id: idParam } = useParams<{ id: string }>();
  const id = Number(idParam);
  if (Number.isNaN(id)) return null;

  const { data: department } = api.departments.getSingle.useQuery({ id });
  if (!department) return null;

  const { workers } = department;

  return (
    <Box className="space-y-3">
      <Box className="flex items-center justify-between">
        <Text className="text-xl font-semibold">Работники</Text>
        {isAdmin && <CreateWorkerModal />}
      </Box>
      <Box className="grid gap-4">
        {workers.map((worker) => (
          <WorkerCard worker={worker} />
        ))}
      </Box>
      {!workers.length && <Text className="font-medium">Здесь ничего нет</Text>}
    </Box>
  );
}
