import type { Block } from 'payload'

export const StrategicFocus: Block = {
  slug: 'strategicFocus',
  interfaceName: 'StrategicFocusBlock',
  labels: {
    singular: 'Strategic Focus',
    plural: 'Strategic Focus Blocks',
  },
  fields: [
    {
      name: 'sectitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'secdesc',
      label: 'Section Description',
      type: 'textarea',
    },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      maxRows: 3,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'desc',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'iconType',
          label: 'Icon',
          type: 'select',
          defaultValue: 'snowflake',
          options: [
            { label: 'Snowflake', value: 'snowflake' },
            { label: 'Bar Chart', value: 'barchart' },
            { label: 'Shield', value: 'shield' },
          ],
        },
        {
          name: 'showImage',
          label: 'Show Image',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            // Only allow toggling image on the 3rd card (index 2)
            condition: (_data, _siblingData, { path }) => {
              if (!path) return false
              const pathStr = Array.isArray(path) ? path.join('.') : path
              const match = pathStr.match(/\.cards\.(\d+)\./)
              return match ? Number(match[1]) === 2 : false
            },
          },
        },
        {
          name: 'imageUpload',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_data, siblingData, { path }) => {
              if (!path) return false
              const pathStr = Array.isArray(path) ? path.join('.') : path
              const match = pathStr.match(/\.cards\.(\d+)\./)
              const isThird = match ? Number(match[1]) === 2 : false
              return isThird && Boolean(siblingData?.showImage)
            },
          },
        },
      ],
    },
  ],
}


