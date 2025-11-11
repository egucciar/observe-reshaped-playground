'use client'

import { useToast } from 'reshaped'
import { View } from '../components/View'
import { Text } from '../components/Text'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CheckCheck, AlertCircle, Info, XCircle, Bell } from 'lucide-react'

export function ToastPage() {
  const toast = useToast()

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Toast Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Toast</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <Button
              onClick={() => {
                toast.show({
                  text: 'Notification sent successfully',
                })
              }}
            >
              Show Basic Toast
            </Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toast with Title and Text</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <Button
              onClick={() => {
                toast.show({
                  title: 'Done!',
                  text: 'You can start using the dashboard now.',
                  icon: CheckCheck,
                })
              }}
            >
              Show Toast with Title
            </Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toast with Action Button</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <Button
              onClick={() => {
                const id = toast.show({
                  title: 'Access Granted',
                  text: 'User permissions have been updated.',
                  icon: CheckCheck,
                  actionsSlot: (
                    <Button onClick={() => toast.hide(id)}>Undo</Button>
                  ),
                })
              }}
            >
              Grant Access
            </Button>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toast Colors</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2} wrap>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Inverted notification',
                    icon: Bell,
                    color: 'inverted',
                  })
                }}
              >
                Inverted
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Neutral notification',
                    icon: Info,
                    color: 'neutral',
                  })
                }}
              >
                Neutral
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Primary notification',
                    icon: Info,
                    color: 'primary',
                  })
                }}
              >
                Primary
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Success notification',
                    icon: CheckCheck,
                    color: 'positive',
                  })
                }}
              >
                Positive
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Error notification',
                    icon: XCircle,
                    color: 'critical',
                  })
                }}
              >
                Critical
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Warning notification',
                    icon: AlertCircle,
                    color: 'warning',
                  })
                }}
              >
                Warning
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toast Positions</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2} wrap>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Top start position',
                    position: 'top-start',
                  })
                }}
                size="small"
              >
                Top Start
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Top center position',
                    position: 'top',
                  })
                }}
                size="small"
              >
                Top
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Top end position',
                    position: 'top-end',
                  })
                }}
                size="small"
              >
                Top End
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Bottom start position',
                    position: 'bottom-start',
                  })
                }}
                size="small"
              >
                Bottom Start
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Bottom center position',
                    position: 'bottom',
                  })
                }}
                size="small"
              >
                Bottom
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Bottom end position (default)',
                    position: 'bottom-end',
                  })
                }}
                size="small"
              >
                Bottom End
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toast Sizes</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2}>
              <Button
                onClick={() => {
                  toast.show({
                    title: 'Small Toast',
                    text: 'This is a small toast notification',
                    size: 'small',
                  })
                }}
              >
                Small
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    title: 'Medium Toast',
                    text: 'This is a medium toast notification with more content',
                    size: 'medium',
                  })
                }}
              >
                Medium
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    title: 'Large Toast',
                    text: 'This is a large toast notification with even more content and details',
                    size: 'large',
                  })
                }}
              >
                Large
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Toast Timeout</Text>
        <Card padding={4}>
          <View gap={3} maxWidth="600px">
            <View direction="row" gap={2}>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Short timeout (4s)',
                    timeout: 'short',
                  })
                }}
              >
                Short (4s)
              </Button>
              <Button
                onClick={() => {
                  toast.show({
                    text: 'Long timeout (8s)',
                    timeout: 'long',
                  })
                }}
              >
                Long (8s)
              </Button>
              <Button
                onClick={() => {
                  const id = toast.show({
                    text: 'No timeout - stays until dismissed',
                    timeout: 0,
                    actionsSlot: (
                      <Button onClick={() => toast.hide(id)}>Dismiss</Button>
                    ),
                  })
                }}
              >
                No Timeout
              </Button>
            </View>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>• Use useToast hook to get toast.show() and toast.hide() methods</p>
          <p>• toast.show() returns an ID that can be used with toast.hide()</p>
          <p>• Default position is bottom-end</p>
          <p>• Default timeout is short (4 seconds)</p>
          <p>• Use color prop to indicate status (positive, critical, warning)</p>
          <p>• Add actionsSlot for undo or dismiss buttons</p>
          <p>• Set timeout to 0 to prevent auto-dismiss</p>
          <p>• Use different sizes based on content length</p>
          <p>• Icons help users quickly identify notification type</p>
        </View>
      </View>
    </View>
  )
}

