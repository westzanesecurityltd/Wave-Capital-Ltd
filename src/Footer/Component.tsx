import FacebookIcon from "@/components/Icons/FacebookIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import MapPinIcon from "@/components/Icons/MapPinIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import TwitterxIcon from "@/components/Icons/TwitterxIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import { CMSLink } from "@/components/Link";
import type { Footer } from "@/payload-types";
import { getCachedGlobal } from "@/utilities/getGlobals";
import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)();

  const columns = footerData?.columns || [];
  const logo =
    footerData.logo && typeof footerData.logo === "object"
      ? footerData.logo
      : null;

  return (
    <footer className="py-8 lg:pt-16 lg:pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-12 w-full gap-5 mb-10 lg:mb-12">
          <div className="col-span-4 flex flex-col items-start gap-2 min-w-[11.25rem] 2xl:pr-10">
            <Link href="/" className="mb-4 md:mb-0">
              {logo && logo.url && (
                <Image
                  src={logo.url}
                  alt={logo.alt || "Wave Capital Ltd - Logo"}
                  width={151}
                  height={73}
                  className="h-auto max-h-[4rem] md:max-h-[4.5625rem] w-auto min-w-[150px] object-contain"
                />
              )}
            </Link>
            <div className="text-sm md:text-sm flex items-start gap-2 mb-4 mt-3 lg:mt-4 text-midgray leading-normal max-w-80">
              <span className="flex-shrink">
                {/* <PhoneIcon className="w-4 h-5 text-primarys" />{" "} */}
              </span>{" "}
              {footerData?.description}
            </div>
            <div className="text-base md:text-base flex items-start gap-2 mb-4 mt-4 lg:mt-6 text-midgray leading-snug">
              <span className="flex-shrink">
                <PhoneIcon className="w-4 h-5 text-primarys" />{" "}
              </span>{" "}
              {footerData?.number}
            </div>
            <div className="text-base md:text-base flex items-start gap-2 text-midgray leading-snug">
              <span className="flex-shrink">
                <MapPinIcon className="w-5 h-5 text-primarys" />{" "}
              </span>{" "}
              {footerData?.Address}
            </div>
            {/* <div className="flex items-center gap-5 mt-7">
              {footerData?.facebook &&
              <Link href={footerData?.facebook} className="mb-4 md:mb-0">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.linkedIn && 
              <Link href={footerData?.linkedIn} className="mb-4 md:mb-0">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.youtube &&
              <Link href={footerData?.youtube} className="mb-4 md:mb-0">
                <YoutubeIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.instagram && 
              <Link href={footerData?.instagram} className="mb-4 md:mb-0">
                <InstagramIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.x && 
              <Link href={footerData?.x} className="mb-4 md:mb-0">
                <TwitterxIcon className="w-6 h-6" />
              </Link>
              }
            </div> */}
          </div>
          <div className="col-span-8 flex flex-col md:flex-row gap-8 justify-between mt-6 lg:mt-0">
            {columns.map((col, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-2 min-w-[140px]"
              >
                <h4 className="text-xl font-semibold text-primarys leading-relaxed whitespace-nowrap mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links?.map((link, j) => (
                    <li key={j}>
                      <CMSLink
                        {...link}
                        appearance="inline"
                        className="text-base lg:text-base xl:text-base text-midgray leading-relaxed whitespace-nowrap hover:text-black transition-colors font-medium"
                      />
                    </li>
                  ))}
                </ul>
              {col.title == 'Social Links' && 
                <div className="flex items-center gap-5">
              {footerData?.facebook &&
              <Link href={footerData?.facebook} className="mb-4 md:mb-0">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.linkedIn && 
              <Link href={footerData?.linkedIn} className="mb-4 md:mb-0">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.youtube &&
              <Link href={footerData?.youtube} className="mb-4 md:mb-0">
                <YoutubeIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.instagram && 
              <Link href={footerData?.instagram} className="mb-4 md:mb-0">
                <InstagramIcon className="w-6 h-6" />
              </Link>
              }
              {footerData?.x && 
              <Link href={footerData?.x} className="mb-4 md:mb-0">
                <TwitterxIcon className="w-6 h-6" />
              </Link>
              }
            </div>
              }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#21778D] pt-8 gap-6">
        <div className="container text-center">
          <span className="text-softgray text-sm md:text-base">
            {footerData.bottomText
              ? footerData.bottomText
              : "© 2025 Wave Capital Limited. All rights reserved."}
          </span>
        </div>
      </div>
    </footer>
  );
}
