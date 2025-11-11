'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Autocomplete } from '../components/Autocomplete'
import { Search, MapPin, User, Mail } from 'lucide-react'

const fruits = [
  'Apple',
  'Apricot',
  'Banana',
  'Blackberry',
  'Blueberry',
  'Cherry',
  'Grape',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Raspberry',
  'Strawberry',
  'Watermelon',
]

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Japan',
  'China',
  'Brazil',
  'India',
  'Mexico',
  'South Korea',
  'Netherlands',
]

const users = [
  { name: 'Alice Johnson', email: 'alice@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
  { name: 'Carol Davis', email: 'carol@example.com' },
  { name: 'David Wilson', email: 'david@example.com' },
  { name: 'Eve Martinez', email: 'eve@example.com' },
  { name: 'Frank Brown', email: 'frank@example.com' },
]

export function AutocompletePage() {
  const [fruitValue, setFruitValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const [userValue, setUserValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [errorValue, setErrorValue] = useState('')

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Autocomplete Component</Text>

      <View gap={4} paddingTop={3}>
        <View gap={2}>
          <Text variant="title-2">Custom Enhancements</Text>
          <Text variant="body-2" color="neutral-faded">
            The Autocomplete component includes the following customizations:
          </Text>
        </View>

        <View gap={3}>
          <Text variant="body-2" weight="medium">Default Size Strategy</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Defaults to size="small" for consistent compact UI
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Children (Autocomplete.Item) automatically inherit size="small" unless explicitly overridden
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Implementation uses React.Children.map to clone children and inject size prop
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Defaults to fallbackAdjustLayout=true for better positioning behavior
                </Text>
              </View>
            </View>
          </View>

          <Text variant="body-2" weight="medium" paddingTop={2}>Enhanced Hover State</Text>
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
                  Disabled for disabled and error states to avoid conflicts
                </Text>
              </View>
            </View>
          </View>

          <Text variant="body-2" weight="medium" paddingTop={2}>Persistent Error State</Text>
          <View gap={2}>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Error styling remains visible even when focused (real-time feedback)
                </Text>
              </View>
            </View>
            <View direction="row" gap={2} align="start">
              <Text variant="body-2">•</Text>
              <View>
                <Text variant="body-2" color="neutral-faded">
                  Progressive disclosure: 1px unfocused → 1.5px hover → 2px focused
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
          </View>

          <View gap={3} paddingTop={2}>
            <View gap={2}>
              <Text variant="body-2" weight="medium">Hover Example</Text>
              <Autocomplete
                name="hover-example"
                placeholder="Hover over me to see the highlighted border"
              >
                <Autocomplete.Item value="option1">Option 1</Autocomplete.Item>
                <Autocomplete.Item value="option2">Option 2</Autocomplete.Item>
                <Autocomplete.Item value="option3">Option 3</Autocomplete.Item>
              </Autocomplete>
            </View>

            <View gap={2}>
              <Text variant="body-2" weight="medium">Error State Example</Text>
              <Text variant="caption-1" color="neutral-faded">
                Error state persists during focus for continuous validation feedback
              </Text>
              <Autocomplete
                name="error-example"
                placeholder="Search for a valid fruit..."
                value={errorValue}
                onChange={(event) => setErrorValue(event.value)}
                hasError
              >
                {fruits.map((fruit) => {
                  if (!fruit.toLowerCase().includes(errorValue.toLowerCase())) return null
                  return (
                    <Autocomplete.Item key={fruit} value={fruit}>
                      {fruit}
                    </Autocomplete.Item>
                  )
                })}
              </Autocomplete>
              <Text variant="caption-1" color="critical">
                Please select a valid fruit from the list
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Autocomplete</Text>
        <View maxWidth="400px">
          <Autocomplete
            name="fruit"
            placeholder="Search for a fruit..."
            value={fruitValue}
            onChange={(event) => setFruitValue(event.value)}
          >
            {fruits.map((fruit) => {
              if (!fruit.toLowerCase().includes(fruitValue.toLowerCase())) return null
              return (
                <Autocomplete.Item key={fruit} value={fruit}>
                  {fruit}
                </Autocomplete.Item>
              )
            })}
          </Autocomplete>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Start Icon</Text>
        <View maxWidth="400px">
          <Autocomplete
            name="country"
            placeholder="Search for a country..."
            value={countryValue}
            onChange={(event) => setCountryValue(event.value)}
            startSlot={<MapPin size={16} />}
          >
            {countries.map((country) => {
              if (!country.toLowerCase().includes(countryValue.toLowerCase())) return null
              return (
                <Autocomplete.Item key={country} value={country}>
                  {country}
                </Autocomplete.Item>
              )
            })}
          </Autocomplete>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Search Icon</Text>
        <View maxWidth="400px">
          <Autocomplete
            name="search"
            placeholder="Type to search..."
            value={emailValue}
            onChange={(event) => setEmailValue(event.value)}
            startSlot={<Search size={16} />}
          >
            {fruits.map((fruit) => {
              if (!fruit.toLowerCase().includes(emailValue.toLowerCase())) return null
              return (
                <Autocomplete.Item key={fruit} value={fruit}>
                  {fruit}
                </Autocomplete.Item>
              )
            })}
          </Autocomplete>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Complex Items</Text>
        <View maxWidth="400px">
          <Autocomplete
            name="user"
            placeholder="Search for a user..."
            value={userValue}
            onChange={(event) => setUserValue(event.value)}
            startSlot={<User size={16} />}
            onItemSelect={(event) => {
              const selectedUser = users.find((u) => u.name === event.value)
              if (selectedUser) {
                setUserValue(selectedUser.name)
              }
            }}
          >
            {users.map((user) => {
              if (!user.name.toLowerCase().includes(userValue.toLowerCase()) &&
                  !user.email.toLowerCase().includes(userValue.toLowerCase())) {
                return null
              }
              return (
                <Autocomplete.Item key={user.email} value={user.name}>
                  <View gap={1}>
                    <View direction="row" gap={2} align="center">
                      <User size={14} />
                      <span className="font-semibold">{user.name}</span>
                    </View>
                    <View direction="row" gap={2} align="center" paddingStart={6}>
                      <Mail size={12} />
                      <span className="text-sm opacity-70">{user.email}</span>
                    </View>
                  </View>
                </Autocomplete.Item>
              )
            })}
          </Autocomplete>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">No Results State</Text>
        <View maxWidth="400px">
          <Autocomplete
            name="empty"
            placeholder="Try typing 'xyz'..."
            value={fruitValue}
            onChange={(event) => setFruitValue(event.value)}
          >
            {fruits.filter((fruit) =>
              fruit.toLowerCase().includes(fruitValue.toLowerCase())
            ).length === 0 && fruitValue.length > 0 ? (
              <View padding={3} align="center">
                <span className="opacity-50">No results found</span>
              </View>
            ) : (
              fruits.map((fruit) => {
                if (!fruit.toLowerCase().includes(fruitValue.toLowerCase())) return null
                return (
                  <Autocomplete.Item key={fruit} value={fruit}>
                    {fruit}
                  </Autocomplete.Item>
                )
              })
            )}
          </Autocomplete>
        </View>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>• Type to filter the available options</p>
          <p>• Use arrow keys to navigate through suggestions</p>
          <p>• Press Enter to select the focused item</p>
          <p>• Press Escape to close the dropdown</p>
          <p>• Click on an item to select it</p>
        </View>
      </View>
    </View>
  )
}
