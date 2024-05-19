"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useEffect, useState } from "react";

import { Box, Skeleton, Text, Title } from "@/shared/ui";

import { parseTimeOfDay } from "./parse-time-of-day";

export function Greeting() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setDate(new Date());

    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!date) return <Skeleton className="h-20" />;

  const { icon, title } = parseTimeOfDay(date);

  return (
    <Box className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-background p-4">
      <Box className="flex items-center gap-4">
        {icon}
        <Title order={2} className="text-2xl font-semibold">
          {title}
        </Title>
      </Box>
      <Box>
        <Text className="font-medium">Текущее время</Text>
        <Text className="pr-0.5 text-xl font-medium">{format(date, "PPpp", { locale: ru })}</Text>
      </Box>
    </Box>
  );
}
