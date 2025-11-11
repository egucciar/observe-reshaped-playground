import React from 'react'
import {
  NumberField as ReshapedNumberField,
  classNames,
} from 'reshaped'
import styles from './NumberField.module.css'

export type NumberFieldProps = React.ComponentProps<typeof ReshapedNumberField>

const NumberField = ({ size = 'small', className, ...props }: NumberFieldProps) => {
  return (
    <ReshapedNumberField
      size={size}
      {...props}
      className={classNames(styles.container, className)}
    />
  )
}

export { NumberField }
