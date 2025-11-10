import type { Block } from 'payload'

export const ApproachSec: Block = {
  slug: 'approachSec',
  interfaceName: 'ApproachSecBlock',
  labels: {
    singular: 'Approach Section',
    plural: 'Approach Sections',
  },
  fields: [
    {
      name: 'bgcolor',
      label: 'Background Color (CSS value, e.g. #E6EBF1 or rgb(...))',
      type: 'text',
    },
    {
      name: 'blocktitle',
      label: 'Block Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtext',
      label: 'Subtext',
      type: 'textarea',
    },
    {
      name: 'blockdescs',
      label: 'Descriptions',
      type: 'array',
      labels: {
        singular: 'Paragraph',
        plural: 'Paragraphs',
      },
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'button',
      label: 'Button',
      type: 'group',
      fields: [
        {
          name: 'btntext',
          label: 'Button Text',
          type: 'text',
        },
        {
          name: 'btnurl',
          label: 'Button URL',
          type: 'text',
        },
      ],
    },
    {
      name: 'image',
      label: 'Image',
      type: 'group',
      fields: [
        {
          name: 'imageUpload',
          label: 'Image Upload',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}


