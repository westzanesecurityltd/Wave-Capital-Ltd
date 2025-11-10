'use client'

import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

type Props = {
  data: HeaderType
  className?: string
  animatedLine?: boolean
  onItemClick?: () => void
}

export const MobileNav: React.FC<Props> = ({ className, data, onItemClick }) => {
  const navItems = data?.navItems || []
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  const toggleMobileSubmenu = (menuTitle: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menuTitle ? null : menuTitle)
  }
  return (
    <nav
      className={cn(className, 'overflow-y-auto flex flex-col px-6 py-5')}
      style={{ height: 'calc(100dvh - var(--topHeight, 6.4rem))' }}
    >
      {navItems.map((item, i) => {
        const isCTA = item.link?.label?.toLowerCase() === 'start your project'
        const hasChildren = item.subLinks && item.subLinks.length > 0

        return (
          <div key={i} className={cn(!isCTA ? 'border-b border-gray-200' : '', 'relative group ')}>
            <div className="flex items-center gap-2 justify-between relative">
              <div onClick={onItemClick} className="w-full">
                <CMSLink
                  {...item.link}
                  appearance={isCTA ? 'default' : 'link'}
                  className={cn(
                    isCTA
                      ? 'relative w-full bg-primarys hover:bg-primarysLight text-black rounded-full p-3 h-auto mt-6 font-[number:var(--archivo-regular-base-font-weight)] text-[length:var(--archivo-regular-base-font-size)] tracking-[var(--archivo-regular-base-letter-spacing)] leading-[var(--archivo-regular-base-line-height)] [font-style:var(--archivo-regular-base-font-style)] transition-all duration-300'
                      : 'relative w-[calc(100%-2.5rem)] group px-0 py-4 font-archivo-regular-base font-[number:var(--archivo-medium-base-font-weight)] text-black lg:text-white text-[length:var(--archivo-regular-base-font-size)] tracking-[var(--archivo-regular-base-letter-spacing)] leading-[var(--archivo-regular-base-line-height)] [font-style:var(--archivo-regular-base-font-style)] whitespace-nowrap hover:text-primarys transition-all duration-300 !no-underline',
                  )}
                />
              </div>
              
              {!isCTA && hasChildren && (
                <>
                  <button
                    onClick={() => toggleMobileSubmenu(item.link?.label)}
                    className="p-2 text-gray-600 hover:text-primarysLight focus:text-primarysLight transition-colors absolute inset-0 flex justify-end items-center z-20"
                  >
                    {expandedMobileMenu === item.link?.label ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>
                  {/* <button
                    onClick={() => toggleMobileSubmenu(item.link?.label)}
                    className="p-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    {expandedMobileMenu === item.link?.label ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button> */}
                </>
              )}
            </div>

            {hasChildren && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMobileMenu === item.link.label
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pb-4">
                  {item.subLinks?.map((child, j) => (
                    <div key={j} onClick={onItemClick}>
                      <CMSLink
                        {...child.link}
                        className="block text-sm text-black hover:text-primarys transition-colors !no-underline py-2 px-0 "
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
