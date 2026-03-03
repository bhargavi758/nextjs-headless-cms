import Link from "next/link";
import { getFeaturedEvents, getLatestNews, getPage } from "@/lib/cms/client";
import { EventCard } from "@/components/events/EventCard";
import { NewsCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/Button";

export const revalidate = 3600;

const quickLinks = [
  {
    title: "Admissions",
    description: "Explore undergraduate and graduate programs",
    href: "#",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
        />
      </svg>
    ),
  },
  {
    title: "Research",
    description: "Discover our labs and research groups",
    href: "#",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "People",
    description: "Meet our faculty, staff, and students",
    href: "#",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Courses",
    description: "Browse our course catalog and schedule",
    href: "#",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
];

export default async function HomePage() {
  const [featuredEvents, latestNews, page] = await Promise.all([
    getFeaturedEvents(),
    getLatestNews(3),
    getPage("home"),
  ]);

  return (
    <>
      <section
        className="relative bg-primary text-white"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white max-w-3xl"
          >
            {page?.title ?? "Department of Computer Science"}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            {page?.body.html
              ? page.body.html.replace(/<[^>]+>/g, "")
              : "Advancing the frontiers of computing for humanity through world-class research and education."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="/events"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 border-0"
            >
              Upcoming Events
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              About the Department
            </Button>
          </div>
        </div>
      </section>

      <section
        className="py-12 bg-sand-light"
        aria-labelledby="quick-links-heading"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-links-heading" className="sr-only">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-start gap-4 p-5 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="shrink-0 p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        aria-labelledby="featured-events-heading"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2
                id="featured-events-heading"
                className="text-3xl font-serif font-bold text-gray-900"
              >
                Featured Events
              </h2>
              <p className="mt-2 text-gray-600">
                Upcoming lectures, workshops, and conferences
              </p>
            </div>
            <Button href="/events" variant="ghost" className="hidden sm:flex">
              View all events &rarr;
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button href="/events" variant="outline">
              View all events
            </Button>
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 bg-gray-50"
        aria-labelledby="latest-news-heading"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2
                id="latest-news-heading"
                className="text-3xl font-serif font-bold text-gray-900"
              >
                Latest News
              </h2>
              <p className="mt-2 text-gray-600">
                Research breakthroughs, awards, and department updates
              </p>
            </div>
            <Button href="/news" variant="ghost" className="hidden sm:flex">
              All news &rarr;
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button href="/news" variant="outline">
              All news
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
