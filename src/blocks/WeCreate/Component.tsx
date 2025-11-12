import React, { ReactNode } from "react";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Media } from "@/payload-types";
import { getMediaUrl } from "@/utilities/getMediaUrl";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import CreateValueIcon1 from "@/components/Icons/CreateValueIcon1";
import CreateValueIcon2 from "@/components/Icons/CreateValueIcon2";
import CreateValueIcon3 from "@/components/Icons/CreateValueIcon3";
import CreateValueIcon4 from "@/components/Icons/CreateValueIcon4";
import CreateValueIcon5 from "@/components/Icons/CreateValueIcon5";
import CreateValueIcon6 from "@/components/Icons/CreateValueIcon6";

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
        "inline-flex items-center justify-center w-[3.125rem] lg:w-[3.75rem] aspect-square rounded-full bg-white lg:bg-white",
        className
      )}
    >
      {children}
    </span>
  );
}

interface CardData {
  title: string;
  desc: string;
  imgSrc?: string; // Optional, can be URL string
  icon?: ReactNode; // Optional, any valid React node
}
const CARD_DATA: CardData[] = [
  {
    title: "Strategic Focus",
    desc: "We manage investment with clarity and discipline, focusing on markets and sectors where sustainable growth and long-term value align.",
    imgSrc: "/images/strategic-focus-img-1.png",
    icon: <CreateValueIcon1 className="w-10 h-10" />,
  },
  {
    title: "Markets",
    desc: "We work with institutional investors, development finance bodies, and local operators who share our long-term vision. Every partnership is shaped",
    imgSrc: "/images/strategic-focus-img-1.png",
    icon: <CreateValueIcon2 className="w-10 h-10" />,
  },
  {
    title: "Governance",
    desc: "Governance defines every investment vehicle we manage. Our frameworks ensure financial integrity, operational discipline, and transparency that protect investors’ confidence while reinforcing stable returns across diverse and evolving markets.",
    imgSrc: "/images/strategic-focus-img-1.png",
    // icon: (
    //   <svg
    //     className="w-10 h-10"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     width={48}
    //     height={48}
    //     viewBox="0 0 48 48"
    //   >
    //     <rect x="10" y="24" width="6" height="12" rx="2" fill="currentColor" />
    //     <rect x="20" y="18" width="6" height="18" rx="2" fill="currentColor" />
    //     <rect x="30" y="10" width="6" height="26" rx="2" fill="currentColor" />
    //   </svg>
    // ),
    icon: <CreateValueIcon3 className="w-10 h-10" />,
  },
];
const SECTION_DATA: { title: string; secdesc: string } = {
  title: "Where We Create Value",
  secdesc: "",
};

type CMSCard = {
  title?: string;
  desc?: string;
  imageUpload?: Media | number | null;
  iconType?: "CreateValueIcon1" | "CreateValueIcon2" | "CreateValueIcon3" | "CreateValueIcon4" | "CreateValueIcon5" | "CreateValueIcon6";
};

type WeCreateProps = {
  sectitle?: string;
  secdesc?: string;
  cards?: CMSCard[];
  ctaText?: string;
  ctaUrl?: string;
};

