import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Divider } from '../components/Divider'

export function OverviewPage() {
  return (
    <View padding={6} gap={6} maxWidth="900px">
      <View gap={3}>
        <Text variant="title-1" className="text-4xl font-bold">Reshaped Component Playground</Text>
        <p className="text-xl text-gray-600">
          A comprehensive showcase of the Reshaped UI component library
        </p>
      </View>

      <Divider />

      <View gap={4}>
        <Text variant="title-2" className="text-2xl font-semibold">About This Playground</Text>
        <p className="text-gray-700 leading-relaxed">
          This interactive playground serves as a living documentation and exploration tool for
          the Reshaped UI component library. Built with Next.js 15 and React 19, it demonstrates
          the full capabilities of Reshaped's enterprise-grade component system.
        </p>
      </View>

      <View gap={4}>
        <Text variant="title-2" className="text-2xl font-semibold">What You'll Find Here</Text>
        <View gap={3}>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" className="font-semibold text-lg">Component Examples</Text>
              <p className="text-sm text-gray-600">
                Interactive examples of 40+ Reshaped components including buttons, forms, tables,
                modals, and more. Each component page showcases multiple variations, states, and
                real-world usage patterns.
              </p>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" className="font-semibold text-lg">Visual Exploration</Text>
              <p className="text-sm text-gray-600">
                See components in action with live examples demonstrating sizes, colors, variants,
                and different states. Toggle between light and dark themes to see how components
                adapt.
              </p>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" className="font-semibold text-lg">Pattern Library</Text>
              <p className="text-sm text-gray-600">
                Discover practical implementation patterns including form layouts, card compositions,
                navigation structures, and interactive controls that you can adapt for your projects.
              </p>
            </View>
          </Card>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2" className="text-2xl font-semibold">Technology Stack</Text>
        <View direction="row" gap={2} wrap>
          <Badge color="primary">Next.js 15.1.4</Badge>
          <Badge color="primary">React 19.1.0</Badge>
          <Badge color="primary">TypeScript 5.8.2</Badge>
          <Badge color="primary">Reshaped 3.8.8</Badge>
          <Badge color="neutral">Tailwind CSS 4.1.4</Badge>
          <Badge color="neutral">Lucide Icons</Badge>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2" className="text-2xl font-semibold">Key Features</Text>
        <View gap={2}>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-gray-700">Fully accessible components following ARIA best practices</p>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-gray-700">Dark mode support with seamless theme switching</p>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-gray-700">Responsive design patterns for mobile and desktop</p>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-gray-700">TypeScript support with full type safety</p>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-gray-700">Customizable theming system with extensive configuration</p>
          </View>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2" className="text-2xl font-semibold">Getting Started</Text>
        <p className="text-gray-700 leading-relaxed">
          Navigate through the component sections using the sidebar to explore different categories.
          Each component page includes multiple examples demonstrating various props, states, and
          usage patterns. Toggle the theme using the button in the top-right corner to see how
          components adapt to dark mode.
        </p>
      </View>

      <Divider />

      <View gap={2}>
        <p className="text-sm text-gray-500">
          Built with{' '}
          <a
            href="https://reshaped.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Reshaped
          </a>
          {' '}• A comprehensive React UI component library
        </p>
      </View>
    </View>
  )
}
