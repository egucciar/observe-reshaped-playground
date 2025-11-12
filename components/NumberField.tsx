'use client'

import React from 'react'
import {
  NumberField as ReshapedNumberField,
  classNames,
} from 'reshaped'
import { useFieldGroup } from './FieldGroup'
import styles from './NumberField.module.css'

export type NumberFieldProps = React.ComponentProps<typeof ReshapedNumberField>

const NumberField = ({ size, className, ...props }: NumberFieldProps) => {
  const fieldGroupSize = useFieldGroup()
  const finalSize = fieldGroupSize?.size ?? size ?? 'small'

  return (
    <ReshapedNumberField
      size={finalSize}
      {...props}
      className={classNames(
        styles.container,
        fieldGroupSize ? styles.insideFieldGroup : undefined,
        className
      )}
    />
  )
}

export { NumberField }
