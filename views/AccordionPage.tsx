'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Accordion } from '../components/Accordion'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export function AccordionPage() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(true)
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Accordion Component</Text>
      <p className="text-gray-600">Toggle visibility of content regions</p>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Accordion (Uncontrolled)</Text>
        <Accordion>
          <Accordion.Trigger>Click to expand</Accordion.Trigger>
          <Accordion.Content>
            <View padding={4}>
              <p>
                This is the accordion content. It can contain any content you want to show
                or hide.
              </p>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Default Active</Text>
        <Accordion defaultActive>
          <Accordion.Trigger>This accordion starts open</Accordion.Trigger>
          <Accordion.Content>
            <View padding={4}>
              <p>
                This content is visible by default because we used the defaultActive prop.
              </p>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Controlled Accordion</Text>
        <Accordion active={isOpen1} onToggle={() => setIsOpen1(!isOpen1)}>
          <Accordion.Trigger>Controlled accordion</Accordion.Trigger>
          <Accordion.Content>
            <View padding={4}>
              <p>This accordion is controlled via state.</p>
              <p className="text-sm text-gray-600 mt-2">Current state: {isOpen1 ? 'Open' : 'Closed'}</p>
            </View>
          </Accordion.Content>
        </Accordion>
        <Button size="small" onClick={() => setIsOpen1(!isOpen1)}>
          Toggle from outside
        </Button>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Gap</Text>
        <Accordion gap={6}>
          <Accordion.Trigger>Accordion with larger gap</Accordion.Trigger>
          <Accordion.Content>
            <View padding={4}>
              <p>This accordion has a larger gap between trigger and content.</p>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Icon Position: Start</Text>
        <Accordion iconPosition="start">
          <Accordion.Trigger>Icon on the left</Accordion.Trigger>
          <Accordion.Content>
            <View padding={4}>
              <p>The chevron icon appears on the left side instead of the right.</p>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Custom Icon Size</Text>
        <Accordion iconSize={8}>
          <Accordion.Trigger>Larger icon</Accordion.Trigger>
          <Accordion.Content>
            <View padding={4}>
              <p>This accordion has a larger toggle icon.</p>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Multiple Accordions</Text>
        <View gap={2}>
          <Accordion>
            <Accordion.Trigger>Section 1</Accordion.Trigger>
            <Accordion.Content>
              <View padding={4}>
                <p>Content for section 1.</p>
              </View>
            </Accordion.Content>
          </Accordion>
          <Accordion>
            <Accordion.Trigger>Section 2</Accordion.Trigger>
            <Accordion.Content>
              <View padding={4}>
                <p>Content for section 2.</p>
              </View>
            </Accordion.Content>
          </Accordion>
          <Accordion>
            <Accordion.Trigger>Section 3</Accordion.Trigger>
            <Accordion.Content>
              <View padding={4}>
                <p>Content for section 3.</p>
              </View>
            </Accordion.Content>
          </Accordion>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">In Card</Text>
        <Card>
          <Accordion>
            <Accordion.Trigger>
              <View padding={4}>
                <Text variant="title-3"className="font-semibold">Product Details</Text>
              </View>
            </Accordion.Trigger>
            <Accordion.Content>
              <View padding={4} paddingTop={0}>
                <p className="text-sm">
                  This product includes all the features you need. Perfect for teams of all
                  sizes.
                </p>
              </View>
            </Accordion.Content>
          </Accordion>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">FAQ Example</Text>
        <Card>
          <View gap={2}>
            <Accordion active={faq1} onToggle={() => setFaq1(!faq1)}>
              <Accordion.Trigger>
                <View padding={4}>
                  <Text variant="title-3"className="font-semibold">What is Reshaped?</Text>
                </View>
              </Accordion.Trigger>
              <Accordion.Content>
                <View padding={4} paddingTop={0}>
                  <p className="text-sm text-gray-600">
                    Reshaped is a comprehensive UI component library designed for building
                    modern web applications with React.
                  </p>
                </View>
              </Accordion.Content>
            </Accordion>

            <Accordion active={faq2} onToggle={() => setFaq2(!faq2)}>
              <Accordion.Trigger>
                <View padding={4}>
                  <Text variant="title-3"className="font-semibold">How do I install it?</Text>
                </View>
              </Accordion.Trigger>
              <Accordion.Content>
                <View padding={4} paddingTop={0}>
                  <p className="text-sm text-gray-600">
                    You can install Reshaped using npm or yarn: npm install reshaped
                  </p>
                </View>
              </Accordion.Content>
            </Accordion>

            <Accordion active={faq3} onToggle={() => setFaq3(!faq3)}>
              <Accordion.Trigger>
                <View padding={4}>
                  <Text variant="title-3"className="font-semibold">Is it free to use?</Text>
                </View>
              </Accordion.Trigger>
              <Accordion.Content>
                <View padding={4} paddingTop={0}>
                  <p className="text-sm text-gray-600">
                    Check the Reshaped documentation for licensing information and pricing
                    details.
                  </p>
                </View>
              </Accordion.Content>
            </Accordion>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Rich Content Example</Text>
        <Accordion defaultActive>
          <Accordion.Trigger>
            <View padding={4}>
              <Text variant="title-3"className="font-semibold">Features & Benefits</Text>
            </View>
          </Accordion.Trigger>
          <Accordion.Content>
            <View padding={4} paddingTop={0}>
              <View gap={2}>
                <View direction="row" gap={2} align="center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm">Fully accessible components</p>
                </View>
                <View direction="row" gap={2} align="center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm">Dark mode support</p>
                </View>
                <View direction="row" gap={2} align="center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm">Responsive design</p>
                </View>
                <View direction="row" gap={2} align="center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm">TypeScript support</p>
                </View>
              </View>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Settings Panel Example</Text>
        <Card>
          <View gap={2}>
            <Accordion active={isOpen2} onToggle={() => setIsOpen2(!isOpen2)}>
              <Accordion.Trigger>
                <View padding={4}>
                  <View direction="row" justify="space-between" align="center">
                    <View>
                      <Text variant="title-3"className="font-semibold">Advanced Settings</Text>
                      <p className="text-sm text-gray-600">Configure advanced options</p>
                    </View>
                  </View>
                </View>
              </Accordion.Trigger>
              <Accordion.Content>
                <View padding={4} paddingTop={0}>
                  <View gap={3}>
                    <View>
                      <p className="text-sm font-semibold">Option 1</p>
                      <p className="text-sm text-gray-600">Enable this feature</p>
                    </View>
                    <View>
                      <p className="text-sm font-semibold">Option 2</p>
                      <p className="text-sm text-gray-600">Configure this setting</p>
                    </View>
                    <View>
                      <p className="text-sm font-semibold">Option 3</p>
                      <p className="text-sm text-gray-600">Adjust preferences</p>
                    </View>
                  </View>
                </View>
              </Accordion.Content>
            </Accordion>
          </View>
        </Card>
      </View>
    </View>
  )
}
