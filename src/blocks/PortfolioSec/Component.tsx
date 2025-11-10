"use client";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";
import { 
  Lightbulb, 
  Building2, 
  Building, 
  Factory, 
  FlaskConical, 
  Zap, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Media } from "@/payload-types";
import { getMediaUrl } from "@/utilities/getMediaUrl";

// Local type definition (will be replaced by generated PortfolioSecBlock type after Payload regenerates types)
type PortfolioSecBlock = {
  sectitle?: string | null;
  secdesc?: string | null;
  portfolioItems?: Array<{
    subheading?: string | null;
    title?: string | null;
    description?: string | null;
    imageUpload?: Media | number | null;
    iconType?: string | null;
    id?: string | null;
  }> | null;
  blockType?: 'portfolioSec' | null;
  blockName?: string | null;
  id?: string | null;
};

// Icon overlay component for images
function IconOverlay({
  children,
  position = "bottom-right",
}: {
  children: React.ReactNode;
  position?: "bottom-right" | "bottom-left";
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex items-center justify-center w-12 h-12 lg:w-[3.75rem] lg:h-[3.75rem] rounded-full bg-primarys border-2 border-white shadow-lg",
        position === "bottom-right" ? "bottom-4 right-4 lg:-right-9" : "bottom-4 left-4 lg:-left-9"
      )}
    >
      <div className="relative text-white flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

const SEC_DATA = {
  sectitle: "Strategic Investments Across Key Sectors",
  secdesc:
    "Focused investments across sectors that define sustainable growth and enduring value.",
};

// Icon renderer function using switch case
const renderIcon = (iconType?: string | null) => {
  switch (iconType) {
    case "lightbulb":
      return <Lightbulb className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "building":
      return <Building className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "building2":
      return <Building2 className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "factory":
      return <Factory className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "flaskConical":
      return <FlaskConical className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "zap":
      return <Zap className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "trendingUp":
      return <TrendingUp className="w-7 h-7 lg:w-8 lg:h-8" />;
    case "briefcase":
      return <Briefcase className="w-7 h-7 lg:w-8 lg:h-8" />;
    default:
      return <Lightbulb className="w-7 h-7 lg:w-8 lg:h-8" />;
  }
};

export const PortfolioSec = (props: PortfolioSecBlock) => {
  const { sectitle, secdesc, portfolioItems } = props;

  // Use CMS data if available, otherwise use fallback data
  const sectionTitle = sectitle ?? SEC_DATA.sectitle;
  const sectionDesc = secdesc ?? SEC_DATA.secdesc;

  // If no portfolioItems provided or empty, render empty grid
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <section className="relative py-12 lg:py-20">
        <div className="container mx-auto mb-10 lg:mb-16">
          <Typography
            variant="h2"
            as="h2"
            className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-raisinblack mb-4 lg:mb-5 font-playfair !leading-[1.1]"
          >
            {sectionTitle}
          </Typography>
          {sectionDesc && (
            <Typography
              variant="p"
              className="text-lg lg:text-xl 2xl:text-2xl leading-relaxed lg:leading-normal text-raisinblack font-medium max-w-3xl xl:max-w-4xl"
            >
              {sectionDesc}
            </Typography>
          )}
        </div>
      </section>
    );
  }
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container mx-auto mb-8 lg:mb-16">
        <Typography
          variant="h2"
          as="h2"
          className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-raisinblack mb-4 lg:mb-5 font-playfair !leading-[1.1]"
        >
          {sectionTitle}
        </Typography>
        {sectionDesc && (
          <Typography
            variant="p"
            className="text-lg lg:text-xl 2xl:text-2xl leading-relaxed lg:leading-normal text-raisinblack font-medium max-w-3xl xl:max-w-4xl"
          >
            {sectionDesc}
          </Typography>
        )}
      </div>
      {portfolioItems.map((item, index: number) => {
        // Alternate image position: even index = left, odd index = right
        const imagePosition = index % 2 === 0 ? "left" : "right";
        // Alternate icon position: even index = bottom-right, odd index = bottom-left
        const iconPosition = index % 2 === 0 ? "bottom-right" : "bottom-left";

        // Handle image - can be Media object or number ID
        const imageData = item.imageUpload && typeof item.imageUpload === "object"
          ? (item.imageUpload as Media)
          : null;
        const imageUrl = imageData?.url ? getMediaUrl(imageData.url) : "/images/strategic-focus-img-1.png";

        return (
          <div
            key={item.id || index}
            className={cn(
              "relative z-10",
              index === portfolioItems.length - 1 ? "mb-0" : "mb-12 lg:mb-20"
            )}
          >
            <div className="container mx-auto">
              <div
                className={cn(
                  "grid grid-cols-12 lg:gap-[40px] 2xl:gap-[90px] items-stretch",
                  index === portfolioItems.length - 1 && "mb-0"
                )}
              >
                <div
                  className={cn(
                    "bg-[#E7F4FF] absolute top-0 lg:w-1/2 h-full z-0",
                    imagePosition === "right"
                      ? "hidden lg:block left-0"
                      : "hidden lg:block right-0",
                    index === portfolioItems.length - 1 && "hidden xl:block"
                  )}
                />

                {/* Image Section */}
                <div
                  className={cn(
                    "col-span-12 lg:col-span-4",
                    imagePosition === "right"
                      ? "order-1 lg:order-2"
                      : "order-2 lg:order-1"
                  )}
                >
                  <div className="relative w-full h-auto z-10">
                    <Image
                      src={imageUrl}
                      alt={item.title || "Portfolio item"}
                      width={389}
                      height={336}
                      priority={index === 0}
                      className="w-full h-auto object-cover rounded-t-[0.9375rem] lg:rounded-[0.9375rem] aspect-[389/336]"
                    />
                    <IconOverlay position={iconPosition}>
                      {renderIcon(item.iconType)}
                    </IconOverlay>
                  </div>
                </div>

                {/* Text Content Section */}
                <div
                  className={cn(
                    "col-span-12 lg:col-span-8 bg-[#E7F4FF] p-6 lg:p-10 z-10 relative flex flex-col justify-center",
                    imagePosition === "right"
                      ? "order-1 lg:order-1 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
                      : "order-2 lg:order-2 rounded-b-2xl lg:rounded-b-none lg:rounded-l-2xl"
                  )}
                >
                  <div className="">
                    {item.subheading && (
                      <span className="text-xs lg:text-sm font-normal uppercase tracking-wide text-primarys mb-2 lg:mb-3">
                        {item.subheading}
                      </span>
                    )}
                    <Typography
                      variant="h2"
                      as="h2"
                      className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-raisinblack mb-4 lg:mb-5 font-playfair !leading-[1.1]"
                    >
                      {item.title}
                    </Typography>
                    {item.description && (
                      <Typography
                        variant="p"
                        className="text-base leading-relaxed lg:leading-normal text-raisinblack font-normal"
                      >
                        {item.description}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioSec;
