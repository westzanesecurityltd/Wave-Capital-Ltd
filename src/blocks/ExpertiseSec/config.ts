import type { Block } from 'payload'

export const ExpertiseSec: Block = {
  slug: 'expertiseSec',
  interfaceName: 'ExpertiseSecBlock',
  labels: {
    singular: 'Expertise Section',
    plural: 'Expertise Sections',
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
      label: 'Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
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
      name: 'blockdata',
      label: 'Bullet Points',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}


