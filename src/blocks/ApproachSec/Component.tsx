"use client";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";
import type { ApproachSecBlock } from '@/payload-types';
import type { Media } from '@/payload-types';

export const ApproachSec = (props: ApproachSecBlock) => {
  const { blocktitle, subtext, blockdescs, button, image, bgcolor } = props;
  
  // Handle image - can be Media object or number ID
  const imageData = image?.imageUpload && typeof image.imageUpload === 'object' 
    ? image.imageUpload as Media 
    : null;

  // Get background color style - bgcolor is a CSS value like #E6EBF1 or rgb(...)
  const sectionStyle = bgcolor ? { backgroundColor: bgcolor } : {};

  return (
    <section 
      className="py-12 lg:py-20 bg-aliceblue"
      style={sectionStyle}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-[30px] xl:gap-[45px] items-center">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <div className="">              
              <Typography
                variant="h2"
                as={"h2"}
                className="text-raisinblack mb-3 lg:mb-4 font-playfair !leading-[1.1]"
              >
                {blocktitle}
              </Typography>
              {subtext && (
                <p className="text-lg md:text-xl text-raisinblack mb-4">{subtext}</p>
              )}
              {blockdescs && blockdescs.length > 0 && (
                <div className="mb-5 lg:mb-7">
                  {blockdescs.map((desc, index) => (
                    <Typography
                      key={desc.id || index}
                      variant="p"
                      className="text-base md:text-base leading-relaxed text-midgray font-normal mb-4 last:mb-0"
                    >
                      {desc.text}
                    </Typography>
                  ))}
                </div>
              )}
              {button?.btntext && (
                <div className="mt-4">
                  <ButtonPrimary
                    type="link"
                    variant="default"
                    href={button.btnurl || '/'}
                    className="inline-block"
                  >
                    {button.btntext}
                  </ButtonPrimary>
                </div>
              )}
            </div>
          </div>

          {/* Foreground Image */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 xl:pl-12">
            {imageData?.url ? (
              <Image
                src={imageData.url}
                alt={imageData.alt || "Investment team discussing growth strategies"}
                width={imageData.width || 457}
                height={imageData.height || 421}
                priority
                className="w-full max-w-[450px] lg:max-w-[470px] object-cover rounded-2xl aspect-[457/421]"
              />
            ) : (
              <Image
                src="/images/about-banner-img.png"
                alt="Investment team discussing growth strategies"
                width={457}
                height={405}
                priority
                className="w-full max-w-[450px] lg:max-w-[470px] object-cover rounded-2xl aspect-[457/421]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSec;