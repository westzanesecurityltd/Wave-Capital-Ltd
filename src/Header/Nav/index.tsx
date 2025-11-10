'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
// import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="hidden md:flex gap-4 lg:gap-7 items-center bg-white px-5 lg:px-7 rounded-full p-2">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" className='text-base hover:text-primarys hover:no-underline last:inline-block last:bg-primarys last:text-white last:px-6 last:py-2.5 last:rounded-full last:-mr-4 last:hover:text-white last:hover:bg-primarys/90 font-normal' />
      })}
    </nav>
  )
}
