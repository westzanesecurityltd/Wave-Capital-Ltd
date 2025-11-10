import type { Block } from 'payload'

export const PortfolioSec: Block = {
  slug: 'portfolioSec',
  interfaceName: 'PortfolioSecBlock',
  labels: {
    singular: 'Portfolio Section',
    plural: 'Portfolio Sections',
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
      name: 'portfolioItems',
      label: 'Portfolio Items',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Portfolio Item',
        plural: 'Portfolio Items',
      },
      fields: [
        {
          name: 'subheading',
          label: 'Subheading',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'imageUpload',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'iconType',
          label: 'Icon',
          type: 'select',
          defaultValue: 'lightbulb',
          options: [
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Building', value: 'building' },
            { label: 'Building2', value: 'building2' },
            { label: 'Factory', value: 'factory' },
            { label: 'FlaskConical', value: 'flaskConical' },
            { label: 'Zap', value: 'zap' },
            { label: 'TrendingUp', value: 'trendingUp' },
            { label: 'Briefcase', value: 'briefcase' },
          ],
        },
      ],
    },
  ],
}

