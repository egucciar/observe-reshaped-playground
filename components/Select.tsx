import React from 'react'
import { Select as ReshapedSelect, classNames } from 'reshaped'
import styles from './Select.module.css'

export type SelectProps = React.ComponentProps<typeof ReshapedSelect>
export type SelectCustomProps = React.ComponentProps<typeof ReshapedSelect.Custom>

// Base Select - no customization, just re-export
const Select = ReshapedSelect
const ReshapedSelectCustom = ReshapedSelect.Custom

// Custom Select with our enhancements
const SelectCustom = ({
  size = 'small',
  className,
  children,
  ...props
}: SelectCustomProps) => {
  // Add size="small" to children (Select.Option) if they don't already have a size prop
  const childrenWithSize = React.Children.map(children, child => {
    if (React.isValidElement(child) && !(child.props as any).size) {
      return React.cloneElement(child, { size: 'small' } as any)
    }
    return child
  })

  return (
    <ReshapedSelectCustom
      size={size}
      {...props}
      className={classNames(styles.container, className)}
    >
      {childrenWithSize}
    </ReshapedSelectCustom>
  )
}

// Attach subcomponents
Select.Option = ReshapedSelect.Option
Select.Custom = SelectCustom

export { Select }
