'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
// import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'

type HeaderLinkWrapperProps = {
  link: NonNullable<HeaderType['navItems']>[number]['link']
  onClick: () => void
  className?: string
}


const HeaderLinkWrapper: React.FC<HeaderLinkWrapperProps> = ({ link, onClick, className }) => {
  const isInternalLink = !link.newTab && (link.type === 'reference' || (link.url && link.url.startsWith('/')))
  
  const handleClick = (e: React.MouseEvent) => {
    if (isInternalLink) {
      onClick()
    }
  }

  return (
    <span onClick={handleClick} className="last:inline-block last:bg-primarys last:text-white last:px-6 last:py-2.5 last:rounded-full last:-mr-4 last:hover:text-white last:hover:bg-primarys/90 p-1 [&:last-child>a]:text-white">
      <CMSLink {...link} appearance="link" className={className} />
    </span>
  )
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const clickedRef = useRef(false)
  const previousPathnameRef = useRef(pathname)

  // Scroll to top when pathname changes after clicking a header link
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
    <nav className="hidden md:flex gap-4 lg:gap-7 items-center bg-white px-5 lg:px-7 rounded-full p-2">
      {navItems.map(({ link }, i) => {
        return (
          <HeaderLinkWrapper
            key={i}
            link={link}
            onClick={handleLinkClick}
            className='text-base hover:text-primarys hover:no-underline font-normal'
          />
        )
      })}
    </nav>
  )
}
