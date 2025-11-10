import type { Block } from 'payload'

export const BannerAbout: Block = {
  slug: 'bannerAbout',
  interfaceName: 'BannerAboutBlock',
  labels: {
    singular: 'Banner About',
    plural: 'Banner About Blocks',
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
    {
      name: 'image',
      label: 'Main Banner Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}


