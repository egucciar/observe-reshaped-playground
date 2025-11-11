import React from 'react'
import { DropdownMenu as ReshapedDropdownMenu } from 'reshaped'

export type DropdownMenuProps = React.ComponentProps<typeof ReshapedDropdownMenu>
export type DropdownMenuItemProps = React.ComponentProps<typeof ReshapedDropdownMenu.Item>

// Base DropdownMenu - just re-export
const DropdownMenu = ReshapedDropdownMenu
const ReshapedDropdownMenuItem = ReshapedDropdownMenu.Item

// Wrap DropdownMenu.Item with size="small" default
const DropdownMenuItem = ({ size = 'small', ...props }: DropdownMenuItemProps) => {
  return <ReshapedDropdownMenuItem size={size} {...props} />
}

// Attach subcomponents
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Trigger = ReshapedDropdownMenu.Trigger
DropdownMenu.Content = ReshapedDropdownMenu.Content

export { DropdownMenu }
