import { PortableTextBlock } from '@portabletext/types';
import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { Block, type KeyedObject } from 'sanity';
import type { countryIDs } from '~/lib/countries';

declare global {
  /**
   * Sanity
   */
  interface ImageWithMeta extends SanityImageAssetDocument {
    alt?: string;
  }

  type SanityPublicDocument<T = {}> = SanityDocument<
    T & {
      slug: string;
    }
  >;

  /**
   * Content
   */
  type Credit = {
    type: 'author' | 'photo' | 'edit';
    person: {
      _id: string;
      fullName: string;
      website?: string;
    };
    note?: string;
  };

  type PostTeaser = SanityPublicDocument<{
    mainImage: ImageWithMeta;
    title: string;
  }>;

  type Post = SanityPublicDocument<{
    bodyHTML: string;
    credits: Array<Credit>;
    // gallery: Array<ImageWithMeta>;
    locations: Array<Country | City>;
    mainImage: ImageWithMeta;
    metaDescription?: string;
    morePosts?: Array<PostTeaser>;
    summary?: PortableTextBlock;
    summaryHTML?: string;
    title: string;
  }>;

  type Location = SanityPublicDocument<{
    name: string;
    nameLocalised: string;
    type: 'country' | 'city';
  }>;

  type LocationTeaser = SanityPublicDocument<{
    name: string;
  }>;

  type Country = Omit<Location, 'type'> & {
    type: 'country';
    countryCode: countryIDs | undefined;
    posts?: Array<PostTeaser>;
  };

  type City = Omit<Location, 'type'> & {
    type: 'city';
  };
}

export {};
