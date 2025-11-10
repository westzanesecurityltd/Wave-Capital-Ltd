import type { Block } from 'payload'

export const WeCreate: Block = {
  slug: 'weCreate',
  interfaceName: 'WeCreateBlock',
  labels: {
    singular: 'We Create',
    plural: 'We Create Blocks',
  },
  fields: [
    {
      name: 'sectitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'secdesc',
      label: 'Section Description',
      type: 'textarea',
    },
    {
      name: 'ctaText',
      label: 'CTA Button Text',
      type: 'text',
      required: false,
    },
    {
      name: 'ctaUrl',
      label: 'CTA Button URL',
      type: 'text',
      required: false,
    },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      maxRows: 6,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'desc',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'imageUpload',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'iconType',
          label: 'Icon',
          type: 'select',
          defaultValue: 'snowflake',
          options: [
            { label: 'Snowflake', value: 'snowflake' },
            { label: 'Bar Chart', value: 'barchart' },
            { label: 'Shield', value: 'shield' },
          ],
        },
      ],
    },
  ],
}


