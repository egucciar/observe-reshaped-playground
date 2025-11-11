'use client'

import { Construction } from '../components/Construction'

export interface PlaceholderPageProps {
  title?: string
  message?: string
}

export function PlaceholderPage({ title, message }: PlaceholderPageProps) {
  return <Construction title={title} message={message} />
}
