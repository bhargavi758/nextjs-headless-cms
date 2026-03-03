import type { Metadata } from "next";
import Link from "next/link";
import { getPage } from "@/lib/cms/client";
import { CardImage } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Stanford Computer Science Department — our mission, research areas, community, and history.",
};

export const revalidate = 3600;

export default async function AboutPage() {
  const page = await getPage("about");

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground font-medium" aria-current="page">
              About
            </span>
          </li>
        </ol>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight">
          {page?.title ?? "About the Department"}
        </h1>
        {page?.subtitle && (
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
            {page.subtitle}
          </p>
        )}
      </header>

      {page?.image && (
        <div className="rounded-md overflow-hidden mb-14">
          <CardImage
            src={page.image.url}
            alt={page.image.alt}
            aspectRatio="wide"
          />
        </div>
      )}

      {page?.body.html && (
        <div
          className="prose max-w-3xl"
          dangerouslySetInnerHTML={{ __html: page.body.html }}
        />
      )}
    </div>
  );
}
