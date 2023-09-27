import algoliasearch from 'algoliasearch';
import groq from 'groq';
import { type SanityDocumentStub } from '@sanity/client';
import indexer from 'sanity-algolia';

export const algoliaApplicationId = import.meta.env.ALGOLIA_APPLICATION_ID!;
export const algoliaAdminKey = import.meta.env.ALGOLIA_ADMIN_API_KEY!;
export const algoliaPostsIndex = import.meta.env.ALGOLIA_INDEX_POSTS!;
export const algoliaSecret = import.meta.env.ALGOLIA_SECRET!;
export const algoliaSearchKey = import.meta.env.ALGOLIA_SEARCH_KEY!;

export const algoliaAdminClient = algoliasearch(
  algoliaApplicationId,
  algoliaAdminKey
);

export const algoliaIndex = algoliaAdminClient.initIndex(algoliaPostsIndex);

export const sanityAlgolia = indexer(
  {
    post: {
      index: algoliaIndex,
      projection: groq`{
        title,
        titleLocalised,
        "path": slug.current,
        "summary": pt::text(body),
        "body": pt::text(body),
        "locations": locations[]->name,
      }`,
    },
    location: {
      index: algoliaIndex,
      projection: groq`{
        name,
        nameLocalised,
        type,
        "path": slug.current,
        countryCode,
      }`,
    },
  },
  // The second parameter is a function that maps from a fetched Sanity document
  // to an Algolia Record. Here you can do further mutations to the data before
  // it is sent to Algolia.
  (document: SanityDocumentStub) => {
    return document;
  }
);
