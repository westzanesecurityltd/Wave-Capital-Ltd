import type { Block, FieldHook } from 'payload'
import { randomUUID } from 'crypto'

const ensureCardIds: FieldHook = ({ value }) => {
  if (!Array.isArray(value)) return value
  return value.map((card: Record<string, unknown> = {}) => {
    const desc = Array.isArray(card?.desc)
      ? card.desc.map((paragraph: unknown) => {
          const normalized =
            paragraph && typeof paragraph === 'object'
              ? (paragraph as Record<string, unknown>)
              : { paragraph }

          return {
            ...normalized,
            paragraph:
              typeof normalized.paragraph === 'string' ? normalized.paragraph : '',
            id:
              typeof normalized.id === 'string' && normalized.id.length > 0
                ? normalized.id
                : randomUUID(),
          }
        })
      : card?.desc

    return {
      ...card,
      id: typeof card?.id === 'string' && card.id.length > 0 ? card.id : randomUUID(),
      desc,
    }
  })
}

export const WaveGroup: Block = {
  slug: 'waveGroup',
  interfaceName: 'WaveGroupBlock',
  labels: {
    singular: 'Wave Group',
    plural: 'Wave Group Blocks',
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
      maxRows: 4,
      hooks: {
        beforeValidate: [ensureCardIds],
      },
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
          type: 'array',
          minRows: 0,
          maxRows: 3,
          admin: {
            initCollapsed: true,
          },
          labels: {
            singular: 'Paragraph',
            plural: 'Paragraphs',
          },
          fields: [
            {
              name: 'paragraph',
              label: 'Paragraph',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'imageUpload',
          label: 'Logo Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imgWidth',
          label: 'Image Max Width (px)',
          type: 'number',
          admin: { step: 1 },
          defaultValue: 189,
        },
        {
          name: 'imgHeight',
          label: 'Image Max Height (px)',
          type: 'number',
          admin: { step: 1 },
          defaultValue: 150,
        },
      ],
    },
  ],
}


