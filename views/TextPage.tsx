import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Divider } from '../components/Divider'

export function TextPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">Text Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The Text component includes automatic truncation detection with tooltip
            functionality:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">
            1. Automatic Truncation Tooltips
          </Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Automatically detects when text is truncated using ResizeObserver
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Shows tooltip with full content when text exceeds maxLines
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Enabled by default, can be disabled with tooltipIfTruncated=false
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Supports custom tooltip text via truncatedTooltipText prop
                </Text>
              </View>
            </View>
          </View>

          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Basic Truncation (Enabled by Default)
              </Text>
              <Card padding={4}>
                <View gap={3} maxWidth="400px">
                  <Text variant="body-1" maxLines={2}>
                    This is a long piece of text that will be truncated after two lines.
                    The tooltip will automatically appear when you hover over it, showing
                    the full content. This makes it easy to display long text in
                    constrained spaces while still allowing users to read everything.
                  </Text>
                  <Divider />
                  <Text variant="body-2" maxLines={1}>
                    Single line truncation also works perfectly with automatic tooltip
                    detection
                  </Text>
                </View>
              </Card>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Custom Tooltip Text
              </Text>
              <Card padding={4}>
                <View gap={3} maxWidth="400px">
                  <Text
                    variant="body-1"
                    maxLines={2}
                    truncatedTooltipText="This is a custom tooltip message that's different from the actual text content"
                  >
                    This text is truncated but has a custom tooltip message instead of
                    showing the full text content. Hover to see the custom message.
                  </Text>
                </View>
              </Card>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">
                Disable Tooltip
              </Text>
              <Card padding={4}>
                <View gap={3} maxWidth="400px">
                  <Text variant="body-1" maxLines={2} tooltipIfTruncated={false}>
                    This text is truncated but won't show a tooltip on hover because we've
                    disabled the automatic tooltip functionality with
                    tooltipIfTruncated=false.
                  </Text>
                </View>
              </Card>
            </View>
          </View>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">
            2. Props API
          </Text>
          <Card padding={4}>
            <View gap={3}>
              <View gap={1}>
                <Text variant="body-2" weight="medium">
                  truncatedTooltipText?: string
                </Text>
                <Text variant="body-2" color="neutral-faded">
                  Custom text to display in the tooltip. If not provided, defaults to the
                  children content (when children is a string).
                </Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="body-2" weight="medium">
                  tooltipIfTruncated?: boolean
                </Text>
                <Text variant="body-2" color="neutral-faded">
                  Whether to show a tooltip when text is truncated. Defaults to true. Set
                  to false to disable automatic tooltips.
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View gap={4} paddingTop={4}>
        <View gap={2}>
          <Text variant="title-2">Standard Reshaped Props</Text>
          <Text variant="body-2" color="neutral-faded">
            For complete Reshaped Text documentation, see Reshaped docs or Observe
            Storybook
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">
            Title Variants
          </Text>
          <Card padding={4}>
            <View gap={3}>
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  title-1
                </Text>
                <Text variant="title-1">The quick brown fox jumps over the lazy dog</Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  title-2
                </Text>
                <Text variant="title-2">The quick brown fox jumps over the lazy dog</Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  title-3
                </Text>
                <Text variant="title-3">The quick brown fox jumps over the lazy dog</Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  title-4
                </Text>
                <Text variant="title-4">The quick brown fox jumps over the lazy dog</Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  title-5
                </Text>
                <Text variant="title-5">The quick brown fox jumps over the lazy dog</Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  title-6
                </Text>
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
                <Text variant="caption-1" color="neutral-faded">
                  body-1
                </Text>
                <Text variant="body-1">
                  The quick brown fox jumps over the lazy dog. This is regular body text
                  used for paragraphs and general content.
                </Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  body-2
                </Text>
                <Text variant="body-2">
                  The quick brown fox jumps over the lazy dog. This is smaller body text
                  used for secondary content and descriptions.
                </Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  body-3
                </Text>
                <Text variant="body-3">
                  The quick brown fox jumps over the lazy dog. This is the smallest body
                  text used for fine print and tertiary content.
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
                <Text variant="caption-1" color="neutral-faded">
                  featured-1
                </Text>
                <Text variant="featured-1">
                  The quick brown fox jumps over the lazy dog
                </Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  featured-2
                </Text>
                <Text variant="featured-2">
                  The quick brown fox jumps over the lazy dog
                </Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  featured-3
                </Text>
                <Text variant="featured-3">
                  The quick brown fox jumps over the lazy dog
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Caption Variants</Text>
          <Card padding={4}>
            <View gap={3}>
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  caption-1
                </Text>
                <Text variant="caption-1">
                  The quick brown fox jumps over the lazy dog
                </Text>
              </View>
              <Divider />
              <View gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  caption-2
                </Text>
                <Text variant="caption-2">
                  The quick brown fox jumps over the lazy dog
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Font Weights</Text>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="body-1" weight="regular">
                Regular weight (default)
              </Text>
              <Text variant="body-1" weight="medium">
                Medium weight
              </Text>
              <Text variant="body-1" weight="bold">
                Bold weight
              </Text>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Colors</Text>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="body-1">Default color</Text>
              <Text variant="body-1" color="primary">
                Primary color
              </Text>
              <Text variant="body-1" color="positive">
                Positive color
              </Text>
              <Text variant="body-1" color="critical">
                Critical color
              </Text>
              <Text variant="body-1" color="warning">
                Warning color
              </Text>
              <Text variant="body-1" color="neutral-faded">
                Neutral faded color
              </Text>
            </View>
          </Card>
        </View>

        <View gap={3}>
          <Text variant="title-2">Text Alignment</Text>
          <Card padding={4}>
            <View gap={2}>
              <Text variant="body-1" align="start">
                Left aligned text (start)
              </Text>
              <Text variant="body-1" align="center">
                Center aligned text
              </Text>
              <Text variant="body-1" align="end">
                Right aligned text (end)
              </Text>
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
                  This shows how caption text can be used effectively as section labels
                  and headers.
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
                • Use title variants for headings and section headers (title-1 through
                title-6)
              </Text>
              <Text variant="body-2">
                • Use body variants for paragraph text and general content (body-1 through
                body-3)
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
                • Use semantic colors (primary, positive, critical, warning) to convey
                meaning
              </Text>
            </View>
          </Card>
        </View>
      </View>
    </View>
  )
}
