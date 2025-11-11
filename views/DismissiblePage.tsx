'use client'

import { useState } from 'react'
import { Dismissible } from '../components/Dismissible'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { X, AlertCircle, Info, CheckCircle } from 'lucide-react'

export function DismissiblePage() {
  const [banner1Visible, setBanner1Visible] = useState(true)
  const [banner2Visible, setBanner2Visible] = useState(true)
  const [banner3Visible, setBanner3Visible] = useState(true)
  const [banner4Visible, setBanner4Visible] = useState(true)
  const [banner5Visible, setBanner5Visible] = useState(true)
  const [banner6Visible, setBanner6Visible] = useState(true)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Dismissible Utility</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Dismissible Banner</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Dismissible provides a children slot with a reserved spot for the
              close button
            </p>
            {banner1Visible && (
              <Card padding={0}>
                <Dismissible
                  closeAriaLabel="Close banner"
                  onClose={() => setBanner1Visible(false)}
                >
                  <View padding={4} className="bg-blue-50 rounded">
                    <p className="text-sm">
                      This is a dismissible banner. Click the X to close it.
                    </p>
                  </View>
                </Dismissible>
              </Card>
            )}
            {!banner1Visible && (
              <Button onClick={() => setBanner1Visible(true)}>
                Show Banner Again
              </Button>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Dismissible with Icons</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Add icons and styled content inside Dismissible
            </p>
            {banner2Visible && (
              <Card padding={0}>
                <Dismissible
                  closeAriaLabel="Close info banner"
                  onClose={() => setBanner2Visible(false)}
                >
                  <View
                    padding={4}
                    gap={3}
                    className="bg-blue-50 rounded flex items-start"
                  >
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <View gap={1}>
                      <p className="font-semibold text-sm">Information</p>
                      <p className="text-sm opacity-80">
                        This banner contains important information with an icon.
                      </p>
                    </View>
                  </View>
                </Dismissible>
              </Card>
            )}
            {!banner2Visible && (
              <Button onClick={() => setBanner2Visible(true)}>
                Show Banner Again
              </Button>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Different Banner Styles</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Create different styled banners using Dismissible
            </p>
            {banner3Visible && (
              <Card padding={0}>
                <Dismissible
                  closeAriaLabel="Close success banner"
                  onClose={() => setBanner3Visible(false)}
                >
                  <View
                    padding={4}
                    gap={3}
                    className="bg-green-50 rounded flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <View gap={1}>
                      <p className="font-semibold text-sm text-green-900">
                        Success
                      </p>
                      <p className="text-sm text-green-800">
                        Your changes have been saved successfully.
                      </p>
                    </View>
                  </View>
                </Dismissible>
              </Card>
            )}
            {banner4Visible && (
              <Card padding={0}>
                <Dismissible
                  closeAriaLabel="Close warning banner"
                  onClose={() => setBanner4Visible(false)}
                >
                  <View
                    padding={4}
                    gap={3}
                    className="bg-yellow-50 rounded flex items-start"
                  >
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <View gap={1}>
                      <p className="font-semibold text-sm text-yellow-900">
                        Warning
                      </p>
                      <p className="text-sm text-yellow-800">
                        Please review your settings before continuing.
                      </p>
                    </View>
                  </View>
                </Dismissible>
              </Card>
            )}
            {(!banner3Visible || !banner4Visible) && (
              <View gap={2} className="flex flex-row">
                {!banner3Visible && (
                  <Button onClick={() => setBanner3Visible(true)}>
                    Show Success
                  </Button>
                )}
                {!banner4Visible && (
                  <Button onClick={() => setBanner4Visible(true)}>
                    Show Warning
                  </Button>
                )}
              </View>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Media Variant</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Use variant=&quot;media&quot; for displaying media content with a
              close button
            </p>
            {banner5Visible && (
              <Dismissible
                variant="media"
                closeAriaLabel="Close image"
                onClose={() => setBanner5Visible(false)}
              >
                <View className="relative" style={{ aspectRatio: '16/9' }}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                      Media Content (16:9)
                    </p>
                  </div>
                </View>
              </Dismissible>
            )}
            {!banner5Visible && (
              <Button onClick={() => setBanner5Visible(true)}>
                Show Media Again
              </Button>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Hide Close Button</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Use hideCloseButton prop to conditionally hide the close button
            </p>
            {banner6Visible && (
              <Card padding={0}>
                <Dismissible hideCloseButton closeAriaLabel="Close banner">
                  <View padding={4} className="bg-gray-100 rounded">
                    <View gap={2}>
                      <p className="text-sm font-semibold">
                        Banner without close button
                      </p>
                      <p className="text-sm opacity-80">
                        This banner doesn&apos;t show a close button. Use the
                        button below to dismiss it.
                      </p>
                      <Button
                        onClick={() => setBanner6Visible(false)}
                        size="small"
                      >
                        Dismiss
                      </Button>
                    </View>
                  </View>
                </Dismissible>
              </Card>
            )}
            {!banner6Visible && (
              <Button onClick={() => setBanner6Visible(true)}>
                Show Banner Again
              </Button>
            )}
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Dismissible in Card</Text>
        <Card padding={4}>
          <View gap={3}>
            <p className="text-sm opacity-80">
              Common pattern: use Dismissible inside a Card for announcements
            </p>
            <Card padding={0} className="border border-blue-200">
              <Dismissible closeAriaLabel="Close announcement">
                <View padding={4} gap={3}>
                  <View gap={2}>
                    <Badge color="primary">New Feature</Badge>
                    <Text variant="title-3" className="font-semibold">
                      Introducing Dark Mode Support
                    </Text>
                    <p className="text-sm opacity-80">
                      We&apos;ve added dark mode support across the entire
                      application. Try it out by clicking the theme toggle in
                      the header!
                    </p>
                  </View>
                  <Button variant="outlined" size="small">
                    Learn More
                  </Button>
                </View>
              </Dismissible>
            </Card>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>
            • Dismissible provides a children slot with a reserved spot for the
            close button
          </p>
          <p>
            • Use onClose handler to toggle visibility of the component or
            parent
          </p>
          <p>
            • Always provide closeAriaLabel for accessibility when using the
            close button
          </p>
          <p>
            • Use variant=&quot;media&quot; for media content (moves close
            button away from edges)
          </p>
          <p>
            • Use hideCloseButton prop to conditionally hide the close button
          </p>
          <p>
            • Common pattern: wrap Dismissible inside a Card for dismissible
            banners
          </p>
          <p>
            • Can be used to create dismissible alerts, announcements, or media
            overlays
          </p>
          <p>
            • Combine with state management to control visibility and allow
            re-showing
          </p>
        </View>
      </View>
    </View>
  )
}

