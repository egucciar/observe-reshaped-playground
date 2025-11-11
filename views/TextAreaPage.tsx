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
      <Text variant="title-1" className="text-2xl font-bold">TextArea Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic TextArea</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">With Placeholder</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Controlled State</Text>
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
                <p className="text-sm">Current value: {story || '(empty)'}</p>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Uncontrolled with Default Value</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Different Sizes</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View gap={2}>
              <p className="text-sm font-semibold">Medium (Default)</p>
              <TextArea
                name="size-medium"
                size="medium"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <p className="text-sm font-semibold">Large</p>
              <TextArea
                name="size-large"
                size="large"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <p className="text-sm font-semibold">XLarge</p>
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
        <Text variant="title-2" className="text-xl font-semibold">Variants</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View gap={2}>
              <p className="text-sm font-semibold">Outline (Default)</p>
              <TextArea
                name="variant-outline"
                variant="outline"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <p className="text-sm font-semibold">Faded</p>
              <TextArea
                name="variant-faded"
                variant="faded"
                placeholder="Enter the description"
              />
            </View>
            <View gap={2}>
              <p className="text-sm font-semibold">Headless</p>
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
        <Text variant="title-2" className="text-xl font-semibold">Auto Resize</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Disabled Resize</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Error State</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Disabled State</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Feedback Form Example</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Multi-field Form</Text>
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
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
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

