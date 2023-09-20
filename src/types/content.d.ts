import { PortableTextBlock } from '@portabletext/types';
import { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { Block, type KeyedObject } from 'sanity';

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
    body: PortableTextBlock;
    bodyHTML: string;
    credits: Array<Credit>;
    gallery: Array<ImageWithMeta>;
    locations: Array<KeyedObject & Location>;
    mainImage: ImageWithMeta;
    metaDescription?: string;
    morePosts?: Array<PostTeaser>;
    summary?: PortableTextBlock;
    summaryHTML?: string;
    title: string;
  }>;

  type Location = SanityPublicDocument<{
    name: string;
    type: 'country' | 'city';
  }>;
}

export {};
