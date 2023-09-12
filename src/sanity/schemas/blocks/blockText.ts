import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blockText',
  title: 'Text',
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      title: 'Content Width',
      name: 'contentWidth',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Full', value: 'full' },
        ],
      },
      group: 'settings',
      initialValue: 'md',
    }),
    defineField({
      name: 'blockLayout',
      title: 'Block Layout',
      type: 'blockLayout',
      group: 'settings',
    }),
  ],
})
