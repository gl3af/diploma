import { Suspense } from "react";

import { Content } from "@/layouts";
import { Box, Skeleton } from "@/shared/ui";
import { getRoutes } from "@/shared/utils";
import { AccountBlock, PersonalBlock, SettingsHeader } from "@/widgets/settings";

export default async function SettingsPage() {
  const { settings } = getRoutes(32);
  const { label, icon } = settings;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <SettingsHeader />
        <Box className="grid gap-4 md:grid-cols-2">
          <Suspense fallback={<Skeleton className="h-80" />}>
            <PersonalBlock />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-80" />}>
            <AccountBlock />
          </Suspense>
        </Box>
      </Box>
    </Content>
  );
}
