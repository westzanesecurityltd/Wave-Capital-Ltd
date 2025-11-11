"use client";
import { Typography } from "@/components/common/Typography";


interface TncHeaderProps {
  eyebrow?: string;
  title?: string;
  secdesc?: Array<{ description: string }>;
  updatedate?: string;
}

export function TncHeader({
  eyebrow = "",
  updatedate = "",
  title = "",
  secdesc = [
    {
      description:
        'These Terms of Use ("Terms") govern your access to and use of the WestZane Security website (the "Website"), and any services or forms offered through it. By using the Website, you agree to comply with these Terms. If you do not agree, please do not use the Website.',
    },
    {
      description:
        'These Terms of Use ("Terms") govern your access to and use of the WestZane Security website (the "Website"), and any services or forms offered through it. By using the Website, you agree to comply with these Terms. If you do not agree, please do not use the Website. These Terms of Use ("Terms") govern your access to and use of the WestZane Security website (the "Website"), and any services or forms offered through it. By using the Website, you agree to comply with these Terms. If you do not agree, please do not use the Website.',
    },
    {
      description:
        'These Terms of Use ("Terms") govern your access to and use of the WestZane Security website (the "Website"), and any services or forms offered through it. By using the Website, you agree to comply with these Terms. If you do not agree, please do not use the Website.',
    },
  ],
}: TncHeaderProps) {
  return (
    <div className="tnc-header-wrap pt-12 lg:pt-20 relative">     

      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="tnc-header-inner">
          <div className="max-w-5xl">
            {eyebrow && (
              <div className="text-sm text-primarys uppercase mb-4">
                {eyebrow}
              </div>
            )}            
            <Typography variant="h1" as={"h1"} className="mb-3 font-playfair">
              {title}
            </Typography>
            
            {updatedate && (
              <Typography
                variant="p"
                as={"p"}
                className="text-midgray text-base mt-3 lg:mt-5"
              >
                {updatedate}
              </Typography>
            )}
          </div>

          {secdesc && secdesc.length > 0 && (
            <div className="mt-6 lg:mt-8">
              {secdesc.map((desc, index) => (
                <Typography
                  key={index}
                  variant="p"
                  as={"p"}
                  className="text-raisinblack text-base font-normal mb-0 first:mt-0 mt-6"
                >
                  {desc.description}
                </Typography>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
