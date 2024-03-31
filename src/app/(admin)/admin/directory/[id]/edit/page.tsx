import { EditArticleForm } from "@/features/directory/forms";
import { AdminContent } from "@/layouts";
import { NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/server";
import { Book } from "lucide-react";

type Params = {
  id: string;
};

export default async function EditArticlePage({ params }: { params: Params }) {
  const id = Number(params.id);
  if (isNaN(id)) return <NotFoundContent />;

  const article = await api.articles.getArticle.query({ id });
  if (!article) return <NotFoundContent />;

  return (
    <AdminContent title="Справочник" icon={<Book size={32} />}>
      <EditArticleForm article={article} />
    </AdminContent>
  );
}
