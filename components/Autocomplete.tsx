import React from 'react'
import {
  Autocomplete as ReshapedAutocomplete,
  AutocompleteProps as ReshapedAutocompleteProps,
  classNames,
} from 'reshaped'
import styles from './Autocomplete.module.css'

export type AutocompleteProps = ReshapedAutocompleteProps

export function Autocomplete({
  size = 'small',
  fallbackAdjustLayout = true,
  className,
  children,
  ...props
}: AutocompleteProps) {
  // Add size="small" to children (Autocomplete.Item) if they don't already have a size prop
  const childrenWithSize = React.Children.map(children, child => {
    if (React.isValidElement(child) && !(child.props as any).size) {
      return React.cloneElement(child, { size: 'small' } as any)
    }
    return child
  })

  return (
    <ReshapedAutocomplete
      size={size}
      fallbackAdjustLayout={fallbackAdjustLayout}
      {...props}
      className={classNames(styles.container, className)}
    >
      {childrenWithSize}
    </ReshapedAutocomplete>
  )
}

Autocomplete.Item = ReshapedAutocomplete.Item
