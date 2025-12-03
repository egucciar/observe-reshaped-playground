'use client'

import * as React from 'react'
import { useState } from 'react'
import { ChevronsUpDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Popover, View, Actionable } from 'reshaped'
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
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)

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
        <Popover
          active={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          position="bottom-start"
          width="trigger"
          elevation="overlay"
          padding={0}
        >
          <Popover.Trigger>
            {triggerAttributes => (
              <Actionable
                as="div"
                attributes={{
                  ...triggerAttributes,
                  role: 'combobox',
                  'aria-expanded': open,
                }}
              >
                <View
                  direction="row"
                  align="start"
                  gap={2}
                  padding={2}
                  borderRadius="medium"
                  backgroundColor="elevation-base"
                  className={cn(
                    'min-h-[40px] border border-neutral-faded shadow-raised transition-colors hover:bg-neutral-faded',
                    disabled && 'opacity-50 cursor-not-allowed',
                    className
                  )}
                  attributes={{ style: { width: '500px', minWidth: '500px' } }}
                >
                  <View direction="row" grow={true} className="min-w-0">
                    {value.length > 0 ? (
                      <OverflowList gap={1.5}>
                        {value.map(val => {
                          const option = options.find(o => o.value === val)
                          return option ? (
                            <Badge
                              key={val}
                              color="neutral"
                              onDismiss={() => removeSelection(val)}
                              dismissAriaLabel={`Remove ${option.label}`}
                              attributes={{ tabIndex: -1 }}
                            >
                              {option.label}
                            </Badge>
                          ) : null
                        })}
                      </OverflowList>
                    ) : (
                      <View direction="row" align="center" gap={2}>
                        {startSlot && <View>{startSlot}</View>}
                        <View className="text-neutral-faded">{placeholder}</View>
                      </View>
                    )}
                  </View>
                  <View className="shrink-0 mt-x1">
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                  </View>
                </View>
              </Actionable>
            )}
          </Popover.Trigger>
          <Popover.Content>
            <Command className="border-0 shadow-none bg-transparent">
              <CommandInput placeholder={searchPlaceholder} />
              <CommandList>
                <CommandEmpty>{emptyMessage}</CommandEmpty>
                <CommandGroup>
                  {options.map(option => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => toggleSelection(option.value)}
                    >
                      <span className="truncate">{option.label}</span>
                      {value.includes(option.value) && (
                        <Check size={16} className="ml-auto shrink-0" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </Popover.Content>
        </Popover>
        {name && <input type="hidden" name={name} value={value.join(',')} />}
      </>
    )
  }
)

ExpandableMultiSelect.displayName = 'ExpandableMultiSelect'
