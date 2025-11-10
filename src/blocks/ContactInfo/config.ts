import type { Block } from 'payload'

export const ContactInfo: Block = {
  slug: 'contactInfo',
  interfaceName: 'ContactInfoBlock',
  labels: {
    singular: 'Contact Info',
    plural: 'Contact Info Blocks',
  },
  fields: [
    {
      name: 'blocktitle',
      label: 'Block Title',
      type: 'text',
      required: true,
    },
    {
      name: 'blockdesc',
      label: 'Block Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'btntext',
      label: 'Button Text',
      type: 'text',
      required: false,
    },
    {
      name: 'btnurl',
      label: 'Button URL',
      type: 'text',
      required: false,
    },
    {
      name: 'imageUpload',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

