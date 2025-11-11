'use client'

import { Tooltip } from '../components/Tooltip'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Actionable } from '../components/Actionable'
import { Badge } from '../components/Badge'
import { Info, Mic, Settings, HelpCircle, Star, Heart, Trash2 } from 'lucide-react'

export function TooltipPage() {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Tooltip Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Tooltip</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <Tooltip text="This is a helpful tooltip">
              {(attributes) => (
                <Button attributes={attributes}>Hover over me</Button>
              )}
            </Tooltip>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Tooltip with Icon Button</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2}>
              <Tooltip text="Record a message" position="top">
                {(attributes) => (
                  <Button
                    attributes={attributes}
                    icon={Mic}
                    color="primary"
                    rounded
                  />
                )}
              </Tooltip>
              <Tooltip text="Settings" position="top">
                {(attributes) => (
                  <Button attributes={attributes} icon={Settings} rounded />
                )}
              </Tooltip>
              <Tooltip text="Get help" position="top">
                {(attributes) => (
                  <Button attributes={attributes} icon={HelpCircle} rounded />
                )}
              </Tooltip>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Tooltip Positions</Text>
        <Card padding={4}>
          <View gap={4} maxWidth="600px">
            <View direction="row" gap={2} wrap>
              <Tooltip text="Top position" position="top">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Top
                  </Button>
                )}
              </Tooltip>
              <Tooltip text="Top start position" position="top-start">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Top Start
                  </Button>
                )}
              </Tooltip>
              <Tooltip text="Top end position" position="top-end">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Top End
                  </Button>
                )}
              </Tooltip>
            </View>
            <View direction="row" gap={2} wrap>
              <Tooltip text="Bottom position (default)" position="bottom">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Bottom
                  </Button>
                )}
              </Tooltip>
              <Tooltip text="Bottom start position" position="bottom-start">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Bottom Start
                  </Button>
                )}
              </Tooltip>
              <Tooltip text="Bottom end position" position="bottom-end">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Bottom End
                  </Button>
                )}
              </Tooltip>
            </View>
            <View direction="row" gap={2} wrap>
              <Tooltip text="Start position" position="start">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    Start
                  </Button>
                )}
              </Tooltip>
              <Tooltip text="End position" position="end">
                {(attributes) => (
                  <Button attributes={attributes} size="small">
                    End
                  </Button>
                )}
              </Tooltip>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Tooltip on Disabled Elements</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <p className="text-sm opacity-80">
              Wrap disabled elements with Actionable to show tooltips
            </p>
            <View direction="row" gap={2}>
              <Tooltip text="This button is disabled">
                {(attributes) => (
                  <Actionable attributes={attributes} as="div">
                    <Button disabled>Disabled Button</Button>
                  </Actionable>
                )}
              </Tooltip>
              <Tooltip text="Cannot delete at this time">
                {(attributes) => (
                  <Actionable attributes={attributes} as="div">
                    <Button disabled icon={Trash2} color="critical" />
                  </Actionable>
                )}
              </Tooltip>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Tooltip with Badges</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2} wrap>
              <Tooltip text="This feature is new!">
                {(attributes) => (
                  <Badge attributes={attributes} color="primary">
                    New
                  </Badge>
                )}
              </Tooltip>
              <Tooltip text="Beta version - may have bugs">
                {(attributes) => (
                  <Badge attributes={attributes} color="warning">
                    Beta
                  </Badge>
                )}
              </Tooltip>
              <Tooltip text="Experimental feature">
                {(attributes) => (
                  <Badge attributes={attributes} color="neutral">
                    Experimental
                  </Badge>
                )}
              </Tooltip>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Action Buttons with Tooltips</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2}>
              <Tooltip text="Add to favorites" position="top">
                {(attributes) => (
                  <Button
                    attributes={attributes}
                    icon={Star}
                    color="primary"
                    variant="ghost"
                  />
                )}
              </Tooltip>
              <Tooltip text="Like this item" position="top">
                {(attributes) => (
                  <Button
                    attributes={attributes}
                    icon={Heart}
                    color="critical"
                    variant="ghost"
                  />
                )}
              </Tooltip>
              <Tooltip text="More information" position="top">
                {(attributes) => (
                  <Button
                    attributes={attributes}
                    icon={Info}
                    variant="ghost"
                  />
                )}
              </Tooltip>
              <Tooltip text="Delete item" position="top">
                {(attributes) => (
                  <Button
                    attributes={attributes}
                    icon={Trash2}
                    color="critical"
                    variant="ghost"
                  />
                )}
              </Tooltip>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Tooltip Colors</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2}>
              <Tooltip text="Inverted tooltip (default)" color="inverted">
                {(attributes) => (
                  <Button attributes={attributes}>Inverted</Button>
                )}
              </Tooltip>
              <Tooltip text="Dark tooltip" color="dark">
                {(attributes) => <Button attributes={attributes}>Dark</Button>}
              </Tooltip>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>
            • Tooltips appear on hover or focus and provide contextual
            information
          </p>
          <p>
            • Always pass the attributes prop to your trigger element for proper
            accessibility
          </p>
          <p>
            • Use position prop to control where the tooltip appears (default is
            bottom)
          </p>
          <p>
            • Tooltips automatically adjust position if they don&apos;t fit in
            the viewport
          </p>
          <p>
            • For disabled elements, wrap them with Actionable component as a
            div
          </p>
          <p>• Keep tooltip text concise and helpful</p>
          <p>
            • Use tooltips for icon buttons to explain their purpose to users
          </p>
          <p>• Available colors: inverted (default) and dark</p>
        </View>
      </View>
    </View>
  )
}

