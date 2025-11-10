import type { Block } from 'payload'

export const ManagedCapital: Block = {
  slug: 'managedCapital',
  interfaceName: 'ManagedCapitalBlock',
  labels: {
    singular: 'Managed Capital',
    plural: 'Managed Capital Blocks',
  },
  fields: [
    {
      name: 'image',
      label: 'Main Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'eyebrowtext',
      label: 'Eyebrow Text',
      type: 'text',
      required: false,
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
  ],
}


