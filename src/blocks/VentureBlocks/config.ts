import type { Block } from 'payload'

export const VentureBlocks: Block = {
  slug: 'ventureBlocks',
  interfaceName: 'VentureBlocksBlock',
  labels: {
    singular: 'Venture Blocks',
    plural: 'Venture Blocks',
  },
  fields: [
    {
      name: 'ventureItems',
      label: 'Venture Items',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Venture Item',
        plural: 'Venture Items',
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'tags',
          label: 'Tags',
          type: 'array',
          admin: {
            initCollapsed: true,
          },
          labels: {
            singular: 'Tag',
            plural: 'Tags',
          },
          fields: [
            {
              name: 'tag',
              label: 'Tag',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'imageUpload',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}

