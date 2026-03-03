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
    <article className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/news"
              className="hover:text-accent transition-colors"
            >
              News
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground font-medium" aria-current="page">
              {article.title}
            </span>
          </li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <CategoryBadge category={article.category} className="mb-4" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
          {article.title}
        </h1>
        <p className="mt-5 text-xl text-muted-foreground leading-relaxed">
          {article.summary}
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground border-b border-border pb-8">
          <div>
            <span className="font-medium text-foreground">{article.author}</span>
            <span className="block text-muted-foreground">{article.authorRole}</span>
          </div>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={article.publishedAt}>
            {formatPublishedDate(article.publishedAt)}
          </time>
        </div>
      </header>

      <div className="mt-10 rounded-md overflow-hidden max-w-3xl">
        <CardImage
          src={article.image.url}
          alt={article.image.alt}
          aspectRatio="wide"
        />
      </div>

      <div
        className="mt-12 prose max-w-3xl"
        dangerouslySetInnerHTML={{ __html: article.body.html }}
      />

      <div className="mt-14 pt-8 border-t border-border max-w-3xl">
        <Button href="/news" variant="ghost">
          &larr; Back to all news
        </Button>
      </div>
    </article>
  );
}
