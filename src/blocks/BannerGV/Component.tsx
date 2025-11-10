"use client";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";
import type { Media } from "@/payload-types";
import { getMediaUrl } from "@/utilities/getMediaUrl";

type BannerGVBlock = {
  eyebrowtext?: string | null;
  title?: string | null;
  secdesc?: string | null;
  buttontext?: string | null;
  url?: string | null;
  backgroundImage?: Media | number | null;
  foregroundImage?: Media | number | null;
  bottomtext?: string | null;
  blockType?: 'bannerGV' | null;
  blockName?: string | null;
  id?: string | null;
};

export const BannerGV = (props: BannerGVBlock) => {
  const { 
    eyebrowtext, 
    title, 
    secdesc, 
    buttontext, 
    url, 
    backgroundImage, 
    foregroundImage, 
    bottomtext 
  } = props;

  // If no title or bottomtext provided, render empty grid
  if (!title || !bottomtext) {
    return (
      <section className="relative pt-[140px] lg:pt-[5.3125rem] overflow-hidden">
        <div className="container mx-auto">
          {/* Empty grid container */}
        </div>
      </section>
    );
  }

  // Handle background image - can be Media object or number ID
  const bgImageData = backgroundImage && typeof backgroundImage === "object"
    ? (backgroundImage as Media)
    : null;
  const bgImageUrl = bgImageData?.url ? getMediaUrl(bgImageData.url) : "/images/banner-bg-3.png";

  // Handle foreground image - can be Media object or number ID
  const fgImageData = foregroundImage && typeof foregroundImage === "object"
    ? (foregroundImage as Media)
    : null;
  const fgImageUrl = fgImageData?.url ? getMediaUrl(fgImageData.url) : "/images/banner-gv-img.png";
  return (
    <section className="relative pt-[140px] lg:pt-[5.3125rem] overflow-hidden">
      <div className="">
        {/* Background Image */}
        <Image
          src={bgImageUrl}
          alt={title + " Banner"}
          width={1920}
          height={500}
          priority
          className="absolute inset-0 -z-10 w-full h-full md:h-[640px] object-cover object-bottom md:-translate-y-[60px]"
        />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px] items-center relative">
            {/* Text Content */}
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 py-5 xl:py-10 md:min-h-[350px] xl:min-h-[500px] flex flex-col justify-center">
              <div className="">
                {eyebrowtext && (
                  <p className="text-base text-white mb-3">
                    {eyebrowtext}
                  </p>
                )}
                <Typography
                  variant="h1"
                  className="text-white mb-3 lg:mb-4 font-playfair !leading-[1.1]"
                >
                  {title}
                </Typography>
                {secdesc && (
                  <Typography
                    variant="p"
                    className="text-lg md:text-xl leading-relaxed text-white font-normal mt-4 lg:mt-5"
                  >
                    {secdesc}
                  </Typography>
                )}
                {buttontext && url && (
                  <div className="mt-5 lg:mt-7">
                    <ButtonPrimary
                      type="link"
                      variant="fill"
                      href={url}
                      className="inline-block"
                    >
                      {buttontext}
                    </ButtonPrimary>
                  </div>
                )}
              </div>
            </div>

            {/* Foreground Image */}
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <Image
                src={fgImageUrl}
                alt={title + " Image"}
                width={500}
                height={615}
                priority
                className="md:absolute right-0 xl:right-10 top-28 w-full h-auto max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] object-cover rounded-2xl aspect-[500/615]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden  md:bg-white md:min-h-[250px] mb-8 md:mb-0 sm:mx-5 md:mx-0 mt-5 md:mt-0 pb-8">
        <div className="container md:mt-8 lg:mt-10">
        <p className="text-white md:text-black md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] text-base md:text-lg xl:text-xl leading-normal bg-black/25 md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none">
            {bottomtext}    
        </p>
        </div>
      </div>
    </section>
  );
};
