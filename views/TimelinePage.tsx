'use client'

import { useState } from 'react'
import { View } from '../components/View'
import { Timeline } from '../components/Timeline'
import { Card } from '../components/Card'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import { Text } from '../components/Text'
import { Divider } from '../components/Divider'
import { Icon } from '../components/Icon'
import { Activity, CheckCircle, Clock, Package, Truck, MapPin } from 'lucide-react'

export function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <View padding={4} gap={4}>
      <Text variant="title-1" className="text-2xl font-bold">Timeline Component</Text>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Basic Timeline</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <Timeline>
              <View backgroundColor="neutral-faded" height={10} borderRadius="medium" />
              <View backgroundColor="neutral-faded" height={10} borderRadius="medium" />
              <View backgroundColor="neutral-faded" height={10} borderRadius="medium" />
            </Timeline>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Timeline with Cards</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <Timeline>
              <Card padding={4}>
                <View gap={2}>
                  <Text weight="medium">Project Started</Text>
                  <Text variant="body-2" color="neutral-faded">
                    The project was initialized with all dependencies
                  </Text>
                </View>
              </Card>
              <Card padding={4}>
                <View gap={2}>
                  <Text weight="medium">First Commit</Text>
                  <Text variant="body-2" color="neutral-faded">
                    Initial commit with basic structure
                  </Text>
                </View>
              </Card>
              <Card padding={4}>
                <View gap={2}>
                  <Text weight="medium">Deployed to Production</Text>
                  <Text variant="body-2" color="neutral-faded">
                    Successfully deployed version 1.0.0
                  </Text>
                </View>
              </Card>
            </Timeline>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Timeline with Custom Markers (Icons)</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <Timeline>
              <Timeline.Item
                markerSlot={<Icon svg={<Activity />} size={5} color="neutral-faded" />}
              >
                <Card padding={4}>
                  <View gap={2}>
                    <Text weight="medium">Activity Started</Text>
                    <Text variant="body-2" color="neutral-faded">
                      User began the onboarding process
                    </Text>
                  </View>
                </Card>
              </Timeline.Item>
              <Timeline.Item
                markerSlot={<Icon svg={<CheckCircle />} size={5} color="positive" />}
              >
                <Card padding={4}>
                  <View gap={2}>
                    <Text weight="medium">Verification Complete</Text>
                    <Text variant="body-2" color="neutral-faded">
                      Email address verified successfully
                    </Text>
                  </View>
                </Card>
              </Timeline.Item>
              <Timeline.Item
                markerSlot={<Icon svg={<Clock />} size={5} color="neutral-faded" />}
              >
                <Card padding={4}>
                  <View gap={2}>
                    <Text weight="medium">Pending Review</Text>
                    <Text variant="body-2" color="neutral-faded">
                      Waiting for admin approval
                    </Text>
                  </View>
                </Card>
              </Timeline.Item>
            </Timeline>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Timeline with Avatars</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <Timeline>
              <Timeline.Item
                markerSlot={
                  <Avatar
                    src="https://i.pravatar.cc/150?img=1"
                    size={8}
                  />
                }
              >
                <Card padding={0}>
                  <View
                    backgroundColor="neutral-faded"
                    paddingInline={4}
                    paddingBlock={2}
                    gap={1}
                    direction="row"
                    align="baseline"
                  >
                    <Text variant="body-3" weight="medium">
                      Sarah Chen
                    </Text>
                    <View.Item>·</View.Item>
                    <Text color="neutral-faded" variant="caption-1">
                      2 hours ago
                    </Text>
                  </View>
                  <Divider />
                  <View padding={4}>
                    <Text variant="body-2" color="neutral-faded">
                      Created a new pull request for the authentication feature
                    </Text>
                  </View>
                </Card>
              </Timeline.Item>
              <Timeline.Item
                markerSlot={
                  <Avatar
                    src="https://i.pravatar.cc/150?img=2"
                    size={8}
                  />
                }
              >
                <Card padding={0}>
                  <View
                    backgroundColor="neutral-faded"
                    paddingInline={4}
                    paddingBlock={2}
                    gap={1}
                    direction="row"
                    align="baseline"
                  >
                    <Text variant="body-3" weight="medium">
                      Alex Johnson
                    </Text>
                    <View.Item>·</View.Item>
                    <Text color="neutral-faded" variant="caption-1">
                      5 hours ago
                    </Text>
                  </View>
                  <Divider />
                  <View padding={4}>
                    <Text variant="body-2" color="neutral-faded">
                      Reviewed and approved the changes with some suggestions
                    </Text>
                  </View>
                </Card>
              </Timeline.Item>
            </Timeline>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Order Tracking Timeline</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <Timeline>
              <Timeline.Item
                markerSlot={<Icon svg={<CheckCircle />} size={5} color="positive" />}
              >
                <View gap={2}>
                  <View direction="row" gap={2} align="center">
                    <Text weight="medium">Order Placed</Text>
                    <Badge color="positive" size="small">
                      Complete
                    </Badge>
                  </View>
                  <Text variant="body-2" color="neutral-faded">
                    Your order has been confirmed
                  </Text>
                  <Text variant="caption-1" color="neutral-faded">
                    Jan 15, 2024 at 10:30 AM
                  </Text>
                </View>
              </Timeline.Item>
              <Timeline.Item
                markerSlot={<Icon svg={<Package />} size={5} color="positive" />}
              >
                <View gap={2}>
                  <View direction="row" gap={2} align="center">
                    <Text weight="medium">Processing</Text>
                    <Badge color="positive" size="small">
                      Complete
                    </Badge>
                  </View>
                  <Text variant="body-2" color="neutral-faded">
                    Your order is being prepared
                  </Text>
                  <Text variant="caption-1" color="neutral-faded">
                    Jan 15, 2024 at 2:15 PM
                  </Text>
                </View>
              </Timeline.Item>
              <Timeline.Item
                markerSlot={<Icon svg={<Truck />} size={5} color="primary" />}
              >
                <View gap={2}>
                  <View direction="row" gap={2} align="center">
                    <Text weight="medium">Shipped</Text>
                    <Badge color="primary" size="small">
                      In Progress
                    </Badge>
                  </View>
                  <Text variant="body-2" color="neutral-faded">
                    Your package is on the way
                  </Text>
                  <Text variant="caption-1" color="neutral-faded">
                    Jan 16, 2024 at 9:00 AM
                  </Text>
                </View>
              </Timeline.Item>
              <Timeline.Item
                markerSlot={<Icon svg={<MapPin />} size={5} color="neutral-faded" />}
              >
                <View gap={2}>
                  <View direction="row" gap={2} align="center">
                    <Text weight="medium">Delivered</Text>
                    <Badge color="neutral" size="small">
                      Pending
                    </Badge>
                  </View>
                  <Text variant="body-2" color="neutral-faded">
                    Estimated delivery
                  </Text>
                  <Text variant="caption-1" color="neutral-faded">
                    Jan 18, 2024
                  </Text>
                </View>
              </Timeline.Item>
            </Timeline>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Timeline without Markers</Text>
        <Card padding={4}>
          <View maxWidth="600px">
            <Timeline>
              <Timeline.Item markerSlot={null}>
                <Card padding={4}>
                  <Text>First event without a marker</Text>
                </Card>
              </Timeline.Item>
              <Timeline.Item markerSlot={null}>
                <Card padding={4}>
                  <Text>Second event without a marker</Text>
                </Card>
              </Timeline.Item>
              <Timeline.Item markerSlot={null}>
                <Card padding={4}>
                  <Text>Third event without a marker</Text>
                </Card>
              </Timeline.Item>
            </Timeline>
          </View>
        </Card>
      </View>

      <View gap={3}>
        <Text variant="title-2" className="text-xl font-semibold">Usage Tips</Text>
        <View gap={2} className="text-sm opacity-80">
          <p>• Timeline automatically wraps children with Timeline.Item</p>
          <p>• Use Timeline.Item manually to customize markers</p>
          <p>• Markers can be icons, avatars, badges, or any custom content</p>
          <p>• Set markerSlot to null to hide the marker</p>
          <p>• Perfect for activity feeds, order tracking, and progress indicators</p>
          <p>• Use different icon colors to indicate status (positive, primary, neutral-faded)</p>
          <p>• Combine with Cards for rich content presentation</p>
          <p>• Works well with Avatar components for user activity timelines</p>
        </View>
      </View>
    </View>
  )
}

