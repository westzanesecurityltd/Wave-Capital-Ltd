import React from "react";
import { Typography } from "@/components/common/Typography";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import Image from "next/image";

interface CtaSectionProps {
  title?: string;
  secdesc?: string;
  buttonText?: string;
  buttonUrl?: string;
  onContactus?: () => void;
}

const SECTION_DATA: CtaSectionProps = {
  title: "The Wave Capital Group",
  secdesc:
    "Group companies extending Wave Capital’s investment and management capabilities across strategic industries and emerging markets.",
  buttonText: "Explore More",
  buttonUrl: "/",
};

const CtaSection = (props: CtaSectionProps) => {
  const title = props.title ?? SECTION_DATA.title
  const secdesc = props.secdesc ?? SECTION_DATA.secdesc
  const buttonText = props.buttonText ?? SECTION_DATA.buttonText
  const buttonUrl = props.buttonUrl ?? SECTION_DATA.buttonUrl
  const onContactus = props.onContactus ?? SECTION_DATA.onContactus
  return (
    <section className="cta-section py-12 lg:py-20 relative bg-gradient-1">
      <div className="absolute inset-0 min-h-[200px] z-0">
        <Image
          src="/images/cta-bg-1.png"
          alt={"image 1"}
          width={1980}
          height={1024}
          className="w-[100%] md:w-[70%] xl:w-[60%] h-full object-cover absolute"
          priority={false}
        />
        <Image
          src="/images/cta-bg-2.png"
          alt={"image 2"}
          width={1980}
          height={1024}
          className="hidden md:block md:w-[30%] xl:w-[40%] h-full object-cover absolute right-0"
          priority={false}
        />
      </div>
      {/* <div className="absolute inset-0 min-h-[200px] bg-black/60 z-[1]" /> */}
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex justify-start items-center gap-6">
          <div className="md:max-w-lg lg:max-w-2xl xl:max-w-3xl md:pr-10 text-center lg:text-left">
            <Typography
              variant="h2"
              as={"h2"}
              className="text-3xl lg:text-4xl xl:text-[2.375rem] 2xl:text-[2.625rem] font-semibold mb-4 lg:mb-6 !leading-snug text-white font-playfair text-center lg:text-left"
            >
              {title}{" "}
            </Typography>
            <Typography
              variant="p"
              as={"p"}
              className="text-base lg:text-base leading-relaxed text-white font-medium mb-7 lg:mb-9 text-center lg:text-left"
            >
              {secdesc}
            </Typography>
            {buttonText && buttonUrl && (
            <ButtonPrimary
              type="link"              
              variant="fill"
              href={buttonUrl}
              onClick={onContactus}
              className="inline-block"
            >
              {buttonText}
            </ButtonPrimary>
            )}        
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
