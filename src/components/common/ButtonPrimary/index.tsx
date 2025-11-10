"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utilities/ui";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "default" | "outline" | "fill";
type ButtonType = "button" | "link";

interface CustomButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  type?: ButtonType;
  href?: string; // only required if type is 'link'
  onClick?: () => void;
  className?: string;
  target?: string;
  title?: string;
}

export function ButtonPrimary({
  children,
  variant = "default",
  type = "button",
  href,
  onClick,
  className = "",
  target,
  title
}: CustomButtonProps) {
  const isOutline = variant === "outline";
  const isFill = variant === "fill";

  const commonClasses = cn(
    "text-base px-9 py-3 rounded-[3.125rem] font-medium transition-all duration-200 ease-in-out relative overflow-hidden h-auto",
    // Variant-specific styles
    {
      "text-primarys hover:text-primarys border border-primarys/80 relative bg-transparent hover:bg-primarys/20 hover:border-primarys/10": isOutline,
      "text-white hover:text-white bg-primarys btn-style1": variant === "default",
      "text-black hover:text-black bg-white hover:text-primarys btn-style2": isFill,
    },
    className
  );

  if (type === "link" && href) {
    return (
      <Link href={href} className={commonClasses} target={target} title={title}>
        <span>
          {children}
        </span>
      </Link>
    );
  }

  return (
    <Button
      variant={variant === "outline" ? "outline" : "default"} // Still passing only 'default' or 'outline' to ShadCN button
      onClick={onClick}
      className={commonClasses}
      title={title}
    >
      <span>
        {children}
      </span>
    </Button>
  );
}


{/*

  <ButtonPrimary
  //type="link"
  variant="outline"
  href={url}
  //className=""
>
  <span>{text}</span>
</ButtonPrimary>

*/}
