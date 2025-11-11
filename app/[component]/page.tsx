import { ComponentPageClient } from './client'

export default async function ComponentPage({ params }: { params: Promise<{ component: string }> }) {
  const { component } = await params

  return <ComponentPageClient component={component} />
}
