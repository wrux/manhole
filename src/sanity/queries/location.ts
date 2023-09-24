import groq from 'groq';
import { client } from '~/sanity/client';
import { imageFragment } from '../fragments/imageFragment';

const countriesQuery = groq`
  *[_type == "location" && type == "country"]|order(_createdAt desc) {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    countryCode,
    "posts": *[_type=="post" && references(^._id)]|order(_createdAt desc) {
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
    name,
    nameLocalised,
  }
`;

export async function getCountries(): Promise<Country[]> {
  return await client.fetch(countriesQuery);
}

const countryListQuery = groq`
  *[_type == "location" && type == "country"]|order(_createdAt desc) {
    _id,
    _rev,
    _type,
    _createdAt,
    _updatedAt,
    "slug": slug.current,
    name,
  }
`;

export async function getCountryList(): Promise<LocationTeaser[]> {
  return await client.fetch(countryListQuery);
}
