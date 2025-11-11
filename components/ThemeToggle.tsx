'use client'

import { useTheme } from 'reshaped'
import { WeatherMoon24Regular, WeatherSunny24Regular } from '@fluentui/react-icons'
import { Button } from './Button'

export function ThemeToggle() {
  const { colorMode, invertColorMode } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={invertColorMode}
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {colorMode === 'light' ? <WeatherMoon24Regular /> : <WeatherSunny24Regular />}
    </Button>
  )
}
