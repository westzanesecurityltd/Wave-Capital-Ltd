import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerHome } from '@/blocks/BannerHome/Component'
import AboutSection from '@/blocks/AboutSection/Component'
import { BannerAbout } from '@/blocks/BannerAbout/Component'
import WaveGroup from '@/blocks/WaveGroup/Component'
import ApproachSec from '@/blocks/ApproachSec/Component'  
import StrategicFocus from '@/blocks/StrategicFocus/Component'
import WeCreate from '@/blocks/WeCreate/Component'
import CtaSection from '@/blocks/CtaSection/Component'
import { ManagedCapital } from '@/blocks/ManagedCapital/Components'
import OurVision from '@/blocks/OurVision/Component'
import ValuesSection from '@/blocks/ValuesSection/Component'
import ExpertiseSec from '@/blocks/ExpertiseSec/Component'
import InvestmentMeets from '@/blocks/InvestmentMeets/Component'
import { BannerTeams } from '@/blocks/BannerTeams/Component'
import { PeopleWho } from '@/blocks/PeopleWho/Component'
import TeamSection from '@/blocks/TeamSection/Component'
import PortfolioSec from '@/blocks/PortfolioSec/Component'
import { FAQBlock } from '@/blocks/Faq/Component'
import VentureBlocks from '@/blocks/VentureBlocks/Component'
import { BannerGV } from '@/blocks/BannerGV/Component'
import { BannerContact } from '@/blocks/BannerContact/Component'
import ContactFormSec from '@/blocks/ContactFormSec/Component'
import ContactInfo from '@/blocks/ContactInfo/Component'
import { TncHeader } from '@/blocks/TncHeader/Component'
import { TncContent } from '@/blocks/TncContent/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  bannerHome: BannerHome,
  aboutSection: AboutSection,
  bannerAbout: BannerAbout,
  bannerTeams: BannerTeams,
  peopleWho: PeopleWho,
  teamSection: TeamSection,
  waveGroup: WaveGroup,
  ctaSection: CtaSection,
  approachSec: ApproachSec,
  strategicFocus: StrategicFocus,
  weCreate: WeCreate,
  managedCapital: ManagedCapital,
  ourVision: OurVision,
  valuesSection: ValuesSection,
  expertiseSec: ExpertiseSec,
  investmentMeets: InvestmentMeets,
  portfolioSec: PortfolioSec,
  faq: FAQBlock,
  ventureBlocks: VentureBlocks,
  bannerGV: BannerGV,
  bannerContact: BannerContact,
  contactFormSec: ContactFormSec,
  contactInfo: ContactInfo,
  tncHeader: TncHeader,
  tncContent: TncContent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (<Fragment key={index}>
                {/* <div className="my-16" key={index}> */}
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                {/* </div> */}
              </Fragment>)
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}