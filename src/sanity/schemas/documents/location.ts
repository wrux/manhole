import { defineField, defineType } from 'sanity';
import { Buildings, GlobeHemisphereEast } from '@phosphor-icons/react';

export default defineType({
  name: 'location',
  type: 'document',
  icon: GlobeHemisphereEast,
  title: 'Location',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'metadata', title: 'Metadata' },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'nameLocalised',
      type: 'string',
      title: 'Name Localised',
      group: 'general',
    }),
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Country', value: 'country' },
          { title: 'City', value: 'city' },
        ],
      },
      initialValue: 'city',
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'countryCode',
      title: 'Country Code',
      description: 'Two letter ISOcode of the country',
      type: 'string',
      group: 'general',
      hidden: ({ parent }) => parent?.type !== 'country',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      nameLocalised: 'nameLocalised',
      locations: 'locations',
      type: 'type',
    },
    prepare: ({ name, nameLocalised, type }) => ({
      title: name,
      subtitle: nameLocalised,
      media: type === 'country' ? GlobeHemisphereEast : Buildings,
    }),
  },
});
