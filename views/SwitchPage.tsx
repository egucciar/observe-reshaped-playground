'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Switch } from '../components/Switch'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'

export function SwitchPage() {
  const [wifiEnabled, setWifiEnabled] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Switch Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Switch</Text>
        <Card padding={4}>
          <Switch name="basic">Wi-Fi</Switch>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">With Label</Text>
        <Card padding={4}>
          <View gap={3}>
            <Switch name="wifi">Enable Wi-Fi</Switch>
            <Switch name="bluetooth">Enable Bluetooth</Switch>
            <Switch name="notifications">Push Notifications</Switch>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Controlled State</Text>
        <Card padding={4}>
          <View gap={4}>
            <View gap={3}>
              <Switch
                name="wifi-controlled"
                checked={wifiEnabled}
                onChange={({ value }) => setWifiEnabled(!!value)}
              >
                Wi-Fi Connection
              </Switch>
              <Switch
                name="notifications-controlled"
                checked={notifications}
                onChange={({ value }) => setNotifications(!!value)}
              >
                Notifications
              </Switch>
              <Switch
                name="dark-mode"
                checked={darkMode}
                onChange={({ value }) => setDarkMode(!!value)}
              >
                Dark Mode
              </Switch>
            </View>
            <View padding={3} backgroundColor="neutral-faded" borderRadius="medium">
              <View gap={2}>
                <Badge color={wifiEnabled ? 'positive' : 'neutral'}>
                  Wi-Fi: {wifiEnabled ? 'On' : 'Off'}
                </Badge>
                <Badge color={notifications ? 'positive' : 'neutral'}>
                  Notifications: {notifications ? 'On' : 'Off'}
                </Badge>
                <Badge color={darkMode ? 'primary' : 'neutral'}>
                  Dark Mode: {darkMode ? 'On' : 'Off'}
                </Badge>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Different Sizes</Text>
        <Card padding={4}>
          <View gap={3}>
            <Switch name="small-switch" size="small">
              Small Switch
            </Switch>
            <Switch name="medium-switch" size="medium">
              Medium Switch (Default)
            </Switch>
            <Switch name="large-switch" size="large">
              Large Switch
            </Switch>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Reversed Layout</Text>
        <Card padding={4}>
          <View gap={3}>
            <Switch name="reversed-1" reversed>
              Label on the left
            </Switch>
            <Switch name="reversed-2" reversed defaultChecked>
              Auto-save enabled
            </Switch>
            <Switch name="reversed-3" reversed>
              Show preview
            </Switch>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Disabled State</Text>
        <Card padding={4}>
          <View gap={3}>
            <Switch name="disabled-off" disabled>
              Disabled (Off)
            </Switch>
            <Switch name="disabled-on" disabled defaultChecked>
              Disabled (On)
            </Switch>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Default Checked</Text>
        <Card padding={4}>
          <View gap={3}>
            <Switch name="default-1" defaultChecked>
              Auto-play videos
            </Switch>
            <Switch name="default-2" defaultChecked>
              Enable animations
            </Switch>
            <Switch name="default-3">
              Show tooltips
            </Switch>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Settings Panel Example</Text>
        <Card padding={4}>
          <View gap={4}>
            <View gap={3}>
              <Text variant="title-3" className="text-lg font-semibold">Privacy Settings</Text>
              <Switch name="analytics" defaultChecked>
                Share analytics data
              </Switch>
              <Switch name="location">
                Enable location services
              </Switch>
              <Switch name="cookies" defaultChecked>
                Accept cookies
              </Switch>
            </View>

            <View gap={3}>
              <Text variant="title-3" className="text-lg font-semibold">Audio Settings</Text>
              <Switch
                name="sound"
                checked={soundEnabled}
                onChange={({ value }) => setSoundEnabled(!!value)}
              >
                Sound effects
              </Switch>
              <Switch name="music" defaultChecked>
                Background music
              </Switch>
              <Switch name="voice">
                Voice notifications
              </Switch>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Compact List</Text>
        <Card padding={4}>
          <View gap={2}>
            <Switch name="feature-1" size="small" reversed>
              Feature 1
            </Switch>
            <Switch name="feature-2" size="small" reversed defaultChecked>
              Feature 2
            </Switch>
            <Switch name="feature-3" size="small" reversed>
              Feature 3
            </Switch>
            <Switch name="feature-4" size="small" reversed defaultChecked>
              Feature 4
            </Switch>
            <Switch name="feature-5" size="small" reversed>
              Feature 5
            </Switch>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>• Use Switch for binary on/off settings</p>
          <p>• Provide clear labels that describe what the switch controls</p>
          <p>• Use controlled state when you need to react to changes</p>
          <p>• Use defaultChecked for uncontrolled components with initial state</p>
          <p>• Consider using reversed layout for right-aligned switches</p>
          <p>• Disable switches when the option is temporarily unavailable</p>
          <p>• Changes should take effect immediately without requiring a save action</p>
        </View>
      </View>
    </View>
  )
}

