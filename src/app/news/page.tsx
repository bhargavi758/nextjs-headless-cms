import type { Metadata } from "next";
import Link from "next/link";
import { getNewsArticles } from "@/lib/cms/client";
import { NewsCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest research breakthroughs, faculty achievements, student awards, and department announcements from Stanford Computer Science.",
};

export const revalidate = 3600;

interface NewsPageProps {
  searchParams: { page?: string };
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { items, total, page, totalPages } = await getNewsArticles(
    currentPage,
    6
  );

  const featuredArticle = currentPage === 1 ? items.find((a) => a.featured) : null;
  const regularArticles = featuredArticle
    ? items.filter((a) => a.id !== featuredArticle.id)
    : items;

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-gray-900">News</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          Research breakthroughs, faculty achievements, student awards, and
          department announcements.
        </p>
      </header>

      {featuredArticle && (
        <section className="mb-12" aria-label="Featured article">
          <NewsCard article={featuredArticle} featured />
        </section>
      )}

      <section aria-label="News articles">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {totalPages > 1 && (
        <nav
          className="mt-12 flex items-center justify-center gap-4"
          aria-label="Pagination"
        >
          {page > 1 && (
            <Button
              href={`/news?page=${page - 1}`}
              variant="outline"
              size="sm"
            >
              &larr; Previous
            </Button>
          )}

          <span className="text-sm text-gray-600" aria-current="page">
            Page {page} of {totalPages}
          </span>

          {page < totalPages && (
            <Button
              href={`/news?page=${page + 1}`}
              variant="outline"
              size="sm"
            >
              Next &rarr;
            </Button>
          )}
        </nav>
      )}
    </div>
  );
}
