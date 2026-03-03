import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getEventBySlug, getAllEventSlugs } from "@/lib/cms/client";
import { Button } from "@/components/ui/Button";
import { CategoryBadge } from "@/components/ui/Badge";
import { CardImage } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

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
              href="/events"
              className="hover:text-accent transition-colors"
            >
              Events
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground font-medium" aria-current="page">
              {event.title}
            </span>
          </li>
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-3 lg:gap-14">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <CategoryBadge category={event.category} className="mb-4" />
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
              {event.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {event.summary}
            </p>
          </div>

          <div className="rounded-md overflow-hidden mb-10">
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

        <aside className="mt-12 lg:mt-0" aria-label="Event details">
          <div className={cn(
            "bg-card rounded-md border border-border p-8 sticky top-24"
          )}>
            <h2 className="text-lg font-serif font-bold text-foreground mb-6">
              Event Details
            </h2>

            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Date
                </dt>
                <dd className="mt-1 text-foreground">
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
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Time
                </dt>
                <dd className="mt-1 text-foreground">{event.time}</dd>
              </div>

              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Location
                </dt>
                <dd className="mt-1 text-foreground">{event.location}</dd>
              </div>

              {event.speaker && (
                <div>
                  <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Speaker
                  </dt>
                  <dd className="mt-1">
                    <span className="text-foreground block">
                      {event.speaker}
                    </span>
                    {event.speakerTitle && (
                      <span className="text-sm text-muted-foreground">
                        {event.speakerTitle}
                      </span>
                    )}
                  </dd>
                </div>
              )}
            </dl>

            {event.registrationUrl && (
              <div className="mt-8">
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
