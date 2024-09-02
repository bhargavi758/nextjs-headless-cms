import type { Metadata } from "next";
import { Suspense } from "react";
import { getEvents } from "@/lib/cms/client";
import { EventCategory } from "@/lib/cms/types";
import { EventFilter } from "@/components/events/EventFilter";
import { EventList } from "@/components/events/EventList";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming lectures, seminars, workshops, and conferences at the Stanford Computer Science Department.",
};

export const revalidate = 3600;

interface EventsPageProps {
  searchParams: { category?: string };
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const category = searchParams.category as EventCategory | undefined;
  const events = await getEvents(category);

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-gray-900">Events</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          Explore upcoming lectures, seminars, workshops, and conferences hosted
          by the Department of Computer Science.
        </p>
      </header>

      <div className="mb-8">
        <Suspense fallback={null}>
          <EventFilter />
        </Suspense>
      </div>

      <EventList events={events} />
    </div>
  );
}
