'use client'

import { useState } from 'react'
import { Actionable } from '../components/Actionable'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Heart, Star, Settings, ChevronRight } from 'lucide-react'

export function ActionablePage() {
  const [clickCount, setClickCount] = useState(0)
  const [focusedItem, setFocusedItem] = useState<string | null>(null)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Actionable Utility</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Button Behavior</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Actionable renders as a button when onClick is provided
            </p>
            <View direction="row" gap={2}>
              <Actionable
                onClick={() => setClickCount(clickCount + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Click me
              </Actionable>
              <Actionable
                onClick={() => {}}
                onFocus={() => setFocusedItem('focus-button')}
                onBlur={() => setFocusedItem(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                Focus me
              </Actionable>
            </View>
            {clickCount > 0 && (
              <Badge color="primary">Clicked {clickCount} times</Badge>
            )}
            {focusedItem === 'focus-button' && (
              <Badge color="neutral">Button is focused</Badge>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Link Behavior</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Actionable renders as an anchor tag when href is provided
            </p>
            <View direction="row" gap={2} wrap>
              <Actionable
                href="#top"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Navigate to top
              </Actionable>
              <Actionable
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert('Link clicked but navigation prevented!')
                }}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Link with onClick
              </Actionable>
              <Actionable
                href="https://reshaped.so"
                attributes={{ target: '_blank', rel: 'noopener noreferrer' }}
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                External link
                <ChevronRight size={16} />
              </Actionable>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Element Type</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Use the &quot;as&quot; prop to render as a custom element
            </p>
            <Actionable
              as="div"
              onClick={() => alert('Div clicked!')}
              className="p-4 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              Click this div element
            </Actionable>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Interactive Cards</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Create clickable card components with Actionable
            </p>
            <View gap={2}>
              <Actionable
                onClick={() => alert('Card 1 clicked')}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer"
              >
                <View gap={2}>
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-yellow-500" />
                    <Text variant="title-3" className="font-semibold">Featured Item</Text>
                  </div>
                  <p className="text-sm opacity-70">
                    Click anywhere on this card to interact
                  </p>
                </View>
              </Actionable>

              <Actionable
                onClick={() => alert('Card 2 clicked')}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-red-400 transition-all cursor-pointer"
              >
                <View gap={2}>
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="text-red-500" />
                    <Text variant="title-3" className="font-semibold">Favorite Item</Text>
                  </div>
                  <p className="text-sm opacity-70">
                    This entire card is interactive
                  </p>
                </View>
              </Actionable>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Disabled State</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Disabled actionable elements ignore all events
            </p>
            <View direction="row" gap={2}>
              <Actionable
                onClick={() => alert('This should not appear')}
                disabled
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
              >
                Disabled Button
              </Actionable>
              <Actionable
                onClick={() => alert('Enabled!')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Enabled Button
              </Actionable>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Full Width</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Use fullWidth prop to make the element take full width
            </p>
            <Actionable
              onClick={() => alert('Full width button clicked')}
              fullWidth
              className="px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center"
            >
              Full Width Button
            </Actionable>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Attributes</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Pass custom HTML attributes via the attributes prop
            </p>
            <Actionable
              onClick={() => {}}
              attributes={{
                'aria-label': 'Settings button',
                'data-testid': 'settings-btn',
                title: 'Open settings',
              }}
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors inline-flex items-center justify-center"
            >
              <Settings size={20} />
            </Actionable>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Stop Propagation</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Use stopPropagation to prevent event bubbling when nesting
              actionables
            </p>
            <Actionable
              onClick={() => alert('Outer clicked')}
              className="p-6 bg-blue-100 rounded-lg cursor-pointer"
            >
              <View gap={2}>
                <p className="font-semibold">Outer Actionable</p>
                <Actionable
                  onClick={() => alert('Inner clicked')}
                  stopPropagation
                  className="px-4 py-2 bg-white border border-blue-300 rounded hover:bg-blue-50 transition-colors inline-block"
                >
                  Inner Actionable (stops propagation)
                </Actionable>
              </View>
            </Actionable>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>
            • Actionable is a low-level utility for creating interactive
            elements
          </p>
          <p>
            • Automatically renders as button (with onClick) or link (with href)
          </p>
          <p>
            • Use &quot;as&quot; prop to render as a custom HTML element (e.g.,
            div, span)
          </p>
          <p>
            • Handles keyboard navigation automatically (Space and Enter for
            buttons)
          </p>
          <p>• Shows focus ring only when navigating with keyboard</p>
          <p>
            • Use stopPropagation when nesting actionables to prevent event
            bubbling
          </p>
          <p>
            • Pass custom attributes via the attributes prop for accessibility
          </p>
          <p>• Supports disabled state for buttons (not for links)</p>
          <p>
            • Use fullWidth prop to make the element take full width of parent
          </p>
        </View>
      </View>
    </View>
  )
}

