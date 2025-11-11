import React from 'react'
import { MenuItem as ReshapedMenuItem } from 'reshaped'

export type MenuItemProps = React.ComponentProps<typeof ReshapedMenuItem>

const MenuItem = ({ size = 'small', ...props }: MenuItemProps) => {
  return <ReshapedMenuItem size={size} {...props} />
}

export { MenuItem }
