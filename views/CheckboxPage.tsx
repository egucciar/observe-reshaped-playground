'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Checkbox, CheckboxGroup } from '../components/Checkbox'
import { Card } from '../components/Card'

export function CheckboxPage() {
  const [singleChecked, setSingleChecked] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [newsletter, setNewsletter] = useState(true)

  const [animals, setAnimals] = useState<string[]>(['dog'])
  const [features, setFeatures] = useState<string[]>(['notifications', 'analytics'])
  const [preferences, setPreferences] = useState<string[]>([])

  const allOptions = ['option1', 'option2', 'option3']
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['option1'])
  const isAllSelected = selectedOptions.length === allOptions.length
  const isIndeterminate = selectedOptions.length > 0 && selectedOptions.length < allOptions.length

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedOptions([])
    } else {
      setSelectedOptions(allOptions)
    }
  }

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Checkbox Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Checkbox</Text>
        <View gap={2}>
          <Checkbox
            name="single"
            value="checked"
            checked={singleChecked}
            onChange={({ checked }) => setSingleChecked(checked)}
          >
            Single checkbox
          </Checkbox>
          <span className="text-sm opacity-70">Checked: {singleChecked ? 'Yes' : 'No'}</span>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Checkbox Sizes</Text>
        <View gap={2}>
          <Checkbox name="size" value="small" size="small">
            Small checkbox
          </Checkbox>
          <Checkbox name="size" value="medium" size="medium">
            Medium checkbox (default)
          </Checkbox>
          <Checkbox name="size" value="large" size="large">
            Large checkbox
          </Checkbox>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Checkbox States</Text>
        <View gap={2}>
          <Checkbox name="state" value="default">
            Default state
          </Checkbox>
          <Checkbox name="state" value="checked" defaultChecked>
            Checked state
          </Checkbox>
          <Checkbox name="state" value="disabled" disabled>
            Disabled state
          </Checkbox>
          <Checkbox name="state" value="disabled-checked" disabled defaultChecked>
            Disabled and checked
          </Checkbox>
          <Checkbox name="state" value="error" hasError>
            Error state
          </Checkbox>
          <Checkbox name="state" value="indeterminate" indeterminate>
            Indeterminate state
          </Checkbox>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Checkbox Group</Text>
        <CheckboxGroup name="animals">
          <View gap={2}>
            <Checkbox
              value="dog"
              checked={animals.includes('dog')}
              onChange={({ checked }) => {
                if (checked) {
                  setAnimals([...animals, 'dog'])
                } else {
                  setAnimals(animals.filter(a => a !== 'dog'))
                }
              }}
            >
              Dog
            </Checkbox>
            <Checkbox
              value="cat"
              checked={animals.includes('cat')}
              onChange={({ checked }) => {
                if (checked) {
                  setAnimals([...animals, 'cat'])
                } else {
                  setAnimals(animals.filter(a => a !== 'cat'))
                }
              }}
            >
              Cat
            </Checkbox>
            <Checkbox
              value="bird"
              checked={animals.includes('bird')}
              onChange={({ checked }) => {
                if (checked) {
                  setAnimals([...animals, 'bird'])
                } else {
                  setAnimals(animals.filter(a => a !== 'bird'))
                }
              }}
            >
              Bird
            </Checkbox>
            <Checkbox
              value="fish"
              checked={animals.includes('fish')}
              onChange={({ checked }) => {
                if (checked) {
                  setAnimals([...animals, 'fish'])
                } else {
                  setAnimals(animals.filter(a => a !== 'fish'))
                }
              }}
            >
              Fish
            </Checkbox>
          </View>
        </CheckboxGroup>
        <span className="text-sm opacity-70">Selected: {animals.join(', ') || 'none'}</span>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Select All with Indeterminate</Text>
        <View gap={2}>
          <Checkbox
            name="select-all"
            value="all"
            checked={isAllSelected}
            indeterminate={isIndeterminate}
            onChange={handleSelectAll}
          >
            Select All
          </Checkbox>
          <View paddingStart={6} gap={2}>
            <Checkbox
              name="options"
              value="option1"
              checked={selectedOptions.includes('option1')}
              onChange={() => handleOptionChange('option1')}
            >
              Option 1
            </Checkbox>
            <Checkbox
              name="options"
              value="option2"
              checked={selectedOptions.includes('option2')}
              onChange={() => handleOptionChange('option2')}
            >
              Option 2
            </Checkbox>
            <Checkbox
              name="options"
              value="option3"
              checked={selectedOptions.includes('option3')}
              onChange={() => handleOptionChange('option3')}
            >
              Option 3
            </Checkbox>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Form Example</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="text-lg font-semibold">Account Settings</Text>
            <View gap={2}>
              <Checkbox
                name="terms"
                value="agreed"
                checked={agreeTerms}
                onChange={({ checked }) => setAgreeTerms(checked)}
              >
                I agree to the terms and conditions
              </Checkbox>
              <Checkbox
                name="newsletter"
                value="subscribed"
                checked={newsletter}
                onChange={({ checked }) => setNewsletter(checked)}
              >
                Subscribe to newsletter
              </Checkbox>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Feature Selection</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="text-lg font-semibold">Enable Features</Text>
            <CheckboxGroup name="features">
              <View gap={2}>
                <Checkbox
                  value="notifications"
                  checked={features.includes('notifications')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setFeatures([...features, 'notifications'])
                    } else {
                      setFeatures(features.filter(f => f !== 'notifications'))
                    }
                  }}
                >
                  Push Notifications
                </Checkbox>
                <Checkbox
                  value="analytics"
                  checked={features.includes('analytics')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setFeatures([...features, 'analytics'])
                    } else {
                      setFeatures(features.filter(f => f !== 'analytics'))
                    }
                  }}
                >
                  Analytics Tracking
                </Checkbox>
                <Checkbox
                  value="darkmode"
                  checked={features.includes('darkmode')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setFeatures([...features, 'darkmode'])
                    } else {
                      setFeatures(features.filter(f => f !== 'darkmode'))
                    }
                  }}
                >
                  Dark Mode
                </Checkbox>
                <Checkbox
                  value="beta"
                  checked={features.includes('beta')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setFeatures([...features, 'beta'])
                    } else {
                      setFeatures(features.filter(f => f !== 'beta'))
                    }
                  }}
                >
                  Beta Features
                </Checkbox>
              </View>
            </CheckboxGroup>
            <span className="text-sm opacity-70">
              Enabled: {features.length} feature{features.length !== 1 ? 's' : ''}
            </span>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Preferences with Descriptions</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="text-lg font-semibold">Privacy Preferences</Text>
            <View gap={3}>
              <View gap={1}>
                <Checkbox
                  name="privacy"
                  value="share-data"
                  checked={preferences.includes('share-data')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setPreferences([...preferences, 'share-data'])
                    } else {
                      setPreferences(preferences.filter(p => p !== 'share-data'))
                    }
                  }}
                >
                  Share usage data
                </Checkbox>
                <p className="text-sm opacity-70 ml-7">
                  Help us improve by sharing anonymous usage statistics
                </p>
              </View>
              <View gap={1}>
                <Checkbox
                  name="privacy"
                  value="personalization"
                  checked={preferences.includes('personalization')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setPreferences([...preferences, 'personalization'])
                    } else {
                      setPreferences(preferences.filter(p => p !== 'personalization'))
                    }
                  }}
                >
                  Enable personalization
                </Checkbox>
                <p className="text-sm opacity-70 ml-7">
                  Customize your experience based on your preferences
                </p>
              </View>
              <View gap={1}>
                <Checkbox
                  name="privacy"
                  value="marketing"
                  checked={preferences.includes('marketing')}
                  onChange={({ checked }) => {
                    if (checked) {
                      setPreferences([...preferences, 'marketing'])
                    } else {
                      setPreferences(preferences.filter(p => p !== 'marketing'))
                    }
                  }}
                >
                  Marketing communications
                </Checkbox>
                <p className="text-sm opacity-70 ml-7">
                  Receive promotional emails and special offers
                </p>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Validation Example</Text>
        <Card padding={4}>
          <View gap={3}>
            <Text variant="title-3" className="text-lg font-semibold">Required Agreement</Text>
            <Checkbox
              name="required"
              value="accepted"
              hasError={!agreeTerms}
            >
              I have read and agree to the privacy policy
            </Checkbox>
            {!agreeTerms && (
              <span className="text-sm text-red-600">
                You must agree to continue
              </span>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Disabled Group</Text>
        <CheckboxGroup name="disabled-group">
          <View gap={2}>
            <Checkbox name="disabled" value="option1" disabled>
              Disabled option 1
            </Checkbox>
            <Checkbox name="disabled" value="option2" disabled defaultChecked>
              Disabled option 2 (checked)
            </Checkbox>
            <Checkbox name="disabled" value="option3" disabled>
              Disabled option 3
            </Checkbox>
          </View>
        </CheckboxGroup>
      </View>
    </View>
  )
}
