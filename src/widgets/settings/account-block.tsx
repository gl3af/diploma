"use client";

import { Box, Text } from "@/shared/ui";
import { api } from "@/trpc/react";
import { EditEmailModal, EditPasswordModal } from "@/features/settings";

import { BlockWrapper } from "./block-wrapper";

export function AccountBlock() {
  const { data: userData } = api.auth.getProfile.useQuery(undefined, {
    suspense: true,
  });
  if (!userData) return null;

  const { email } = userData;

  return (
    <BlockWrapper title="Аккаунт" action={<EditEmailModal email={email} />}>
      <Box className="grid gap-4">
        <Box>
          <Text className="text-lg font-medium leading-none">Почта</Text>
          <Text className="font-medium text-muted-foreground">{email}</Text>
        </Box>
        <EditPasswordModal />
      </Box>
    </BlockWrapper>
  );
}
