'use client'

import React, { useLayoutEffect, useState } from 'react'
import { View, Popover, Actionable } from 'reshaped'
import { Badge } from './Badge'
import { cn } from '@/lib/utils'
import { useIsVisible } from '@/hooks/useIsVisible'

/**
 * Simple, flexible overflow list component
 * Shows items horizontally and collapses overflowing items into a "+N more" indicator
 */
export interface OverflowListProps {
  /** Children to display */
  children: React.ReactNode

  /**
   * Optional custom overflow indicator renderer
   * Receives:
   * - count: number of hidden items
   * - hiddenItems: array of hidden React elements
   * - items: array of all React elements (useful for showing all items with filtering)
   */
  renderOverflow?: (
    count: number,
    hiddenItems: React.ReactElement[],
    items: React.ReactElement[]
  ) => React.ReactNode

  /** Optional callback when overflow badge is clicked (disables popover) */
  onOverflowClick?: () => void

  /** Maximum number of lines (1 = single line with overflow, >1 = wrap) */
  maxLines?: number

  /** Gap between items (Reshaped gap units) */
  gap?: number

  /** Additional className for container */
  className?: string

  /** Size for the overflow badge */
  size?: 'small' | 'medium' | 'large'
}

const useStatefulRef = <T extends HTMLElement>(initialVal: T | null = null) => {
  const [currentVal, setCurrentVal] = useState(initialVal)

  const statefulRef = React.useMemo(
    () => ({
      get current() {
        return currentVal
      },
      set current(newValue: T | null) {
        if (!Object.is(currentVal, newValue)) {
          setCurrentVal(newValue)
        }
      },
    }),
    [currentVal]
  )

  return statefulRef as React.RefObject<T>
}

const useContainerWidth = (element: HTMLElement | null | undefined) => {
  const [containerWidth, setContainerWidth] = useState(0)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!element) {
        return
      }
      const computedStyle = window.getComputedStyle(element)
      const leftPadding = parseInt(computedStyle.paddingLeft, 10)
      const rightPadding = parseInt(computedStyle.paddingRight, 10)
      setContainerWidth(element.offsetWidth - leftPadding - rightPadding)
    }

    window.addEventListener('resize', handleResize)
    const resizeObserver = new ResizeObserver(handleResize)
    if (element) {
      resizeObserver.observe(element)
      handleResize()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
    }
  }, [element])

  return containerWidth
}

