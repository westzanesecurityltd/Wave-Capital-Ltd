"use client";
import React from "react";
import { Typography } from "@/components/common/Typography";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import TwitterxIcon from "@/components/Icons/TwitterxIcon";
import Link from "next/link";
import type { Form as FormType } from "@payloadcms/plugin-form-builder/types";
import { FormBlock } from "@/blocks/Form/Component";
import type { Form } from "@/payload-types";

// Content constants
interface ContactFormSecContent {
  smltext: string;
  sectitle: string;
  secdesc: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook: string;
    linkedin: string;
    youtube: string;
    instagram: string;
    twitterx: string;
  };
}

const CONTENT: ContactFormSecContent = {
  smltext: "",
  sectitle: "",
  secdesc: "",
  email: "",
  phone: "",
  address: "",
  social: {
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    twitterx: "",
  },
};

interface ContactFormSecProps {
  smltext?: string | null;
  sectitle?: string | null;
  secdesc?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  social?: {
    facebook?: string | null;
    linkedin?: string | null;
    youtube?: string | null;
    instagram?: string | null;
    twitterx?: string | null;
  } | null;
  form?: Form | number | null;
  id?: string;
  blockName?: string;
  blockType?: "contactFormSec";
}

function ContactFormSec(props?: ContactFormSecProps) {
  const form =
    props?.form && typeof props.form === "object" ? props.form : null;

  // Use props from Payload CMS or fall back to CONTENT constant
  const data: ContactFormSecContent = {
    smltext: props?.smltext ?? CONTENT.smltext,
    sectitle: props?.sectitle ?? CONTENT.sectitle,
    secdesc: props?.secdesc ?? CONTENT.secdesc,
    email: props?.email ?? CONTENT.email,
    phone: props?.phone ?? CONTENT.phone,
    address: props?.address ?? CONTENT.address,
    social: {
      facebook: props?.social?.facebook ?? CONTENT.social.facebook,
      linkedin: props?.social?.linkedin ?? CONTENT.social.linkedin,
      youtube: props?.social?.youtube ?? CONTENT.social.youtube,
      instagram: props?.social?.instagram ?? CONTENT.social.instagram,
      twitterx: props?.social?.twitterx ?? CONTENT.social.twitterx,
    },
  };

  return (
    <>
      <section id='contact-form' className="contactform-section relative min-h-[300px] lg:min-h-[500px] grid items-center py-12 lg:py-20 bg-[#E7F4FF]">
        <div className="container relative z-10">
          <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px]">
            <div className="col-span-12 lg:col-span-5 max-w-xl order-2 lg:order-1">
              {data.smltext && (
                <span className="text-sm text-primarys uppercase">
                  {data.smltext}
                </span>
              )}
              {data.sectitle && (
                <Typography
                  variant="h2"
                  as={"h3"}
                  className="font-playfair mt-1.5"
                >
                  {data.sectitle}
                </Typography>
              )}
              {data.secdesc && (
                <Typography
                  variant="p"
                  className="text-darkgray text-base lg:text-lg leading-snug mt-5 lg:mt-6"
                >
                  {data.secdesc}
                </Typography>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-8">
                {data.email && (
                  <div className="flex flex-col">
                    <span className="text-primarys text-sm font-medium">
                      Email:
                    </span>
                    <span className="text-sm font-normal text-midgray">
                      {data.email}
                    </span>
                  </div>
                )}
                {data.phone && (
                  <div className="flex flex-col">
                    <span className="text-primarys text-sm font-medium">
                      Phone:
                    </span>
                    <span className="text-sm font-normal text-midgray">
                      {data.phone}
                    </span>
                  </div>
                )}
                {data.address && (
                  <div className="flex flex-col">
                    <span className="text-primarys text-sm font-medium">
                      Address:
                    </span>
                    <span className="text-sm font-normal text-midgray max-w-[16.25rem]">
                      {data.address}
                    </span>
                  </div>
                )}
                {(data.social?.facebook ||
                  data.social?.linkedin ||
                  data.social?.youtube ||
                  data.social?.instagram ||
                  data.social?.twitterx) && (
                  <div className="">
                    <span className="text-primarys text-sm font-medium w-full">
                      Social Links:
                    </span>
                    <div className="flex gap-4 items-center flex-wrap mt-1">
                      {data.social?.facebook && (
                        <div className="flex">
                          <Link href={data.social.facebook} target="_blank">
                            <FacebookIcon className="w-6 h-6" />
                          </Link>
                        </div>
                      )}
                      {data.social?.linkedin && (
                        <div className="flex">
                          <Link href={data.social.linkedin} target="_blank">
                            <LinkedinIcon className="w-6 h-6" />
                          </Link>
                        </div>
                      )}
                      {data.social?.youtube && (
                        <div className="flex">
                          <Link href={data.social.youtube} target="_blank">
                            <YoutubeIcon className="w-6 h-6" />
                          </Link>
                        </div>
                      )}
                      {data.social?.instagram && (
                        <div className="flex">
                          <Link href={data.social.instagram} target="_blank">
                            <InstagramIcon className="w-6 h-6" />
                          </Link>
                        </div>
                      )}
                      {data.social?.twitterx && (
                        <div className="flex">
                          <Link href={data.social.twitterx} target="_blank">
                            <TwitterxIcon className="w-6 h-6" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 mb-4 lg:mb-0 order-1 lg:order-2">
              {form ? (
                <>
                  <div className="w-full contact-form-block bg-white p-5 sm:p-6 lg:p-10 rounded-2xl">
                    <Typography
                      variant="h5"
                      as={"p"}
                      className="text-primarys text-lg font-bold font-playfair mb-5"
                    >
                      Contact Us
                    </Typography>
                    <FormBlock
                      form={form as unknown as FormType}
                      enableIntro={false}
                    />
                  </div>
                </>
              ) : (
                <div className="text-midgray text-sm">
                  Please select a form from the admin panel
                </div>
              )}
            </div>
          </div>
        </div>
      </section>      
    </>
  );
}

export default ContactFormSec;
