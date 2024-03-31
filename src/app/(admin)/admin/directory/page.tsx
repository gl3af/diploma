import { AdminContent } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { DirectoryHeader, ThemesList } from "@/widgets/directory";
import { Book } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";

export default async function Directory() {
  noStore();
  const themes = await api.directory.getThemes.query();

  return (
    <AdminContent title="Справочник" icon={<Book size={32} />}>
      <Box className="grid gap-6">
        <DirectoryHeader />
        <ThemesList initialData={themes} />
      </Box>
    </AdminContent>
  );
}
