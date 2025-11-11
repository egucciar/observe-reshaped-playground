'use client'

import { View } from '../components/View'
import { Text } from '../components/Text'
import { Construction } from '../components/Construction'
import { Card } from '../components/Card'
import { Divider } from '../components/Divider'

export function ConstructionPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Construction Component</Text>
      <p className="text-gray-600">A meta component for displaying work-in-progress states</p>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Default Construction</Text>
        <Construction />
      </View>

      <Divider />

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Title and Message</Text>
        <Construction
          title="New Feature Coming Soon"
          message="We're working hard to bring you an amazing new feature. Stay tuned for updates!"
        />
      </View>

      <Divider />

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">In Card Context</Text>
        <Card>
          <Construction
            title="Dashboard Analytics"
            message="Advanced analytics and reporting features are currently in development."
          />
        </Card>
      </View>

      <Divider />

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Example</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="font-semibold">When to use Construction</Text>
            <View gap={2}>
              <View direction="row" gap={2} align="center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-700">Features that are actively being developed</p>
              </View>
              <View direction="row" gap={2} align="center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-700">Pages or sections temporarily unavailable</p>
              </View>
              <View direction="row" gap={2} align="center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-700">Placeholder content during prototyping</p>
              </View>
              <View direction="row" gap={2} align="center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-700">Beta features not yet ready for production</p>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <Divider />

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Props</Text>
        <Card padding={4}>
          <View gap={3}>
            <View>
              <p className="font-mono text-sm font-semibold">title?: string</p>
              <p className="text-sm text-gray-600">
                Custom title text. Default: "Under Construction"
              </p>
            </View>
            <Divider />
            <View>
              <p className="font-mono text-sm font-semibold">message?: string</p>
              <p className="text-sm text-gray-600">
                Custom message text. Default: "This component is currently being built. Check back soon!"
              </p>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
