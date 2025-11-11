"use client";

import { Typography } from "@/components/common/Typography";
import RichText from "@/components/RichText";
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

interface TncContentItem {
  title: string;
  description: DefaultTypedEditorState;
}

interface TncContentProps {
  contentItems?: TncContentItem[];
}

export function TncContent({ contentItems }: TncContentProps) {
  if (!contentItems || contentItems.length === 0) {
    return null;
  }

  return (
    <div className="tnc-content-wrap pt-10 lg:pt-14 pb-12 lg:pb-20 relative overflow-hidden">      
      <div className="container mx-auto px-5 relative z-10">
        {/* Blocks Grid */}
        <div className="">
          <div className="flex flex-col gap-10">
            {contentItems.map((item: TncContentItem, index: number) => (
              <div key={index} className={`w-full`}>
                {/* Title */}
                <Typography variant="h3" as={"h2"} className="mb-3 font-playfair">
                {index + 1}. {item.title}
                </Typography>

                {/* Description */}
                <div className="text-raisinblack leading-normal text-base">
                  <RichText data={item.description} enableProse={false} enableGutter={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
