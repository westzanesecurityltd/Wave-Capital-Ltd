import React, { ReactNode } from "react";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";
import { Snowflake, BarChart3, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Media } from '@/payload-types'

function IconCircle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-[3.75rem] aspect-square rounded-full bg-primarys text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
// Optional: If you plan to support image URLs in the future
type ImageProp = boolean | string;

interface CardData {
  title: string;
  desc: string;
  image?: ImageProp; // Optional, can be boolean or URL string
  imgSrc?: string; // Optional, can be URL string
  icon?: ReactNode; // Optional, any valid React node
  // [key: string]: any; // Allow extra dynamic props (e.g., for future extensions)
}
const CARD_DATA: CardData[] = [
  {
    title: "Strategic Focus",
    desc: "We manage investment with clarity and discipline, focusing on markets and sectors where sustainable growth and long-term value align.",
    image: false,
    imgSrc: "/images/strategic-focus-img-1.png",
    icon: <Snowflake className="w-10 h-10 text-white" />,
  },
  {
    title: "Markets",
    desc: "We work with institutional investors, development finance bodies, and local operators who share our long-term vision. Every partnership is shaped",
    image: false,
    imgSrc: "/images/strategic-focus-img-1.png",
    icon: <Snowflake className="w-10 h-10 text-white" />,
  },
  {
    title: "Governance",
    desc: "Governance defines every investment vehicle we manage. Our frameworks ensure financial integrity, operational discipline, and transparency that protect investors’ confidence while reinforcing stable returns across diverse and evolving markets.",
    image: true,
    imgSrc: "/images/strategic-focus-img-1.png",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
      >
        <rect x="10" y="24" width="6" height="12" rx="2" fill="currentColor" />
        <rect x="20" y="18" width="6" height="18" rx="2" fill="currentColor" />
        <rect x="30" y="10" width="6" height="26" rx="2" fill="currentColor" />
      </svg>
    ),
  },
];
const SECTION_DATA: { title: string; secdesc: string } = {
  title: "Strategic Focus",
  secdesc:
    "We manage investment with clarity and discipline, focusing on markets and sectors where sustainable growth and long-term value align.",
};

type CMSCard = {
  title?: string
  desc?: string
  showImage?: boolean
  imageUpload?: Media | number | null
  iconType?: 'snowflake' | 'barchart' | 'shield'
}

type StrategicFocusProps = {
  sectitle?: string
  secdesc?: string
  cards?: CMSCard[]
}

export default function StrategicFocus(props: StrategicFocusProps) {
  const sectionTitle = props.sectitle ?? SECTION_DATA.title
  const sectionDesc = props.secdesc ?? SECTION_DATA.secdesc

  const renderIcon = (iconType?: CMSCard['iconType'], fallbackIcon?: ReactNode) => {
    switch (iconType) {
      case 'barchart':
        return <BarChart3 className="w-10 h-10 text-white" />
      case 'shield':
        return <Shield className="w-10 h-10 text-white" />
      case 'snowflake':
        return <Snowflake className="w-10 h-10 text-white" />
      default:
        return fallbackIcon ?? <Snowflake className="w-10 h-10 text-white" />
    }
  }

  const cards: CardData[] = (props.cards && props.cards.length > 0)
    ? props.cards.slice(0, 3).map((c, idx) => {
        const uploaded = c.imageUpload && typeof c.imageUpload === 'object' ? c.imageUpload : null
        const imgUrl = uploaded && 'url' in uploaded && uploaded.url ? uploaded.url : CARD_DATA[idx]?.imgSrc
        return {
          title: c.title ?? CARD_DATA[idx]?.title ?? '',
          desc: c.desc ?? CARD_DATA[idx]?.desc ?? '',
        // Only allow image on the 3rd item (index 2)
        image: Boolean(idx === 2 && c.showImage && imgUrl),
          imgSrc: imgUrl ?? CARD_DATA[idx]?.imgSrc,
        icon: renderIcon(c.iconType, CARD_DATA[idx]?.icon),
        }
      })
    : CARD_DATA

  return (
    <section className="relative py-12 lg:py-20 bg-aliceblue">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-12">
          <Typography variant="h2" as={"h2"} className="font-playfair">
            {sectionTitle}
          </Typography>
          <Typography
            variant="p"
            as={"p"}
            className="text-darkgray mt-3 text-lg leading-relaxed"
          >
            {sectionDesc}
          </Typography>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {/* Left column cards */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 gap-5 lg:gap-8">
            {cards.slice(0, 2).map((card, index) => (
              <Card
                key={index} // use a unique id in production
                className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl p-4 md:p-5 lg:p-6 col-span-6"
                title={card.title}
              >
                {/* Images are not shown for the first two cards */}
                {false && card.image && (
                  <div className="flex items-center justify-center mb-5">
                    <Image
                      src={card.imgSrc || ""}
                      alt={card.title + " image"}
                      width={560}
                      height={271}
                      className="w-full h-auto rounded-xl object-cover"
                      priority={false}
                    />
                  </div>
                )}

                <IconCircle className="mb-0 lg:mb-6">{card.icon}</IconCircle>

                <CardHeader className="pt-6 px-0 pb-0">
                  <CardTitle className="text-xl font-semibold">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 p-0">
                  <Typography variant="p" className="text-midgray leading-snug">
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right column image + card */}
          <div className="col-span-12 lg:col-span-6">
            {cards.slice(2, 3).map((card, index) => (
              <Card
                key={index} // use a unique id in production
                className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl p-4 lg:p-6 col-span-6"
                title={card.title}
              >
                {card.image && (
                  <div className="flex items-center justify-center mb-5">
                    <Image
                      src={card.imgSrc || ""}
                      alt={card.title + " image"}
                      width={560}
                      height={271}
                      className="w-full h-auto rounded-xl object-cover"
                      priority={false}
                    />
                  </div>
                )}

                <IconCircle className="mb-0 lg:mb-6">{card.icon}</IconCircle>

                <CardHeader className={card.image ? "pt-6 px-0 pb-0" : " p-0"}>
                  <CardTitle className="text-xl font-semibold">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 p-0">
                  <Typography variant="p" className="text-midgray leading-snug">
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* ---- MAP OVER CARD_DATA ---- */}
      {/* <div className="container">
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {CARD_DATA.map((card, index) => (
            <Card
              key={index} // use a unique id in production
              className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl p-4 lg:p-6 col-span-6"
              title={card.title}
            >              
              {card.image && (
                <div className="flex items-center justify-center mb-5">
                  <Image
                    src="/images/strategic-focus-img-1.png"
                    alt="Analytics and investment planning"
                    width={560}
                    height={271}
                    className="w-full h-auto rounded-xl object-cover"
                    priority={false}
                  />
                </div>
              )}

              <IconCircle className="mb-4">{card.icon}</IconCircle>

              <CardHeader className={card.image ? "pt-6 px-0 pb-0" : " p-0"}>
                <CardTitle className="text-xl font-semibold">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 p-0">
                <Typography variant="p" className="text-midgray leading-snug">
                  {card.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </section>
  );
}
