import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'route',
  title: 'Route',
  icon: BookIcon,
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'metadata', title: 'Metadata' },
  ],
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      title: 'Page',
      name: 'page',
      type: 'reference',
      weak: true,
      to: [{ type: 'page' }],
      validation: (rule) => rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'seo',
      title: 'SEO and Social Sharing',
      type: 'seo',
      group: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'page.title',
      subtitle: 'slug.current',
    },
  },
})
