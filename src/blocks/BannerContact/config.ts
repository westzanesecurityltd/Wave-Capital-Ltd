import type { Block } from 'payload'

export const BannerContact: Block = {
  slug: 'bannerContact',
  interfaceName: 'BannerContactBlock',
  labels: {
    singular: 'Banner Contact',
    plural: 'Banner Contact Blocks',
  },
  fields: [
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

