import type { Block } from 'payload'

export const BannerHome: Block = {
  slug: 'bannerHome',
  interfaceName: 'BannerHomeBlock',
  labels: {
    singular: 'Banner Home',
    plural: 'Banner Home Blocks',
  },
  fields: [
    {
      name: 'eyebrowtext',
      label: 'Eyebrow Text',
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
      name: 'secdesc',
      label: 'Secondary Description',
      type: 'textarea',
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


