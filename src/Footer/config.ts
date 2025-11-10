import type { GlobalConfig } from 'payload'

import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Footer Logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'columns',
      label: 'Footer Columns',
      type: 'array',
      minRows: 1,
      maxRows: 5, // optional limit
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          name: 'title',
          label: 'Column Title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'label',
              label: 'Link Label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              label: 'Link URL',
              type: 'text',
              required: true,
            },
            {
              name: 'newTab',
              label: 'Open in new tab',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'number',
      label: 'Contact Number',
      type: 'text',
      required: false,
    },
    {
      name: 'Address',
      label: 'Address',
      type: 'textarea',
      required: false,
    },
    { name: 'facebook', label: 'FaceBook', type: 'text', required: false, },
    { name: 'linkedIn', label: 'LinkedIn', type: 'text', required: false, },
    { name: 'youtube', label: 'Youtube', type: 'text', required: false, },
    { name: 'instagram', label: 'Instagram', type: 'text', required: false, },
    { name: 'x', label: 'X', type: 'text', required: false, },
    {
      name: 'bottomText',
      label: 'Footer Bottom Text',
      type: 'text',
      required: false,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
