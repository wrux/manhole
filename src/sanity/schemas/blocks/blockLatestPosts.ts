import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blockLatestPosts',
  title: 'Latest Posts',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'limit',
      title: 'Limit',
      type: 'number',
      description: 'Leave empty for no limit',
    }),
  ],
})
