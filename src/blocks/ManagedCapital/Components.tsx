"use client";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";
import type { Media } from '@/payload-types'

interface BannerAbout {
  eyebrowtext: string;
  title: string;
  secdesc?: string;
  buttontext?: string;
  url: string;
  image?: Media | number | null;
}

const DEFAULT_DATA: BannerAbout = {
  eyebrowtext: "",
  title: "Bridging Investment that Builds Economies",
  secdesc:
    "",
  buttontext: "",
  url: "",
};

interface BannerAboutProps extends Partial<BannerAbout> {}

export const ManagedCapital = (props: BannerAboutProps) => {
  const data: BannerAbout = {
    eyebrowtext: props.eyebrowtext ?? DEFAULT_DATA.eyebrowtext,
    title: props.title ?? DEFAULT_DATA.title,
    secdesc: props.secdesc ?? DEFAULT_DATA.secdesc,
    buttontext: props.buttontext ?? DEFAULT_DATA.buttontext,
    url: props.url ?? DEFAULT_DATA.url,
    image: props.image ?? null,
  }
  const image = data.image && typeof data.image === 'object' ? data.image : null
  return (
    <section className="relative py-10 lg:py-[6.25rem] lg:pt-[5.3125rem]">
      {/* Background Image */}
      {/* <Image
        src="/images/banner-home.png"
        alt="Global investment bridging emerging economies"
        width={1920}
        height={800}
        priority
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      /> */}
      <div className="inner-wrapper relative">
        <div className="bg-[#E7F4FF] absolute top-0 left-1/2 w-1/2 h-full">&nbsp;2</div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-[40px] xl:gap-[60px] items-stretch bg-[#E7F4FF] rounded-l-2xl p-4 sm:p-6 md:p-0 min-h-[340px]">
            {/* Foreground Image */}
            <div className="col-span-12 md:col-span-6 relative">
              {image && image.url ? (
                <Image
                  src={image.url}
                  alt={(image.alt || data.title) + ' Image'}
                  width={image.width || 621}
                  height={image.height || 569}
                  priority
                  className="w-full h-full max-w-[450px] lg:max-w-[640px] object-cover rounded-r-xl md:rounded-r-none rounded-l-xl md:rounded-l-2xl md:absolute top-0 left-0"
                />
              ) : (
                <Image
                  src="/images/managed-capital-img.png"
                  alt={data.title + " Image"}
                  width={621}
                  height={569}
                  priority
                  className="w-full h-full max-w-[450px] lg:max-w-[640px] object-cover rounded-r-xl md:rounded-r-none rounded-l-xl md:rounded-l-2xl md:absolute top-0 left-0"
                />
              )}
            </div>

            {/* Text Content */}
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div className="max-w-[500px] md:py-10">
                {data.eyebrowtext && (
                  <p className="text-base text-black mb-3">
                    {data.eyebrowtext}
                  </p>
                )}
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-bl mb-3 lg:mb-4 font-playfair !leading-[1.1]"
                >
                  {data.title}
                </Typography>
                {data.secdesc && (
                  <Typography
                    variant="p"
                    className="text-base md:text-base leading-relaxed text-darkgray font-normal mt-4 lg:mt-8"
                  >
                    {data.secdesc}
                  </Typography>
                )}
                {data.buttontext && (
                  <div className="mt-5 lg:mt-7">
                    <ButtonPrimary
                      type="link"
                      variant="default"
                      href={data.url}
                      className="inline-block"
                    >
                      {data.buttontext}
                    </ButtonPrimary>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
