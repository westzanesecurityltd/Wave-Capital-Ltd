import type { Block } from 'payload'

export const TncHeader: Block = {
  slug: 'tncHeader',
  interfaceName: 'TncHeaderBlock',
  labels: {
    plural: 'Terms & Conditions Headers',
    singular: 'Terms & Conditions Header',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Terms',
      required: false,
      label: 'Eyebrow Text',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Terms of',
      required: true,
      label: 'Title',
    },
    {
      name: 'updatedate',
      type: 'text',
      defaultValue: 'Last updated: 24 August 2025',
      required: false,
      label: 'Update Date',
    },
    {
      name: 'secdesc',
      type: 'array',
      label: 'Section Descriptions',
      labels: {
        plural: 'Section Descriptions',
        singular: 'Section Description',
      },
      required: false,
      fields: [
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
    },
  ],
}
