import { redirect } from "next/navigation";

import { CreateArticleForm } from "@/features/directory/forms";
import { AdminContent } from "@/layouts";
import { getRoutes } from "@/shared/utils";

type SearchParams = {
  themeId: string | null;
};

export default function CreateArticlePage({ searchParams }: { searchParams?: SearchParams }) {
  const themeId = searchParams?.themeId;
  if (!themeId) redirect("/admin/directory");

  const { directory } = getRoutes(32);
  const { label, icon } = directory;

  return (
    <AdminContent title={label} icon={icon}>
      <CreateArticleForm />
    </AdminContent>
  );
}
