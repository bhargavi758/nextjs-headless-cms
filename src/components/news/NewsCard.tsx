import Link from "next/link";
import { CMSNewsArticle } from "@/lib/cms/types";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { CategoryBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

function formatPublishedDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface NewsCardProps {
  article: CMSNewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <Card as="article" className="group md:flex md:flex-row">
        <div className="md:w-2/5 shrink-0">
          <CardImage
            src={article.image.url}
            alt={article.image.alt}
            aspectRatio="square"
          />
        </div>
        <CardContent className="flex flex-col justify-center md:w-3/5">
          <CategoryBadge category={article.category} className="mb-3" />
          <h3 className={cn(
            "text-xl lg:text-2xl font-serif font-bold text-card-foreground",
            "group-hover:text-accent transition-colors"
          )}>
            <Link href={`/news/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="mt-3 text-muted-foreground line-clamp-3">
            {article.summary}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{article.author}</span>
            <span className="mx-2" aria-hidden="true">
              &middot;
            </span>
            <time dateTime={article.publishedAt}>
              {formatPublishedDate(article.publishedAt)}
            </time>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card as="article" className="group">
      <Link href={`/news/${article.slug}`} className="block">
        <CardImage src={article.image.url} alt={article.image.alt} />
        <CardContent>
          <CategoryBadge category={article.category} className="mb-3" />
          <h3 className={cn(
            "text-lg font-serif font-bold text-card-foreground",
            "group-hover:text-accent transition-colors line-clamp-2"
          )}>
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {article.summary}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            <time dateTime={article.publishedAt}>
              {formatPublishedDate(article.publishedAt)}
            </time>
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