export default function WeCreate(props: WeCreateProps) {
  const sectionTitle = props.sectitle ?? SECTION_DATA.title;
  const sectionDesc = props.secdesc ?? SECTION_DATA.secdesc;
  const ctaText = props.ctaText ?? "";
  const ctaUrl = props.ctaUrl ?? "";

  const renderIcon = (
    iconType?: CMSCard["iconType"],
    fallbackIcon?: ReactNode
  ) => {
    switch (iconType) {
      case "CreateValueIcon1":
        return <CreateValueIcon1 className="w-6 h-6 md:w-8 md:h-8" />;
      case "CreateValueIcon2":
        return <CreateValueIcon2 className="w-6 h-6 md:w-8 md:h-8" />;
      case "CreateValueIcon3":
        return <CreateValueIcon3 className="w-6 h-6 md:w-8 md:h-8" />;
      case "CreateValueIcon4":
        return <CreateValueIcon4 className="w-6 h-6 md:w-8 md:h-8" />;
      case "CreateValueIcon5":
        return <CreateValueIcon5 className="w-6 h-6 md:w-8 md:h-8" />;
      case "CreateValueIcon6":
        return <CreateValueIcon6 className="w-6 h-6 md:w-8 md:h-8" />;
      default:
        return fallbackIcon ?? <CreateValueIcon1 className="w-6 h-6" />;
    }
  };

  const cards: CardData[] =
    props.cards && props.cards.length > 0
      ? props.cards.slice(0, 6).map((c, idx) => {
          const uploaded =
            c.imageUpload && typeof c.imageUpload === "object"
              ? c.imageUpload
              : null;
          const uploadedUrl =
            uploaded && "url" in uploaded
              ? getMediaUrl(uploaded.url)
              : undefined;
          return {
            title: c.title ?? CARD_DATA[idx]?.title ?? "",
            desc: c.desc ?? CARD_DATA[idx]?.desc ?? "",
            imgSrc: uploadedUrl ?? CARD_DATA[idx]?.imgSrc,
            icon: renderIcon(c.iconType, CARD_DATA[idx]?.icon),
          };
        })
      : CARD_DATA;

  return (
    <section className="wecreate-section relative py-12 lg:py-20">
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
          {cards.map((card, index) => (
            <Card
              key={index} // use a unique id in production
              className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl col-span-12 lg:col-span-6 xl:col-span-4 relative min-h-[280px] lg:min-h-[340px] group"
              // title={card.title}
            >
              <div className="absolute inset-0 z-0 rounded-xl overflow-hidden flex flex-col group-hover:opacity-0 transition-opacity duration-150">
                <Image
                  src={card.imgSrc || "/images/strategic-focus-img-1.png"}
                  alt={card.title || "Card image"}
                  width={560}
                  height={271}
                  className="w-full h-full rounded-xl object-cover absolute inset-0 z-0"
                  priority={false}
                />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#278AA30D_0%,#278AA34D_50%,#1B427799_85%,#1B4277F2_100%)]" />
                <p className="hidden lg:block relative z-[11] mt-auto mb-4 px-4 text-xl lg:text-2xl font-medium text-white text-center">
                  {card.title}
                </p>
              </div>
              <div className="flex flex-col justify-end relative z-[12] bg-[linear-gradient(180deg,#278AA30D_0%,#1B427780_80%,#1B42778C_100%)] lg:bg-[#E6EBF1] lg:bg-none p-5 md:p-6 h-full rounded-xl opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <IconCircle className="mb-4 text-primarys lg:text-white">
                  {card.icon}
                </IconCircle>

                <CardHeader className="pt-6 px-0 pb-2 mt-auto">
                  <CardTitle className="text-xl lg:text-2xl font-medium text-white lg:text-raisinblack">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 mb-5 lg:mb-0">
                  <Typography
                    variant="p"
                    className="text-sm lg:text-base text-white lg:text-midgray leading-snug"
                  >
                    {card.desc}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        {ctaText && ctaUrl && (
          <div className="text-center mt-8 lg:mt-14">
            <ButtonPrimary
              type="link"
              variant="default"
              href={ctaUrl}
              className="inline-block"
            >
              {ctaText}
            </ButtonPrimary>
          </div>
        )}
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {/* Left column cards */}
          {/* <div className="col-span-12 lg:col-span-6 grid grid-cols-1 gap-5 lg:gap-8">
            {CARD_DATA.slice(0, 2).map((card, index) => (
              <Card
                key={index} // use a unique id in production
                className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl p-4 md:p-5 lg:p-6 col-span-6"
                title={card.title}
              >
                {card.image && (
                  <div className="flex items-center justify-center mb-5">
                    <Image
                      src={card.imgSrc || ""}
                      alt="Analytics and investment planning"
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
