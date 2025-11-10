import type { Block } from 'payload'

export const InvestmentMeets: Block = {
  slug: 'investmentMeets',
  interfaceName: 'InvestmentMeetsBlock',
  labels: {
    singular: 'Investment Meets',
    plural: 'Investment Meets Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'buttontext',
      label: 'Button Text',
      type: 'text',
      required: false,
    },
    {
      name: 'url',
      label: 'Button URL',
      type: 'text',
      required: false,
    },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'title',
          label: 'Card Title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          label: 'Card Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}


