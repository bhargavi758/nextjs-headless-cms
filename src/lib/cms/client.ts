import { graphql } from "graphql";
import { schema } from "@/lib/graphql/schema";
import {
  CMSEvent,
  CMSNewsArticle,
  CMSPage,
  EventCategory,
  NewsCategory,
  PaginatedResult,
} from "./types";

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const result = await graphql({
    schema,
    source: query,
    variableValues: variables,
  });

  if (result.errors?.length) {
    throw new Error(
      result.errors.map((e) => e.message).join(", ")
    );
  }

  return result.data as T;
}

export async function getEvents(
  category?: EventCategory
): Promise<CMSEvent[]> {
  const query = `
    query GetEvents($category: String) {
      events(category: $category) {
        id slug title summary date endDate time location category
        featured speaker speakerTitle registrationUrl publishedAt
        image { url alt width height }
        body { html }
      }
    }
  `;
  const data = await fetchGraphQL<{ events: CMSEvent[] }>(query, { category });
  return data.events;
}

export async function getEventBySlug(
  slug: string
): Promise<CMSEvent | null> {
  const query = `
    query GetEvent($slug: String!) {
      event(slug: $slug) {
        id slug title summary date endDate time location category
        featured speaker speakerTitle registrationUrl publishedAt
        image { url alt width height }
        body { html }
      }
    }
  `;
  const data = await fetchGraphQL<{ event: CMSEvent | null }>(query, { slug });
  return data.event;
}

export async function getFeaturedEvents(): Promise<CMSEvent[]> {
  const query = `
    query GetFeaturedEvents {
      featuredEvents {
        id slug title summary date time location category
        featured speaker speakerTitle publishedAt
        image { url alt width height }
      }
    }
  `;
  const data = await fetchGraphQL<{ featuredEvents: CMSEvent[] }>(query);
  return data.featuredEvents;
}

export async function getNewsArticles(
  page: number = 1,
  pageSize: number = 6,
  category?: NewsCategory
): Promise<PaginatedResult<CMSNewsArticle>> {
  const query = `
    query GetNews($page: Int, $pageSize: Int, $category: String) {
      newsArticles(page: $page, pageSize: $pageSize, category: $category) {
        items {
          id slug title summary author authorRole category
          publishedAt featured
          image { url alt width height }
          body { html }
        }
        total page pageSize totalPages
      }
    }
  `;
  const data = await fetchGraphQL<{
    newsArticles: PaginatedResult<CMSNewsArticle>;
  }>(query, { page, pageSize, category });
  return data.newsArticles;
}

export async function getNewsArticleBySlug(
  slug: string
): Promise<CMSNewsArticle | null> {
  const query = `
    query GetNewsArticle($slug: String!) {
      newsArticle(slug: $slug) {
        id slug title summary author authorRole category
        publishedAt featured
        image { url alt width height }
        body { html }
      }
    }
  `;
  const data = await fetchGraphQL<{ newsArticle: CMSNewsArticle | null }>(
    query,
    { slug }
  );
  return data.newsArticle;
}

export async function getLatestNews(
  limit: number = 3
): Promise<CMSNewsArticle[]> {
  const query = `
    query GetLatestNews($limit: Int) {
      latestNews(limit: $limit) {
        id slug title summary author authorRole category
        publishedAt featured
        image { url alt width height }
      }
    }
  `;
  const data = await fetchGraphQL<{ latestNews: CMSNewsArticle[] }>(query, {
    limit,
  });
  return data.latestNews;
}

export async function getPage(slug: string): Promise<CMSPage | null> {
  const query = `
    query GetPage($slug: String!) {
      page(slug: $slug) {
        id slug title subtitle
        body { html }
        image { url alt width height }
      }
    }
  `;
  const data = await fetchGraphQL<{ page: CMSPage | null }>(query, { slug });
  return data.page;
}

export async function getAllEventSlugs(): Promise<string[]> {
  const query = `
    query GetAllEventSlugs {
      events {
        slug
      }
    }
  `;
  const data = await fetchGraphQL<{ events: { slug: string }[] }>(query);
  return data.events.map((e) => e.slug);
}

export async function getAllNewsSlugs(): Promise<string[]> {
  const query = `
    query GetAllNewsSlugs {
      allNews {
        slug
      }
    }
  `;
  const data = await fetchGraphQL<{ allNews: { slug: string }[] }>(query);
  return data.allNews.map((n) => n.slug);
}
