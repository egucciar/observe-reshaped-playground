import React from 'react'
import { TextArea as ReshapedTextArea, classNames } from 'reshaped'
import styles from './TextArea.module.css'

export type TextAreaProps = React.ComponentProps<typeof ReshapedTextArea>

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <ReshapedTextArea
      {...props}
      className={classNames(styles.container, className)}
    />
  )
}

export { TextArea }
