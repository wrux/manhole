import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import blocks from '../blocks'

export default defineType({
  name: 'page',
  title: 'Page',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: blocks,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
