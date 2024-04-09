"use client";

import { ThemeCard } from "@/features/directory";
import { Accordion, Loader } from "@/shared/ui";
import { api } from "@/trpc/react";
import { type RouterOutputs } from "@/trpc/shared";

type InitialData = {
  initialData: RouterOutputs["directory"]["getThemes"];
};

export function ThemesList({ initialData }: InitialData) {
  const { data: themes = [], isFetching } = api.directory.getThemes.useQuery(undefined, {
    initialData,
  });

  if (isFetching) return <Loader size={56} />;

  return (
    <Accordion type="multiple" className="grid gap-4">
      {themes.map((theme) => (
        <ThemeCard key={theme.id} theme={theme} />
      ))}
    </Accordion>
  );
}
