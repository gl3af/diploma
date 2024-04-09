import { Book } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";

import { AdminContent } from "@/layouts";
import { NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/server";
import { ArticleInfo } from "@/widgets/directory";

type Params = {
  id: string;
};

export default async function ArticlePage({ params }: { params: Params }) {
  noStore();
  const id = Number(params.id);
  if (Number.isNaN(id)) return <NotFoundContent />;

  const article = await api.articles.getArticle.query({ id });
  if (!article) return <NotFoundContent />;

  return (
    <AdminContent title="Справочник" icon={<Book size={32} />}>
      <ArticleInfo initialData={article} id={id} />
    </AdminContent>
  );
}
