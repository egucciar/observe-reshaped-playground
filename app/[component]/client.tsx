'use client'

import { notFound } from 'next/navigation'
import { componentMap } from '../componentMap'

interface ComponentPageClientProps {
  component: string
}

export function ComponentPageClient({ component }: ComponentPageClientProps) {
  const PageComponent = componentMap[component]

  if (!PageComponent) {
    notFound()
  }

  return <PageComponent />
}
