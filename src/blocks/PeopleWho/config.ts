import type { Block } from 'payload'

export const PeopleWho: Block = {
  slug: 'peopleWho',
  interfaceName: 'PeopleWhoBlock',
  labels: {
    singular: 'People Who',
    plural: 'People Who Blocks',
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
      name: 'imgSrc',
      label: 'Foreground Image',
      type: 'upload',
      relationTo: 'media',
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

