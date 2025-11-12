'use client'

import { View } from '../components/View'
import { Text } from '../components/Text'
import { FieldGroup } from '../components/FieldGroup'
import { TextField } from '../components/TextField'
import { NumberField } from '../components/NumberField'
import { Select } from '../components/Select'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

export function FieldGroupPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">FieldGroup Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Overview</Text>
          <Text variant="body-2" color="neutral-faded">
            FieldGroup demonstrates how to combine multiple form components into cohesive
            grouped interfaces, similar to other design systems and component libraries.
            The FieldGroup component joins separate form components by removing
            border-radius where they touch, creating seamless compound inputs.
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">
            Key Features
          </Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Joins multiple form components into a single visual unit
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Removes border-radius where components touch each other
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Maintains proper focus states and accessibility with z-index management
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Uses React Context to automatically size child components
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Supports TextField, Select, Button, NumberField, and custom labels
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View gap={6} paddingTop={4} maxWidth="600px">
        <Card padding={4}>
          <View gap={4}>
            <Text variant="title-3">Basic Field Groups</Text>

            {/* Example 1: Label + Select (Resolution + Auto) */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Time Resolution
              </Text>
              <FieldGroup>
                <FieldGroup.Label>Resolution</FieldGroup.Label>
                <Select name="timeResolution" defaultValue="auto">
                  <Select.Option value="auto">Auto</Select.Option>
                  <Select.Option value="second">second</Select.Option>
                  <Select.Option value="minute">minute</Select.Option>
                  <Select.Option value="hour">hour</Select.Option>
                  <Select.Option value="day">day</Select.Option>
                </Select>
              </FieldGroup>
            </View>

            {/* Example 2: Label + TextField + Select */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Custom Resolution
              </Text>
              <FieldGroup>
                <FieldGroup.Label>Resolution</FieldGroup.Label>
                <TextField
                  name="timeValue"
                  defaultValue="1"
                  attributes={{ style: { width: '80px' } }}
                />
                <Select name="timeUnit" defaultValue="minute">
                  <Select.Option value="auto">Auto</Select.Option>
                  <Select.Option value="second">second</Select.Option>
                  <Select.Option value="minute">minute</Select.Option>
                  <Select.Option value="hour">hour</Select.Option>
                  <Select.Option value="day">day</Select.Option>
                </Select>
              </FieldGroup>
            </View>

            {/* Example 3: TextField + Button */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Search with Filter
              </Text>
              <FieldGroup>
                <TextField
                  name="search"
                  placeholder="Search logs..."
                  attributes={{ style: { flex: 1 } }}
                />
                <Button>Filter</Button>
              </FieldGroup>
            </View>

            {/* Example 4: URL with Protocol */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Website URL
              </Text>
              <FieldGroup>
                <FieldGroup.Label>https://</FieldGroup.Label>
                <TextField
                  name="url"
                  placeholder="example.com"
                  attributes={{ style: { flex: 1 } }}
                />
              </FieldGroup>
            </View>

            {/* Example 5: NumberField with Units */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Timeout Configuration
              </Text>
              <FieldGroup>
                <FieldGroup.Label>Timeout</FieldGroup.Label>
                <NumberField
                  name="timeout"
                  defaultValue={30}
                  increaseAriaLabel="Increase timeout"
                  decreaseAriaLabel="Decrease timeout"
                  attributes={{ style: { width: '100px' } }}
                />
                <Select name="timeoutUnit" defaultValue="seconds">
                  <Select.Option value="seconds">seconds</Select.Option>
                  <Select.Option value="minutes">minutes</Select.Option>
                  <Select.Option value="hours">hours</Select.Option>
                </Select>
              </FieldGroup>
            </View>
          </View>
        </Card>

        <Card padding={4}>
          <View gap={4}>
            <Text variant="title-3">Size Variants</Text>
            <Text variant="body-2" color="neutral-faded">
              FieldGroup automatically propagates size to all child components via
              Context.
            </Text>

            {/* Small Size */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Small (Default)
              </Text>
              <FieldGroup size="small">
                <FieldGroup.Label>Label</FieldGroup.Label>
                <TextField name="small" placeholder="Small input" />
                <Button>Go</Button>
              </FieldGroup>
            </View>

            {/* Medium Size */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Medium
              </Text>
              <FieldGroup size="medium">
                <FieldGroup.Label>Label</FieldGroup.Label>
                <TextField name="medium" placeholder="Medium input" />
                <Button>Go</Button>
              </FieldGroup>
            </View>

            {/* Large Size */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Large
              </Text>
              <FieldGroup size="large">
                <FieldGroup.Label>Label</FieldGroup.Label>
                <TextField name="large" placeholder="Large input" />
                <Button>Go</Button>
              </FieldGroup>
            </View>
          </View>
        </Card>

        <Card padding={4}>
          <View gap={4}>
            <Text variant="title-3">Advanced Patterns</Text>

            {/* Example 1: Memory Limit */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Memory Limit
              </Text>
              <FieldGroup>
                <TextField
                  name="memoryValue"
                  defaultValue="512"
                  attributes={{ style: { width: '100px' } }}
                />
                <Select name="memoryUnit" defaultValue="MB">
                  <Select.Option value="KB">KB</Select.Option>
                  <Select.Option value="MB">MB</Select.Option>
                  <Select.Option value="GB">GB</Select.Option>
                </Select>
              </FieldGroup>
            </View>

            {/* Example 2: Range Input */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Port Range
              </Text>
              <FieldGroup>
                <TextField
                  name="portStart"
                  defaultValue="8000"
                  attributes={{ style: { width: '100px' } }}
                />
                <FieldGroup.Label>to</FieldGroup.Label>
                <TextField
                  name="portEnd"
                  defaultValue="8080"
                  attributes={{ style: { width: '100px' } }}
                />
              </FieldGroup>
            </View>

            {/* Example 3: Action with Confirmation */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Batch Operations
              </Text>
              <FieldGroup>
                <Select name="batchAction" defaultValue="delete">
                  <Select.Option value="delete">Delete</Select.Option>
                  <Select.Option value="archive">Archive</Select.Option>
                  <Select.Option value="export">Export</Select.Option>
                </Select>
                <Button color="critical">Execute</Button>
              </FieldGroup>
            </View>

            {/* Example 4: Multiple Buttons */}
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Query Actions
              </Text>
              <FieldGroup>
                <TextField
                  name="query"
                  placeholder="Enter query..."
                  attributes={{ style: { flex: 1 } }}
                />
                <Button>Run</Button>
                <Button variant="outline">Save</Button>
              </FieldGroup>
            </View>
          </View>
        </Card>

        <Card padding={4}>
          <View gap={4}>
            <Text variant="title-3">Technical Details</Text>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Context-Based Size Inheritance
              </Text>
              <Text variant="body-2" color="neutral-faded">
                FieldGroup uses React Context to share the size prop with all child
                components. TextField, Select, Button, and NumberField all consume this
                context and automatically inherit the size if not explicitly set.
              </Text>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Border Radius Management
              </Text>
              <Text variant="body-2" color="neutral-faded">
                The FieldGroup CSS removes border-radius on adjacent sides where
                components touch, creating a seamless joined appearance. First child keeps
                left radius, last child keeps right radius.
              </Text>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Z-Index for Focus States
              </Text>
              <Text variant="body-2" color="neutral-faded">
                Children have z-index: 1 by default. On focus or hover, z-index increases
                to 2, ensuring the focused element's border is always visible above
                adjacent elements.
              </Text>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Collapsed Borders
              </Text>
              <Text variant="body-2" color="neutral-faded">
                Elements after the first use negative margin (-1px) to overlap borders,
                preventing double-thickness borders where components meet.
              </Text>
            </View>
          </View>
        </Card>

        <Card padding={4}>
          <View gap={4}>
            <Text variant="title-3">Usage Example</Text>
            <View
              padding={3}
              backgroundColor="neutral-faded"
              borderRadius="medium"
              attributes={{
                style: {
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  overflowX: 'auto',
                },
              }}
            >
              <pre>{`import { FieldGroup, TextField, Select, Button } from './components'

// Basic field group with label
<FieldGroup>
  <FieldGroup.Label>Resolution</FieldGroup.Label>
  <Select name="resolution">
    <Select.Option value="auto">Auto</Select.Option>
    <Select.Option value="minute">Minute</Select.Option>
  </Select>
</FieldGroup>

// Field group with multiple components
<FieldGroup>
  <TextField placeholder="Search..." />
  <Button>Search</Button>
</FieldGroup>

// Field group with custom size
<FieldGroup size="medium">
  <FieldGroup.Label>From</FieldGroup.Label>
  <TextField />
  <FieldGroup.Label>to</FieldGroup.Label>
  <TextField />
</FieldGroup>`}</pre>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
