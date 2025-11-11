'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuItem as ReshapedMenuItem } from 'reshaped'
import type { MenuItemProps } from './MenuItem'

interface AppLinkMenuItemProps extends Omit<MenuItemProps, 'href'> {
  href: string
  selected?: boolean
}

function AppLinkMenuItem({ href, children, selected, ...props }: AppLinkMenuItemProps) {
  const pathname = usePathname()

  // Auto-detect if selected prop not provided, otherwise use provided value
  const isSelected = selected !== undefined ? selected : pathname === href

  return (
    <Link href={href}>
      <ReshapedMenuItem selected={isSelected} {...props}>
        {children}
      </ReshapedMenuItem>
    </Link>
  )
}

export const AppLink = {
  MenuItem: AppLinkMenuItem,
}
