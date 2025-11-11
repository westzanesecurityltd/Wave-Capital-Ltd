import React from "react";
import { Typography } from "@/components/common/Typography";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";

// Content constants
interface AboutSecContent {
  smltext: string;
  sectitle: string;
  blocktitle: string;
  blockdesc: string;
  btntext?: string;
  btnurl: string;
  // Fallback static values used when no upload provided
  image: {
    alt: string;
    width: number;
    height: number;
    imgurl: string;
  };
}

const CONTENT: AboutSecContent = {
  sectitle: "About us",
  smltext: "INVESTMENT OPPORTUNITIES FOR REAL PROGRESS",
  blocktitle: "Wave Capital at a Glance",
  blockdesc:
    "Wave Capital Limited is an investment management firm that designs and oversees capital vehicles for institutional investors. We focus on channeling global capital into sectors that drive sustainable growth, from infrastructure and energy to pharma and industrials. Our strength lies in disciplined fund governance, regional insight, and a commitment to aligning investment with long-term economic progress.",
  btntext: "Explore More",
  btnurl: "/",
  image: {
    alt: "About Us",
    width: 615,
    height: 511,
    imgurl: "/images/about-sec-image.png",
  },
};

import type { Media } from '@/payload-types'

type AboutSectionProps = Partial<AboutSecContent> & {
  // Payload upload field (named to avoid DB conflict with prior group)
  imageUpload?: Media | number | null
}

function AboutSection(props: AboutSectionProps) {
  const data: AboutSecContent = {
    smltext: props.smltext ?? CONTENT.smltext,
    sectitle: props.sectitle ?? CONTENT.sectitle,
    blocktitle: props.blocktitle ?? CONTENT.blocktitle,
    blockdesc: props.blockdesc ?? CONTENT.blockdesc,
    btntext: props.btntext ?? CONTENT.btntext,
    btnurl: props.btnurl ?? CONTENT.btnurl,
    image: CONTENT.image,
  }

  // Resolve upload image if provided
  const uploadedImage = props.imageUpload && typeof props.imageUpload === 'object' ? props.imageUpload : null
  const imgAlt = uploadedImage?.alt || data.image.alt
  const imgUrl = (uploadedImage && 'url' in uploadedImage && uploadedImage.url) ? uploadedImage.url : data.image.imgurl
  const imgWidth = (uploadedImage && 'width' in uploadedImage && uploadedImage.width) ? uploadedImage.width : data.image.width
  const imgHeight = (uploadedImage && 'height' in uploadedImage && uploadedImage.height) ? uploadedImage.height : data.image.height
  return (
    <>
      <section className="about-section relative min-h-[500px] lg:min-h-[700px] grid items-center py-12 lg:py-20">
        <div className="container relative z-10">
          <Typography
            variant="h2"
            as={"h2"}
            className="mb-3 md:mb-5 font-playfair"
          >
            {data.sectitle}
          </Typography>
          <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px] items-center">
            {/* <div className="col-span-12 lg:col-span-6 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 z-0 max-lg:block bannerMobile"> */}
            <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0">
              <Image
                src={imgUrl}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
                className="w-full h-auto max-w-[450px] lg:max-w-[640px] lg:mx-auto"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:pe-6">
              <span className="text-sm text-primarys">{data.smltext}</span>
              <Typography variant="h2" as={"h3"} className="font-playfair mt-2">
                {data.blocktitle}
              </Typography>
              <Typography
                variant="p"
                className="text-midgray text-base lg:text-lg leading-snug mt-5 lg:mt-6"
              >
                {data.blockdesc}
              </Typography>
              {data.btntext && (
                <div className="flex justify-start mt-7 lg:mt-8">
                  <ButtonPrimary
                    type="link"
                    variant="default"
                    href={data.btnurl}
                    className="inline-block text-white hover:text-white"
                  >
                    {data.btntext}
                  </ButtonPrimary>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 z-0 bannerDesktop">
          <Image
            src={CONTENT.image.imgurl}
            alt={CONTENT.image.alt}
            width={CONTENT.image.width}
            height={CONTENT.image.height}
            className="w-[37vw] max-w-[720px] h-auto img2"
          />
        </div>   */}
      </section>
    </>
  );
}

export default AboutSection;
