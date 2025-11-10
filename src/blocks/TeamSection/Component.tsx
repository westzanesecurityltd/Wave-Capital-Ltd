"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { Typography } from "@/components/common/Typography";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import Envelope from "@/components/Icons/Envelope";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import type { Media } from "@/payload-types";

interface CardData {
  id?: string | null;
  name: string;
  designation: string;
  description: string;
  email?: string | null;
  phone?: string | null;
  linkedin?: string | null;
  imgSrc?: Media | number | null;
}

interface TeamSectionProps {
  teamMembers?: CardData[] | null;
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const cards = teamMembers || [];

  const getImageUrl = (imgSrc: Media | number | null | undefined): string => {
    if (!imgSrc) return "";
    if (typeof imgSrc === "object" && "url" in imgSrc) {
      return imgSrc.url || "";
    }
    return "";
  };

  return (
    <section className="relative py-12 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {cards.map((card, index) => {
            const imageUrl = getImageUrl(card.imgSrc);
            return (
              <Card
                key={card.id || index}
                className="flex flex-col justify-center items-center h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-white border-0 rounded-xl col-span-6 lg:col-span-4 relative aspect-[393/368]  group cursor-pointer"
                onClick={() => setSelectedCard(card)}
              >
                <div className="absolute inset-0 z-0 rounded-xl overflow-hidden flex flex-col">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={card.name + " image"}
                      width={393}
                      height={368}
                      className="w-full h-full rounded-[0.9375rem] object-cover absolute inset-0 z-0 aspect-[393/368]"
                      priority={false}
                    />
                  )}
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#278AA3CC_0%,#1B4277CC_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </div>
                <CardHeader className="pt-0 px-0 pb-0 relative z-[11] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <CardTitle className="text-base lg:text-[2rem] font-medium text-white text-center font-playfair pb-2">
                    {card.name}
                  </CardTitle>
                  <hr className="!my-2 w-full border-0 border-t-2 border-gray-200 opacity-0 group-hover:opacity-50 transition-opacity duration-150" />
                </CardHeader>
                <CardContent className="text-base lg:text-base font-medium text-white text-center p-0 !mt-0 relative z-[11] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  {card.designation}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog
        open={selectedCard !== null}
        onOpenChange={(open) => !open && setSelectedCard(null)}
      >
        <DialogContent className="lg:max-w-4xl max-w-[calc(100%-44px)] bg-white !rounded-2xl xl:p-12 lg:p-10 p-6">
          {selectedCard && (
            <>
              <div className="md:grid grid-cols-12 gap-4 max-h-[calc(70vh)] h-auto overflow-y-auto pr-3 md:pr-0">
                {(() => {
                  const imageUrl = getImageUrl(selectedCard.imgSrc);
                  return imageUrl ? (
                    <div className="col-span-5 lg:col-span-4 max-w-[260px] md:max-w-[280px] aspect-[255/238] w-full rounded-xl overflow-hidden mb-3 lg:mb-0 mx-auto sm:mx-0">
                      <Image
                        src={imageUrl}
                        alt={selectedCard.name + " image"}
                        width={255}
                        height={238}
                        className="w-full h-full rounded-[0.9375rem] object-cover border-2 border-primarys"
                      />
                    </div>
                  ) : null;
                })()}
                <div className="col-span-7 lg:col-span-8 lg:pl-5 xl:pl-8 text-center sm:text-left">
                  <DialogDescription className="text-sm text-primarys">
                    {selectedCard.designation}
                  </DialogDescription>
                  <DialogTitle className="!text-2xl lg:!text-3xl font-playfair mt-1.5">
                    {selectedCard.name}
                  </DialogTitle>

                  <p className="text-base text-foreground mt-3">
                    {selectedCard.description}
                  </p>
                  <div className="mt-5">
                    {(selectedCard.email ||
                      selectedCard.phone ||
                      selectedCard.linkedin) && (
                      <div className="flex items-center gap-4 justify-center sm:justify-start">
                        {selectedCard.email && (
                          <>
                            <a
                              href={`mailto:${selectedCard.email}`}
                              className="text-primary hover:underline text-sm"
                            >
                              <Envelope className="w-6 h-6 text-primarys" />
                            </a>
                          </>
                        )}
                        {selectedCard.phone && (
                          <>
                            <a
                              href={`tel:${selectedCard.phone}`}
                              className="text-primary hover:underline text-sm"
                            >
                              <PhoneIcon className="w-5 h-5 text-primarys" />
                            </a>
                          </>
                        )}
                        {selectedCard.linkedin && (
                          <>
                            <a
                              href={selectedCard.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm"
                            >
                              <LinkedinIcon className="w-5 h-5 text-primarys" />
                            </a>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
