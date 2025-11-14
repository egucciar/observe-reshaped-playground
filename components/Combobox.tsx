'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Popover } from 'reshaped'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import { useFieldGroup } from './FieldGroup'

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps {
  name?: string
  value?: string
  placeholder?: string
  emptyMessage?: string
  searchPlaceholder?: string
  options: ComboboxOption[]
  onChange?: (event: { value: string }) => void
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  className?: string
  startSlot?: React.ReactNode
}

// Size mappings for button height
const sizeMap = {
  small: 'h-7 text-sm',
  medium: 'h-9 text-base',
  large: 'h-11 text-base',
} as const

const Combobox = ({
  name,
  value = '',
  placeholder = 'Select option...',
  emptyMessage = 'No option found.',
  searchPlaceholder = 'Search...',
  options,
  onChange,
  disabled = false,
  size,
  className,
  startSlot,
}: ComboboxProps) => {
    const [open, setOpen] = React.useState(false)
    const fieldGroupSize = useFieldGroup()
    const finalSize = fieldGroupSize?.size ?? size ?? 'small'

    const selectedOption = options.find(option => option.value === value)

    const handleSelect = (currentValue: string) => {
      const newValue = currentValue === value ? '' : currentValue
      onChange?.({ value: newValue })
      setOpen(false)
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
            {(triggerAttributes) => (
              <button
                type="button"
                role="combobox"
                aria-expanded={open}
                disabled={disabled}
                className={cn(
                  'flex w-full items-center justify-between rounded-medium border border-neutral-faded bg-elevation-base px-x3 py-x2 text-left shadow-raised transition-colors hover:bg-neutral-faded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                  sizeMap[finalSize],
                  !value && 'text-neutral-faded',
                  className
                )}
                {...triggerAttributes}
              >
                <span className="flex items-center gap-x2 truncate">
                  {startSlot && <span className="shrink-0">{startSlot}</span>}
                  <span className="truncate">
                    {selectedOption ? selectedOption.label : placeholder}
                  </span>
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </button>
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
                      disabled={option.disabled}
                      onSelect={handleSelect}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === option.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </Popover.Content>
        </Popover>
        {name && <input type="hidden" name={name} value={value} />}
      </>
    )
}

Combobox.displayName = 'Combobox'

export { Combobox }
