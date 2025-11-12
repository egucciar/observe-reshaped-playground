import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Divider } from '../components/Divider'

export function TextPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Text Component</Text>
      <Text variant="body-1" color="neutral-faded">
        Typography components for displaying text content with semantic variants
      </Text>

      <View gap={3}>
        <Text variant="title-2">Title Variants</Text>
        <Card padding={4}>
          <View gap={3}>
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">title-1</Text>
              <Text variant="title-1">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">title-2</Text>
              <Text variant="title-2">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">title-3</Text>
              <Text variant="title-3">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">title-4</Text>
              <Text variant="title-4">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">title-5</Text>
              <Text variant="title-5">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">title-6</Text>
              <Text variant="title-6">The quick brown fox jumps over the lazy dog</Text>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Body Variants</Text>
        <Card padding={4}>
          <View gap={3}>
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">body-1</Text>
              <Text variant="body-1">
                The quick brown fox jumps over the lazy dog. This is regular body text used for
                paragraphs and general content.
              </Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">body-2</Text>
              <Text variant="body-2">
                The quick brown fox jumps over the lazy dog. This is smaller body text used for
                secondary content and descriptions.
              </Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">body-3</Text>
              <Text variant="body-3">
                The quick brown fox jumps over the lazy dog. This is the smallest body text used
                for fine print and tertiary content.
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Featured Variants</Text>
        <Card padding={4}>
          <View gap={3}>
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">featured-1</Text>
              <Text variant="featured-1">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">featured-2</Text>
              <Text variant="featured-2">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">featured-3</Text>
              <Text variant="featured-3">The quick brown fox jumps over the lazy dog</Text>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Caption Variants</Text>
        <Card padding={4}>
          <View gap={3}>
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">caption-1</Text>
              <Text variant="caption-1">The quick brown fox jumps over the lazy dog</Text>
            </View>
            <Divider />
            <View gap={1}>
              <Text variant="caption-1" color="neutral-faded">caption-2</Text>
              <Text variant="caption-2">The quick brown fox jumps over the lazy dog</Text>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Font Weights</Text>
        <Card padding={4}>
          <View gap={2}>
            <Text variant="body-1" weight="regular">Regular weight (default)</Text>
            <Text variant="body-1" weight="medium">Medium weight</Text>
            <Text variant="body-1" weight="bold">Bold weight</Text>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Colors</Text>
        <Card padding={4}>
          <View gap={2}>
            <Text variant="body-1">Default color</Text>
            <Text variant="body-1" color="primary">Primary color</Text>
            <Text variant="body-1" color="positive">Positive color</Text>
            <Text variant="body-1" color="critical">Critical color</Text>
            <Text variant="body-1" color="warning">Warning color</Text>
            <Text variant="body-1" color="neutral-faded">Neutral faded color</Text>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Text Alignment</Text>
        <Card padding={4}>
          <View gap={2}>
            <Text variant="body-1" align="start">Left aligned text (start)</Text>
            <Text variant="body-1" align="center">Center aligned text</Text>
            <Text variant="body-1" align="end">Right aligned text (end)</Text>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Combining Properties</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" weight="bold" color="primary">
              Bold primary title
            </Text>
            <Text variant="body-1" weight="medium" color="neutral-faded">
              Medium weight faded body text
            </Text>
            <Text variant="caption-1" color="critical" align="center">
              Centered critical caption
            </Text>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Real-World Examples</Text>
        <Card padding={4}>
          <View gap={4}>
            <View gap={2}>
              <Text variant="title-3">Product Title</Text>
              <Text variant="body-2" color="neutral-faded">
                Product description goes here with helpful information about the item.
              </Text>
              <View direction="row" gap={2} align="center">
                <Text variant="featured-2" weight="bold" color="primary">
                  $99.99
                </Text>
                <Text variant="body-2" color="neutral-faded">
                  <s>$149.99</s>
                </Text>
              </View>
            </View>

            <Divider />

            <View gap={2}>
              <Text variant="title-4">Notification</Text>
              <View gap={1}>
                <Text variant="body-2" weight="medium">
                  Your order has been shipped
                </Text>
                <Text variant="caption-1" color="neutral-faded">
                  2 hours ago
                </Text>
              </View>
            </View>

            <Divider />

            <View gap={2}>
              <Text variant="caption-1" color="neutral-faded">
                SECTION HEADER
              </Text>
              <Text variant="body-1">
                This shows how caption text can be used effectively as section labels and
                headers.
              </Text>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Usage Tips</Text>
        <Card padding={4}>
          <View gap={2}>
            <Text variant="body-2">
              • Use title variants for headings and section headers (title-1 through title-6)
            </Text>
            <Text variant="body-2">
              • Use body variants for paragraph text and general content (body-1 through body-3)
            </Text>
            <Text variant="body-2">
              • Use featured variants for large display text like hero sections
            </Text>
            <Text variant="body-2">
              • Use caption variants for labels, metadata, and helper text
            </Text>
            <Text variant="body-2">
              • Combine weight, color, and alignment props to achieve the desired style
            </Text>
            <Text variant="body-2">
              • Use semantic colors (primary, positive, critical, warning) to convey meaning
            </Text>
          </View>
        </Card>
      </View>
    </View>
  )
}
