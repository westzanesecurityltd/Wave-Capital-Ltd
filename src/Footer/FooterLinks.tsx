'use client'

import { CMSLink } from '@/components/Link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

type FooterLink = {
  label?: string | null
  url?: string | null
  newTab?: boolean | null
  type?: 'custom' | 'reference' | null
  reference?: any
}

type FooterLinksProps = {
  links: FooterLink[]
  className?: string
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ links, className }) => {
  const pathname = usePathname()
  const clickedRef = useRef(false)
  const previousPathnameRef = useRef(pathname)

  // Scroll to top when pathname changes after clicking a footer link
  useEffect(() => {
    if (clickedRef.current && pathname !== previousPathnameRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      clickedRef.current = false
    }
    previousPathnameRef.current = pathname
  }, [pathname])

  const handleLinkClick = () => {
    clickedRef.current = true
  }

  return (
    <ul className={className}>
      {links?.map((link, j) => {
        const isInternalLink = !link.newTab && (link.type === 'reference' || (link.url && link.url.startsWith('/')))
        return (
          <li 
            key={j} 
            onClick={isInternalLink ? handleLinkClick : undefined}
            className={isInternalLink ? 'cursor-pointer' : ''}
          >
            <CMSLink
              {...link}
              appearance="inline"
              className="text-base lg:text-base xl:text-base text-midgray leading-relaxed whitespace-nowrap hover:text-black transition-colors font-medium"
            />
          </li>
        )
      })}
    </ul>
  )
}

