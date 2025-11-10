import React, { ReactNode } from "react";
import { Typography } from "@/components/common/Typography";
import { Shield, Snowflake, Users, Building2, Factory, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type IconType = 'shield' | 'users' | 'snowflake' | 'building' | 'factory' | 'trendingUp'

interface CardData {
  imgSrc?: string; // Optional, can be URL string  
  title: string;
  desc: string;
  iconType?: IconType; // from Payload select
  icon?: ReactNode; // Optional, any valid React node (fallback)
}
const CARD_DATA: CardData[] = [
  {
    icon: <Shield className="w-10 h-10" />,        
    iconType: 'shield',
    title: "",
    desc: "",
  },
  {
    icon: <Users className="w-10 h-10" />,        
    iconType: 'users',
    title: "",
    desc: "",
  },
  {
    icon: <Snowflake className="w-10 h-10" />,        
    iconType: 'snowflake',
    title: "",
    desc: "",
  },
];

const SECTION_DATA: { title: string; secdesc: string } = {
  title: "",
  secdesc:
    "",
};

type ValuesSectionProps = {
  title?: string
  secdesc?: string
  cards?: CardData[]
}

export default function ValuesSection(props: ValuesSectionProps) {
  const title = props.title ?? SECTION_DATA.title
  const secdesc = props.secdesc ?? SECTION_DATA.secdesc
  const cards = Array.isArray(props.cards) && props.cards.length > 0 ? props.cards : CARD_DATA

  const renderIcon = (iconType?: IconType, fallback?: ReactNode) => {
    switch (iconType) {
      case 'shield':
        return <Shield className="w-10 h-10" />
      case 'users':
        return <Users className="w-10 h-10" />
      case 'snowflake':
        return <Snowflake className="w-10 h-10" />
      case 'building':
        return <Building2 className="w-10 h-10" />
      case 'factory':
        return <Factory className="w-10 h-10" />
      case 'trendingUp':
        return <TrendingUp className="w-10 h-10" />
      default:
        return fallback || <Shield className="w-10 h-10" />
    }
  }
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container">
        <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-12">
          <Typography variant="h2" as={"h2"} className="font-playfair">
            {title}
          </Typography>
          <Typography
            variant="p"
            as={"p"}
            className="text-darkgray mt-3 text-lg lg:text-[1.25rem] leading-normal"
          >
            {secdesc}
          </Typography>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-[1.875rem]">
          {/* Left column cards */}

          {cards.map((card, index) => (
            <Card
              key={index} // use a unique id in production
              className="flex flex-col h-full shadow-none hover:shadow-primarys/10 hover:shadow-lg transition-shadow bg-[#EFF5FB] border-[#1B4277]/50 rounded-xl p-4 md:p-5 lg:p-7 col-span-12 md:col-span-6 lg:col-span-4"
            >
              {card.iconType && (
                <div className="text-primarys mb-4 min-h-[1.75rem]">
                  {renderIcon(card.iconType, card.icon)}
                </div>
              )}

              <CardHeader className="p-0">
                <CardTitle className="text-xl lg:text-2xl font-semibold mb-2">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 p-0">
                <Typography
                  variant="p"
                  className="text-sm text-darkgray leading-snug"
                >
                  {card.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>      
    </section>
  );
}
