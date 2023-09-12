import { defineField } from 'sanity'

const schema = defineField({
  title: 'SEO and Social Sharing',
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'Title used for search engines and browsers',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Long titles might be truncated in content previews'),
    }),
    defineField({
      type: 'text',
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'Description for search engines',
      validation: (rule) =>
        rule
          .max(150)
          .warning(
            'Longer meta descriptions will be truncated in content previews'
          ),
    }),
    defineField({
      type: 'string',
      name: 'sharingTitle',
      title: 'Sharing Title',
      description:
        'Title used in sharing content previews. Meta title will be used as a fallback.',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles might be truncated in content previews'),
    }),
    defineField({
      type: 'text',
      name: 'sharingDescription',
      title: 'Sharing Description',
      description:
        'Description text used in sharing content previews. Meta description will be used as a fallback.',
      validation: (Rule) =>
        Rule.max(150).warning(
          'Longer descriptions will be truncated in content previews'
        ),
    }),
    defineField({
      type: 'image',
      name: 'sharingImage',
      title: 'Sharing Image',
    }),
  ],
})

export default schema
