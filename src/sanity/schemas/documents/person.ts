import { Person } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

const person = defineType({
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: Person,
  fields: [
    defineField({
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'For internal use only',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'email',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
      media: Person,
    }),
  },
});

export default person;
