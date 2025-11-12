'use client'

import React, { useLayoutEffect, useState } from 'react'
import {
  Text as ReshapedText,
  type TextProps as ReshapedTextProps,
  Tooltip,
  type FlyoutTriggerAttributes,
} from 'reshaped'

// Simple debounce implementation to avoid adding lodash-es dependency
function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return ((...args: unknown[]) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }) as T
}

// Custom TextProps that adds tooltip truncation functionality
export type TextProps<As extends keyof React.JSX.IntrinsicElements = 'div'> =
  ReshapedTextProps<As> & {
    truncatedTooltipText?: string
    tooltipIfTruncated?: boolean
  }

// Internal component that renders the actual text with combined attributes
const TextWithAttributes = <As extends keyof React.JSX.IntrinsicElements = 'div'>({
  tooltipAttributes,
  maxLines,
  children,
  truncatedTooltipText,
  tooltipIfTruncated,
  isTruncated,
  setIsTruncated,
  ...props
}: TextProps<As> & {
  tooltipAttributes?: FlyoutTriggerAttributes
  isTruncated?: boolean
  // needed to set the tooltip from the top
  setIsTruncated?: (value: boolean) => void
}) => {
  // Get the ref from tooltipAttributes (which contains the combined attributes)
  const containerRef = tooltipAttributes?.ref as React.RefObject<HTMLElement> | undefined
  const shouldShowTooltip = tooltipIfTruncated && (truncatedTooltipText ?? children)

  // Truncation detection logic
  useLayoutEffect(() => {
    if (!shouldShowTooltip || !containerRef?.current || !setIsTruncated) {
      return
    }

    const element = containerRef.current

    const checkTruncation = debounce(() => {
      if (!element) {
        return
      }
      // Check if content is vertically truncated (works with -webkit-line-clamp)
      const isTruncatedResult = element.scrollHeight > element.clientHeight
      setIsTruncated(isTruncatedResult)
    }, 30)

    const resizeObserver = new ResizeObserver(checkTruncation)
    resizeObserver.observe(element)

    // Initial check
    checkTruncation()

    return () => {
      resizeObserver.disconnect()
    }
  }, [shouldShowTooltip, maxLines, setIsTruncated, containerRef])

  return (
    <ReshapedText
      maxLines={maxLines}
      attributes={{
        ...props.attributes,
        ...tooltipAttributes,
      }}
      {...props}
    >
      {children}
    </ReshapedText>
  )
}

export const Text = <As extends keyof React.JSX.IntrinsicElements = 'div'>({
  truncatedTooltipText,
  tooltipIfTruncated = true,
  maxLines,
  children,
  ...props
}: TextProps<As>) => {
  const [isTruncated, setIsTruncated] = useState(false)

  // Determine the tooltip text: use provided text, or fall back to children
  const tooltipText = truncatedTooltipText ?? children
  const shouldShowTooltip = tooltipIfTruncated && tooltipText

  // If no tooltip functionality needed, render Text directly
  if (!shouldShowTooltip) {
    return (
      <TextWithAttributes maxLines={maxLines} {...props}>
        {children}
      </TextWithAttributes>
    )
  }

  // Render Text with Tooltip
  return (
    <Tooltip disabled={!isTruncated} text={tooltipText}>
      {tooltipAttributes => (
        <TextWithAttributes
          maxLines={maxLines}
          truncatedTooltipText={truncatedTooltipText}
          tooltipIfTruncated={tooltipIfTruncated}
          isTruncated={isTruncated}
          setIsTruncated={setIsTruncated}
          tooltipAttributes={tooltipAttributes}
          {...props}
        >
          {children}
        </TextWithAttributes>
      )}
    </Tooltip>
  )
}

Text.displayName = 'Text'
