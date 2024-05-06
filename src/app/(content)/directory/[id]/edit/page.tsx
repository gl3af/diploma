import { EditArticleForm } from "@/features/directory/forms";
import { AdminContent } from "@/layouts";
import { NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/server";
import { getRoutes } from "@/shared/utils";

type Params = {
  id: string;
};

export default async function EditArticlePage({ params }: { params: Params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) return <NotFoundContent />;

  const article = await api.articles.getArticle.query({ id });
  if (!article) return <NotFoundContent />;

  const { directory } = getRoutes(32);
  const { label, icon } = directory;

  return (
    <AdminContent title={label} icon={icon}>
      <EditArticleForm article={article} />
    </AdminContent>
  );
}
