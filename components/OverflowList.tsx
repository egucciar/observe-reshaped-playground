'use client'

import React, { useLayoutEffect, useState, useRef } from 'react'
import { View, Popover } from 'reshaped'
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

  /** Maximum number of lines (1 = single line with overflow, >1 = wrap) */
  maxLines?: number

  /** Gap between items (Reshaped gap units) */
  gap?: number

  /** Additional className for container */
  className?: string
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
  maxLines = 1,
  gap = 1,
  className,
}: OverflowListProps) {
  const containerRef = useRef<HTMLDivElement>(null)
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
    setMaxCount(0)
    setLatestContainerWidth(containerWidth)
  }, [items.length, containerWidth, isVisible])

  // Second effect: calculate the max count based on the container width and height
  useLayoutEffect(() => {
    if (!containerElement || maxCount > 0 || !isVisible) {
      return // Skip if already calculated or not visible
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
        temp.innerHTML = `<span style="opacity: 0.7; white-space: nowrap; font-size: 0.75rem; padding: 0.25rem 0.5rem;">+${count} more</span>`
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
        allItems.forEach((item) => {
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
    const gapPx = parseInt(computedStyle.gap, 10)

    // Try to measure actual overflow trigger if it exists, otherwise use default
    const overflowTrigger = containerElement.querySelector(
      '[data-overflow-trigger]'
    ) as HTMLElement
    const overflowIndicatorWidth = overflowTrigger?.offsetWidth || 70

    const itemElements = containerElement.querySelectorAll('[data-overflow-item]')
    let itemIndex = 0
    let totalWidth = 0

    while (itemIndex < itemElements.length) {
      const currentItem = itemElements[itemIndex]
      if (!currentItem || !(currentItem instanceof HTMLElement)) {
        break
      }

      const itemWidth = currentItem.offsetWidth
      const newContentsWidth = totalWidth + itemWidth + gapPx + overflowIndicatorWidth

      if (newContentsWidth >= latestContainerWidth) {
        break
      }

      totalWidth += itemWidth + gapPx
      itemIndex++
    }

    setMaxCount(itemIndex)
  }, [latestContainerWidth, containerElement, maxCount, items.length, maxLines, isVisible])

  // Determine visible count based on mode and whether calculation is complete
  const visibleCount = maxCount > 0 ? maxCount : items.length

  // Always show at least one item, and never more than we have
  const effectiveVisibleCount = Math.max(1, Math.min(visibleCount, items.length))
  const hiddenCount = items.length - effectiveVisibleCount

  return (
    <View
      gap={gap}
      direction="row"
      attributes={{
        ref: containerRef,
        style: {
          maxHeight: maxLines ? `${maxLines * 32}px` : undefined,
          width: '100%'
        },
      }}
      className={cn('overflow-hidden', className)}
      wrap={maxLines !== 1}
    >
      {items.slice(0, effectiveVisibleCount).map((child, index) => (
        <div key={child.key ?? index} className="inline-block" data-overflow-item={true}>
          {child}
        </div>
      ))}

      {hiddenCount > 0 &&
        (() => {
          const hiddenItems = items.slice(effectiveVisibleCount) as React.ReactElement[]

          // Default popover with all hidden items
          const defaultHandle = (
            <Popover position="top">
              <Popover.Trigger>
                {(attributes) => (
                  <button
                    {...attributes}
                    type="button"
                    className="cursor-pointer inline-block"
                    data-overflow-trigger={true}
                  >
                    <Badge size="small" className="opacity-70 whitespace-nowrap">
                      +{hiddenCount} more
                    </Badge>
                  </button>
                )}
              </Popover.Trigger>
              <Popover.Content>
                <View gap={1}>
                  <View className="text-xs text-neutral-faded">Hidden items:</View>
                  <View direction="row" gap={1} wrap={true}>
                    {hiddenItems.map((child, index) => (
                      <View key={child.key ?? effectiveVisibleCount + index}>{child}</View>
                    ))}
                  </View>
                </View>
              </Popover.Content>
            </Popover>
          )

          if (renderOverflow) {
            const customHandle = renderOverflow(
              hiddenCount,
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
