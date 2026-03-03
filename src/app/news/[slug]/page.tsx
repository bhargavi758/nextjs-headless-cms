import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsArticleBySlug, getAllNewsSlugs } from "@/lib/cms/client";
import { CategoryBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CardImage } from "@/components/ui/Card";

export const revalidate = 3600;

interface NewsDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const article = await getNewsArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

function formatPublishedDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/news"
              className="hover:text-primary transition-colors"
            >
              News
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-gray-900 font-medium" aria-current="page">
              {article.title}
            </span>
          </li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <CategoryBadge category={article.category} className="mb-4" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 leading-relaxed">
          {article.summary}
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 border-b border-gray-200 pb-6">
          <div>
            <span className="font-medium text-gray-900">{article.author}</span>
            <span className="block text-gray-500">{article.authorRole}</span>
          </div>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={article.publishedAt}>
            {formatPublishedDate(article.publishedAt)}
          </time>
        </div>
      </header>

      <div className="mt-8 rounded-lg overflow-hidden max-w-3xl">
        <CardImage
          src={article.image.url}
          alt={article.image.alt}
          aspectRatio="wide"
        />
      </div>

      <div
        className="mt-10 prose max-w-3xl"
        dangerouslySetInnerHTML={{ __html: article.body.html }}
      />

      <div className="mt-12 pt-8 border-t border-gray-200 max-w-3xl">
        <Button href="/news" variant="ghost">
          &larr; Back to all news
        </Button>
      </div>
    </article>
  );
}
