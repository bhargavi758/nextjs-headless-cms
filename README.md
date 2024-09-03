# nextjs-headless-cms

Academic department website built with Next.js 14 App Router. Uses a GraphQL API layer (graphql-yoga) with mock CMS data — swap out the resolvers for real CMS calls and everything else stays the same.

## stack

- Next.js 14 (App Router, SSG with ISR)
- TypeScript
- graphql-yoga
- Tailwind CSS

## setup

```bash
npm install
npm run dev
```

Runs at http://localhost:3000. GraphQL playground at http://localhost:3000/api/graphql.

## how it works

Mock data files -> GraphQL resolvers -> in-process schema execution -> React Server Components -> static pages that revalidate every hour.

All data goes through the GraphQL schema even though it's local. Replace the resolvers with real CMS API calls and nothing else changes.
