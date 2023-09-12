import { defineField, defineType } from 'sanity'

const margins = [
  { title: 'None', value: 'none' },
  { title: 'Extra Small', value: 'xs' },
  { title: 'Small', value: 'sm' },
  { title: 'Medium', value: 'md' },
  { title: 'Large', value: 'lg' },
  { title: 'Extra Large', value: 'xl' },
  { title: '2x Large', value: '2xl' },
]

export default defineType({
  title: 'Block Layout',
  name: 'blockLayout',
  type: 'object',
  fields: [
    defineField({
      title: 'Background',
      name: 'bg',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
      },
    }),
    defineField({
      title: 'Margin Top',
      name: 'mt',
      type: 'string',
      options: {
        list: margins,
      },
    }),
    defineField({
      title: 'Margin Bottom',
      name: 'mb',
      type: 'string',
      options: {
        list: margins,
      },
    }),
    defineField({
      title: 'Padding Top',
      name: 'pt',
      type: 'string',
      options: {
        list: margins,
      },
    }),
    defineField({
      title: 'Padding Bottom',
      name: 'pb',
      type: 'string',
      options: {
        list: margins,
      },
    }),
    defineField({
      title: 'ID',
      name: 'id',
      description: 'Content block ID. Use `dash-case` for all IDs.',
      type: 'string',
    }),
    defineField({
      title: 'Class Name',
      name: 'className',
      description: 'Content block CSS classname',
      type: 'string',
    }),
  ],
  initialValue: {
    mt: 'md',
    mb: 'md',
    pt: 'md',
    pb: 'md',
  },
})
