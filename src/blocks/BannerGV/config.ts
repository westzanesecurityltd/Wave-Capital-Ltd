import type { Block } from 'payload'

export const BannerGV: Block = {
  slug: 'bannerGV',
  interfaceName: 'BannerGVBlock',
  labels: {
    singular: 'Banner GV',
    plural: 'Banner GV Blocks',
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
      label: 'Secondary Description',
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
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'foregroundImage',
      label: 'Foreground Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'bottomtext',
      label: 'Bottom Text',
      type: 'textarea',
      required: true,
    },
  ],
}

