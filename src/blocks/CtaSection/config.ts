import type { Block } from 'payload'

export const CtaSection: Block = {
  slug: 'ctaSection',
  interfaceName: 'CtaSectionBlock',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'secdesc',
      label: 'Section Description',
      type: 'textarea',
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      type: 'text',
      required: false,
    },
    {
      name: 'buttonUrl',
      label: 'Button URL',
      type: 'text',
      required: false,
    },
  ],
}


