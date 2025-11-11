'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { TextField } from '../components/TextField'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export function TextFieldPage() {
  const [value, setValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1">TextField Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The TextField component includes the following customizations to improve visual feedback:
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
              <TextField name="hover-example" placeholder="Hover over me to see the highlighted border" />
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
              <TextField
                name="error-example"
                placeholder="This field has an error"
                hasError
              />
            </View>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Basic TextField (Uncontrolled)</Text>
        <TextField name="basic" placeholder="Enter text..." />
      </View>

      <View gap={3}>
        <Text variant="title-2">Controlled TextField</Text>
        <TextField
          name="controlled"
          value={value}
          onChange={(e) => setValue(e.value)}
          placeholder="Type something..."
        />
        <Text variant="body-2" color="neutral-faded">Current value: {value || '(empty)'}</Text>
      </View>

      <View gap={3}>
        <Text variant="title-2">Sizes</Text>
        <View gap={2}>
          <TextField name="small" size="small" placeholder="Small" />
          <TextField name="medium" size="medium" placeholder="Medium (Default)" />
          <TextField name="large" size="large" placeholder="Large" />
          <TextField name="xlarge" size="xlarge" placeholder="X-Large" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Variants</Text>
        <View gap={2}>
          <TextField name="outline" variant="outline" placeholder="Outline (Default)" />
          <TextField name="faded" variant="faded" placeholder="Faded" />
          <TextField name="headless" variant="headless" placeholder="Headless" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Prefix</Text>
        <View gap={2}>
          <TextField name="phone" prefix="+1" placeholder="Phone number" />
          <TextField name="website" prefix="https://" placeholder="example.com" />
          <TextField name="price" prefix="$" placeholder="0.00" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Suffix</Text>
        <View gap={2}>
          <TextField name="domain" suffix=".com" placeholder="mysite" />
          <TextField name="weight" suffix="kg" placeholder="Enter weight" />
          <TextField name="percentage" suffix="%" placeholder="0" />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Icons</Text>
        <View gap={2}>
          <TextField
            name="search"
            placeholder="Search..."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            }
          />
          <TextField
            name="email-icon"
            placeholder="Email address"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
          <TextField
            name="with-end-icon"
            placeholder="Username"
            endIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">States</Text>
        <View gap={2}>
          <TextField name="disabled" placeholder="Disabled" disabled />
          <TextField name="error" placeholder="With error" hasError />
          <TextField name="focused" placeholder="Focused" focused />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Rounded</Text>
        <TextField name="rounded" placeholder="Rounded input" rounded />
      </View>

      <View gap={3}>
        <Text variant="title-2">Input Types</Text>
        <View gap={2}>
          <TextField
            name="password"
            placeholder="Password"
            inputAttributes={{ type: 'password' }}
          />
          <TextField
            name="email-type"
            placeholder="Email"
            inputAttributes={{ type: 'email' }}
          />
          <TextField
            name="url-type"
            placeholder="URL"
            inputAttributes={{ type: 'url' }}
          />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">With Start/End Slots</Text>
        <View gap={2}>
          <TextField
            name="with-button"
            placeholder="Enter email"
            endSlot={
              <Button size="small" color="primary">
                Subscribe
              </Button>
            }
          />
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2">Login Form Example</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="font-semibold text-lg">Sign In</Text>
            <TextField
              name="login-email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.value)}
              placeholder="Email address"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            />
            <TextField
              name="login-password"
              placeholder="Password"
              inputAttributes={{ type: 'password' }}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />
            <Button color="primary">Sign In</Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2">Contact Form Example</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="font-semibold text-lg">Get in Touch</Text>
            <TextField name="contact-name" placeholder="Your name" />
            <TextField name="contact-email" placeholder="Email address" />
            <TextField name="contact-phone" prefix="+1" placeholder="Phone number" />
            <TextField name="contact-company" placeholder="Company name" />
            <Button color="primary">Submit</Button>
          </View>
        </Card>
      </View>
    </View>
  )
}
