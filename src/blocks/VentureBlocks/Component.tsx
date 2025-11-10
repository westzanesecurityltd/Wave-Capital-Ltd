"use client";
import Image from "next/image";
import { Typography } from "@/components/common/Typography";
import { cn } from "@/lib/utils";
import type { Media } from "@/payload-types";
import { getMediaUrl } from "@/utilities/getMediaUrl";

type VentureItem = {
  title?: string | null;
  description?: string | null;
  tags?: Array<{
    tag?: string | null;
    id?: string | null;
  }> | null;
  imageUpload?: Media | number | null;
  id?: string | null;
};

type VentureBlocksBlock = {
  ventureItems?: VentureItem[] | null;
  blockType?: 'ventureBlocks' | null;
  blockName?: string | null;
  id?: string | null;
};

export const VentureBlocks = (props: VentureBlocksBlock) => {
  const { ventureItems } = props;

  // If no ventureItems provided or empty, render empty grid
  if (!ventureItems || ventureItems.length === 0) {
    return (
      <section className="relative py-12 lg:py-20">
        <div className="container mx-auto">
          {/* Empty grid container */}
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 lg:py-20">      
      {ventureItems.map((item, index) => {
        // Alternate image position: even index = left, odd index = right
        const imagePosition = index % 2 === 0 ? "left" : "right";

        // Handle image - can be Media object or number ID
        const imageData = item.imageUpload && typeof item.imageUpload === "object"
          ? (item.imageUpload as Media)
          : null;
        const imageUrl = imageData?.url ? getMediaUrl(imageData.url) : "/images/ventures-img-1.png";

        // Extract tags from array of objects
        const tags = item.tags?.map(tagObj => tagObj.tag).filter(Boolean) || [];

        return (
          <div
            className={cn(
              "relative z-10",
              index === ventureItems.length - 1 ? "mb-0" : "mb-12 lg:mb-20"
            )}
            key={item.id || index}
          >
              <div className="container mx-auto">
              <div
                className={cn(
                  "grid grid-cols-12 gap-5 lg:gap-8 2xl:gap-10 items-stretch",
                  index === ventureItems.length - 1 && "mb-0"
                )}
              >
                {/* Image Section */}
                <div
                  className={cn(
                    "col-span-12 lg:col-span-6",
                    imagePosition === "right"
                      ? "order-1 lg:order-2"
                      : "order-2 lg:order-1"
                  )}
                >
                  <div className="relative w-full h-auto z-10">
                    <Image
                      src={imageUrl}
                      alt={item.title || "Venture"}
                      width={592}
                      height={454}
                      priority={index === 0}
                      className="w-full h-auto object-cover rounded-[15px] aspect-[592/454]"
                    />
                  </div>
                </div>

                {/* Text Content Section */}
                <div
                  className={cn(
                    "col-span-12 lg:col-span-6 z-10 relative xl:py-5",
                    imagePosition === "right"
                      ? "order-1 lg:order-1"
                      : "order-2 lg:order-2"
                  )}
                >
                  <div className="flex flex-col justify-center border border-[#D3D3D3] rounded-2xl h-full p-6 lg:p-10">
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
                    {tags && tags.length > 0 && ( 
                      <div className="mt-5 md:mt-8 flex flex-wrap gap-5">
                        {tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-sm font-normal bg-primarys text-white px-5 lg:px-7 py-1.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
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

export default VentureBlocks;
