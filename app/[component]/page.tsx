'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import { componentMap } from '../componentMap'

export default function ComponentPage({ params }: { params: Promise<{ component: string }> }) {
  const { component } = use(params)
  const PageComponent = componentMap[component]

  if (!PageComponent) {
    notFound()
  }

  return <PageComponent />
}
