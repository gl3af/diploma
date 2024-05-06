import { Content } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { DirectoryHeader, ThemesList } from "@/widgets/directory";
import { getRoutes } from "@/shared/utils";

export default async function DirectoryPage() {
  const themes = await api.directory.getThemes.query();

  const { directory } = getRoutes(32);
  const { label, icon } = directory;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Box className="grid gap-6">
        <DirectoryHeader />
        <ThemesList initialData={themes} />
      </Box>
    </Content>
  );
}
