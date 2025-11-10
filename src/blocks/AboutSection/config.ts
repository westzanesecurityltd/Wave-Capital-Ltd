import type { Block } from 'payload'

export const AboutSection: Block = {
  slug: 'aboutSection',
  interfaceName: 'AboutSectionBlock',
  labels: {
    singular: 'About Section',
    plural: 'About Sections',
  },
  fields: [
    {
      name: 'sectitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'smltext',
      label: 'Eyebrow Text',
      type: 'text',
      required: true,
    },
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


