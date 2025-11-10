import { twMerge } from "tailwind-merge";
import React, { ReactNode, ElementType } from "react";

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type TypographyProps = {
  variant?: HeadingVariant;
  as?: ElementType;
  className?: string;
  text?: string | ReactNode;
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  as: Component = variant, // Default to `variant` unless overridden by `as`
  className,
  text,
  children,
  ...rest
}) => {
  const headingStyles: Record<HeadingVariant, string> = {
    h1: "text-4xl lg:text-[40px]/[1.2] xl:text-[44px]/[1.2] 2xl:text-[50px]/[1.2] font-semibold",
    h2: "text-3xl lg:text-4xl xl:text-[38px] 2xl:text-[42px]/[1.2] font-semibold",
    h3: "text-2xl lg:text-3xl 3xl:text-4xl font-semibold",
    h4: "text-xl lg:text-2xl 3xl:text-3xl font-semibold",
    h5: "text-lg lg:text-xl 3xl:text-2xl font-semibold",
    h6: "text-lg lg:text-xl font-normal",
    p: "text-base font-normal",
  };

  return (
    <Component className={twMerge(headingStyles[variant], className)} {...rest}>
      {text ?? children}
    </Component>
  );
};

{
  /* 
<Typography variant="p" text="This is a paragraph." className="text-gray-600" />
<Typography variant="h2" className="mt-4">
    Hello, <span className="text-blue-500">World!</span>
</Typography>
*/
}
