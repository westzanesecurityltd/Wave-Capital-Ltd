import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { BannerHome } from '../../blocks/BannerHome/config'
import { AboutSection } from '../../blocks/AboutSection/config'
import { BannerAbout } from '../../blocks/BannerAbout/config'
import { StrategicFocus } from '../../blocks/StrategicFocus/config'
import { ApproachSec } from '../../blocks/ApproachSec/config'
import { WeCreate } from '../../blocks/WeCreate/config'
import { WaveGroup } from '../../blocks/WaveGroup/config'
import { CtaSection } from '../../blocks/CtaSection/config'
import { ManagedCapital } from '../../blocks/ManagedCapital/config'
import { OurVision } from '../../blocks/OurVision/config'
import { ValuesSection } from '../../blocks/ValuesSection/config'
import { ExpertiseSec } from '../../blocks/ExpertiseSec/config'
import { InvestmentMeets } from '../../blocks/InvestmentMeets/config'
import { BannerTeams } from '../../blocks/BannerTeams/config'
import { PeopleWho } from '../../blocks/PeopleWho/config'
import { TeamSection } from '../../blocks/TeamSection/config'
import { PortfolioSec } from '../../blocks/PortfolioSec/config'
import { Faq } from '../../blocks/Faq/config'
import { VentureBlocks } from '../../blocks/VentureBlocks/config'
import { BannerGV } from '../../blocks/BannerGV/config'
import { BannerContact } from '../../blocks/BannerContact/config'
import { ContactFormSec } from '../../blocks/ContactFormSec/config'
import { ContactInfo } from '../../blocks/ContactInfo/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [BannerHome, BannerAbout, BannerContact, BannerTeams, TeamSection, AboutSection, ManagedCapital, OurVision, ValuesSection, ExpertiseSec, InvestmentMeets, ApproachSec, StrategicFocus, WeCreate, WaveGroup, CtaSection, CallToAction, Content, MediaBlock, Archive, FormBlock, PeopleWho, PortfolioSec, Faq, VentureBlocks, BannerGV, ContactFormSec, ContactInfo],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
