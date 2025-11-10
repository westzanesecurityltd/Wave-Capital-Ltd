"use client";
import { ButtonPrimary } from "@/components/common/ButtonPrimary";
import { Typography } from "@/components/common/Typography";

interface BannerHomeBlock {
  eyebrowtext: string;
  title: string;
  secdesc?: string;
  buttontext?: string;
  url: string;
  id?: string | null;
}

export const BannerHome: React.FC<BannerHomeBlock> = ({
  eyebrowtext = "Structuring Capital for Growth",
  title = "Bridging Investment that Builds Economies",
  secdesc = "We design and manage investment structures that align global investors with sustainable sectors shaping emerging economies.",
  buttontext = "Discover More",
  url = "/",
}) => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center pt-[90px] lg:pt-[70px] pb-[20px] lg:pb-[30px]">
      {/* <Image
        src="/images/banner-home.png"
        alt={"Home Banner"}
        // alt={eyebrow ? eyebrow + " banner" : "Banner"}
        width={1920}
        height={1080}
        priority
        className="absolute top-0 left-0 right-0 bottom-0 h-full z-0 object-cover "
      /> */}
      <video
        src="/video/home-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full z-0 object-cover"
      />
      <div className="container mx-auto px-5 relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-[calc(100vh-320px)] lg:min-h-[calc(100vh-100px)] text-center">
          {/* Left Content */}
          <div className="flex-1 py-7 lg:py-10 flex flex-col justify-center">
            <div className="text-lg md:text-[20px] lg:text-[22px] text-white mb-4">
              {eyebrowtext}
            </div>
            <Typography
              variant="h1"
              as={"h1"}
              className="text-white mb-4 lg:mb-9 max-w-6xl mx-auto font-playfair"
            >
              {title}
            </Typography>
            <Typography
              variant="p"
              as={"p"}
              className="text-lg md:text-lg leading-relaxed text-white font-normal mb-4 lg:mb-10 max-w-4xl mx-auto"
            >
              {secdesc}
            </Typography>
            <div className="flex justify-center mt-4 lg:mt-4">
              <ButtonPrimary
                type="link"
                variant="fill"
                href={url}
                className="inline-block"
              >
                {buttontext}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
