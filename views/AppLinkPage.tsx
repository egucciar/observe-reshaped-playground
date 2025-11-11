import { View } from '../components/View'
import { Card } from '../components/Card'
import { Text } from '../components/Text'
import { AppLink } from '../components/AppLink'
import { Divider } from '../components/Divider'

export function AppLinkPage() {
  return (
    <View padding={8} gap={6}>
      <View gap={2}>
        <Text variant="featured-2">AppLink</Text>
        <Text variant="body-2" color="neutral-faded">
          A custom component that wraps Reshaped components with Next.js Link for proper routing.
          Automatically detects active state based on the current pathname. Currently supports
          MenuItem with plans to expand to other components.
        </Text>
      </View>

      <Divider />

      <View gap={4}>
        <View gap={2}>
          <Text variant="featured-3">AppLink.MenuItem</Text>
          <Text variant="body-2" color="neutral-faded">
            Wraps MenuItem with Next.js Link for client-side navigation. Automatically highlights
            the active menu item by comparing the current pathname to the href prop. Following the
            Reshaped docs pattern for router integration.
          </Text>
        </View>

        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Basic Usage
              </Text>
              <View
                backgroundColor="neutral-faded"
                borderRadius="medium"
                padding={3}
                className="font-mono text-sm"
              >
                <pre className="overflow-x-auto">
                  {`import { AppLink } from '../components/AppLink'

<AppLink.MenuItem href="/overview">
  Overview
</AppLink.MenuItem>`}
                </pre>
              </View>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Auto-Detection
              </Text>
              <Text variant="body-2" color="neutral-faded">
                The component automatically detects if it's active by comparing href to the current
                pathname. No need to pass a selected prop!
              </Text>
              <View
                backgroundColor="neutral-faded"
                borderRadius="medium"
                padding={3}
                className="font-mono text-sm"
              >
                <pre className="overflow-x-auto">
                  {`import { AppLink } from '../components/AppLink'

// Active state is automatic!
<AppLink.MenuItem href="/overview">
  Overview
</AppLink.MenuItem>`}
                </pre>
              </View>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Manual Override (Optional)
              </Text>
              <Text variant="body-2" color="neutral-faded">
                You can still manually control the selected state if needed for edge cases:
              </Text>
              <View
                backgroundColor="neutral-faded"
                borderRadius="medium"
                padding={3}
                className="font-mono text-sm"
              >
                <pre className="overflow-x-auto">
                  {`import { AppLink } from '../components/AppLink'

// Force selected state
<AppLink.MenuItem href="/overview" selected={true}>
  Overview
</AppLink.MenuItem>`}
                </pre>
              </View>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Implementation
              </Text>
              <Text variant="body-2" color="neutral-faded">
                Following the Reshaped docs pattern with automatic active state detection:
              </Text>
              <View
                backgroundColor="neutral-faded"
                borderRadius="medium"
                padding={3}
                className="font-mono text-sm"
              >
                <pre className="overflow-x-auto">
                  {`'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuItem as ReshapedMenuItem } from 'reshaped'

function AppLinkMenuItem({ href, children, selected, ...props }) {
  const pathname = usePathname()

  // Auto-detect or use manual override
  const isSelected = selected !== undefined
    ? selected
    : pathname === href

  return (
    <Link href={href}>
      <ReshapedMenuItem selected={isSelected} {...props}>
        {children}
      </ReshapedMenuItem>
    </Link>
  )
}

export const AppLink = {
  MenuItem: AppLinkMenuItem,
}`}
                </pre>
              </View>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Live Example
              </Text>
              <View gap={1}>
                <AppLink.MenuItem href="/overview">Go to Overview</AppLink.MenuItem>
                <AppLink.MenuItem href="/playground">Go to Playground</AppLink.MenuItem>
                <AppLink.MenuItem href="/showcase">Go to Showcase</AppLink.MenuItem>
              </View>
            </View>
          </View>
        </Card>

        <Card padding={4}>
          <View gap={2}>
            <Text variant="body-2" weight="medium">
              Future Extensions
            </Text>
            <Text variant="body-2" color="neutral-faded">
              This pattern can be extended to support other Reshaped components that need routing:
            </Text>
            <View paddingStart={4}>
              <ul className="list-disc space-y-1">
                <li>
                  <Text variant="body-2">AppLink.Button - For button-style navigation</Text>
                </li>
                <li>
                  <Text variant="body-2">
                    AppLink.Breadcrumbs.Item - For breadcrumb navigation
                  </Text>
                </li>
                <li>
                  <Text variant="body-2">AppLink.Tab - For tab-based navigation</Text>
                </li>
                <li>
                  <Text variant="body-2">
                    AppLink.Card - For card-based navigation (clickable cards)
                  </Text>
                </li>
              </ul>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
