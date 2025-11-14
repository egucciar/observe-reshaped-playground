'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { classNames } from 'reshaped'
import { Autocomplete } from './Autocomplete'
import type { AutocompleteProps } from './Autocomplete'

export interface SelectOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
  isCustom?: boolean
}

// Compound component interfaces
export interface SearchableSelectOptionProps {
  value: string
  disabled?: boolean
  children: React.ReactNode
}

// Main SearchableSelect props - supports compound components
export interface SearchableSelectProps
  extends Omit<
    AutocompleteProps,
    'options' | 'onChange' | 'value' | 'defaultValue' | 'children' | 'onItemSelect'
  > {
  /**
   * Custom render function for custom values
   */
  renderCustomValue?: (option: SelectOption, isSelected: boolean) => React.ReactNode
  /**
   * Whether to show arrow icon
   * @default true
   */
  includeArrow?: boolean
  /**
   * Enable typeahead/search functionality
   * @default true
   */
  showSearch?: boolean
  /**
   * Allow selecting a custom value via free typing; implicitly enables search
   * @default false
   */
  allowCustomValue?: boolean
  /**
   * Children (SearchableSelect.Option components)
   */
  children?: React.ReactNode
  /**
   * Callback for when the selected value changes
   */
  onChange?: (args: { name: string; value: string; isCustom: boolean }) => void
  /**
   * Selected value
   */
  value?: string
  /**
   * Default selected value (uncontrolled)
   */
  defaultValue?: string
}

// Helper function to convert React node to string for input display
const getDisplayText = (label: React.ReactNode): string => {
  if (typeof label === 'string') {
    return label
  }
  if (typeof label === 'number') {
    return String(label)
  }
  if (React.isValidElement(label) && typeof label.props.children === 'string') {
    return label.props.children
  }
  // For complex React nodes, extract text content
  return String(label || '')
}

// Helper function to extract options from children
const extractOptionsFromChildren = (children: React.ReactNode): SelectOption[] => {
  const options: SelectOption[] = []

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === SearchableSelectOption) {
        options.push({
          value: child.props.value,
          label: child.props.children, // Preserve React nodes as-is
          disabled: child.props.disabled,
        })
      }
    }
  })

  return options
}

