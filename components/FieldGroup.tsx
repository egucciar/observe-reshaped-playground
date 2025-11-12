'use client'

import React, { createContext, useContext } from 'react'
import { View } from 'reshaped'
import type { ViewProps } from 'reshaped'
import { Text } from './Text'
import styles from './FieldGroup.module.css'

// Context to indicate when components are inside a FieldGroup
export const FieldGroupContext = createContext<{
  size: 'small' | 'medium' | 'large'
} | null>(null)

// Hook to consume the FieldGroup context
export const useFieldGroup = () => useContext(FieldGroupContext)

export interface FieldGroupProps {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export interface FieldGroupLabelProps {
  children: React.ReactNode
}

const FieldGroup = ({ children, size = 'small' }: FieldGroupProps) => {
  const contextValue = React.useMemo(() => ({ size }), [size])

  return (
    <FieldGroupContext.Provider value={contextValue}>
      <View className={styles.fieldGroup} direction="row">
        {children}
      </View>
    </FieldGroupContext.Provider>
  )
}

// FieldGroup.Label component that matches form component sizes
const FieldGroupLabel: React.FC<FieldGroupLabelProps> = ({ children }) => {
  const fieldGroup = useFieldGroup()
  const size = fieldGroup?.size ?? 'small'

  const sizeMap: Record<'small' | 'medium' | 'large', ViewProps['height']> = {
    small: 28 / 4,
    medium: 36 / 4,
    large: 44 / 4,
  }

  return (
    <View
      align="center"
      paddingInline={2}
      justify="center"
      height={sizeMap[size]}
      backgroundColor="neutral-faded"
      borderColor="neutral"
      borderRadius={size === 'large' ? 'medium' : 'small'}
    >
      <Text color="neutral" variant="body-3">
        {children}
      </Text>
    </View>
  )
}

// Attach subcomponents
FieldGroup.Label = FieldGroupLabel

export { FieldGroup }
