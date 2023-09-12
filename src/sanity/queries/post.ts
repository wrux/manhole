import groq from 'groq';
import { client } from 'sanity/client';
import { imageFragment } from 'sanity/fragments/imageFragment';

const postTeaserQuery = groq`
  *[_type=="post"]|order(_createdAt desc) {
    ...,
    ${imageFragment('mainImage')},
    "slug": slug.current,
  }
`;

export async function getPostTeasers(): Promise<object[]> {
  return await client.fetch(postTeaserQuery);
}

const postsQuery = groq`
  *[_type=="post"]|order(_createdAt desc) {
    ...,
    ${imageFragment('mainImage')},
    "slug": slug.current,
  }
`;

export async function getPosts(): Promise<object[]> {
  return await client.fetch(postsQuery);
}