const SearchableSelectBase = (props: SearchableSelectProps) => {
  const {
    children,
    renderCustomValue,
    size = 'small',
    includeArrow = true,
    showSearch = true,
    allowCustomValue = false,
    value,
    defaultValue,
    onChange,
    placeholder: placeholderProp,
    name = '',
    ...autocompleteProps
  } = props

  const initValue = value ?? defaultValue ?? ''

  if (Array.isArray(initValue)) {
    throw new Error('Multiple select is not supported yet')
  }

  const [selectedValue, setSelectedValue] = useState<string>(initValue)
  const [inputValue, setInputValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Extract options from children
  const allOptions = useMemo(() => {
    return children ? extractOptionsFromChildren(children) : []
  }, [children])

  const isSearchEnabled = showSearch || allowCustomValue

  // Filter options based on search input when search is enabled; append a custom option when allowed
  const options = useMemo(() => {
    const searchTerm = inputValue?.trim()?.toLowerCase()
    let hasExactMatchWithSearchTerm = false

    let filtered =
      !isSearchEnabled || !searchTerm
        ? allOptions
        : allOptions.filter(option => {
            const labelText = getDisplayText(option.label).toLowerCase()
            const valueText = String(option.value || '').toLowerCase()

            if (allowCustomValue) {
              // Check if custom value matches any existing option
              hasExactMatchWithSearchTerm ||= labelText === searchTerm || valueText === searchTerm
            }

            return labelText.includes(searchTerm) || valueText.includes(searchTerm)
          })

    // Append custom value option when there is a search term, or if there is no search term but the current selected value is a custom value
    if (allowCustomValue && !hasExactMatchWithSearchTerm) {
      let customValueOption = null

      if (searchTerm) {
        // if there is a search term, add the custom option for the search term
        customValueOption = {
          value: inputValue,
          label: inputValue,
          disabled: false,
          isCustom: true,
        }
      } else if (selectedValue) {
        // if there is no search term, but the current select value is a custom value, also add the custom option
        const isSelectedValueCustom = !allOptions.find(opt => opt.value === selectedValue)
        if (isSelectedValueCustom) {
          customValueOption = {
            value: selectedValue,
            label: selectedValue,
            disabled: false,
            isCustom: true,
          }
        }
      }

      if (customValueOption) {
        filtered = [customValueOption, ...filtered]
      }
    }

    return filtered
  }, [allOptions, isSearchEnabled, inputValue, allowCustomValue, selectedValue])

  // Update selected value when controlled value changes
  useEffect(() => {
    if (value !== undefined && !Array.isArray(value)) {
      setSelectedValue(value)
    }
  }, [value])

  // Update input display value based on selection
  useEffect(() => {
    const selectedOption = allOptions.find(opt => opt.value === selectedValue)
    if (selectedOption) {
      setInputValue(getDisplayText(selectedOption.label))
    } else if (allowCustomValue) {
      if (selectedValue) {
        setInputValue(selectedValue)
      } else {
        setInputValue('')
      }
    } else if (!selectedValue) {
      setInputValue('')
    }
  }, [selectedValue, allOptions, allowCustomValue])

  const handleChange = (_args: { value: string }) => {
    setInputValue(_args.value)
  }

  const handleItemSelect = (args: { value: string }) => {
    const selectedOption = options.find(opt => opt.value === args.value)
    if (selectedOption && !selectedOption.disabled) {
      setSelectedValue(selectedOption.value)
      if (selectedOption.isCustom) {
        setInputValue(selectedOption.value)
      } else {
        setInputValue(getDisplayText(selectedOption.label))
      }
      onChange?.({
        name: name,
        value: selectedOption.value,
        isCustom: selectedOption.isCustom ?? false,
      })
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
    inputRef.current?.focus()
    if (isSearchEnabled && !isOpen) {
      setInputValue('')
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    // Always restore selected value display on close (both search and select modes)
    const selectedOption = options.find(opt => opt.value === selectedValue)
    if (selectedOption) {
      if (allowCustomValue && selectedOption.isCustom) {
        setInputValue(selectedValue)
      } else {
        setInputValue(getDisplayText(selectedOption.label))
      }
    } else if (allowCustomValue && selectedValue) {
      // If currently selected is a custom value but not present in options (e.g., when search not applied)
      setInputValue(selectedValue)
    }
  }

  const selectedOption = options.find(opt => opt.value === selectedValue)
  const placeholder = isSearchEnabled && selectedOption ? '' : placeholderProp

  return (
    <Autocomplete
      {...autocompleteProps}
      name={name}
      size={size}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
      onItemSelect={handleItemSelect}
      onOpen={handleOpen}
      onClose={handleClose}
      includeArrow={includeArrow}
      inputAttributes={{
        ref: inputRef,
        readOnly: !isSearchEnabled, // Make input read-only when search is disabled
      }}
    >
      {options.length > 0 ? (
        options.map(option => {
          const isSelected = option.value === selectedValue
          const content =
            option.isCustom && renderCustomValue
              ? renderCustomValue(option, isSelected)
              : option.label

          return (
            <Autocomplete.Item key={option.value} value={option.value} disabled={option.disabled}>
              {content}
            </Autocomplete.Item>
          )
        })
      ) : isSearchEnabled && inputValue.trim() ? (
        <Autocomplete.Item value="" disabled>
          Not found
        </Autocomplete.Item>
      ) : null}
    </Autocomplete>
  )
}

// Compound component
const SearchableSelectOption: React.FC<SearchableSelectOptionProps> = () => {
  // This is a placeholder component, actual rendering is handled by the parent
  return null
}

// Main SearchableSelect component with compound components attached
const SearchableSelectWithCompounds = SearchableSelectBase as typeof SearchableSelectBase & {
  Option: typeof SearchableSelectOption
}

SearchableSelectWithCompounds.Option = SearchableSelectOption

export { SearchableSelectWithCompounds as SearchableSelect }
