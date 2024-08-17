export const EVENT_FIELDS = `
  id slug title summary date endDate time location category
  featured speaker speakerTitle registrationUrl publishedAt
  image { url alt width height }
  body { html }
`;

export const NEWS_FIELDS = `
  id slug title summary author authorRole category
  publishedAt featured
  image { url alt width height }
  body { html }
`;

export const PAGE_FIELDS = `
  id slug title subtitle
  body { html }
  image { url alt width height }
`;
