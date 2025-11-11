import React from 'react'
import {
  TextField as ReshapedTextField,
  classNames,
} from 'reshaped'
import styles from './TextField.module.css'

export type TextFieldProps = React.ComponentProps<typeof ReshapedTextField>

const TextField = ({ size = 'small', className, ...props }: TextFieldProps) => {
  return (
    <ReshapedTextField
      size={size}
      {...props}
      className={classNames(styles.container, className)}
    />
  )
}

export { TextField }
