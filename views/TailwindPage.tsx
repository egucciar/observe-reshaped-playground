import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Divider } from '../components/Divider'

export function TailwindPage() {
  return (
    <View padding={6} gap={6} maxWidth="900px">
      <View gap={3}>
        <Text variant="title-1">Tailwind + Reshaped Integration</Text>
        <Text variant="featured-2" color="neutral-faded">
          Strategic use of Tailwind CSS with Reshaped design tokens
        </Text>
      </View>

      <Divider />

      <View gap={4}>
        <Text variant="title-2">Philosophy</Text>
        <Text variant="body-1">
          This project uses Reshaped components as the primary UI framework, with Tailwind CSS
          available for styling gaps and quick iterations. When using Tailwind, we prefer
          Reshaped's design tokens for consistency with the design system.
        </Text>
      </View>

      <View gap={4}>
        <Text variant="title-2">When to Use Each</Text>
        <View gap={3}>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" weight="medium" color="positive">
                ✓ Always Use Reshaped For
              </Text>
              <View gap={2}>
                <Text variant="body-2">• Typography - Use Text component instead of HTML tags</Text>
                <Text variant="body-2">• Form elements - TextField, TextArea, Select, Switch, etc.</Text>
                <Text variant="body-2">• Layout containers - View component for structure</Text>
                <Text variant="body-2">• Buttons - Button component with variants</Text>
                <Text variant="body-2">• Cards and containers - Card component</Text>
                <Text variant="body-2">• Standard UI patterns provided by Reshaped</Text>
              </View>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={2}>
              <Text variant="title-3" weight="medium" color="primary">
                ✓ Can Use Tailwind When
              </Text>
              <View gap={2}>
                <Text variant="body-2">• Reshaped doesn't provide the specific styling you need</Text>
                <Text variant="body-2">• Quick prototyping and iterating on designs</Text>
                <Text variant="body-2">• Copy/pasting examples to iterate from</Text>
                <Text variant="body-2">• Filling gaps in Reshaped's coverage</Text>
                <Text variant="body-2" weight="medium">• IMPORTANT: When using Tailwind, prefer Reshaped design tokens</Text>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2">Reshaped Design Tokens</Text>
        <Text variant="body-2" color="neutral-faded">
          Tailwind is configured to use Reshaped's design system tokens. Use these instead of arbitrary values.
        </Text>
        <View gap={3}>
          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Colors</Text>
              <View direction="row" gap={2} wrap>
                <Badge color="neutral">bg-elevated</Badge>
                <Badge color="neutral">bg-neutral-faded</Badge>
                <Badge color="neutral">text-primary</Badge>
                <Badge color="neutral">text-critical</Badge>
                <Badge color="neutral">text-positive</Badge>
                <Badge color="neutral">text-warning</Badge>
                <Badge color="neutral">border-neutral-faded</Badge>
                <Badge color="neutral">border-primary</Badge>
              </View>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Spacing</Text>
              <View gap={2}>
                <Text variant="body-2">
                  Padding: <Badge color="neutral">p-x1</Badge> through <Badge color="neutral">p-x12</Badge>
                </Text>
                <Text variant="body-2">
                  Margin: <Badge color="neutral">m-x1</Badge> through <Badge color="neutral">m-x12</Badge>
                </Text>
                <Text variant="body-2">
                  Gap: <Badge color="neutral">gap-x1</Badge> through <Badge color="neutral">gap-x12</Badge>
                </Text>
                <Text variant="body-2">
                  Responsive: <Badge color="neutral">l:p-x6</Badge> <Badge color="neutral">s:m-x4</Badge>
                </Text>
              </View>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Borders</Text>
              <View direction="row" gap={2} wrap>
                <Badge color="neutral">rounded-small</Badge>
                <Badge color="neutral">rounded-medium</Badge>
                <Badge color="neutral">rounded-large</Badge>
                <Badge color="neutral">rounded-full</Badge>
              </View>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Shadows</Text>
              <View direction="row" gap={2} wrap>
                <Badge color="neutral">shadow-raised</Badge>
                <Badge color="neutral">shadow-overlay</Badge>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2">Live Examples</Text>
        <View gap={3}>
          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Example 1: Custom Card with Tailwind Tokens</Text>
              <Text variant="body-2" color="neutral-faded">
                Using Tailwind classes with Reshaped design tokens for one-off styling
              </Text>
              <div className="bg-elevated p-x4 l:p-x6 text-critical border border-neutral-faded rounded-medium shadow-raised">
                <Text variant="body-2" weight="medium">
                  This custom div uses Tailwind classes with Reshaped design tokens
                </Text>
                <View gap={2} paddingTop={2}>
                  <Text variant="caption-1" color="neutral-faded">• bg-elevated (Reshaped color)</Text>
                  <Text variant="caption-1" color="neutral-faded">• p-x4, l:p-x6 (Reshaped spacing with responsive)</Text>
                  <Text variant="caption-1" color="neutral-faded">• text-critical (Reshaped color)</Text>
                  <Text variant="caption-1" color="neutral-faded">• border-neutral-faded (Reshaped color)</Text>
                  <Text variant="caption-1" color="neutral-faded">• rounded-medium (Reshaped border radius)</Text>
                  <Text variant="caption-1" color="neutral-faded">• shadow-raised (Reshaped shadow)</Text>
                </View>
              </div>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Example 2: Mixed Approach</Text>
              <Text variant="body-2" color="neutral-faded">
                Combining Reshaped components with Tailwind styling when needed
              </Text>
              <View gap={3}>
                <Text variant="body-1">Reshaped Button (preferred):</Text>
                <Button variant="solid" color="primary">
                  Primary Button
                </Button>

                <Text variant="body-1">Custom styled element with Tailwind tokens:</Text>
                <div className="bg-primary-faded p-x3 rounded-large inline-flex">
                  <Text color="primary" weight="medium">
                    Custom Badge Style
                  </Text>
                </div>
              </View>
            </View>
          </Card>

          <Card padding={4}>
            <View gap={3}>
              <Text variant="title-4">Example 3: Responsive Spacing</Text>
              <Text variant="body-2" color="neutral-faded">
                Using responsive Reshaped tokens for different screen sizes
              </Text>
              <div className="bg-neutral-faded p-x2 s:p-x4 l:p-x6 rounded-medium">
                <Text variant="body-2">
                  This container uses p-x2 by default, p-x4 on small screens (s:), and p-x6 on large screens (l:)
                </Text>
              </div>
            </View>
          </Card>
        </View>
      </View>

      <View gap={4}>
        <Text variant="title-2">Code Examples</Text>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <Text variant="title-5" color="positive">✓ Good - Using Reshaped tokens with Tailwind</Text>
              <div className="bg-neutral-faded p-x3 rounded-small">
                <Text variant="caption-1" as="pre">
                  {`<div className="bg-elevated p-x4 l:p-x6 text-critical border border-neutral-faded rounded-medium shadow-raised">
  Custom content
</div>`}
                </Text>
              </div>
            </View>

            <View gap={2}>
              <Text variant="title-5" color="positive">✓ Good - Reshaped components with Tailwind for gaps</Text>
              <div className="bg-neutral-faded p-x3 rounded-small">
                <Text variant="caption-1" as="pre">
                  {`<View align="center" justify="center">
  <Text variant="title-1">Hello</Text>
  <div className="bg-elevated p-x4 rounded-medium">
    <Text variant="body-1">Mixed approach when needed</Text>
  </div>
</View>`}
                </Text>
              </div>
            </View>

            <Divider />

            <View gap={2}>
              <Text variant="title-5" color="critical">✗ Bad - Using arbitrary Tailwind values</Text>
              <div className="bg-neutral-faded p-x3 rounded-small">
                <Text variant="caption-1" as="pre">
                  {`<div className="bg-gray-100 p-4 text-red-500 border border-gray-300 rounded-lg">
  Should use Reshaped tokens
</div>`}
                </Text>
              </div>
            </View>

            <View gap={2}>
              <Text variant="title-5" color="critical">✗ Bad - Using raw HTML when Reshaped has components</Text>
              <div className="bg-neutral-faded p-x3 rounded-small">
                <Text variant="caption-1" as="pre">
                  {`<p className="text-xl font-bold">Should use Text component</p>
<input type="text" className="border rounded p-2" />`}
                </Text>
              </div>
            </View>
          </View>
        </Card>
      </View>

      <View gap={4}>
        <Text variant="title-2">Best Practices</Text>
        <Card padding={4}>
          <View gap={2}>
            <Text variant="body-2">
              1. Always prefer Reshaped components first - they provide consistency and accessibility
            </Text>
            <Text variant="body-2">
              2. When Tailwind is needed, use Reshaped design tokens to maintain design system coherence
            </Text>
            <Text variant="body-2">
              3. Avoid arbitrary values like <Badge color="neutral">p-4</Badge> - use <Badge color="neutral">p-x4</Badge> instead
            </Text>
            <Text variant="body-2">
              4. Don't use Tailwind for typography, forms, or layouts that Reshaped already provides
            </Text>
            <Text variant="body-2">
              5. Use Tailwind for one-off styling needs, prototyping, and filling gaps in coverage
            </Text>
            <Text variant="body-2">
              6. Take advantage of responsive tokens like <Badge color="neutral">l:p-x6</Badge> for larger screens
            </Text>
          </View>
        </Card>
      </View>
    </View>
  )
}
