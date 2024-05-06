import { Content } from "@/layouts";
import { NotFoundContent } from "@/shared/ui";
import { api } from "@/trpc/server";
import { ArticleInfo } from "@/widgets/directory";
import { getRoutes } from "@/shared/utils";

type Params = {
  id: string;
};

export default async function ArticlePage({ params }: { params: Params }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) return <NotFoundContent />;

  const article = await api.articles.getArticle.query({ id });
  if (!article) return <NotFoundContent />;

  const { directory } = getRoutes(32);
  const { label, icon } = directory;

  return (
    <Content title={label} icon={icon}>
      <ArticleInfo initialData={article} id={id} />
    </Content>
  );
}