export function OverflowList({
  children,
  renderOverflow,
  onOverflowClick,
  maxLines = 1,
  gap = 1,
  className,
  size = 'small',
}: OverflowListProps) {
  const containerRef = useStatefulRef<HTMLDivElement>(null)
  const [maxCount, setMaxCount] = useState(0)
  const [latestContainerWidth, setLatestContainerWidth] = useState(0)

  const containerElement = containerRef.current
  const parentElement = containerElement?.parentElement
  const containerWidth = useContainerWidth(parentElement)

  // Use IntersectionObserver to only calculate overflow when visible
  const isVisible = useIsVisible(containerRef)

  // Convert children to array of React elements
  // IMPORTANT: Memoize children to prevent unnecessary re-renders
  const items = React.useMemo(() => {
    return React.Children.toArray(children).filter(React.isValidElement)
  }, [children])

  // First effect: reset max-count and allow all items to re-render
  useLayoutEffect(() => {
    if (!isVisible) {
      return // Skip calculation if not visible
    }
    setMaxCount(-1) // Use -1 to indicate "needs calculation"
    setLatestContainerWidth(containerWidth)
  }, [items.length, containerWidth, isVisible])

  // Second effect: calculate the max count based on the container width and height
  useLayoutEffect(() => {
    if (!containerElement || maxCount >= 0 || !isVisible) {
      return // Skip if already calculated (maxCount >= 0) or not visible
    }

    // For multi-line mode, check if content exceeds max height
    if (maxLines > 1) {
      const maxHeight = maxLines * 32 // 32px per line
      const actualHeight = containerElement.scrollHeight

      // If content doesn't overflow, show everything
      if (actualHeight <= maxHeight) {
        setMaxCount(items.length)
        return
      }

      // Content overflows - use binary search to find how many items fit
      // We need to account for the "+N more" badge taking space
      let left = 1
      let right = items.length - 1
      let bestFit = 1

      // Try to find existing overflow trigger to clone for measurement, or create default
      const existingTrigger = containerElement.querySelector('[data-overflow-trigger]')
      const createTempTrigger = (count: number) => {
        if (existingTrigger) {
          const clone = existingTrigger.cloneNode(true) as HTMLElement
          clone.style.display = 'inline-block'
          // Update count in the cloned element (simple text replacement)
          const textContent = clone.textContent || ''
          clone.textContent = textContent.replace(/\d+/, String(count))
          return clone
        }
        // Fallback to default badge
        const temp = document.createElement('div')
        temp.style.display = 'inline-block'
        temp.innerHTML = `<span style="opacity: 0.7; white-space: nowrap; font-size: 0.75rem; padding: 0.25rem 0.5rem;">+${count}</span>`
        return temp
      }

      while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        // Temporarily hide items beyond mid
        const allItems = containerElement.querySelectorAll('[data-overflow-item]')
        allItems.forEach((item, idx) => {
          if (item instanceof HTMLElement) {
            item.style.display = idx < mid ? '' : 'none'
          }
        })

        // Add temporary trigger to measure total height with it
        const tempOverflowBadge = createTempTrigger(items.length - mid)
        containerElement.appendChild(tempOverflowBadge)

        const currentHeight = containerElement.scrollHeight

        // Remove temp badge
        containerElement.removeChild(tempOverflowBadge)

        // Restore display
        allItems.forEach(item => {
          if (item instanceof HTMLElement) {
            item.style.display = ''
          }
        })

        if (currentHeight <= maxHeight) {
          bestFit = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
      }

      setMaxCount(bestFit)
      return
    }

    // Single-line mode: check horizontal overflow
    const computedStyle = window.getComputedStyle(containerElement)
    const gapPx = parseInt(computedStyle.gap, 10) || 0

    // Try to measure actual overflow trigger if it exists
    const overflowTrigger = containerElement.querySelector(
      '[data-overflow-trigger]'
    ) as HTMLElement
    const overflowIndicatorWidth = overflowTrigger?.offsetWidth || 50

    const itemElements = containerElement.querySelectorAll('[data-overflow-item]')

    let itemIndex = 0
    let totalWidth = 0

    while (itemIndex < itemElements.length) {
      const currentItem = itemElements[itemIndex]
      if (!currentItem || !(currentItem instanceof HTMLElement)) {
        break
      }

      const itemWidth = currentItem.offsetWidth
      // Check if adding this item + gap would overflow WITHOUT the badge
      const newContentsWidthNoBadge = totalWidth + itemWidth + gapPx

      // If this is the last item, don't reserve space for badge
      if (itemIndex === itemElements.length - 1) {
        if (newContentsWidthNoBadge > latestContainerWidth) {
          break
        }
      } else {
        // Not the last item, so reserve space for potential badge
        const newContentsWidth = newContentsWidthNoBadge + overflowIndicatorWidth
        if (newContentsWidth > latestContainerWidth) {
          break
        }
      }

      totalWidth += itemWidth + gapPx
      itemIndex++
    }

    setMaxCount(itemIndex)
  }, [latestContainerWidth, containerElement, maxCount, items.length, maxLines, isVisible])

  // Determine visible count based on mode and whether calculation is complete
  // If maxCount is -1, we're still calculating, so show all items temporarily
  const visibleCount = maxCount >= 0 ? maxCount : items.length

  // Always show at least one item, and never more than we have
  const effectiveVisibleCount = Math.max(1, Math.min(visibleCount, items.length))
  const hiddenCount = items.length - effectiveVisibleCount

  // Check if space is too constrained - if maxCount is 0 after calculation completes, show only overflow badge
  const showOnlyOverflow = maxCount === 0 && items.length > 0

  return (
    <View
      gap={gap}
      direction="row"
      attributes={{
        ref: containerRef,
        style: {
          maxHeight: maxLines ? `${maxLines * 32}px` : undefined,
          width: '100%',
        },
      }}
      className={cn('overflow-hidden', className)}
      wrap={maxLines !== 1}
    >
      {!showOnlyOverflow && items.slice(0, effectiveVisibleCount).map((child, index) => (
        <div key={child.key ?? index} className="inline-block" data-overflow-item={true}>
          {child}
        </div>
      ))}

      {(hiddenCount > 0 || showOnlyOverflow) &&
        (() => {
          // When showing only overflow, all items are hidden
          const actualHiddenCount = showOnlyOverflow ? items.length : hiddenCount
          const hiddenItems = showOnlyOverflow
            ? (items as React.ReactElement[])
            : (items.slice(effectiveVisibleCount) as React.ReactElement[])

          // If onOverflowClick is provided, render a clickable badge without popover
          if (onOverflowClick) {
            return (
              <Actionable
                attributes={{
                  'data-overflow-trigger': true,
                }}
                onClick={onOverflowClick}
              >
                <Badge size={size} className="opacity-70 whitespace-nowrap">
                  +{actualHiddenCount}
                </Badge>
              </Actionable>
            )
          }

          // Default popover with all hidden items
          const defaultHandle = (
            <Popover position="top" triggerType="hover">
              <Popover.Trigger>
                {attributes => (
                  <Actionable
                    attributes={{
                      ...attributes,
                      'data-overflow-trigger': true,
                    }}
                  >
                    <Badge size={size} variant="outline" className="whitespace-nowrap">
                      +{actualHiddenCount}
                    </Badge>
                  </Actionable>
                )}
              </Popover.Trigger>
              <Popover.Content>
                <View gap={1}>
                  {hiddenItems.map((child, index) => (
                    <div key={child.key ?? (showOnlyOverflow ? index : effectiveVisibleCount + index)}>
                      {child}
                    </div>
                  ))}
                </View>
              </Popover.Content>
            </Popover>
          )

          if (renderOverflow) {
            const customHandle = renderOverflow(
              actualHiddenCount,
              hiddenItems,
              items as React.ReactElement[]
            )
            // Wrap in a div with data attribute so we can measure it
            return (
              <div className="inline-block" data-overflow-trigger={true}>
                {customHandle}
              </div>
            )
          }

          return defaultHandle
        })()}
    </View>
  )
}
