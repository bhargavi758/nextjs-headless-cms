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
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-cardinal transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-gray-900 font-medium" aria-current="page">
              About
            </span>
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">
          {page?.title ?? "About the Department"}
        </h1>
        {page?.subtitle && (
          <p className="mt-4 text-xl text-gray-600">{page.subtitle}</p>
        )}
      </header>

      {page?.image && (
        <div className="rounded-lg overflow-hidden mb-12">
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
