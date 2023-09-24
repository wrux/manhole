import groq from 'groq';
import { client } from '~/sanity/client';
import { imageFragment } from '~/sanity/fragments/imageFragment';

const postTeaserQuery = groq`
  *[_type=="post"]|order(_createdAt desc) {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    ${imageFragment('mainImage')},
    "slug": slug.current,
    title,
  }
`;

export async function getPostTeasers(): Promise<PostTeaser[]> {
  return await client.fetch(postTeaserQuery);
}

const postsQuery = groq`
  *[_type=="post"]|order(_createdAt desc) {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    body,
    "bodyHTML": pt::text(body),
    credits[] {
      ...,
      person-> {
        _id,
        fullName,
        website,
      },
    },
    gallery,
    locations[]-> {
      _key,
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      type,
      type == 'country' => {
        countryCode,
      },
    },
    ${imageFragment('mainImage')},
    "metaDescription": pt::text(summary),
    "morePosts": *[_type=="post" && _id != ^._id]|order(_createdAt desc)[0...6] {
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      ${imageFragment('mainImage')},
      "slug": slug.current,
      title,
    },
    "slug": slug.current,
    summary,
    "summaryHTML": pt::text(summary),
    title,
  }
`;

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(postsQuery);
}
