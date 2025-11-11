'use client'

// Import Reshaped theme CSS in a client component (Reshaped best practice)
import 'reshaped/themes/reshaped/theme.css'

import { Reshaped } from 'reshaped'

export function Providers({ children }: { children: React.ReactNode }) {
  return <Reshaped theme="custom">{children}</Reshaped>
}
