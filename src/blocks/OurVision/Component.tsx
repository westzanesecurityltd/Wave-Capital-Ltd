"use client";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";
import { cn } from "@/lib/utils";
import { BarChart3, Snowflake, Building2, Factory, TrendingUp, Users } from "lucide-react";
import { ReactNode } from "react";
import type { Media } from '@/payload-types'

function IconCircle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-[3.75rem] aspect-square rounded-full bg-primarys text-white",
        className
      )}
    >
      {children}
    </span>
  );
}

type IconType = 'snowflake' | 'barChart' | 'building' | 'factory' | 'trendingUp' | 'users'

interface SectionItem {
  iconType?: IconType; // from Payload select
  icon?: ReactNode; // fallback for defaults
  title: string;
  secdesc?: string;
}

interface BannerAbout {
  image?: string | Media | number | null;
  sections: SectionItem[];
}

const DEFAULT_SECTIONS: SectionItem[] = [
  {
    icon: <Snowflake className="lg:w-8 lg:h-8 w-7 h-7" />,
    iconType: 'snowflake',
    title: "",
    secdesc:
      "",
  },
  {
    icon: <BarChart3 className="lg:w-8 lg:h-8 w-7 h-7" />,
    iconType: 'barChart',
    title: "",
    secdesc:
      "",
  },
];

const DEFAULT_DATA: BannerAbout = {
  image: "/images/our-vision-img.png",
  sections: DEFAULT_SECTIONS,
};


type OurVisionProps = Partial<BannerAbout>

export const OurVision = (props: OurVisionProps) => {
  const uploadedImage = props.image && typeof props.image === 'object' ? (props.image as Media) : null
  const imageUrl = uploadedImage?.url || (typeof props.image === 'string' ? props.image : DEFAULT_DATA.image)
  const sections = Array.isArray(props.sections) && props.sections.length > 0 ? props.sections : DEFAULT_SECTIONS
  const renderIcon = (iconType?: IconType, fallback?: ReactNode) => {
    switch (iconType) {
      case 'snowflake':
        return <Snowflake className="lg:w-8 lg:h-8 w-7 h-7" />
      case 'barChart':
        return <BarChart3 className="lg:w-8 lg:h-8 w-7 h-7" />
      case 'building':
        return <Building2 className="lg:w-8 lg:h-8 w-7 h-7" />
      case 'factory':
        return <Factory className="lg:w-8 lg:h-8 w-7 h-7" />
      case 'trendingUp':
        return <TrendingUp className="lg:w-8 lg:h-8 w-7 h-7" />
      case 'users':
        return <Users className="lg:w-8 lg:h-8 w-7 h-7" />
      default:
        return fallback || <Snowflake className="lg:w-8 lg:h-8 w-7 h-7" />
    }
  }
  return (
    <section className="relative py-12 lg:py-20 bg-aliceblue">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-[40px] xl:gap-[60px] items-center">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            {sections.map((section, index) => (
              <div
                key={index}
                className={index === 0 ? "mb-6 lg:mb-10" : ""}
              >
                <IconCircle className="mb-3 lg:mb-5 text-white">
                  {renderIcon(section.iconType, section.icon)}
                </IconCircle>
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-raisinblack mb-3 lg:mb-4 font-playfair !leading-[1.1]"
                >
                  {section.title}
                </Typography>
                {section.secdesc && (
                  <Typography
                    variant="p"
                    className="text-base md:text-lg lg:leading-relaxed text-midgray font-normal mt-4 lg:mt-5"
                  >
                    {section.secdesc}
                  </Typography>
                )}
              </div>
            ))}
          </div>

          {/* Foreground Image */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2  ">
            <Image
              src={imageUrl as string}
              alt={`${sections[0]?.title || "Our Vision"} Image`}
              width={621}
              height={569}
              priority
              className="w-full h-auto max-w-[450px] lg:max-w-[520px] object-cover rounded-[0.625rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;