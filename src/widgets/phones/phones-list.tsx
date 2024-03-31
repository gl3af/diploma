"use client";

import { PhoneCard } from "@/features/phones";
import { Box, Loader, Text } from "@/shared/ui";
import { api } from "@/trpc/react";
import { type RouterOutputs } from "@/trpc/shared";
import { useSearchParams } from "next/navigation";
import React from "react";

type InitialData = RouterOutputs["phones"]["getAll"];

export const PhonesList = ({ initialData }: { initialData: InitialData }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const department = searchParams.get("department");

  const { data: phones, isFetching } = api.phones.getAll.useQuery(
    { name, department },
    {
      initialData,
      keepPreviousData: true,
    },
  );

  if (isFetching) return <Loader size={56} />;

  if (!phones.length) return <Text>Ничего не найдено</Text>;

  return (
    <Box as="section" className="grid gap-6">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} item={phone} />
      ))}
    </Box>
  );
};
