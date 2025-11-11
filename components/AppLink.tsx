import Link from 'next/link'
import { MenuItem as ReshapedMenuItem } from 'reshaped'
import type { MenuItemProps } from './MenuItem'

interface AppLinkMenuItemProps extends Omit<MenuItemProps, 'href'> {
  href: string
}

function AppLinkMenuItem({ href, children, ...props }: AppLinkMenuItemProps) {
  return (
    <Link href={href}>
      <ReshapedMenuItem {...props}>{children}</ReshapedMenuItem>
    </Link>
  )
}

export const AppLink = {
  MenuItem: AppLinkMenuItem,
}
