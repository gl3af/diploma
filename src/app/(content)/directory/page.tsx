import { Suspense } from "react";

import { Content } from "@/layouts";
import { Box, Skeleton } from "@/shared/ui";
import { DirectoryHeader, ThemesList } from "@/widgets/directory";
import { getRoutes } from "@/shared/utils";

function ThemesListFallback() {
  return (
    <Box className="grid gap-4">
      {[...new Array(3).fill(0)].map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={item + index} className="h-16" />
      ))}
    </Box>
  );
}

export default async function DirectoryPage() {
  const { directory } = getRoutes(32);
  const { label, icon } = directory;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <DirectoryHeader />
        <Suspense fallback={<ThemesListFallback />}>
          <ThemesList />
        </Suspense>
      </Box>
    </Content>
  );
}
