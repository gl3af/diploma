"use client";

import { Box, Text } from "@/shared/ui";
import { api } from "@/trpc/react";
import { EditProfileModal } from "@/features/settings";

import { BlockWrapper } from "./block-wrapper";

function Point({ title, value }: { title: string; value: unknown }) {
  if (!value) return null;

  return (
    <Box>
      <Text className="text-lg font-medium leading-none">{title}</Text>
      <Text className="font-medium text-muted-foreground">{String(value)}</Text>
    </Box>
  );
}

export function PersonalBlock() {
  const { data: user } = api.auth.getProfile.useQuery(undefined);
  if (!user) return null;

  const { age, education, middlename, name, sex, surname } = user;

  return (
    <BlockWrapper title="Личные данные" action={<EditProfileModal user={user} />}>
      <Box className="grid gap-3">
        <Point title="Фамилия" value={surname} />
        <Point title="Имя" value={name} />
        <Point title="Отчество" value={middlename} />
        <Point title="Пол" value={sex} />
        <Point title="Возраст" value={age} />
        <Point title="Образование" value={education} />
      </Box>
    </BlockWrapper>
  );
}
