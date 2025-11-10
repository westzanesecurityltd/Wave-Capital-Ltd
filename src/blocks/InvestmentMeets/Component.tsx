import React from "react";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import type { Media } from '@/payload-types'
// import { cn } from "@/lib/utils";

interface SectionData {
  title: string;
  url?: string;
  buttontext?: string;
}
interface CardData {
  title: string;
  image?: string | Media | number | null; // upload or string
  imgSrc?: string; // backwards-compat
}
const CARD_DATA: CardData[] = [
  {
    title: "Fiduciary Governance Framework",
    imgSrc: "/images/integrity-img-1.png",
  },
  {
    title: "Risk Architecture and Assurance",
    imgSrc: "/images/integrity-img-2.png",
  },
  {
    title: "Sustainability Integration",
    imgSrc: "/images/integrity-img-1.png",
  },
  {
    title: "Performance Reporting Standards",
    imgSrc: "/images/integrity-img-2.png",
  },
];
const SECTION_DATA: SectionData = {
  title: "Where Investment Meets Integrity",
  url: "/",
  buttontext: "Learn More",
};

export default function InvestmentMeets(props?: { title?: string; url?: string; buttontext?: string; cards?: CardData[] }) {
  const title = props?.title ?? SECTION_DATA.title
  const url = props?.url ?? SECTION_DATA.url
  const buttontext = props?.buttontext ?? SECTION_DATA.buttontext
  const cards = Array.isArray(props?.cards) && props!.cards!.length > 0 ? (props!.cards as CardData[]) : CARD_DATA
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container">
        <div className="mb-10 lg:mb-14">
          <Typography variant="h2" as={"h2"} className="font-playfair">
            {title}
          </Typography>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl col-span-12 lg:col-span-6 xl:col-span-3 relative min-h-[250px] lg:min-h-[280px] group"
              // title={card.title}
            >
              <div className="absolute inset-0 z-0 rounded-xl overflow-hidden flex flex-col">
                <Image
                  src={(typeof card.image === 'object' && card.image && (card.image as Media).url) || (typeof card.image === 'string' ? (card.image as string) : card.imgSrc || "")}
                  alt={card.title + " image"}
                  width={560}
                  height={271}
                  className="w-full h-full rounded-xl object-cover absolute inset-0 z-0"
                  priority={false}
                />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#278AA300_0%,#278AA300_45%,#278AA35E_70%,#1B4277F2_100%)]" />
              </div>
              <CardHeader className="pt-6 px-0 pb-3.5 mt-auto relative z-[11]">
                <CardTitle className="text-base lg:text-base font-medium text-white text-center">
                  {card.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-10 lg:mt-16 text-center">
          {buttontext && url && (
          <ButtonPrimary
            type="link"
            variant="default"
            href={url}
            className="inline-block"
          >
            {buttontext}
          </ButtonPrimary>
          )}
        </div>
      </div>
    </section>
  );
}
