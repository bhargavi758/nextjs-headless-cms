export interface CMSImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface CMSRichText {
  html: string;
}

export interface CMSEvent {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: CMSRichText;
  image: CMSImage;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: EventCategory;
  featured: boolean;
  speaker?: string;
  speakerTitle?: string;
  registrationUrl?: string;
  publishedAt: string;
}

export interface CMSNewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: CMSRichText;
  image: CMSImage;
  author: string;
  authorRole: string;
  category: NewsCategory;
  publishedAt: string;
  featured: boolean;
}

export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  body: CMSRichText;
  image?: CMSImage;
}

export type EventCategory =
  | "lecture"
  | "seminar"
  | "workshop"
  | "conference"
  | "colloquium"
  | "social";

export type NewsCategory =
  | "research"
  | "faculty"
  | "students"
  | "awards"
  | "announcements";

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
