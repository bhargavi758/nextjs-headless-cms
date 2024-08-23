import { CMSNewsArticle } from "@/lib/cms/types";
import { NewsCard } from "./NewsCard";

interface NewsListProps {
  articles: CMSNewsArticle[];
}

export function NewsList({ articles }: NewsListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No news articles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
