"use client";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";
import type { Media } from '@/payload-types'

interface BannerAboutData {
  eyebrowtext: string;
  title: string;
  secdesc?: string;
  buttontext?: string;
  url: string;
  image?: Media | number | null;
}

const DEFAULT_DATA: BannerAboutData = {
  eyebrowtext: "",
  title: "Bridging Investment that Builds Economies",
  secdesc: "",
  buttontext: "",
  url: "/",
};

interface BannerAboutProps extends Partial<BannerAboutData> {}

export const BannerAbout = (props: BannerAboutProps) => {
  const data: BannerAboutData = {
    eyebrowtext: props.eyebrowtext ?? DEFAULT_DATA.eyebrowtext,
    title: props.title ?? DEFAULT_DATA.title,
    secdesc: props.secdesc ?? DEFAULT_DATA.secdesc,
    buttontext: props.buttontext ?? DEFAULT_DATA.buttontext,
    url: props.url ?? DEFAULT_DATA.url,
    image: props.image ?? null,
  }
  const image = data.image && typeof data.image === 'object' ? data.image : null
  return (
    <section className="relative pt-[6.25rem] lg:pt-[5.3125rem] mb-12">
      {/* Background Image */}
      <Image
        src="/images/banner-home.png"
        alt="Global investment bridging emerging economies"
        width={1920}
        height={800}
        priority
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px] items-center">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="max-w-[500px]">
              {data.eyebrowtext && (
                <p className="text-base text-white mb-3">{data.eyebrowtext}</p>
              )}
              <Typography
                variant="h1"
                className="text-white mb-3 lg:mb-4 font-playfair !leading-[1.1]"
              >
                {data.title}
              </Typography>
              {data.secdesc && (
                <Typography
                  variant="p"
                  className="text-lg md:text-xl leading-relaxed text-white font-normal mt-4 lg:mt-5"
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

          {/* Foreground Image (uploaded) */}
          <div className="col-span-12 lg:col-span-6">
            {image && image.url ? (
              <Image
                src={image.url}
                alt={image.alt || 'Banner image'}
                width={image.width || 621}
                height={image.height || 569}
                priority            
                className="w-full h-auto max-w-[450px] lg:max-w-[640px] object-cover rounded-2xl translate-y-[1.5rem] lg:translate-y-[2.5rem]"
              />
            ) : (
              <Image
                src="/images/about-banner-img.png"
                alt="Investment team discussing growth strategies"
                width={621}
                height={569}
                priority            
                className="w-full h-auto max-w-[450px] lg:max-w-[640px] object-cover rounded-2xl translate-y-[1.5rem] lg:translate-y-[2.5rem]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};