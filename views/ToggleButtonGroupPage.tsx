'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { ToggleButton } from '../components/ToggleButton'
import { ToggleButtonGroup } from '../components/ToggleButtonGroup'
import { Card } from '../components/Card'

export function ToggleButtonGroupPage() {
  const [singleValue, setSingleValue] = useState(['center'])
  const [multipleValue, setMultipleValue] = useState(['bold', 'italic'])
  const [viewMode, setViewMode] = useState(['grid'])

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">ToggleButtonGroup Component</Text>
      <p className="text-gray-600">Managed group of toggle buttons with selection state</p>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Single Selection (Default)</Text>
        <ToggleButtonGroup defaultValue={['option1']}>
          <ToggleButton value="option1">Option 1</ToggleButton>
          <ToggleButton value="option2">Option 2</ToggleButton>
          <ToggleButton value="option3">Option 3</ToggleButton>
        </ToggleButtonGroup>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Multiple Selection</Text>
        <ToggleButtonGroup selectionMode="multiple" defaultValue={['option1', 'option3']}>
          <ToggleButton value="option1">Option 1</ToggleButton>
          <ToggleButton value="option2">Option 2</ToggleButton>
          <ToggleButton value="option3">Option 3</ToggleButton>
          <ToggleButton value="option4">Option 4</ToggleButton>
        </ToggleButtonGroup>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Controlled Single Selection</Text>
        <ToggleButtonGroup
          value={singleValue}
          onChange={(e) => setSingleValue(e.value)}
          selectedColor="primary"
        >
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>
        <p className="text-sm text-gray-600">
          Selected: {singleValue.length > 0 ? singleValue[0] : 'none'}
        </p>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Controlled Multiple Selection</Text>
        <ToggleButtonGroup
          selectionMode="multiple"
          value={multipleValue}
          onChange={(e) => setMultipleValue(e.value)}
          selectedColor="primary"
        >
          <ToggleButton value="bold">Bold</ToggleButton>
          <ToggleButton value="italic">Italic</ToggleButton>
          <ToggleButton value="underline">Underline</ToggleButton>
          <ToggleButton value="strikethrough">Strikethrough</ToggleButton>
        </ToggleButtonGroup>
        <p className="text-sm text-gray-600">
          Selected: {multipleValue.length > 0 ? multipleValue.join(', ') : 'none'}
        </p>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Text Alignment</Text>
        <ToggleButtonGroup defaultValue={['left']}>
          <ToggleButton
            value="left"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="15" x2="3" y1="12" y2="12" />
                <line x1="17" x2="3" y1="18" y2="18" />
              </svg>
            }
          >
            Left
          </ToggleButton>
          <ToggleButton
            value="center"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="17" x2="7" y1="12" y2="12" />
                <line x1="19" x2="5" y1="18" y2="18" />
              </svg>
            }
          >
            Center
          </ToggleButton>
          <ToggleButton
            value="right"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="9" y1="12" y2="12" />
                <line x1="21" x2="7" y1="18" y2="18" />
              </svg>
            }
          >
            Right
          </ToggleButton>
          <ToggleButton
            value="justify"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="3" y1="12" y2="12" />
                <line x1="21" x2="3" y1="18" y2="18" />
              </svg>
            }
          >
            Justify
          </ToggleButton>
        </ToggleButtonGroup>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Icon Only (with aria-label)</Text>
        <ToggleButtonGroup defaultValue={['grid']} selectedColor="primary">
          <ToggleButton
            value="list"
            attributes={{ 'aria-label': 'List view' }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
            }
          />
          <ToggleButton
            value="grid"
            attributes={{ 'aria-label': 'Grid view' }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            }
          />
          <ToggleButton
            value="table"
            attributes={{ 'aria-label': 'Table view' }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="3" x2="21" y1="15" y2="15" />
                <line x1="9" x2="9" y1="9" y2="21" />
                <line x1="15" x2="15" y1="9" y2="21" />
              </svg>
            }
          />
        </ToggleButtonGroup>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Sizes</Text>
        <View gap={2}>
          <ToggleButtonGroup defaultValue={['option2']} size="small">
            <ToggleButton value="option1">Small 1</ToggleButton>
            <ToggleButton value="option2">Small 2</ToggleButton>
            <ToggleButton value="option3">Small 3</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup defaultValue={['option2']} size="medium">
            <ToggleButton value="option1">Medium 1</ToggleButton>
            <ToggleButton value="option2">Medium 2</ToggleButton>
            <ToggleButton value="option3">Medium 3</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup defaultValue={['option2']} size="large">
            <ToggleButton value="option1">Large 1</ToggleButton>
            <ToggleButton value="option2">Large 2</ToggleButton>
            <ToggleButton value="option3">Large 3</ToggleButton>
          </ToggleButtonGroup>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Selected Colors</Text>
        <View gap={2}>
          <ToggleButtonGroup defaultValue={['option2']} selectedColor="primary">
            <ToggleButton value="option1">Option 1</ToggleButton>
            <ToggleButton value="option2">Primary</ToggleButton>
            <ToggleButton value="option3">Option 3</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup defaultValue={['option2']} selectedColor="positive">
            <ToggleButton value="option1">Option 1</ToggleButton>
            <ToggleButton value="option2">Positive</ToggleButton>
            <ToggleButton value="option3">Option 3</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup defaultValue={['option2']} selectedColor="critical">
            <ToggleButton value="option1">Option 1</ToggleButton>
            <ToggleButton value="option2">Critical</ToggleButton>
            <ToggleButton value="option3">Option 3</ToggleButton>
          </ToggleButtonGroup>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">View Mode Selector</Text>
        <Card padding={4}>
          <View gap={3}>
            <View direction="row" justify="space-between" align="center">
              <Text variant="title-3" className="font-semibold">Display Options</Text>
              <ToggleButtonGroup
                value={viewMode}
                onChange={(e) => setViewMode(e.value)}
                selectedColor="primary"
                size="small"
              >
                <ToggleButton
                  value="list"
                  attributes={{ 'aria-label': 'List view' }}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" x2="21" y1="6" y2="6" />
                      <line x1="8" x2="21" y1="12" y2="12" />
                      <line x1="8" x2="21" y1="18" y2="18" />
                      <line x1="3" x2="3.01" y1="6" y2="6" />
                      <line x1="3" x2="3.01" y1="12" y2="12" />
                      <line x1="3" x2="3.01" y1="18" y2="18" />
                    </svg>
                  }
                />
                <ToggleButton
                  value="grid"
                  attributes={{ 'aria-label': 'Grid view' }}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                  }
                />
              </ToggleButtonGroup>
            </View>
            <p className="text-sm text-gray-600">
              Current view: <strong>{viewMode[0] || 'none'}</strong>
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Filter Example (Multiple Selection)</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="font-semibold">Filter by Status</Text>
            <ToggleButtonGroup
              selectionMode="multiple"
              defaultValue={['active', 'pending']}
              selectedColor="primary"
            >
              <ToggleButton value="active">Active</ToggleButton>
              <ToggleButton value="pending">Pending</ToggleButton>
              <ToggleButton value="completed">Completed</ToggleButton>
              <ToggleButton value="cancelled">Cancelled</ToggleButton>
            </ToggleButtonGroup>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Time Range Selector</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="font-semibold">Select Time Range</Text>
            <ToggleButtonGroup defaultValue={['7d']} selectedColor="primary">
              <ToggleButton value="24h">24h</ToggleButton>
              <ToggleButton value="7d">7d</ToggleButton>
              <ToggleButton value="30d">30d</ToggleButton>
              <ToggleButton value="90d">90d</ToggleButton>
              <ToggleButton value="1y">1y</ToggleButton>
              <ToggleButton value="all">All time</ToggleButton>
            </ToggleButtonGroup>
          </View>
        </Card>
      </View>
    </View>
  )
}
