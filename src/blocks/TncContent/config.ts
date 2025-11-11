import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TncContent: Block = {
  slug: 'tncContent',
  interfaceName: 'TncContentBlock',
  labels: {
    plural: 'Terms & Conditions Content',
    singular: 'Terms & Conditions Content',
  },
  fields: [
    {
      name: 'contentItems',
      type: 'array',
      label: 'Content Items',
      labels: {
        plural: 'Content Items',
        singular: 'Content Item',
      },
      required: false,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
              InlineToolbarFeature(),
              FixedToolbarFeature(),
              HorizontalRuleFeature(),
            ],
          }),
        },
      ],
    },
  ],
}
