"use client";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";
import type { Media } from '@/payload-types'

interface ExpertiseData {
  title: string;
  secdesc?: string;
  image: string | Media | number | null;
  buttontext?: string;
  url: string;
  blockdata: (string | { text: string })[];
}

const blockdata = [
  "Institutional Fund Structuring",
];

const DEFAULT_DATA: ExpertiseData = {
  title: "",
  secdesc:
    ".",
  image: "/",
  url: "/",
  buttontext: "",
  blockdata: blockdata,
};

export const ExpertiseSec = (props: Partial<ExpertiseData>) => {
  const title = props.title ?? DEFAULT_DATA.title
  const secdesc = props.secdesc ?? DEFAULT_DATA.secdesc
  const imageProp = props.image ?? DEFAULT_DATA.image
  const buttontext = props.buttontext ?? DEFAULT_DATA.buttontext
  const url = props.url ?? DEFAULT_DATA.url
  const blockdataProp = props.blockdata ?? DEFAULT_DATA.blockdata

  const uploadedImage = imageProp && typeof imageProp === 'object' ? (imageProp as Media) : null
  const imageUrl = uploadedImage?.url || (typeof imageProp === 'string' ? imageProp : '/images/expertise-sec-img.png')
  const bullets = (blockdataProp || []).map((b) => (typeof b === 'string' ? b : b.text))
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px] items-start">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 h-full order-2 lg:order-1">
            <div className="">
              <Typography
                variant="h1"
                as="h2"
                className="text-bl mb-2.5 lg:mb-3.5 font-playfair !leading-[1.1]"
              >
                {title}
              </Typography>
              {secdesc && (
                <Typography
                  variant="p"
                  className="text-lg md:text-xl leading-relaxed text-bl font-normal mt-4 lg:mt-5"
                >
                  {secdesc}
                </Typography>
              )}              
            </div>
            <div className="bg-aliceblue p-8 rounded-2xl mt-auto">
                <ul>
                  {bullets.map((item, index) => (
                    <li
                      key={index}
                      className="text-base text-darkgray leading-snug flex items-start gap-4 mb-5 last:mb-0"
                    >
                      <span className="inline-block w-3 h-3 bg-black mt-[0.3125rem]" />
                      <Typography
                        variant="p"
                        className="text-base text-darkgray leading-snug"
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
                {buttontext && (
                  <div className="mt-5 lg:mt-8 lg:mb-2">
                    <ButtonPrimary
                      type="link"
                      variant="default"
                      href={url as string}
                      className="inline-block"
                    >
                      {buttontext}
                    </ButtonPrimary>
                  </div>
                )}
              </div>
          </div>

          {/* Foreground Image */}
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <Image
              src={imageUrl as string}
              alt={title + " Image"}
              width={551}
              height={564}
              priority
              className="w-full h-auto max-w-[450px] lg:max-w-[640px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;
