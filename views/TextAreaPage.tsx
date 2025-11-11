'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { TextArea } from '../components/TextArea'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'

export function TextAreaPage() {
  const [story, setStory] = useState('It was a sunny day')
  const [feedback, setFeedback] = useState('')
  const [description, setDescription] = useState('')

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">TextArea Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The TextArea component includes the following customizations to improve visual feedback:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">1. Enhanced Hover State</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Aligned with Card component for consistent hover behavior across components
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Shows highlighted border color on hover (default Reshaped has no hover change)
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Disabled for disabled, focused, error, and headless states to avoid conflicts
                </Text>
              </View>
            </View>
          </View>

          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Hover Example</Text>
              <TextArea name="hover-example" placeholder="Hover over me to see the highlighted border" />
            </View>
          </View>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">2. Persistent Error State</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Error styling remains visible even when focused for real-time feedback
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Default Reshaped removes error border on focus, hiding the validation issue
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Progressive border thickness: 1px base → 1.5px hover → 2px focus
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Error persists until hasError prop is removed, ensuring clear validation state
                </Text>
              </View>
            </View>
          </View>

          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Error State Example</Text>
              <Text variant="caption-1" color="neutral-faded">
                Try clicking into the field - notice the error border stays visible
              </Text>
              <TextArea
                name="error-example"
                placeholder="This field has an error"
                hasError
              />
              <Text variant="caption-1" color="critical">
                Please enter a valid value
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Basic TextArea</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <TextArea
              name="basic"
              placeholder="Enter your text here..."
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Placeholder</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <TextArea
              name="description"
              placeholder="What do you like about the product?"
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Controlled State</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <TextArea
              name="story"
              placeholder="Tell us your story"
              value={story}
              onChange={({ value }) => setStory(value)}
            />
            <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
              <View gap={2}>
                <Badge color="primary">Character count: {story.length}</Badge>
                <Text variant="body-2">Current value: {story || '(empty)'}</Text>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Uncontrolled with Default Value</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <TextArea
              name="uncontrolled"
              placeholder="Tell us your story"
              defaultValue="It was a sunny day"
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Different Sizes</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View gap={2}>
              <Text variant="body-2" weight="medium">Medium (Default)</Text>
              <TextArea
                name="size-medium"
                size="medium"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Large</Text>
              <TextArea
                name="size-large"
                size="large"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <Text variant="body-2" weight="medium">XLarge</Text>
              <TextArea
                name="size-xlarge"
                size="xlarge"
                placeholder="Enter the description"
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Variants</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View gap={2}>
              <Text variant="body-2" weight="medium">Outline (Default)</Text>
              <TextArea
                name="variant-outline"
                variant="outline"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Faded</Text>
              <TextArea
                name="variant-faded"
                variant="faded"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Headless</Text>
              <TextArea
                name="variant-headless"
                variant="headless"
                placeholder="Enter the description"
              />
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Auto Resize</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <TextArea
              name="auto-resize"
              resize="auto"
              placeholder="This textarea will grow automatically as you type..."
            />
            <p className="text-sm opacity-80">
              Try typing multiple lines to see the auto-resize behavior
            </p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Disabled Resize</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <TextArea
              name="no-resize"
              resize="none"
              placeholder="This textarea cannot be resized"
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Error State</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <TextArea
              name="error"
              hasError
              placeholder="This field has an error"
            />
            <p className="text-sm text-red-500">Please enter a valid description</p>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Disabled State</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <TextArea
              name="disabled"
              disabled
              placeholder="This field is disabled"
            />
            <TextArea
              name="disabled-with-value"
              disabled
              defaultValue="This field is disabled with a value"
            />
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Feedback Form Example</Text>
        <Card padding={4}>
          <View gap={4} maxWidth="600px">
            <View gap={2}>
              <label className="text-sm font-semibold">Your Feedback</label>
              <TextArea
                name="feedback"
                value={feedback}
                onChange={({ value }) => setFeedback(value)}
                placeholder="Tell us what you think..."
                resize="auto"
              />
              <p className="text-xs opacity-70">
                {feedback.length}/500 characters
              </p>
            </View>
            <Button
              variant="solid"
              color="primary"
              disabled={feedback.length === 0}
              onClick={() => {
                alert('Feedback submitted!')
                setFeedback('')
              }}
            >
              Submit Feedback
            </Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Multi-field Form</Text>
        <Card padding={4}>
          <View gap={4} maxWidth="600px">
            <View gap={2}>
              <label className="text-sm font-semibold">Description</label>
              <TextArea
                name="form-description"
                value={description}
                onChange={({ value }) => setDescription(value)}
                placeholder="Describe your project..."
                size="large"
              />
            </View>
            <View gap={2}>
              <label className="text-sm font-semibold">Additional Notes</label>
              <TextArea
                name="notes"
                placeholder="Any additional information..."
                variant="faded"
              />
            </View>
            <View direction="row" gap={2}>
              <Button variant="outline" onClick={() => setDescription('')}>
                Clear
              </Button>
              <Button variant="solid" color="primary">
                Save
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>• Use TextArea for multiline text input</p>
          <p>• Provide clear placeholders to guide users</p>
          <p>• Use controlled state when you need to validate or transform input</p>
          <p>• Use defaultValue for uncontrolled components with initial values</p>
          <p>• Consider using resize="auto" for better UX with variable content</p>
          <p>• Use hasError to indicate validation failures</p>
          <p>• Different sizes align with other form components like TextField and Select</p>
          <p>• The faded variant works well for secondary or less prominent inputs</p>
        </View>
      </View>
    </View>
  )
}

