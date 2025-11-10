"use client";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";
import type { Media } from '@/payload-types'

interface BannerTeamsData {
  eyebrowtext?: string;
  title: string;
  secdesc?: string;
  imgSrc?: Media | number | null;
  buttontext?: string;
  url: string;
}

const DEFAULT_DATA: BannerTeamsData = {
  eyebrowtext: "",
  title: "Leaders Powering Wave Capital",
  secdesc:
    "Our leaders combine investment discipline and operational expertise to support founders, scale businesses, and drive growth with hands-on guidance..",
  buttontext: "",
  url: "/",
};

type BannerTeamsProps = Partial<BannerTeamsData>

export const BannerTeams = (props: BannerTeamsProps) => {
  const data: BannerTeamsData = {
    eyebrowtext: props.eyebrowtext ?? DEFAULT_DATA.eyebrowtext,
    title: props.title ?? DEFAULT_DATA.title,
    secdesc: props.secdesc ?? DEFAULT_DATA.secdesc,
    buttontext: props.buttontext ?? DEFAULT_DATA.buttontext,
    url: props.url ?? DEFAULT_DATA.url,
    imgSrc: props.imgSrc ?? null,
  }
  
  const image = data.imgSrc && typeof data.imgSrc === 'object' ? data.imgSrc : null
  return (
    <section className="relative pt-[125px] md:pt-[150px] lg:pt-[200px] pb-14 mb-48">
      {/* Background Image */}
      <Image
        src="/images/banner-home.png"
        alt={data.title + " banner"}
        width={1920}
        height={800}
        priority
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />

      <div className="container mx-auto relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-5xl">
            {data.eyebrowtext && (
              <p className="text-base text-white mb-3">{data.eyebrowtext}</p>
            )}
            <Typography
              variant="h1"
              className="text-white mb-3 lg:mb-4 font-bold font-playfair !leading-[1.1]"
            >
              {data.title}
            </Typography>
            {data.secdesc && (
              <Typography
                variant="p"
                className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-normal mt-4 lg:mt-5"
              >
                {data.secdesc}
              </Typography>
            )}
            {data.buttontext && (
              <div className="mt-5 lg:mt-7">
                <ButtonPrimary
                  type="link"
                  variant="fill"
                  href={data.url}
                  className="inline-block"
                >
                  {data.buttontext}
                </ButtonPrimary>
              </div>
            )}
          </div>
        </div>

        {/* Foreground Image */}
        <div className="flex justify-center mt-5 md:mt-7 lg:mt-10">
          {image && image.url ? (
            <Image
              src={image.url}
              alt={image.alt || data.title + " image"}
              width={image.width || 1014}
              height={image.height || 334}
              priority
              className="w-full h-auto max-w-[650px] lg:max-w-[1100px] object-cover rounded-t-[3.75rem] lg:rounded-t-[6.25rem] rounded-b-2xl translate-y-[1.5rem] lg:translate-y-[2.5rem] -mb-48"
            />
          ) : (
            <Image
              src="/images/team-banner-img.png"
              alt={data.title + " image"}
              width={1014}
              height={334}
              priority
              className="w-full h-auto max-w-[650px] lg:max-w-[1100px] object-cover rounded-t-[3.75rem] lg:rounded-t-[6.25rem] rounded-b-2xl translate-y-[1.5rem] lg:translate-y-[2.5rem] -mb-48"
            />
          )}
        </div>
      </div>
    </section>
  );
};
