'use client'

import React from 'react'
import {
  TextField as ReshapedTextField,
  classNames,
} from 'reshaped'
import { useFieldGroup } from './FieldGroup'
import styles from './TextField.module.css'

export type TextFieldProps = React.ComponentProps<typeof ReshapedTextField>

const TextField = ({ size, className, ...props }: TextFieldProps) => {
  const fieldGroupSize = useFieldGroup()
  const finalSize = fieldGroupSize?.size ?? size ?? 'small'

  return (
    <ReshapedTextField
      size={finalSize}
      {...props}
      className={classNames(styles.container, className)}
    />
  )
}

export { TextField }
