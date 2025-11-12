'use client'

import React from 'react'
import {
  Button as ReshapedButton,
  type ButtonProps as ReshapedButtonProps,
  classNames,
} from 'reshaped'
import { useFieldGroup } from './FieldGroup'
import { Tooltip, type TooltipProps } from './Tooltip'
import { Actionable } from './Actionable'
import styles from './Button.module.css'

export interface ButtonProps extends ReshapedButtonProps {
  /**
   * Tooltip content and configuration
   * Can be a simple string or full tooltip configuration object
   */
  tooltip?: string | Omit<TooltipProps, 'children'>
}

// Internal component that renders the actual button
const ButtonWithAttributes = ({
  size,
  tooltipAttributes,
  ...props
}: ButtonProps & { tooltipAttributes?: ButtonProps['attributes'] }) => {
  const fieldGroupSize = useFieldGroup()
  const finalSize = fieldGroupSize?.size ?? size ?? 'small'

  return (
    <ReshapedButton
      size={finalSize}
      {...props}
      className={classNames(styles.root, props.className)}
      attributes={{
        ...props.attributes,
        ...tooltipAttributes,
      }}
    />
  )
}

const Button = ({ tooltip, ...props }: ButtonProps) => {
  if (!tooltip) {
    return <ButtonWithAttributes {...props} />
  }

  const tooltipConfig: Omit<TooltipProps, 'children'> =
    typeof tooltip === 'string' ? { text: tooltip } : tooltip

  return (
    <Tooltip {...tooltipConfig}>
      {tooltipAttributes => {
        // For disabled buttons, we need to wrap in Actionable to enable tooltip hover
        // since disabled buttons don't receive mouse events
        if (props.disabled) {
          return (
            <Actionable attributes={tooltipAttributes} as="div">
              <ButtonWithAttributes {...props} />
            </Actionable>
          )
        }

        // For enabled buttons, pass tooltip attributes directly to the button
        return <ButtonWithAttributes {...props} tooltipAttributes={tooltipAttributes} />
      }}
    </Tooltip>
  )
}

Button.Group = ReshapedButton.Group

export { Button }
