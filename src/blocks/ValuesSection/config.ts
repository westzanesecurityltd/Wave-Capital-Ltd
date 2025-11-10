import type { Block } from 'payload'

export const ValuesSection: Block = {
  slug: 'valuesSection',
  interfaceName: 'ValuesSectionBlock',
  labels: {
    singular: 'Values Section',
    plural: 'Values Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'secdesc',
      label: 'Section Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'iconType',
          label: 'Icon',
          type: 'select',
          required: false,
          defaultValue: 'shield',
          options: [
            { label: 'Shield', value: 'shield' },
            { label: 'Users', value: 'users' },
            { label: 'Snowflake', value: 'snowflake' },
            { label: 'Building', value: 'building' },
            { label: 'Factory', value: 'factory' },
            { label: 'Trending Up', value: 'trendingUp' },
          ],
        },
        {
          name: 'title',
          label: 'Card Title',
          type: 'text',
          required: true,
        },
        {
          name: 'desc',
          label: 'Card Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}


