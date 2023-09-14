import groq from 'groq';
import { client } from 'sanity/client';
import { imageFragment } from 'sanity/fragments/imageFragment';

const postTeaserQuery = groq`
  *[_type=="post"]|order(_createdAt desc) {
    _id,
    ${imageFragment('mainImage')},
    "slug": slug.current,
    title,
  }
`;

export async function getPostTeasers(): Promise<object[]> {
  return await client.fetch(postTeaserQuery);
}

const postsQuery = groq`
  *[_type=="post"]|order(_createdAt desc) {
    _id,
    credits[] {
      ...,
      person-> {
        _id,
        fullName,
        website
      },
    },
    gallery,
    locations[]-> {
      _key,
      _id,
      name,
      "slug": slug.current,
      type,
    },
    ${imageFragment('mainImage')},
    "morePosts": *[_type=="post" && _id != ^._id]|order(_createdAt desc)[0...3] {
      _id,
      ${imageFragment('mainImage')},
      "slug": slug.current,
      title,
    },
    "slug": slug.current,
    title,
    titleLocalised,
  }
`;

export async function getPosts(): Promise<object[]> {
  return await client.fetch(postsQuery);
}
