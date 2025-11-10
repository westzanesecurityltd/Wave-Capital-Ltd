import type { Block } from 'payload'

export const OurVision: Block = {
  slug: 'ourVision',
  interfaceName: 'OurVisionBlock',
  labels: {
    singular: 'Our Vision',
    plural: 'Our Vision Blocks',
  },
  fields: [
    {
      name: 'image',
      label: 'Side Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'iconType',
          label: 'Icon',
          type: 'select',
          required: false,
          defaultValue: 'snowflake',
          options: [
            { label: 'Snowflake', value: 'snowflake' },
            { label: 'Bar Chart', value: 'barChart' },
            { label: 'Building', value: 'building' },
            { label: 'Factory', value: 'factory' },
            { label: 'Trending Up', value: 'trendingUp' },
            { label: 'Users', value: 'users' },
          ],
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'secdesc',
          label: 'Description',
          type: 'textarea',
          required: false,
        },
      ],
    },
  ],
}


