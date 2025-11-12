'use client'

import React from 'react'
import { Select as ReshapedSelect, classNames } from 'reshaped'
import { useFieldGroup } from './FieldGroup'
import styles from './Select.module.css'

export type SelectProps = React.ComponentProps<typeof ReshapedSelect.Custom>

const ReshapedSelectCustom = ReshapedSelect.Custom

// Select component always wraps Select.Custom (searchable/filterable)
const Select = ({ size, className, children, ...props }: SelectProps) => {
  const fieldGroupSize = useFieldGroup()
  const finalSize = fieldGroupSize?.size ?? size ?? 'small'

  // Add size to children (Select.Option) if they don't already have a size prop
  const childrenWithSize = React.Children.map(children, child => {
    if (React.isValidElement(child) && !(child.props as any).size) {
      return React.cloneElement(child, { size: finalSize } as any)
    }
    return child
  })

  return (
    <ReshapedSelectCustom
      size={finalSize}
      {...props}
      className={classNames(styles.container, className)}
    >
      {childrenWithSize}
    </ReshapedSelectCustom>
  )
}

// Attach subcomponents
Select.Option = ReshapedSelect.Option

export { Select }
