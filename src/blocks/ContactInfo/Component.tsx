import React from "react";
import { Typography } from "@/components/common/Typography";
import Image from "next/image";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import type { Media } from "@/payload-types";

// Content constants
interface ContactSecContent {
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

const CONTENT: ContactSecContent = {
  blocktitle: "",
  blockdesc: "",
  btntext: "",
  btnurl: "",
  image: {
    alt: "Contact Info",
    width: 545,
    height: 331,
    imgurl: "/images/about-sec-image.png",
  },
};

type ContactInfoProps = Partial<ContactSecContent> & {
  // Payload upload field (named to avoid DB conflict with prior group)
  imageUpload?: Media | number | null;
};

function ContactInfo(props: ContactInfoProps) {
  const data: ContactSecContent = {
    blocktitle: props.blocktitle ?? CONTENT.blocktitle,
    blockdesc: props.blockdesc ?? CONTENT.blockdesc,
    btntext: props.btntext ?? CONTENT.btntext,
    btnurl: props.btnurl ?? CONTENT.btnurl,
    image: CONTENT.image,
  };

  // Resolve upload image if provided
  const uploadedImage =
    props.imageUpload && typeof props.imageUpload === "object"
      ? props.imageUpload
      : null;
  // const imgAlt = uploadedImage?.alt || data.image.alt;
  const imgUrl =
    uploadedImage && "url" in uploadedImage && uploadedImage.url
      ? uploadedImage.url
      : data.image.imgurl;
  const imgWidth =
    uploadedImage && "width" in uploadedImage && uploadedImage.width
      ? uploadedImage.width
      : data.image.width;
  const imgHeight =
    uploadedImage && "height" in uploadedImage && uploadedImage.height
      ? uploadedImage.height
      : data.image.height;
  // const aspectRatio = imgWidth / imgHeight

  return (
    <>
      <section className="contact-info-section relative grid items-center py-12 lg:py-20">
        <div className="container relative z-10">
          <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px] items-center">
            <div className="col-span-12 lg:col-span-6 xl:pe-6 order-2 lg:order-1">
              {/* <span className="text-sm text-primarys">{CONTENT.smltext}</span> */}
              <Typography variant="h2" as={"h3"} className="font-playfair">
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
            <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0 flex items-center lg:justify-center order-1 lg:order-2">
              {/* <div className="overflow-hidden rounded-xl" style={{ aspectRatio: aspectRatio }}> */}
              <div
                className="overflow-hidden rounded-xl"
                style={{ aspectRatio: `${imgWidth} / ${imgHeight}` }}
              >
                <Image
                  src={imgUrl}
                  alt={ data.blocktitle+" image"}
                  width={imgWidth}
                  height={imgHeight}
                  className={`w-full h-auto max-w-[545px] min-w-[100%] sm:min-w-[450px] lg:mx-auto object-cover aspect-[${CONTENT.image.width}/${CONTENT.image.height}]`}
                  // style={{ aspectRatio: imgWidth / imgHeight }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
