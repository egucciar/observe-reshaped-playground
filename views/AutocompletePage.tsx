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

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Autocomplete Component</Text>

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
