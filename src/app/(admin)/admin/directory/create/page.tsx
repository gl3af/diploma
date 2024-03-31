import { CreateArticleForm } from "@/features/directory/forms";
import { AdminContent } from "@/layouts";
import { Book } from "lucide-react";
import { redirect } from "next/navigation";

type SearchParams = {
  themeId: string | null;
};

export default function CreateArticlePage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const themeId = searchParams?.themeId;
  if (!themeId) redirect("/admin/directory");

  return (
    <AdminContent title="Добавление статьи" icon={<Book size={32} />}>
      <CreateArticleForm />
    </AdminContent>
  );
}
