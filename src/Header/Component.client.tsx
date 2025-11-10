"use client";
import { useHeaderTheme } from "@/providers/HeaderTheme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { cn } from "@/utilities/ui";
import type { Header } from "@/payload-types";

// import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from "./Nav";
import { MobileNav } from "./MobileNav";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null);
  const { headerTheme, setHeaderTheme } = useHeaderTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const logoUrl =
    typeof data?.logo === "object" && data.logo !== null && "url" in data.logo
      ? data.logo.url
      : null;

  useEffect(() => {
    setHeaderTheme(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme]);

  // Debug log for isScrolled state changes
  useEffect(() => {
    // console.log("isScrolled state changed to:", isScrolled);
  }, [isScrolled]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 50;

      // console.log(
      //   "Scroll position:",
      //   scrollPosition,
      //   "Should be scrolled:",
      //   shouldBeScrolled
      // ); // Debug log

      // Set background when scrolled past 50px
      setIsScrolled(shouldBeScrolled);
    };

    // Set initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "header-main z-20 w-full fixed top-4 transition-all duration-300",
        isScrolled && "scrolled-header bg-white shadow-md top-0" // Add a test class
      )}
      {...(theme ? { "data-theme": theme } : {})}
    >
      <div className="container">
        <div
          className={cn(
            isScrolled
              ? ""
              : "pl-2.5",
            "flex items-stretch justify-between w-full rounded-[6.25rem] transition-all duration-300 pl-2.5"
          )}
        >
          <Link href="/" className="py-1.5 px-2 inline-block bg-white rounded-[8px]">
            {logoUrl && (
              <Image
                src={logoUrl}
                width={135}
                height={50}
                alt="Logo"
                className="w-auto max-w-[9.375rem] h-[42px] md:h-[3.125rem] object-contain"
                loading="eager"
                fetchPriority="high"
              />
            )}
          </Link>
          {/* <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link> */}
          <HeaderNav data={data} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1B4277] transition-colors bg-white rounded-[8px] h-[42px] w-[42px] flex items-center justify-center relative top-[7px]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu*/}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-30 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X size={24} className="text-black" />
          </button>
        </div>

        <MobileNav data={data} onItemClick={() => setIsMobileMenuOpen(false)} />
      </div>
    </header>
  );
};