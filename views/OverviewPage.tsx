import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Divider } from '../components/Divider'
import { Link } from '../components/Link'

export function OverviewPage() {
  return (
    <View padding={6} gap={6} maxWidth="900px">
      <View gap={3}>
        <Text variant="title-1">Reshaped Component Playground</Text>
        <Text variant="featured-2" color="neutral-faded">
          A comprehensive showcase of the Reshaped UI component library
        </Text>
      </View>

      <Divider />

      <View gap={4}>
        <Text variant="title-2">About This Playground</Text>
        <Text variant="body-1">
          This interactive playground serves as a living documentation and exploration tool for
          the Reshaped UI component library. Built with Next.js 15 and React 19, it demonstrates
          the full capabilities of Reshaped's enterprise-grade component system.
        </Text>
      </View>

      <View gap={4}>
        <Text variant="title-2">What You'll Find Here</Text>
        <View gap={3}>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" weight="medium">Component Examples</Text>
              <Text variant="body-2" color="neutral-faded">
                Interactive examples of 40+ Reshaped components including buttons, forms, tables,
                modals, and more. Each component page showcases multiple variations, states, and
                real-world usage patterns.
              </Text>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" weight="medium">Visual Exploration</Text>
              <Text variant="body-2" color="neutral-faded">
                See components in action with live examples demonstrating sizes, colors, variants,
                and different states. Toggle between light and dark themes to see how components
                adapt.
              </Text>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" weight="medium">Pattern Library</Text>
              <Text variant="body-2" color="neutral-faded">
                Discover practical implementation patterns including form layouts, card compositions,
                navigation structures, and interactive controls that you can adapt for your projects.
              </Text>
            </View>
          </Card>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2">Technology Stack</Text>
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
        <Text variant="title-2">Key Features</Text>
        <View gap={2}>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <Text variant="body-1">Fully accessible components following ARIA best practices</Text>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <Text variant="body-1">Dark mode support with seamless theme switching</Text>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <Text variant="body-1">Responsive design patterns for mobile and desktop</Text>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <Text variant="body-1">TypeScript support with full type safety</Text>
          </View>
          <View direction="row" gap={2} align="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <Text variant="body-1">Customizable theming system with extensive configuration</Text>
          </View>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2">Getting Started</Text>
        <Text variant="body-1">
          Navigate through the component sections using the sidebar to explore different categories.
          Each component page includes multiple examples demonstrating various props, states, and
          usage patterns. Toggle the theme using the button in the top-right corner to see how
          components adapt to dark mode.
        </Text>
      </View>

      <Divider />

      <View gap={2}>
        <Text variant="body-2" color="neutral-faded">
          Built with{' '}
          <Link
            href="https://reshaped.so"
            attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
          >
            Reshaped
          </Link>
          {' '}• A comprehensive React UI component library
        </Text>
      </View>
    </View>
  )
}
