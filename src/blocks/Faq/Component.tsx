"use client";

import { cn } from "@/utilities/ui";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Typography } from "@/components/common/Typography";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  index: number;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  className,
  index,
}) => {
  return (
    <div className={cn("border-b-2 border-raisinblack/10 px-7", className)}>
      <button
        onClick={onToggle}
        className="w-full lg:py-7 py-5 text-left flex items-center justify-between hover:bg-white transition-colors duration-200"
      >
        <h3 className="text-lg font-medium text-raisinblack pr-2.5 lg:pr-4 flex-1 leading-tight max-w-3xl xl:max-w-4xl">
          {index}{"."} {question}
        </h3>
        <div className="flex-shrink-0">
          <div className="w-5 lg:w-6 h-5 lg:h-6">
            {isOpen ? (
              <Minus
                strokeWidth={2.5}
                className="w-5 lg:w-5 aspect-square text-primarys"
              />
            ) : (
              <Plus
                strokeWidth={2.5}
                className="w-5 lg:w-5 aspect-square text-primarys"
              />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="pb-6 pr-12 lg:pr-20">
          <p className="text-raisinblack text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

type FaqBlockType = {
  title?: string;
  smltext?: string;
  faqItems?: FAQItem[];
};

export const FAQBlock: React.FC<FaqBlockType> = ({
  smltext,
  title,
  faqItems,
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        // Close all other items (accordion behavior)
        newSet.clear();
        newSet.add(index);
      }

      return newSet;
    });
  };

  // Use empty array if faqItems is not provided or is empty
  const items = faqItems && faqItems.length > 0 ? faqItems : [];

  return (
    <section className={cn("py-12 lg:py-20 relative")}>
      <div className="container">
        {smltext && (
          <span className="text-primarys text-lg lg:text-xl font-medium">{smltext}</span>
        )}
        {title && (
          <Typography variant="h2" as={"h2"} className="font-playfair font-bold mb-3.5 lg:mb-5 max-w-2xl">
            {title}
          </Typography>
        )}

        <div className="space-y-0">
          {items.map((item: FAQItem, index: number) => (
            <FAQItemComponent
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(index)}
              onToggle={() => handleToggle(index)}
              className={index === items.length - 1 ? "border-b-0" : ""}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
