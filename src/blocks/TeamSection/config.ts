import type { Block } from 'payload'

export const TeamSection: Block = {
  slug: 'teamSection',
  interfaceName: 'TeamSectionBlock',
  labels: {
    singular: 'Team Section',
    plural: 'Team Section Blocks',
  },
  fields: [
    {
      name: 'teamMembers',
      label: 'Team Members',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Team Member',
        plural: 'Team Members',
      },
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'designation',
          label: 'Designation',
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
          name: 'linkedin',
          label: 'LinkedIn URL',
          type: 'text',
          required: false,
        },
        {
          name: 'imgSrc',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}

