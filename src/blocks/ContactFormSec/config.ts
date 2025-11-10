import type { Block } from 'payload'

export const ContactFormSec: Block = {
  slug: 'contactFormSec',
  interfaceName: 'ContactFormSec',
  fields: [
    {
      name: 'smltext',
      label: 'Small Text (Eyebrow)',
      type: 'text',
      required: false,
    },
    {
      name: 'sectitle',
      label: 'Section Title',
      type: 'text',
      required: false,
    },
    {
      name: 'secdesc',
      label: 'Section Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: false,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'textarea',
      required: false,
    },
    {
      name: 'social',
      label: 'Social Media Links',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          label: 'Facebook URL',
          type: 'text',
          required: false,
        },
        {
          name: 'linkedin',
          label: 'LinkedIn URL',
          type: 'text',
          required: false,
        },
        {
          name: 'youtube',
          label: 'YouTube URL',
          type: 'text',
          required: false,
        },
        {
          name: 'instagram',
          label: 'Instagram URL',
          type: 'text',
          required: false,
        },
        {
          name: 'twitterx',
          label: 'Twitter/X URL',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
    },
  ],
  graphQL: {
    singularName: 'ContactFormSec',
  },
  labels: {
    plural: 'Contact Form Sections',
    singular: 'Contact Form Section',
  },
}

