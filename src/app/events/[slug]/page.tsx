import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getEventBySlug, getAllEventSlugs } from "@/lib/cms/client";
import { Button } from "@/components/ui/Button";
import { CategoryBadge } from "@/components/ui/Badge";
import { CardImage } from "@/components/ui/Card";

export const revalidate = 3600;

interface EventPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const event = await getEventBySlug(params.slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: event.title,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "article",
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-cardinal transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/events"
              className="hover:text-cardinal transition-colors"
            >
              Events
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-gray-900 font-medium" aria-current="page">
              {event.title}
            </span>
          </li>
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <CategoryBadge category={event.category} className="mb-3" />
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
              {event.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {event.summary}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden mb-8">
            <CardImage
              src={event.image.url}
              alt={event.image.alt}
              aspectRatio="wide"
            />
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: event.body.html }}
          />
        </div>

        <aside
          className="mt-10 lg:mt-0"
          aria-label="Event details"
        >
          <div className="bg-sandstone-light rounded-lg p-6 sticky top-24">
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-4">
              Event Details
            </h2>

            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </dt>
                <dd className="mt-1 text-gray-900">
                  <time dateTime={event.date}>{formatDate(event.date)}</time>
                  {event.endDate && (
                    <>
                      <span className="mx-1">&ndash;</span>
                      <time dateTime={event.endDate}>
                        {formatDate(event.endDate)}
                      </time>
                    </>
                  )}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </dt>
                <dd className="mt-1 text-gray-900">{event.time}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </dt>
                <dd className="mt-1 text-gray-900">{event.location}</dd>
              </div>

              {event.speaker && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Speaker
                  </dt>
                  <dd className="mt-1">
                    <span className="text-gray-900 block">
                      {event.speaker}
                    </span>
                    {event.speakerTitle && (
                      <span className="text-sm text-gray-500">
                        {event.speakerTitle}
                      </span>
                    )}
                  </dd>
                </div>
              )}
            </dl>

            {event.registrationUrl && (
              <div className="mt-6">
                <Button
                  href={event.registrationUrl}
                  className="w-full"
                  size="lg"
                >
                  Register for this Event
                </Button>
              </div>
            )}

            <div className="mt-4">
              <Button
                href="/events"
                variant="ghost"
                size="sm"
                className="w-full"
              >
                &larr; Back to all events
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
