'use client'

import * as React from 'react'
import { useState, useRef } from 'react'
import { ChevronsUpDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  size as floatingSize,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react'
import { View, Actionable } from 'reshaped'
import { Badge } from './Badge'
import { OverflowList } from './OverflowList'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import styles from './ExpandableMultiSelect.module.css'

export interface ExpandableMultiSelectOption {
  value: string
  label: string
}

export interface ExpandableMultiSelectProps {
  name?: string
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  options: ExpandableMultiSelectOption[]
  value?: string[]
  onChange?: (event: { value: string[] }) => void
  disabled?: boolean
  className?: string
  maxShownItems?: number
  startSlot?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  /** Enable overflow handling for badges (default: true) */
  overflow?: boolean
  /** Callback when overflow badge is clicked (only used when overflow is true) */
  onOverflowClick?: () => void
  /** Overflow mode: 'expand' shows all items with expand/collapse, 'popover' uses hover popover (default: 'popover') */
  overflowMode?: 'expand' | 'popover'
  /** Custom width for the dropdown (e.g., '300px', '20rem'). If not set, matches trigger width */
  dropdownWidth?: string
}

export const ExpandableMultiSelect = React.forwardRef<
  HTMLButtonElement,
  ExpandableMultiSelectProps
>(
  (
    {
      name,
      placeholder = 'Select items...',
      searchPlaceholder = 'Search...',
      emptyMessage = 'No items found.',
      options,
      value = [],
      onChange,
      disabled = false,
      className,
      maxShownItems = 2,
      startSlot,
      size = 'medium',
      overflow = true,
      onOverflowClick,
      overflowMode = 'popover',
      dropdownWidth,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const { refs, floatingStyles, context, placement } = useFloating({
      open,
      onOpenChange: setOpen,
      placement: 'bottom-start',
      strategy: 'absolute',
      middleware: [
        offset(({ rects }) => -rects.reference.height),
        flip(),
        shift(),
        floatingSize({
          apply({ availableWidth, availableHeight, elements }) {
            Object.assign(elements.floating.style, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`,
            })
          },
        }),
      ],
      whileElementsMounted: autoUpdate,
    })

    const isPositionedAbove = placement.startsWith('top')

    const click = useClick(context)
    const dismiss = useDismiss(context)
    const role = useRole(context)

    const { getReferenceProps, getFloatingProps } = useInteractions([
      click,
      dismiss,
      role,
    ])

    const toggleSelection = (selectedValue: string) => {
      const newValue = value.includes(selectedValue)
        ? value.filter(v => v !== selectedValue)
        : [...value, selectedValue]
      onChange?.({ value: newValue })
    }

    const removeSelection = (selectedValue: string) => {
      const newValue = value.filter(v => v !== selectedValue)
      onChange?.({ value: newValue })
    }

    return (
      <>
        <Actionable
          as="div"
          ref={refs.setReference}
          attributes={{
            ...getReferenceProps(),
            role: 'combobox',
            'aria-expanded': open,
            style: { width: '100%' },
          }}
        >
          <View
            direction="row"
            align="center"
            gap={2}
            border={true}
            padding={size === 'small' ? 1 : 2}
            borderRadius="small"
            backgroundColor="elevation-base"
            className={cn(
              styles.trigger,
              'box-border',
              'border-neutral-highlighted',
              size === 'small' && 'min-h-[28px]',
              size === 'medium' && 'min-h-[40px]',
              size === 'large' && 'min-h-[48px]',
              disabled && styles.disabled,
              className
            )}
          >
            <View direction="row" align="center" grow={true} className="min-w-0">
              {value.length > 0 ? (
                overflow ? (
                  overflowMode === 'expand' ? (
                    expanded ? (
                      // When expanded, show all badges with wrapping and "Show Less"
                      <View
                        direction="row"
                        align="center"
                        gap={1.5}
                        wrap={true}
                        attributes={{ style: { width: '100%' } }}
                      >
                        {value.map(val => {
                          const option = options.find(o => o.value === val)
                          return option ? (
                            <Badge
                              key={val}
                              color="neutral"
                              size={size}
                              onDismiss={() => removeSelection(val)}
                              dismissAriaLabel={`Remove ${option.label}`}
                              attributes={{ tabIndex: -1 }}
                            >
                              {option.label}
                            </Badge>
                          ) : null
                        })}
                        <Badge
                          color="neutral"
                          size={size}
                          variant="outline"
                          className="cursor-pointer"
                          onClick={e => {
                            e.stopPropagation()
                            setExpanded(false)
                          }}
                          attributes={{ tabIndex: -1 }}
                        >
                          Show Less
                        </Badge>
                      </View>
                    ) : (
                      // When collapsed, use OverflowList for responsive overflow detection
                      <OverflowList
                        gap={1.5}
                        size={size}
                        renderOverflow={count => (
                          <Badge
                            color="neutral"
                            size={size}
                            variant="outline"
                            className="cursor-pointer whitespace-nowrap"
                            onClick={e => {
                              e.stopPropagation()
                              setExpanded(true)
                            }}
                            attributes={{ tabIndex: -1 }}
                          >
                            +{count} more
                          </Badge>
                        )}
                      >
                        {value.map(val => {
                          const option = options.find(o => o.value === val)
                          return option ? (
                            <Badge
                              key={val}
                              color="neutral"
                              size={size}
                              onDismiss={() => removeSelection(val)}
                              dismissAriaLabel={`Remove ${option.label}`}
                              attributes={{ tabIndex: -1 }}
                            >
                              {option.label}
                            </Badge>
                          ) : null
                        })}
                      </OverflowList>
                    )
                  ) : (
                    // Popover mode: use OverflowList with default behavior
                    <OverflowList gap={1.5} size={size} onOverflowClick={onOverflowClick}>
                      {value.map(val => {
                        const option = options.find(o => o.value === val)
                        return option ? (
                          <Badge
                            key={val}
                            color="neutral"
                            size={size}
                            onDismiss={() => removeSelection(val)}
                            dismissAriaLabel={`Remove ${option.label}`}
                            attributes={{ tabIndex: -1 }}
                          >
                            {option.label}
                          </Badge>
                        ) : null
                      })}
                    </OverflowList>
                  )
                ) : (
                  // No overflow: show all badges
                  <View
                    direction="row"
                    align="center"
                    gap={1.5}
                    wrap={true}
                    attributes={{ style: { width: '100%' } }}
                  >
                    {value.map(val => {
                      const option = options.find(o => o.value === val)
                      return option ? (
                        <Badge
                          key={val}
                          color="neutral"
                          size={size}
                          onDismiss={() => removeSelection(val)}
                          dismissAriaLabel={`Remove ${option.label}`}
                          attributes={{ tabIndex: -1 }}
                        >
                          {option.label}
                        </Badge>
                      ) : null
                    })}
                  </View>
                )
              ) : (
                <View direction="row" align="center" gap={2}>
                  {startSlot && <View>{startSlot}</View>}
                  <View className="text-neutral-faded">{placeholder}</View>
                </View>
              )}
            </View>
            <View className="shrink-0">
              <ChevronsUpDown className="h-4 w-4 opacity-50" />
            </View>
          </View>
        </Actionable>

        {open && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <div
                ref={refs.setFloating}
                style={{
                  ...floatingStyles,
                  width:
                    dropdownWidth ||
                    (() => {
                      const triggerWidth =
                        (refs.reference.current as HTMLElement)?.offsetWidth || 0
                      // Only grow by 50% if trigger is smaller than 250px
                      return triggerWidth > 0 && triggerWidth < 250
                        ? `${triggerWidth * 1.5}px`
                        : `${triggerWidth}px`
                    })(),
                }}
                {...getFloatingProps()}
                className={cn(
                  'z-50 flex flex-col',
                  isPositionedAbove ? 'gap-0 flex-col-reverse' : 'gap-[8px]'
                )}
              >
                {/* Expanded trigger overlay */}
                <View
                  direction="row"
                  align="center"
                  gap={2}
                  border={true}
                  padding={size === 'small' ? 1 : 2}
                  borderRadius="small"
                  backgroundColor="elevation-base"
                  className={cn(
                    styles.trigger,
                    styles.floatingTrigger,
                    'box-border',
                    isPositionedAbove && styles.noTopRadius,
                    size === 'small' && 'min-h-[28px]',
                    size === 'medium' && 'min-h-[40px]',
                    size === 'large' && 'min-h-[48px]',
                    // Add raised shadow when floating input is wider than trigger
                    (() => {
                      const triggerWidth =
                        (refs.reference.current as HTMLElement)?.offsetWidth || 0
                      const isExpanded = triggerWidth > 0 && triggerWidth < 250
                      return isExpanded && 'shadow-md'
                    })()
                  )}
                >
                  <View direction="row" align="center" grow={true} className="min-w-0">
                    {value.length > 0 ? (
                      // Floating trigger always shows all badges with wrapping
                      <View
                        direction="row"
                        align="center"
                        gap={1.5}
                        wrap={true}
                        attributes={{ style: { width: '100%' } }}
                      >
                        {value.map(val => {
                          const option = options.find(o => o.value === val)
                          return option ? (
                            <Badge
                              key={val}
                              color="neutral"
                              size={size}
                              onDismiss={() => removeSelection(val)}
                              dismissAriaLabel={`Remove ${option.label}`}
                              attributes={{ tabIndex: -1 }}
                            >
                              {option.label}
                            </Badge>
                          ) : null
                        })}
                      </View>
                    ) : (
                      <View direction="row" align="center" gap={2}>
                        {startSlot && <View>{startSlot}</View>}
                        <View className="text-neutral-faded">{placeholder}</View>
                      </View>
                    )}
                  </View>
                  <View className="shrink-0">
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                  </View>
                </View>

                {/* Command section */}
                <Command
                  className={cn(
                    'bg-elevation-overlay border',
                    isPositionedAbove && styles.noBottomRadius,
                    isPositionedAbove
                      ? 'border-neutral-highlighted'
                      : 'border-neutral'
                  )}
                  loop
                  shouldFilter={false}
                >
                  <CommandInput
                    placeholder={searchPlaceholder}
                    size={size as any}
                    autoFocus
                  />
                  <CommandList>
                    <CommandEmpty>{emptyMessage}</CommandEmpty>
                    <CommandGroup>
                      {options.map(option => (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          onSelect={() => toggleSelection(option.value)}
                          size={size}
                        >
                          <span className="truncate">{option.label}</span>
                          {value.includes(option.value) && (
                            <Check
                              size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
                              className="ml-auto shrink-0 text-primary"
                            />
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}

        {name && <input type="hidden" name={name} value={value.join(',')} />}
      </>
    )
  }
)

ExpandableMultiSelect.displayName = 'ExpandableMultiSelect'
