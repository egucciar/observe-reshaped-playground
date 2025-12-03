'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { OverflowList } from '../components/OverflowList'
import { Popover } from 'reshaped'
import { Button } from '../components/Button'

export function OverflowListPage() {
  const sampleOptions = [
    { value: '1', label: 'Option One' },
    { value: '2', label: 'Option Two' },
    { value: '3', label: 'Option Three' },
    { value: '4', label: 'Option Four' },
    { value: '5', label: 'Option Five' },
    { value: '6', label: 'Option Six' },
    { value: '7', label: 'Option Seven' },
    { value: '8', label: 'Option Eight' },
  ]

  const [selected, setSelected] = useState(sampleOptions)
  const [containerWidth, setContainerWidth] = useState(600)

  const handleRemove = (option: typeof sampleOptions[0]) => {
    setSelected(selected.filter((o) => o.value !== option.value))
  }

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">OverflowList Component</Text>

      <View gap={2}>
        <Text variant="title-2">Overview</Text>
        <Text variant="body-2" color="neutral-faded">
          A flexible component for displaying lists of items that overflow horizontally with a "+N
          more" indicator. Automatically calculates and adjusts based on container width using
          ResizeObserver.
        </Text>
      </View>

      <View gap={3}>
        <Text variant="title-2">Features</Text>
        <View gap={2}>
          {[
            'Simple children-based API - Just pass children, no render props needed',
            'Works with any components - Badges, buttons, text, or custom components',
            'Automatic resize detection - Uses ResizeObserver for dynamic adaptation',
            'Customizable overflow - Optional renderOverflow prop for custom popover',
            'Single & multi-line modes - Control wrapping with maxLines',
            'Smart measurement - Accounts for actual item sizes including custom triggers',
            'Performance optimized - Children are memoized and IntersectionObserver ensures calculations only run when visible',
          ].map((feature, idx) => (
            <View key={idx} direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <Text variant="body-2" color="neutral-faded">
                {feature}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Basic Example */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">Basic Usage</Text>
        <Text variant="body-3" color="neutral-faded">
          Adjust the width using the slider below to see overflow behavior
        </Text>

        <View gap={2}>
          <View direction="row" gap={3} align="center">
            <Text variant="body-3">Width: {containerWidth}px</Text>
            <input
              type="range"
              min="200"
              max="800"
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
              style={{ flex: 1 }}
            />
          </View>

          <Card padding={4} attributes={{ style: { width: `${containerWidth}px` } }}>
            <OverflowList>
              {sampleOptions.map((option) => (
                <Badge key={option.value} color="neutral" size="small">
                  {option.label}
                </Badge>
              ))}
            </OverflowList>
          </Card>
        </View>
      </View>

      {/* Dismissible Badges */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">With Dismissible Badges</Text>
        <Text variant="body-3" color="neutral-faded">
          Click the × on badges to remove them
        </Text>

        <View gap={2}>
          <Button
            variant="ghost"
            size="small"
            onClick={() => setSelected(sampleOptions)}
            attributes={{ style: { alignSelf: 'flex-start' } }}
          >
            Reset
          </Button>

          <Card padding={4} attributes={{ style: { width: `${containerWidth}px` } }}>
            <OverflowList>
              {selected.map((option) => (
                <Badge
                  key={option.value}
                  color="neutral"
                  size="small"
                  onDismiss={() => handleRemove(option)}
                  dismissAriaLabel={`Remove ${option.label}`}
                >
                  {option.label}
                </Badge>
              ))}
            </OverflowList>
          </Card>
        </View>
      </View>

      {/* Custom Trigger */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">Custom Overflow Trigger</Text>
        <Text variant="body-3" color="neutral-faded">
          Override the default "+N more" badge appearance
        </Text>

        <Card padding={4} attributes={{ style: { width: `${containerWidth}px` } }}>
          <OverflowList
            renderOverflow={(count, hiddenItems) => (
              <Popover position="top">
                <Popover.Trigger>
                  {(attributes) => (
                    <button {...attributes} type="button">
                      <Badge color="critical" size="small">
                        {count} hidden
                      </Badge>
                    </button>
                  )}
                </Popover.Trigger>
                <Popover.Content>
                  <View gap={1} padding={2}>
                    <Text variant="body-3" color="neutral-faded">
                      Hidden items:
                    </Text>
                    <View direction="row" gap={1} wrap={true}>
                      {hiddenItems}
                    </View>
                  </View>
                </Popover.Content>
              </Popover>
            )}
          >
            {sampleOptions.map((option) => (
              <Badge key={option.value} color="primary" size="small">
                {option.label}
              </Badge>
            ))}
          </OverflowList>
        </Card>
      </View>

      {/* Custom Popover Content */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">Custom Popover Content</Text>
        <Text variant="body-3" color="neutral-faded">
          Customize what appears in the overflow popover
        </Text>

        <Card padding={4} attributes={{ style: { width: `${containerWidth}px` } }}>
          <OverflowList
            renderOverflow={(count, hiddenItems) => (
              <Popover position="top">
                <Popover.Trigger>
                  {(attributes) => (
                    <button
                      {...attributes}
                      type="button"
                      className="cursor-pointer inline-block"
                    >
                      <Badge size="small" className="opacity-70 whitespace-nowrap">
                        +{count} more
                      </Badge>
                    </button>
                  )}
                </Popover.Trigger>
                <Popover.Content>
                  <View gap={2} padding={2}>
                    <Text variant="body-3" weight="bold">
                      All hidden options:
                    </Text>
                    <View gap={1}>
                      {hiddenItems.map((item, idx) => (
                        <View
                          key={item.key ?? idx}
                          padding={1}
                          attributes={{
                            style: {
                              backgroundColor: idx % 2 === 0 ? '#f9f9f9' : 'transparent',
                            },
                          }}
                        >
                          {item}
                        </View>
                      ))}
                    </View>
                  </View>
                </Popover.Content>
              </Popover>
            )}
          >
            {sampleOptions.map((option) => (
              <Badge key={option.value} color="positive" size="small">
                {option.label}
              </Badge>
            ))}
          </OverflowList>
        </Card>
      </View>

      {/* Multi-line Mode */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">Multi-line Wrapping</Text>
        <Text variant="body-3" color="neutral-faded">
          Set maxLines to allow wrapping before overflow
        </Text>

        <Card padding={4} attributes={{ style: { width: `${containerWidth}px` } }}>
          <OverflowList maxLines={2}>
            {sampleOptions.map((option) => (
              <Badge key={option.value} color="neutral" size="small">
                {option.label}
              </Badge>
            ))}
          </OverflowList>
        </Card>
      </View>

      {/* With Text */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">With Plain Text</Text>
        <Text variant="body-3" color="neutral-faded">
          Works with any React children, not just badges
        </Text>

        <Card padding={4} attributes={{ style: { width: `${containerWidth}px` } }}>
          <OverflowList>
            {['JavaScript', 'React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Go'].map(
              (tag) => (
                <Text
                  key={tag}
                  variant="body-3"
                  weight="bold"
                  color="primary"
                  attributes={{
                    style: {
                      padding: '4px 8px',
                      backgroundColor: '#e3f2fd',
                      borderRadius: '4px',
                    },
                  }}
                >
                  #{tag}
                </Text>
              )
            )}
          </OverflowList>
        </Card>
      </View>

      {/* Usage Notes */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">Usage Notes</Text>
        <View gap={2}>
          <View direction="row" gap={2} align="start">
            <Text variant="body-2">•</Text>
            <View>
              <Text variant="body-2" color="neutral-faded">
                <strong>Always provide key props</strong> on all children for proper React
                reconciliation
              </Text>
            </View>
          </View>
          <View direction="row" gap={2} align="start">
            <Text variant="body-2">•</Text>
            <View>
              <Text variant="body-2" color="neutral-faded">
                <strong>Performance:</strong> Children are memoized and calculations only run when
                visible (IntersectionObserver)
              </Text>
            </View>
          </View>
          <View direction="row" gap={2} align="start">
            <Text variant="body-2">•</Text>
            <View>
              <Text variant="body-2" color="neutral-faded">
                <strong>Responsive:</strong> Uses ResizeObserver to automatically recalculate on
                container size changes
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Code Example */}
      <View gap={3} paddingTop={4}>
        <Text variant="title-2">Code Example</Text>
        <Card padding={3} attributes={{ style: { backgroundColor: '#f5f5f5' } }}>
          <pre style={{ margin: 0, fontSize: '0.875rem', overflow: 'auto' }}>
            {`<OverflowList>
  {items.map(item => (
    <Badge key={item.id}>{item.label}</Badge>
  ))}
</OverflowList>`}
          </pre>
        </Card>
      </View>
    </View>
  )
}
