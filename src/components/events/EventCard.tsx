import Link from "next/link";
import { CMSEvent } from "@/lib/cms/types";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { CategoryBadge } from "@/components/ui/Badge";

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface EventCardProps {
  event: CMSEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card as="article" className="group">
      <Link href={`/events/${event.slug}`} className="block">
        <CardImage src={event.image.url} alt={event.image.alt} />
        <CardContent>
          <div className="flex items-center gap-2 mb-2">
            <CategoryBadge category={event.category} />
            {event.featured && (
              <span className="text-xs font-medium text-cardinal">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-cardinal transition-colors line-clamp-2">
            {event.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {event.summary}
          </p>

          <dl className="mt-4 space-y-1 text-sm text-gray-500">
            <div className="flex items-start gap-2">
              <dt className="sr-only">Date</dt>
              <dd className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-gray-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <span>{formatDate(event.date)}</span>
              </dd>
            </div>
            <div className="flex items-start gap-2">
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-gray-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="line-clamp-1">{event.location}</span>
              </dd>
            </div>
          </dl>
        </CardContent>
      </Link>
    </Card>
  );
}
