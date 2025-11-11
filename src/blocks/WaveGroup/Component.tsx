import React, { ReactNode } from "react";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Media } from '@/payload-types'
// import { cn } from "@/lib/utils";
// import { Width } from "../Form/Width";

interface CardData {
  imgSrc?: string; // Optional, can be URL string
  imgWidth: number;
  imgHeight: number;
  title: string;
  desc: string;
  icon?: ReactNode; // Optional, any valid React node
  // [key: string]: any; // Allow extra dynamic props (e.g., for future extensions)
}
const CARD_DATA: CardData[] = [
  {
    imgSrc: "/images/wave-capital logo-1.png",
    imgWidth: 189,
    imgHeight: 150,
    title: "Wave AgriVentures",
    desc: "Advancing agri-processing and food value networks through structured investment and strategic partnerships across India and Africa.",
  },
  {
    imgSrc: "/images/wave-capital logo-2.png",
    imgWidth: 148,
    imgHeight: 150,
    title: "Wave Talent Solutions",
    desc: "Delivering recruitment and workforce programs that strengthen enterprise capability and compliance in fast-growing business environments.",
  },
];

const SECTION_DATA: { title: string; secdesc: string } = {
  title: "The Wave Capital Group",
  secdesc:
    "Group companies extending Wave Capital’s investment and management capabilities across strategic industries and emerging markets.",
};

type CMSCard = {
  title?: string
  desc?: string
  imageUpload?: Media | number | null
  imgWidth?: number
  imgHeight?: number
}

type WaveGroupProps = {
  sectitle?: string
  secdesc?: string
  cards?: CMSCard[]
}

export default function WaveGroup(props: WaveGroupProps) {
  const sectionTitle = props.sectitle ?? SECTION_DATA.title
  const sectionDesc = props.secdesc ?? SECTION_DATA.secdesc

  const cards = (props.cards && props.cards.length > 0)
    ? props.cards.map((c, idx) => {
        const uploaded = c.imageUpload && typeof c.imageUpload === 'object' ? c.imageUpload : null
        const imgUrl = uploaded && 'url' in uploaded && uploaded.url ? uploaded.url : CARD_DATA[idx]?.imgSrc
        return {
          title: c.title ?? CARD_DATA[idx]?.title ?? '',
          desc: c.desc ?? CARD_DATA[idx]?.desc ?? '',
          imgSrc: imgUrl,
          imgWidth: c.imgWidth ?? CARD_DATA[idx]?.imgWidth ?? 160,
          imgHeight: c.imgHeight ?? CARD_DATA[idx]?.imgHeight ?? 150,
        }
      })
    : CARD_DATA
  return (
    <section className="relative py-12 lg:py-20">
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-12">
          <Typography variant="h2" as={"h2"} className="font-playfair !leading-[1.15]">
            {sectionTitle}
          </Typography>
          <Typography
            variant="p"
            as={"p"}
            className="text-darkgray mt-3 text-lg lg:text-[1.25rem] leading-normal max-w-3xl mx-auto"
          >
            {sectionDesc}
          </Typography>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-8 max-w-5xl mx-auto xl:px-8 pb-2">
          {/* Left column cards */}

          {/* {CARD_DATA.slice(0, 2).map((card, index) => ( */}
          {cards.map((card, index) => (
            <Card
              key={index} // use a unique id in production
              className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-[#EFF7FF] border-primarys/50 rounded-xl p-4 md:p-5 lg:p-6 col-span-12 lg:col-span-6"
            >
              <div className="flex items-center justify-center mb-4 min-h-[180px]">
                <div style={{ maxWidth: card.imgWidth, maxHeight: card.imgHeight }} className="w-full h-full flex items-center justify-center">
                <Image
                  src={card.imgSrc || ""}
                  alt={card.title + " image"}
                  width={card.imgWidth}
                  height={card.imgHeight}
                  className="w-full h-full max-w-[12.5rem]"
                  priority={false}
                />
                </div>
              </div>
              <CardHeader className="pt-4 px-0 pb-0">
                <CardTitle className="text-xl lg:text-2xl font-semibold text-center mb-2">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 p-0 mb-4">
                <Typography variant="p" className="text-midgray leading-snug text-center">
                  {card.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>      
    </section>
  );
}
