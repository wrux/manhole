import groq from 'groq';
import { client } from '~/sanity/client';

const countriesQuery = groq`
  *[_type == "location" && type == "country"]|order(_createdAt desc) {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    countryCode,
    "slug": slug.current,
    name,
    nameLocalised,
  }
`;

export async function getCountries(): Promise<Country[]> {
  return await client.fetch(countriesQuery);
}
