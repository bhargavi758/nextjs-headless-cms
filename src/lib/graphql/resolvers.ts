import { events } from "@/data/events";
import { newsArticles } from "@/data/news";
import { pages } from "@/data/pages";

export const resolvers = {
  Query: {
    events: (_: unknown, args: { category?: string }) => {
      let result = [...events];
      if (args.category) {
        result = result.filter((e) => e.category === args.category);
      }
      return result.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    },

    event: (_: unknown, args: { slug: string }) =>
      events.find((e) => e.slug === args.slug) ?? null,

    featuredEvents: () =>
      events
        .filter((e) => e.featured)
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),

    newsArticles: (
      _: unknown,
      args: { page?: number; pageSize?: number; category?: string }
    ) => {
      const page = args.page ?? 1;
      const pageSize = args.pageSize ?? 6;

      let filtered = [...newsArticles];
      if (args.category) {
        filtered = filtered.filter((n) => n.category === args.category);
      }

      filtered.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      );

      const total = filtered.length;
      const totalPages = Math.ceil(total / pageSize);
      const start = (page - 1) * pageSize;
      const items = filtered.slice(start, start + pageSize);

      return { items, total, page, pageSize, totalPages };
    },

    newsArticle: (_: unknown, args: { slug: string }) =>
      newsArticles.find((n) => n.slug === args.slug) ?? null,

    latestNews: (_: unknown, args: { limit?: number }) => {
      const limit = args.limit ?? 3;
      return [...newsArticles]
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .slice(0, limit);
    },

    allNews: () =>
      [...newsArticles].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      ),

    page: (_: unknown, args: { slug: string }) =>
      pages.find((p) => p.slug === args.slug) ?? null,
  },
};
