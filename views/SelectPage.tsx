'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Select } from '../components/Select'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Globe, MapPin, User, Palette, Settings } from 'lucide-react'

export function SelectPage() {
  const [country, setCountry] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [priority, setPriority] = useState('')

  return (
    <View padding={4} gap={4}>
      <h1>Select Component</h1>

      <View gap={3}>
        <h2>Basic Select</h2>
        <Card padding={4}>
          <View maxWidth="400px">
            <Select.Custom name="basic" placeholder="Choose an option...">
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
              <Select.Option value="option4">Option 4</Select.Option>
            </Select.Custom>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>With Label</h2>
        <Card padding={4}>
          <View maxWidth="400px">
            <Select.Custom
              name="labeled"
              placeholder="Select a country..."
              value={country}
              onChange={event => setCountry(event.value)}
            >
              <Select.Option value="us">United States</Select.Option>
              <Select.Option value="uk">United Kingdom</Select.Option>
              <Select.Option value="ca">Canada</Select.Option>
              <Select.Option value="au">Australia</Select.Option>
              <Select.Option value="de">Germany</Select.Option>
              <Select.Option value="fr">France</Select.Option>
              <Select.Option value="jp">Japan</Select.Option>
            </Select.Custom>
          </View>
          {country && (
            <View paddingTop={3}>
              <Badge color="primary">Selected: {country}</Badge>
            </View>
          )}
        </Card>
      </View>

      <View gap={3}>
        <h2>With Start Icon</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select.Custom
              name="location"
              placeholder="Select location..."
              startSlot={<MapPin size={16} />}
            >
              <Select.Option value="ny">New York</Select.Option>
              <Select.Option value="la">Los Angeles</Select.Option>
              <Select.Option value="chicago">Chicago</Select.Option>
              <Select.Option value="houston">Houston</Select.Option>
              <Select.Option value="phoenix">Phoenix</Select.Option>
            </Select.Custom>

            <Select.Custom
              name="language"
              placeholder="Select language..."
              startSlot={<Globe size={16} />}
            >
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="es">Spanish</Select.Option>
              <Select.Option value="fr">French</Select.Option>
              <Select.Option value="de">German</Select.Option>
              <Select.Option value="ja">Japanese</Select.Option>
            </Select.Custom>

            <Select.Custom
              name="user"
              placeholder="Select user..."
              startSlot={<User size={16} />}
            >
              <Select.Option value="alice">Alice Johnson</Select.Option>
              <Select.Option value="bob">Bob Smith</Select.Option>
              <Select.Option value="carol">Carol Davis</Select.Option>
              <Select.Option value="david">David Wilson</Select.Option>
            </Select.Custom>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Different Sizes</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <View gap={2}>
              <span className="text-sm font-semibold">Small</span>
              <Select.Custom name="size-small" placeholder="Small select..." size="small">
                <Select.Option value="xs">Extra Small</Select.Option>
                <Select.Option value="s">Small</Select.Option>
                <Select.Option value="m">Medium</Select.Option>
              </Select.Custom>
            </View>

            <View gap={2}>
              <span className="text-sm font-semibold">Medium (Default)</span>
              <Select.Custom name="size-medium" placeholder="Medium select...">
                <Select.Option value="xs">Extra Small</Select.Option>
                <Select.Option value="s">Small</Select.Option>
                <Select.Option value="m">Medium</Select.Option>
              </Select.Custom>
            </View>

            <View gap={2}>
              <span className="text-sm font-semibold">Large</span>
              <Select.Custom name="size-large" placeholder="Large select..." size="large">
                <Select.Option value="xs">Extra Small</Select.Option>
                <Select.Option value="s">Small</Select.Option>
                <Select.Option value="m">Medium</Select.Option>
              </Select.Custom>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Disabled State</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select.Custom
              name="disabled"
              placeholder="This select is disabled..."
              disabled
            >
              <Select.Option value="1">Option 1</Select.Option>
              <Select.Option value="2">Option 2</Select.Option>
            </Select.Custom>

            <Select.Custom name="disabled-value" value="selected" disabled>
              <Select.Option value="selected">Selected and Disabled</Select.Option>
              <Select.Option value="other">Other Option</Select.Option>
            </Select.Custom>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>With Grouped Options</h2>
        <Card padding={4}>
          <View maxWidth="400px">
            <Select.Custom
              name="grouped"
              placeholder="Select a color..."
              value={color}
              onChange={event => setColor(event.value)}
              startSlot={<Palette size={16} />}
            >
              <Select.Option value="red">Red</Select.Option>
              <Select.Option value="orange">Orange</Select.Option>
              <Select.Option value="yellow">Yellow</Select.Option>
              <Select.Option value="green">Green</Select.Option>
              <Select.Option value="blue">Blue</Select.Option>
              <Select.Option value="purple">Purple</Select.Option>
              <Select.Option value="pink">Pink</Select.Option>
            </Select.Custom>
          </View>
          {color && (
            <View paddingTop={3}>
              <Badge color="primary">Selected color: {color}</Badge>
            </View>
          )}
        </Card>
      </View>

      <View gap={3}>
        <h2>Priority Selector</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select.Custom
              name="priority"
              placeholder="Select priority..."
              value={priority}
              onChange={event => setPriority(event.value)}
              startSlot={<Settings size={16} />}
            >
              <Select.Option value="critical">🔴 Critical</Select.Option>
              <Select.Option value="high">🟠 High</Select.Option>
              <Select.Option value="medium">🟡 Medium</Select.Option>
              <Select.Option value="low">🟢 Low</Select.Option>
            </Select.Custom>

            {priority && (
              <View direction="row" gap={2} align="center">
                <span className="text-sm font-semibold">Current Priority:</span>
                <Badge
                  color={
                    priority === 'critical'
                      ? 'critical'
                      : priority === 'high'
                      ? 'warning'
                      : priority === 'medium'
                      ? 'primary'
                      : 'positive'
                  }
                >
                  {priority}
                </Badge>
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>T-Shirt Sizes</h2>
        <Card padding={4}>
          <View maxWidth="400px" gap={3}>
            <Select.Custom
              name="tshirt"
              placeholder="Select your size..."
              value={size}
              onChange={event => setSize(event.value)}
            >
              <Select.Option value="xs">XS - Extra Small</Select.Option>
              <Select.Option value="s">S - Small</Select.Option>
              <Select.Option value="m">M - Medium</Select.Option>
              <Select.Option value="l">L - Large</Select.Option>
              <Select.Option value="xl">XL - Extra Large</Select.Option>
              <Select.Option value="xxl">XXL - Double Extra Large</Select.Option>
            </Select.Custom>

            {size && (
              <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
                <span className="text-sm">
                  You selected: <strong>{size.toUpperCase()}</strong>
                </span>
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <h2>Usage Tips</h2>
        <View gap={2} className="text-sm opacity-80">
          <p>• Click to open the dropdown menu</p>
          <p>• Use arrow keys to navigate through options</p>
          <p>• Press Enter or Space to select the focused option</p>
          <p>• Press Escape to close the dropdown</p>
          <p>• Type to search for options (if searchable)</p>
        </View>
      </View>
    </View>
  )
}
