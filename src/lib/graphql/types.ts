export const typeDefs = /* GraphQL */ `
  type Image {
    url: String!
    alt: String!
    width: Int!
    height: Int!
  }

  type RichText {
    html: String!
  }

  type Event {
    id: ID!
    slug: String!
    title: String!
    summary: String!
    body: RichText!
    image: Image!
    date: String!
    endDate: String
    time: String!
    location: String!
    category: String!
    featured: Boolean!
    speaker: String
    speakerTitle: String
    registrationUrl: String
    publishedAt: String!
  }

  type NewsArticle {
    id: ID!
    slug: String!
    title: String!
    summary: String!
    body: RichText!
    image: Image!
    author: String!
    authorRole: String!
    category: String!
    publishedAt: String!
    featured: Boolean!
  }

  type Page {
    id: ID!
    slug: String!
    title: String!
    subtitle: String
    body: RichText!
    image: Image
  }

  type PaginatedNews {
    items: [NewsArticle!]!
    total: Int!
    page: Int!
    pageSize: Int!
    totalPages: Int!
  }

  type Query {
    events(category: String): [Event!]!
    event(slug: String!): Event
    featuredEvents: [Event!]!
    newsArticles(page: Int, pageSize: Int, category: String): PaginatedNews!
    newsArticle(slug: String!): NewsArticle
    latestNews(limit: Int): [NewsArticle!]!
    allNews: [NewsArticle!]!
    page(slug: String!): Page
  }
`;
