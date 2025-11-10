"use client";
import React from "react";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";

interface BannerContactProps {
  eyebrowtext?: string;
  title: string;
  secdesc?: string;
  buttontext?: string;
  url: string;
  id?: string | null;
}

export const BannerContact: React.FC<BannerContactProps> = ({
  eyebrowtext,
  title,
  secdesc,
  buttontext,
  url,
}) => {
  return (
    <section className="relative pt-[100px] md:pt-[80px] lg:pt-[125px] pb-[54px]">
      {/* Background Image */}
      <Image
        src="/images/banner-bg-3.png"
        alt={title + " banner"}
        width={1920}
        height={700}
        priority
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />

      <div className="container mx-auto relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center min-h-[220px]">
          <div className="max-w-5xl py-5 xl:py-10">
            {eyebrowtext && (
              <p className="text-base text-white mb-3">{eyebrowtext}</p>
            )}
            <Typography
              variant="h1"
              as="h1"
              className="text-white mb-3 lg:mb-4 font-bold font-playfair !leading-[1.1]"
            >
              {title}
            </Typography>
            {secdesc && (
              <Typography
                variant="p"
                className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-normal mt-4 lg:mt-5"
              >
                {secdesc}
              </Typography>
            )}
            {buttontext && (
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
      </div>
    </section>
  );
};
